import { Html, Head, Body, Container, Section, Text, Hr, Img } from "@react-email/components"

type Props = {
    name?: string
    email: string
    message: string
    project_type: string
    contact_method: string
    contact: string
    priorities: string[]
}

export function ContactLeadEmail({ name, email, message, project_type, contact, contact_method, priorities }: Props) {
    return (
        <Html>
            <Head />
            <Body style={{ margin: 0, backgroundColor: "#e9e9f2", fontFamily: "Arial, sans-serif" }}>
                <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>

                    <Section style={{ marginBottom: '20px' }}>
                        <div style={{ backgroundColor: "#fff", borderRadius: 6, padding: 20 }}>
                            <Img
                                style={{
                                    display: 'inline-block',
                                    verticalAlign: 'middle', // Clave para la alineación vertical
                                    marginRight: '10px'
                                }}
                                src={'https://res.cloudinary.com/ditwfi7c9/image/upload/v1774647091/icologo_ml3uvh.png'}
                                width="40"
                                height="22"
                                alt="Fem"
                            />

                            <Text style={{
                                fontSize: 18,
                                fontWeight: 700,
                                display: 'inline-block',
                                verticalAlign: 'middle', // Clave para la alineación vertical
                                margin: 0 // Quitamos márgenes por defecto del componente Text
                            }}>
                                Un cliente quiere comunicarse contigo
                            </Text>
                        </div>
                    </Section>

                    <Section style={{ padding: "0 0 10px", marginBottom: '20px' }}>
                        <div style={{ backgroundColor: "#fff", borderRadius: 6, padding: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: 400, }}>
                                Información del cliente
                            </Text>
                            <Text><b>Nombre:</b> {name || "—"}</Text>
                            <Text><b>Tipo de proyecto:</b> {project_type}</Text>
                            <Text><b>Email:</b> {email}</Text>
                            <Text><b>Telefono:</b> {contact}</Text>
                            <Text><b>Prefiere ser contactado por:</b> {contact_method}</Text>

                            <Hr />

                            {priorities.length != 0 &&
                                <Text style={{ fontSize: 16, fontWeight: 400, }}>
                                    Prioridades del cliente
                                </Text>}
                            <ul style={{ paddingLeft: "20px" }}>
                                {priorities.map((priority, index) => (
                                    <li key={index}>
                                        <Text style={{ margin: "4px 0" }}>{priority}</Text>
                                    </li>
                                ))}
                            </ul>

                            <Hr />
                            <Text style={{ whiteSpace: "pre-wrap" }}>{message}</Text>
                        </div>
                    </Section>

                </Container>
            </Body>
        </Html>
    )
}