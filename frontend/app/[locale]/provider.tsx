'use client'
import { TabsProvider } from "../providers/TabsProvider";
import { LoaderProvider } from "../providers/LoaderProvider";

interface AppProviderProps {
    children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

    return (
        <LoaderProvider>
            {children}
        </LoaderProvider>
    );
};