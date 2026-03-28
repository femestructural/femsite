"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "@/i18n/routing";
import { useLoader } from "../providers/LoaderProvider";

export function RouteDoneStopper() {

  const pathname = usePathname();

  const { active, stop } = useLoader();
  const prev = useRef<string | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (prev.current === null) {
      prev.current = pathname;
      return;
    }

    // si cambió ruta y el loader estaba activo -> stop
    if (pathname !== prev.current && active) {
      timeoutId = setTimeout(() => {
        stop();
      }, 200);
    }
    prev.current = pathname;

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [pathname, active, stop]);

  return null;
}
