'use client'

type DragToRotateHintProps = {
    label?: string
    className?: string
}

export function DragToRotateHint({
    label = "Mueve el cursor para rotar",
    className = "",
}: DragToRotateHintProps) {
    return (
        <div
            className={[
                "pointer-events-none absolute inset-x-0 top-4 flex justify-center ",
                className,
            ].join(" ")}
        >
            <div className="animate-fadeLoop rounded-full border border-white/15 bg-black/40 px-4 py-2 backdrop-blur">
                <div className="flex items-center gap-3 text-xs font-medium tracking-wide text-white/90">
                    {/* Mouse */}
                    <div className="relative h-6 w-4 rounded-full border border-white/40">
                        <div className="absolute left-1/2 top-1 h-2 w-[2px] -translate-x-1/2 rounded bg-white/60" />
                    </div>

                    {/* Flechas + animación */}
                    <div className="flex items-center gap-2">
                        <span className="text-white/60">←</span>
                        <span className="inline-block animate-dragHint">drag</span>
                        <span className="text-white/60">→</span>
                    </div>

                    <span className="text-white/80">{label}</span>
                </div>
            </div>
        </div>
    )
}