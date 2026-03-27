"use client";

import { createContext, useContext, useState, useRef, ReactNode } from "react";

type LoaderCtx = {
    start: () => void;
    stop: () => void;
    active: boolean;
    delayMs: number;
};

const Ctx = createContext<LoaderCtx | null>(null);

export function LoaderProvider({ children }: { children: ReactNode }) {

    const minMs = 3000; // Duración mínima del loader
    const delayMs = 450; // Duración del loader antes de navegar

    const startedAt = useRef<number | null>(null);
    const [active, setActive] = useState(false);

    const start = () => {
        startedAt.current = performance.now();
        setActive(true);
    };

    const stop = () => {
        const t0 = startedAt.current ?? performance.now();
        const elapsed = performance.now() - t0;
        const remaining = Math.max(0, minMs - elapsed);

        window.setTimeout(() => {
            setActive(false);
            startedAt.current = null;
        }, remaining);
    };

    return (
        <Ctx.Provider value={{ start, stop, active, delayMs }}>
            {children}
        </Ctx.Provider>
    );
}

export function useLoader() {
    const ctx = useContext(Ctx);
    if (!ctx) throw new Error("useLoader must be used within LoaderProvider");
    return ctx;
}
