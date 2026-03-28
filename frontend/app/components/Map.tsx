'use client'
import { icons } from '@/public/icons/react-icons';
import React, { useState, useRef, useEffect } from 'react';
import { feature } from 'topojson-client';
import { geoMercator, geoPath } from 'd3-geo';
import { useJsonData } from '../hooks/useJsonData';
import { useTranslations } from 'next-intl';
import { Topology, GeometryCollection } from 'topojson-specification';
import { useWindowSize } from 'usehooks-ts';
import { MdLocationOn } from "react-icons/md";
import { BsBuildingGear } from "react-icons/bs";
import { BiStation } from "react-icons/bi";
import Image from 'next/image';
import LogoIcon from '@/public/icons/logo';



// Interface para las propiedades de los estados de México
interface StateProperties {
    NAME_1?: string;
    COUNTRY?: string;
    TYPE_1?: string;
    [key: string]: any;
}

// Interface para las props del componente
interface MapProps {
    width?: number;
    height?: number;
    mexicoFill?: string;
    dividerColor?: string;
    colorHover?: string;
}

// Interface para las sedes/proyectos con coordenadas
interface Proyecto {
    id?: string;
    name?: string;
    proyecto?: string;
    cliente?: string;
    lat: number;
    lng: number;
    images: string[];
    estado?: string;
    area?: number;
    municipio?: string;
    description?: string;
    type?: 'office' | 'project' | 'construction';
    status?: 'completed' | 'in-progress' | 'planned';
}

// Interface para las sedes en México
interface Sede {
    [key: string]: {
        name: string;
        state: string;
        description: string;
        contact: string;
        direction: string;
        link: string;
    }
}

// Proyectos/oficinas con coordenadas específicas
const Mockproyectos: Proyecto[] = [
    {
        id: '1',
        name: 'Oficina Principal CDMX',
        lat: 19.4326,
        lng: -99.1332,
        images: [],
        description: 'Oficina principal en Ciudad de México',
        type: 'office',
        status: 'completed'
    },
    {
        id: '2',
        name: 'Torre Residencial Guadalajara',
        lat: 20.6597,
        lng: -103.3496,
        images: [],
        description: 'Proyecto residencial de 25 pisos',
        type: 'construction',
        status: 'in-progress'
    },
    {
        id: '3',
        name: 'Centro Comercial Monterrey',
        lat: 25.6866,
        lng: -100.3161,
        images: [],
        description: 'Centro comercial de 50,000 m²',
        type: 'project',
        status: 'completed'
    },
    {
        id: '4',
        name: 'Hospital Puebla',
        lat: 19.0414,
        lng: -98.2063,
        images: [],
        description: 'Hospital de especialidades',
        type: 'construction',
        status: 'planned'
    },
    {
        id: '5',
        name: 'Universidad Tijuana',
        lat: 32.5149,
        lng: -117.0382,
        images: [],
        description: 'Campus universitario',
        type: 'project',
        status: 'completed'
    }
];

export function Map({ mexicoFill = '#2b28285d', dividerColor = '#e2e8f0', colorHover = '#3c3c3c', proyectos = Mockproyectos }: { mexicoFill?: string; dividerColor?: string; colorHover?: string; proyectos?: Proyecto[] }) {

    const translate = useTranslations('Map')
    const translate_pm = useTranslations('ProjectInMap')

    const { data, loading, error } = useJsonData();
    const { width: windowWidth, height: windowHeight } = useWindowSize();
    const [hoveredState, setHoveredState] = useState<string | null>(null);
    const [selectedState, setSelectedState] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<Proyecto | null>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    // Cerrar tooltip al hacer clic fuera - Hook debe estar ANTES de cualquier return condicional
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
                // Verificar si el clic fue en un marcador
                const target = event.target as HTMLElement;
                const isMarker = target.closest('circle');

                if (!isMarker) {
                    handleClose(); // Usar handleClose para tener animación
                }
            }
        };

        if (selectedProject) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [selectedProject]); // eslint-disable-line react-hooks/exhaustive-deps

    const [isVisible, setIsVisible] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)

    const handleClose = () => {
        setIsVisible(false)
        setTimeout(() => setSelectedProject(null), 300) // Coincide con la duración de la transición
    }

    useEffect(() => {
        if (selectedProject) {
            setImageLoaded(false)
            // Delay para que la animación de entrada se active después del montaje
            const timer = setTimeout(() => setIsVisible(true), 50)
            return () => clearTimeout(timer)
        } else {
            setIsVisible(false)
        }
    }, [selectedProject])

    // Estados de México que queremos destacar (ejemplo)
    interface HighlightedState {
        name: string;
    }

    const highlightedStates: string[] = [];
    const highlightColor = colorHover;

    // Calcular dimensiones responsivas del mapa
    const mapWidth = windowWidth ? Math.min(windowWidth * 0.95, 1200) : 960;
    const mapHeight = windowHeight ? Math.min(windowHeight * 0.75, 700) : 600;

    // Escala responsive basada en el tamaño de la pantalla - mejorada para móvil
    const getResponsiveScale = () => {
        if (!windowWidth) return mapWidth * 1.5;

        if (windowWidth < 640) { // móvil pequeño
            return mapWidth * 1.8; // Más zoom en móvil
        } else if (windowWidth < 1024) { // tablet
            return mapWidth * 1.4;
        } else { // desktop
            return mapWidth * 1.5;
        }
    };

    const scale_map = getResponsiveScale();

    // Proyección centrada en México
    const projection = geoMercator()
        .center([-102, 23])      // Centro de México (-102, 23)
        .scale(scale_map)        // Escala responsive
        .translate([mapWidth / 2, mapHeight / 2]);

    const pathGenerator = geoPath().projection(projection);

    // Función para convertir coordenadas geográficas a coordenadas del SVG
    const projectCoordinates = (lat: number, lng: number): [number, number] | null => {
        if (!projection) return null;
        const projected = projection([lng, lat]);
        return projected as [number, number];
    };

    if (loading) return <div className="flex justify-center items-center h-64">Cargando mapa de México...</div>;

    if (error) return <div className="flex justify-center items-center h-64 text-red-500">Error: {error}</div>;

    // Verificar que los datos estén disponibles
    if (!data) {
        return <div className="flex justify-center items-center h-64">No hay datos disponibles</div>;
    }

    // Extraer features de México con tipado correcto
    const mexicoTopo = data as Topology;

    // Verificar que los objetos existan antes de usarlos
    if (!mexicoTopo.objects) {
        return <div className="flex justify-center items-center h-64">Estructura de datos inválida</div>;
    }

    // Obtener el objeto de México dinámicamente
    const mexicoKey = Object.keys(mexicoTopo.objects)[0];
    const mexicoStatesObject = mexicoTopo.objects[mexicoKey] as GeometryCollection;
    const mexicoFeatureCollection = mexicoStatesObject ? feature(mexicoTopo, mexicoStatesObject) : null;
    const mexicoStates = mexicoFeatureCollection && 'features' in mexicoFeatureCollection ? mexicoFeatureCollection.features : [];

    // Handlers para eventos touch en móviles
    const handleTouchStart = (e: React.TouchEvent, proyecto: Proyecto) => {
        e.preventDefault(); // Prevenir scroll/zoom accidental
        // handleMarkerClick(proyecto, e);
        setSelectedProject(proyecto);


    };

    const handleClick = (e: React.MouseEvent, proyecto: Proyecto) => {
        setSelectedProject(proyecto);
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        e.preventDefault(); // Prevenir eventos adicionales como click
    };

    // Función para obtener el color del estado basado en su estado (hover/selected/highlighted)
    const getStateColor = (stateName: string) => {
        // Primero verificar si es un estado destacado permanentemente
        if (highlightedStates.includes(stateName)) {
            return colorHover;
        }

        // Luego verificar estados interactivos
        if (hoveredState === stateName) return '#2b28285d'; // Azul más oscuro en hover
        return mexicoFill; // Color por defecto
    };

    return (
        <div className="relative w-full bg-black  overflow-hidden">

            <div className="absolute w-full top-[15%] px-5 z-10">
                <div className='flex flex-col gap-0 items-center xl:items-end xl:pr-[10%]' >
                    <h5 className={`text-start text-[2.5rem] lg:text-6xl xl:text-8xl uppercase text-[var(--header-text)] text-shadow-lg`}>
                        {translate('title')}
                    </h5>
                    <div className='flex w-full max-w-[280px] sm:max-w-[300px] md:max-w-[370px] lg:max-w-[500px] xl:max-w-[750px] lg:justify-start' >
                        <span className='text-center font-light lg:text-xl xl:text-2xl text-shadow-lg text-[var(--header-text)] pl-5 md:pl-15' >
                            {translate('subtitle')}
                        </span>
                    </div>
                </div>
            </div>

            {/* Tooltip cuando hay hover */}
            {/* {hoveredState && (
                <div className="absolute top-20 left-4 bg-black/80 text-white px-3 py-2 rounded-lg backdrop-blur-sm z-20">
                    <p className="font-semibold">Estado: {hoveredState}</p>
                </div>
            )} */}

            {/* Tooltip para proyectos cuando están seleccionados */}
            {selectedProject && (
                <section
                    className={`flex fixed justify-center items-start pt-[15%] top-0 left-0 right-0 bottom-0 z-100 overflow-hidden transition-all duration-300 ease-in-out ${isVisible ? 'bg-black/60 backdrop-blur-sm' : 'bg-black/0 backdrop-blur-none'}`}
                >
                    <div
                        ref={tooltipRef}
                        className={`flex flex-col absolute w-[90%] h-[380px] aspect-[16/10] overflow-hidden bg-black backdrop-blur-sm border border-gray-200/20 rounded-lg shadow-2xl z-20 max-w-md mx-auto transition-all duration-300 ease-out ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'}`}
                    >

                        <button
                            onClick={handleClose}
                            className='absolute right-3 top-3 text-black-700 z-10 hover:cursor-pointer transition-opacity duration-300 opacity-70 hover:opacity-100'
                        >
                            <icons.close className='size-8' />
                        </button>

                        <div className="relative aspect-[16/10] overflow-hidden bg-black">

                            {!imageLoaded && (
                                <div className='absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-black/50 object-cover'>
                                    <div className='text-white scale-125'>
                                        <div className='animate-pulse'>
                                            <LogoIcon />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {selectedProject?.images?.[0] && (
                                <Image
                                    fill={true}
                                    onLoad={() => setImageLoaded(true)}
                                    className={`object-cover transition-all duration-500 ease-out ${imageLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
                                    src={selectedProject.images[0]}
                                    alt={selectedProject?.proyecto || 'image'}
                                    priority
                                />
                            )}

                            <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-white/10 opacity-70' />
                        </div>


                        <div className='flex flex-col py-4 px-6 gap-1' >
                            <h6 className="font-medium text-2xl uppercase text-[var(--background)]">{selectedProject?.proyecto}</h6>
                            <div className='flex flex-row items-center gap-1' >
                                <icons.location className='size-4 mb-[1px] text-white' />
                                <span className='text-xs font-light tracking-widest uppercase text-[var(--background)]'>
                                    {selectedProject?.estado}, {selectedProject?.municipio}.
                                </span>
                            </div>
                        </div>

                        <span className='h-px border-1 border-white/20 w-[90%] mx-auto' />

                        <div className='flex flex-row items-center justify-between py-4 px-6' >

                            <div className='flex flex-col gap-1' >
                                <span className='text-xs font-light text-white/70 tracking-widest uppercase text-[var(--background)]'>
                                    <icons.building_user className='size-4 mr-2 inline-block' />
                                    {translate_pm('customer')}
                                </span>
                                <span className='font-semibold tracking-widest uppercase text-[var(--background)]'> {selectedProject?.cliente}</span>
                            </div>

                            <div className='flex flex-col gap-1' >
                                <span className='text-xs font-light text-white/70 tracking-widest uppercase text-[var(--background)]'>
                                    <icons.ruler className='size-4 mr-2 inline-block' />
                                    {translate_pm('area')}
                                </span>
                                <span className='font-semibold tracking-widest uppercase text-[var(--background)]'> {selectedProject?.area} m²</span>
                            </div>

                        </div>
                    </div>



                </section>
            )
            }

            {/* Info del estado seleccionado */}
            {
                selectedState && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-4 shadow-lg z-20 max-w-xs">
                        <h5 className="font-bold text-lg text-gray-800 mb-2">{selectedState}</h5>
                        <p className="text-sm text-gray-600 mb-2">
                            Este estado está destacado en nuestro mapa.
                        </p>
                        <button
                            onClick={() => setSelectedState(null)}
                            className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                        >
                            Cerrar
                        </button>
                    </div>
                )
            }

            <div className="flex items-center justify-center w-full pt-20 lg:pt-30 overflow-hidden">
                <svg
                    width={mapWidth}
                    height={mapHeight}
                    className="max-w-full z-[20] mt-10"
                    viewBox={`0 0 ${mapWidth} ${mapHeight}`}
                    preserveAspectRatio="xMidYMid meet"
                >

                    {/* Renderizar estados de México */}
                    {mexicoStates.map((state: any, index: number) => {
                        const stateName = (state.properties as StateProperties)?.NAME_1 || `Estado-${index}`;
                        return (
                            <path
                                key={`mexico-${index}`}
                                d={pathGenerator(state) || ''}
                                fill={getStateColor(stateName)}
                                stroke={dividerColor}
                                strokeWidth={0.5}
                                style={{
                                    cursor: 'pointer',
                                    transition: 'fill 0.2s ease-in-out',
                                }}
                            // onMouseEnter={() => handleMouseEnter(stateName)}
                            // onMouseLeave={handleMouseLeave}
                            // onClick={() => handleClick(stateName)}
                            />
                        );
                    })}

                    {/* Renderizar punteros de proyectos */}
                    {proyectos.map((proyecto) => {
                        const coordinates = projectCoordinates(proyecto.lat, proyecto.lng);
                        if (!coordinates) return null;

                        const [x, y] = coordinates;

                        return (
                            <g key={proyecto.proyecto}>
                                {/* Círculo exterior (fijo, sin pulso) */}
                                <circle
                                    cx={x}
                                    cy={y}
                                    r={selectedProject?.proyecto === proyecto.proyecto ? "16" : "12"}
                                    fill="#ef4444"
                                    fillOpacity={selectedProject?.proyecto === proyecto.proyecto ? "0.4" : "0.2"}
                                    style={{
                                        pointerEvents: 'none',
                                    }}
                                />

                                {/* Área táctil invisible más grande para móvil (44px recomendado por Apple/Google) */}
                                <circle
                                    cx={x}
                                    cy={y}
                                    r="22"
                                    fill="transparent"
                                    style={{
                                        cursor: 'pointer',
                                        touchAction: 'manipulation'
                                    }}
                                    onClick={(e) => handleClick(e, proyecto)}
                                    onTouchStart={(e) => handleTouchStart(e, proyecto)}
                                    onTouchEnd={handleTouchEnd}
                                />

                                {/* Círculo principal */}
                                <circle
                                    cx={x}
                                    cy={y}
                                    r="8"
                                    fill="#ef4444"
                                    stroke={"white"}
                                    strokeWidth={selectedProject?.proyecto === proyecto.proyecto ? "3" : "2"}
                                    style={{
                                        pointerEvents: 'none' // Deshabilitado para evitar eventos duplicados
                                    }}
                                />

                                {/* Punto central */}
                                <circle
                                    cx={x}
                                    cy={y}
                                    r="3"
                                    fill="white"
                                    style={{ pointerEvents: 'none' }}
                                />
                            </g>
                        );
                    })}
                </svg>
            </div>

            <section className='flex flex-col gap-10 items-center justify-center text-white px-10 relative bottom-30 md:bottom-20' >

                <span className='text-lg text-center md:text-2xl tracking-[0.15em] text-muted-foreground uppercase' >{translate('titleFooter')}</span>

                <aside className='flex flex-col md:flex-row items-center gap-5 lg:gap-10 ' >

                    <div className='flex flex-row gap-2 items-center bg-[var(--background)]/10 backdrop-blur-md p-4 rounded-lg shadow-lg  ' >
                        <MdLocationOn size={20} />
                        <span>{translate('assetOne')}</span>

                    </div>

                    <div className='flex flex-row gap-2 items-center bg-[var(--background)]/10 backdrop-blur-md p-4 rounded-lg shadow-lg cursor-pointer z-10' >
                        <BiStation size={20} />
                        <span>{translate('assetTwo')}</span>
                    </div>

                    <div className='flex flex-row gap-2 items-center bg-[var(--background)]/10 backdrop-blur-md p-4 rounded-lg shadow-lg cursor-pointer  ' >
                        <BsBuildingGear size={20} />
                        <span>{translate('assetThree')}</span>
                    </div>


                </aside>
            </section>
        </div >
    );
};
