import React from "react";
import Header from "@/components/parent/Header";
import Footer from "@/components/parent/Footer";

export default function ParentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
        </div>

    );
}