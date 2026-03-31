import ImageWithLoader from "./ImageWithLoader";
import ButtonLink from "./ButtonLnk";

// 1. Creamos una función auxiliar fuera del componente o al inicio
// Esto es 100% seguro para el compilador de Tailwind
const getColumnClasses = (cols: string | number | null | undefined, isGrid: boolean) => {
    // Si no es modo grid, devolvemos el tamaño por defecto
    if (!isGrid) return 'col-span-1 md:col-span-2 lg:col-span-1';

    // Convertimos el valor a string para evitar problemas de tipos ('2' vs 2)
    switch (String(cols)) {
        case '2':
            return 'col-span-1 md:col-span-2 lg:col-span-2';
        case '3':
            return 'col-span-1 md:col-span-2 lg:col-span-3';
        case '1':
        default:
            // Este es tu nuevo caso por defecto a prueba de fallos
            return 'col-span-1 md:col-span-2 lg:col-span-1';
    }
};

export const Project = ({ project, gridMode = true }: { project: any, gridMode?: boolean }) => {
    const {
        _id,
        title,
        slug,
        area,
        category,
        location,
        portfolio_image,
        other_projects_image,
        gridColumns,
        grid_variant
    } = project;

    const columnSpan = getColumnClasses(gridColumns, gridMode);

    return (
        <ButtonLink
            href={`/portafolio/${slug}`}
            className={`group relative flex flex-col overflow-hidden min-h-[70dvh] h-[70dvh] max-h-[70dvh] lg:h-full shadow-md border-1 border-zinc-300 ${columnSpan}`}
        >
            <>
                <ImageWithLoader
                    fill={true}
                    alt={title || 'Project image'}
                    src={gridMode ? portfolio_image : (other_projects_image || portfolio_image)}
                    className='object-cover w-full lg:grayscale transition-all duration-500 group-hover:grayscale-0'
                    classNameContainer='rounded-sm absolute h-[calc(100%-110px)] left-0 top-0 right-0 bottom-0'
                />
                <div className="p-4 absolute left-0 bottom-0 flex flex-col justify-center h-[110px] w-full bg-white border-t border-gray-100" >
                    <div className="flex flex-col gap-4 h-[110px] justify-center ">
                        <span className="text-xs tracking-widest uppercase">
                            {category}
                        </span>
                        <h3 className="text-sm font-semibold text-gray-900 line-clamp-1 uppercase">
                            {title} {location && <span className="text-gray-400 font-normal">| {location}</span>}
                        </h3>
                    </div>
                </div>

            </>
        </ButtonLink>
    )
}