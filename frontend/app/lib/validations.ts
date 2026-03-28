import { z } from "zod";

const tiposProyecto = [
    "residencial",
    "comercial",
    "industrial",
    "cuadrilla de colado de losas",
    "vertical",
    "Otro"
] as const; // El 'as const' es vital para que Zod lo reconozca como Enum

const preferenciasContacto = [
    'llamada',
    'whatsapp',
    'videollamada',
    'presencial'
]

const priotities = [
    'costos',
    'arquitectura',
    'complejo',
    'errores',
    'acompanamiento'
];


export const ContactSchema = z.object({
    name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
    email: z.email("Correo electrónico inválido"),
    phone: z.string().optional().or(z.literal("")),
    project_type: z.enum(tiposProyecto, {
        message: "Tipo de proyecto no válido"
    }),
    message: z.string().min(10, "El mensaje debe ser más detallado (mín. 10 caracteres)"),
    contact_method: z.enum(preferenciasContacto, {
        message: "Selecciona un tipo de contacto válido"
    }),
    priority: z.array(z.enum(priotities, {
        message: "Opción de prioridad no válida"
    }))
});

// Este tipo te servirá para Typescript en el resto del proyecto
export type ContactoData = z.infer<typeof ContactSchema>;