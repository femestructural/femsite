"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface TabsContextType {
    activeTab: string;
    setActiveTab: (tabId: string) => void;
    tabs: TabProps[];
    registerTab: (tabId: string, label: string, children: ReactNode, iconLabel?: ReactNode) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const useTabsContext = () => {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error("useTabsContext debe usarse dentro de TabsProvider");
    }
    return context;
};

interface TabProps {
    id: string;
    label: string;
    children: ReactNode;
    iconLabel?: ReactNode;
}

interface TabsProviderProps {
    children: ReactNode;
    defaultTab?: string;
}

export const TabsProvider: React.FC<TabsProviderProps> = ({ children, defaultTab = "" }) => {

    const [activeTab, setActiveTab] = useState<string>(defaultTab);
    const [tabs, setTabs] = useState<TabProps[]>([]);

    const registerTab = (tabId: string, label: string, children: ReactNode, iconLabel?: ReactNode) => {
        setTabs(prev => prev.find(tab => tab.id === tabId) ? prev : [...prev, { id: tabId, label, children, iconLabel }]);
    };

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab, tabs, registerTab }}>
            {children}
        </TabsContext.Provider>
    );
};