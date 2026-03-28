import { Html, Head, Body, Container, Section, Text, Hr, Img, Row, Column, Link } from "@react-email/components"

type Props = {
    name?: string
}

export function ConfirmContactLeadEmail({ name }: Props) {
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
                                alt="FEM"
                            />

                            <Text style={{
                                fontSize: 18,
                                fontWeight: 700,
                                display: 'inline-block',
                                verticalAlign: 'middle', // Clave para la alineación vertical
                                margin: 0 // Quitamos márgenes por defecto del componente Text
                            }}>
                                FEM
                            </Text>
                        </div>
                    </Section>

                    <Section style={{ padding: "0 0 10px", marginBottom: '10px' }}>
                        <div style={{ backgroundColor: "#fff", borderRadius: 6, padding: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: 400, }}>
                                Hola {name} !
                            </Text>
                            <Text>
                                Gracias por contactarnos. Ya recibimos tu mensaje y nuestro equipo te responderá a la brevedad.
                            </Text>
                            <Hr />
                            <Text style={{ whiteSpace: "pre-wrap" }}>
                                Si necesitas agregar información, responde a este correo y la anexamos a tu solicitud.
                            </Text>
                        </div>
                    </Section>

                    <SocialLinksRow
                        facebookUrl="https://www.facebook.com/femestructural"
                        instagramUrl="https://www.instagram.com/femestructural.mx/"
                        websiteUrl="https://femestructural.com.mx"
                        linkedingUrl="https://www.linkedin.com/company/femestructural/"
                        facebookIconSrc="https://res.cloudinary.com/ditwfi7c9/image/upload/v1774647468/icons8-facebook-50_prl3zp.png"
                        instagramIconSrc="https://res.cloudinary.com/ditwfi7c9/image/upload/v1774647468/icons8-instagram-96_1_v0evsj.png"
                        iconLinkedingSrc="https://res.cloudinary.com/ditwfi7c9/image/upload/v1774647468/icons8-linkedin-50_b4ae6e.png"
                        websiteIconSrc="https://res.cloudinary.com/ditwfi7c9/image/upload/v1774647467/icons8-dominio-50_tcy8jk.png"
                    />

                </Container>
            </Body>
        </Html>
    )
}


type SocialLinksProps = {
    facebookUrl: string
    instagramUrl: string
    linkedingUrl: string
    websiteUrl: string
    // iconos (PNG) públicos
    facebookIconSrc: string
    instagramIconSrc: string
    iconLinkedingSrc: string
    websiteIconSrc: string
}

export function SocialLinksRow({
    facebookUrl,
    instagramUrl,
    linkedingUrl,
    websiteUrl,
    facebookIconSrc,
    instagramIconSrc,
    iconLinkedingSrc,
    websiteIconSrc,
}: SocialLinksProps) {
    const iconStyle: React.CSSProperties = {
        display: "block",
        border: "0",
        outline: "none",
        textDecoration: "none",
    }

    const linkStyle: React.CSSProperties = {
        display: "inline-block",
        padding: "8px",
        borderRadius: "10px",
        backgroundColor: "#f3f4f6",
        border: "1px solid #e5e7eb",
    }

    return (
        <Section style={{ width: '100%' }}>
            <Row style={{ background: '#fff', width: '100%', tableLayout: 'fixed', borderRadius: 6, padding: 20 }} >
                <Column align="center" style={{ width: "33.33%", padding: '10px' }} >
                    <Link href={facebookUrl} style={linkStyle} aria-label="Facebook">
                        <Img
                            src={facebookIconSrc}
                            width="20"
                            height="20"
                            alt="Facebook"
                            style={iconStyle}
                        />
                    </Link>
                </Column>

                <Column align="center" style={{ width: "33.33%", padding: '10px' }} >
                    <Link href={instagramUrl} style={linkStyle} aria-label="Instagram">
                        <Img
                            src={instagramIconSrc}
                            width="20"
                            height="20"
                            alt="Instagram"
                            style={iconStyle}
                        />
                    </Link>
                </Column>

                <Column align="center" style={{ width: "33.33%", padding: '10px' }} >
                    <Link href={linkedingUrl} style={linkStyle} aria-label="Instagram">
                        <Img
                            src={iconLinkedingSrc}
                            width="20"
                            height="20"
                            alt="Instagram"
                            style={iconStyle}
                        />
                    </Link>
                </Column>

                <Column align="center" style={{ width: "33.33%", padding: '10px' }} >
                    <Link href={websiteUrl} style={linkStyle} aria-label="Sitio web">
                        <Img
                            src={websiteIconSrc}
                            width="20"
                            height="20"
                            alt="Sitio web"
                            style={iconStyle}
                        />
                    </Link>
                </Column>
            </Row>
        </Section>
    )
}