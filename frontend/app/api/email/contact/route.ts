import z from "zod"
import { Resend } from "resend"
import { NextResponse } from "next/server"
import { render } from "@react-email/render"
import { ContactSchema } from "@/app/lib/validations"
import { ContactLeadEmail } from "@/app/emails/ContactLeadEmail"
import { ConfirmContactLeadEmail } from "@/app/emails/ConfirmContactLeadEmail"

export const runtime = "nodejs" // importante si usas SDK Node y no Edge

const resend = new Resend(process.env.RESEND_API_KEY)

const PRIORITY_LABELS: Record<string, string> = {
  costos: "Optimización de Costos",
  arquitectura: "Diseño Arquitectónico",
  complejo: "Proyectos Complejos",
  errores: "Reducción de Errores",
  acompanamiento: "Acompañamiento Integral"
};

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Extraemos contact_method del body para usarlo como 'contact' en la validación
    const { name, email, contact, message, project_type, priority, contact_method, phone, token } = body || {};

    const verifyUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

    const response = await fetch(verifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
    });

    const outcome = await response.json();

    if (!outcome.success) {
      return NextResponse.json({ error: "Fallo de seguridad (Bot detectado)" }, { status: 403 });
    }

    // Validar los datos con Zod (usamos contact_method como contact)
    const result = ContactSchema.safeParse({
      name,
      email,
      message,
      project_type,
      contact,
      contact_method,
      priority
    });

    if (!result.success) {
      // Si falla, devolvemos los errores específicos de cada campo
      console.error("Validation failed:", result.error.format());
      return NextResponse.json(
        { error: "Datos inválidos", details: result.error.format() },
        { status: 400 }
      );
    }

    // Mapeamos los IDs de prioridad a sus etiquetas legibles
    const priorityLabels = (priority as string[]).map(id => PRIORITY_LABELS[id] || id);

    //correo for admin    
    const htmlAdmin = await render(ContactLeadEmail({
      name,
      email,
      message,
      project_type,
      contact: contact,
      contact_method,
      priorities: priorityLabels
    }))

    const { error: error_admin } = await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: [process.env.PRINCIPAL_MAIL!],
      replyTo: email,
      subject: `Un cliente quiere contactarse contigo`,
      html: htmlAdmin,
    })

    if (error_admin) return NextResponse.json({ error_admin }, { status: 500 })

    //correo for customer    
    const htmlCustomer = await render(ConfirmContactLeadEmail({ name }))

    const { error: error_customer } = await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: email,
      replyTo: process.env.PRINCIPAL_MAIL!,
      subject: `Confirmación de contacto Fem Structural`,
      html: htmlCustomer,
    })

    if (error_customer) return NextResponse.json({ error_customer }, { status: 500 })


    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Bad request" }, { status: 400 })
  }
}