'use client';
import React, { ReactNode, useEffect } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { useTabsContext } from "../providers/TabsProvider";

export const Tabs: React.FC<{ children: ReactNode }> = ({ children }) => {

    const { activeTab, setActiveTab, tabs } = useTabsContext();

    const { width } = useWindowSize();

    useEffect(() => {
        // Si no hay una pestaña activa, establecer la primera pestaña registrada como activa
        if (!activeTab && tabs.length > 0) {
            setActiveTab(tabs[0]['id']);
        }
    }, [activeTab, tabs, setActiveTab]);

    // Calcular la posición del indicador
    const getIndicatorStyle = () => {
        const activeIndex = tabs.findIndex(tab => tab.id === activeTab);
        if (activeIndex === -1) return { transform: 'translateX(0px)', width: '0px' };

        const buttonWidth = width && width <= 767 ? 50 : 120;
        const translateX = activeIndex * buttonWidth;

        return {
            transform: `translateX(${translateX}px)`,
            width: `${buttonWidth}px`,
            transition: 'transform 0.3s ease-in-out, width 0.3s ease-in-out'
        };
    };

    return (
        <div className="flex flex-col gap-5 w-full">
            <div className="relative flex flex-row w-fit items-center mx-auto bg-white shadow-md border-1 border-zinc-200 rounded-sm overflow-hidden">
                {/* Indicador deslizante */}
                <div
                    className="absolute top-0 left-0 h-full bg-[var(--primary)] rounded-sm z-0"
                    style={getIndicatorStyle()}
                />

                {tabs.map((tab) => (
                    <ButtonTab
                        key={tab.id}
                        id={tab.id}
                        label={tab.label}
                        iconLabel={tab.iconLabel}
                    />
                ))}
            </div>
            {children}
        </div>
    );
}


export const Tab: React.FC<{ id: string; label: string; children: ReactNode; iconLabel?: ReactNode }> = ({ id, label, children, iconLabel }) => {

    const { activeTab, setActiveTab, registerTab } = useTabsContext();

    useEffect(() => {
        registerTab(id, label, children, iconLabel);
    }, [id, label, children, iconLabel, registerTab]);

    const isActive = (tabId: string) => activeTab === tabId;


    return (
        <section className={` ${isActive(id) ? 'block' : 'hidden'} p-0 md:p-4 `}>
            {children}
        </section>
    );
}


const ButtonTab: React.FC<{ label: string; iconLabel?: ReactNode; id: string; }> = ({ label, iconLabel, id }) => {

    const { activeTab, setActiveTab } = useTabsContext();

    const isActive = (tabId: string) => activeTab === tabId;

    return (
        <button
            onClick={() => setActiveTab(id)}
            className={`flex flex-row items-center justify-between gap-2 relative z-10 px-4 py-2 w-[50px] md:w-[120px] font-semibold rounded-sm focus:outline-none transition-colors duration-300 hover:cursor-pointer 
                ${isActive(id)
                    ? 'text-[var(--header-text)]'
                    : 'text-[var(--primary)] hover:text-[var(--primary)]/80'
                }`}
        >
            <span className="hidden md:block text-center w-full" >{label}</span>
            <div className='flex md:hidden w-5 h-5 flex items-center justify-center'>
                {React.isValidElement(iconLabel)
                    ? React.cloneElement(iconLabel as React.ReactElement<any>, {
                        size: 10
                    })
                    : iconLabel
                }
            </div>
        </button>
    );
};