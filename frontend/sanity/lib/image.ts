// sanity/lib/image.ts
import createImageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '<your project ID>'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// 1. Inicializamos el builder con los datos específicos de tu base de datos
const imageBuilder = createImageUrlBuilder({
    projectId: projectId || '',
    dataset: dataset || '',
})

// 2. Exportamos la función `urlFor` que ya sabe a qué proyecto apuntar
export const urlFor = (source: any) => {
    return imageBuilder.image(source)
}