// components/Map.tsx
'use client'
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps'

export function ContactMap() {
    const position = { lat: 20.6727978, lng: -103.4156747 }

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!}>
            <Map
                defaultCenter={position}
                defaultZoom={15}
                style={{ width: '100%', height: '500px' }}
                mapId="YOUR_MAP_ID" // para estilos personalizados
            >
                <AdvancedMarker position={position} />
            </Map>
        </APIProvider>
    )
}

export function EmbebedMap() {

    return (
        <div className='relative w-screen h-[450px]' >
            <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14931.68350713154!2d-103.41567468689823!3d20.67279779422093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae735bfbb6d9%3A0xe3fc0d2749c95979!2sAv.%20Circunvalaci%C3%B3n%20Agust%C3%ADn%20Y%C3%A1%C3%B1ez%202607%2C%20Arcos%20Vallarta%2C%2044130%20Guadalajara%2C%20Jal.!5e0!3m2!1ses!2smx!4v1774680538316!5m2!1ses!2smx" loading="lazy"></iframe>
        </div>
    )
}