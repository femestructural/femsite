import { Stack, Card, Text } from '@sanity/ui' // Agrega esta línea

// Componente personalizado para renderizar la previsualización de la URL
export const UrlImagePreview = (props: any) => {
    // Extraemos el valor actual del campo (la URL) y la función para dibujar el input original
    const { value, renderDefault } = props

    return (
        <Stack space={3}>
            {/* 1. Dibujamos el input de texto normal de Sanity */}
            {renderDefault(props)}

            {/* 2. Si hay texto en el input, intentamos dibujar la imagen */}
            {value && (
                <Card border padding={2} radius={2} tone="transparent">
                    <img
                        src={value}
                        alt="Preview"
                        style={{
                            width: '100%',
                            maxHeight: '300px',
                            objectFit: 'contain',
                            borderRadius: '4px'
                        }}
                        // Si pegan algo que no es una imagen, ocultamos el cuadro roto
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                </Card>
            )}
        </Stack>
    )
}