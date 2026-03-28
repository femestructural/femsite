import { ContactLeadEmail } from "@/app/emails/ContactLeadEmail"
import { ConfirmContactLeadEmail } from "@/app/emails/ConfirmContactLeadEmail"

export default function EmailPreviewPage() {

    if (process.env.NODE_ENV !== "development") {
        return <div style={{ padding: 24 }}>Not found</div>
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: 24, minHeight: '100dvh' }}>

            <h1 style={{ marginBottom: '20px' }} >Email preview</h1>


            <ConfirmContactLeadEmail
                name="Cliente perron"
            />


            <ContactLeadEmail
                name="Cliente perron"
                email="emailCliente"
                message="Hola cotizaa"
                project_type='Esstrcutural'
                contact_method="whatsapp"
                contact="9214562350"
                priorities={[]}
            />

        </div>
    )
}