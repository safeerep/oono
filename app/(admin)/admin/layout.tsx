"use client"

import React, { useState } from "react";
import Header from "@/components/parent/Header";
import Sidebar from "@/components/admin/Sidebar";

export default function ParentLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Sidebar
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />
            <main className="md:ml-64">
                <div className="p-4 sm:p-6">
                {children}
                </div>
            </main>
 
        </div>
    );
}