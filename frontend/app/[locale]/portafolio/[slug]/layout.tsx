import React from "react";
import { TabsProvider } from "@/app/providers/TabsProvider";


export default function ProjectLayout({ children }: { children: React.ReactNode }) {


    return (
        <TabsProvider>
            {children}
        </TabsProvider>
    )
}