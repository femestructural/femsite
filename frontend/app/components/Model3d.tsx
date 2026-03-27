'use client'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF, Html } from '@react-three/drei'
import { useRef, Suspense, useState } from 'react'
import { configureGLTFLoader } from '../lib/three-gltf'
import { DragToRotateHint } from './DragToRotate'

interface ModelProps {
    url: string;
}

function Model({ url }: ModelProps) {
    const { scene } = useGLTF(url, true, undefined, configureGLTFLoader); // carga el modelo .glb con MeshoptDecoder
    return <primitive object={scene} position={[0, 0, 0]} />;
}

// Componente para detectar cambios de cámara en tiempo real
function CameraLogger() {
    const { camera } = useThree();
    const lastLogTime = useRef(0);

    useFrame(() => {
        const now = Date.now();
        // Solo logea cada 500ms para no saturar la consola
        if (now - lastLogTime.current > 500) {
            const pos = camera.position;
            // Verificar si es PerspectiveCamera para acceder al FOV
            const fov = 'fov' in camera ? camera.fov : 'N/A';
            console.log(`📷 Cámara - Posición: [${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)}] | FOV: ${fov}°`);
            lastLogTime.current = now;
        }
    });

    return null;
}

// Componente de carga mientras se carga el modelo 3D
function LoadingSpinner() {
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center">
                {/* Spinner animado más visible */}
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-500 mb-4"></div>
                {/* Texto de carga con fondo */}
                <div className="bg-white bg-opacity-90 px-6 py-3 rounded-lg shadow-lg text-center">
                    <p className="text-lg font-semibold text-gray-800">Cargando modelo 3D...</p>
                    <p className="text-sm text-gray-600 mt-1">Por favor espera un momento</p>
                </div>
            </div>
        </Html>
    );
}

// Loading overlay que se muestra FUERA del Canvas
function LoadingOverlay() {
    return (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-500 mx-auto mb-4"></div>
                <p className="text-lg font-semibold text-gray-800">Cargando modelo 3D...</p>
                <p className="text-sm text-gray-600 mt-1">Por favor espera un momento</p>
            </div>
        </div>
    );
}

export default function ModelViewer({ url }: ModelProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="relative w-full h-full">


            {/* Loading overlay que se muestra encima del Canvas */}
            {isLoading && <LoadingOverlay />}

            {!isLoading && <DragToRotateHint />}

            <Canvas camera={{ position: [-1.82, 15.01, 62.00], fov: 45 }}>
                {/* Luces y entorno */}
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 10]} intensity={1} />

                {/* Fondo y sombreado automático */}
                <Stage environment="city" intensity={0.6}>
                    <ModelWithCallback url={url} onLoad={() => setIsLoading(false)} />
                </Stage>

                {/* Componente para loggear posición de cámara en tiempo real */}
                {/* <CameraLogger /> */}

                {/* Controles de cámara */}
                <OrbitControls enablePan enableZoom enableRotate />
            </Canvas>
        </div>
    );
}

// Modelo con callback para detectar cuando termina de cargar
function ModelWithCallback({ url, onLoad }: { url: string, onLoad: () => void }) {
    const { scene } = useGLTF(url, true, undefined, configureGLTFLoader);
    const hasLoaded = useRef(false);

    // Ejecutar callback cuando el modelo esté listo
    if (!hasLoaded.current) {
        hasLoaded.current = true;
        onLoad();
    }

    return <primitive object={scene} position={[0, 0, 0]} />;
}