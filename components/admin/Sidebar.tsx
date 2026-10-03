"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Settings } from "lucide-react";
import { sidebarModules } from "@/config/sidebar";
import type { SidebarProps } from "@/types/sidebar";

const Sidebar = ({ open, onClose }: SidebarProps) => {
    const pathname = usePathname();
    return (
        <>
            {/* Mobile Overlay */}
            {open && (
                <div
                    className="fixed inset-0 z-40 backdrop-blur-sm md:hidden"
                    onClick={onClose}
                />
            )}
            <aside
                className={`
                    fixed bottom-0 left-0 top-16 z-50 w-64
                    border-r border-slate-200/80 bg-indigo-50
                    transition-transform duration-200
                    ${open ? "translate-x-0" : "-translate-x-full"}
                    md:translate-x-0
                `}
            >
                <div className="flex h-full flex-col">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 p-3 md:hidden">
                        <span className="text-sm font-semibold text-slate-900">
                            Menu
                        </span>
                        <button
                            onClick={onClose}
                            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-1 overflow-y-auto p-3">
                        {sidebarModules.map((item) => {
                            const Icon = item.icon;
                            // Active check for exact route or parent sub-route
                            const active =
                                pathname === item.href

                            return (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    onClick={onClose}
                                    className={`
                                        group flex w-full items-center gap-3
                                        rounded-lg px-3 py-2.5
                                        text-left transition-all duration-150
                                        ${active
                                            ? "bg-indigo-100 text-indigo-900 font-semibold shadow-sm"
                                            : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900"
                                        }
                                    `}
                                >
                                    <Icon
                                        className={`
                                            h-4 w-4 shrink-0 transition-colors
                                            ${active
                                                ? "text-indigo-700"
                                                : "text-slate-400 group-hover:text-indigo-600"
                                            }
                                        `}
                                    />
                                    <div className="min-w-0">
                                        <p className={`
                                                truncate text-sm
                                                ${active
                                                    ? "font-semibold text-indigo-950"
                                                    : "font-medium"
                                                }
                                            `}
                                        >
                                            {item.title}
                                        </p>
                                        <p className="mt-0.5 truncate text-[11px] text-slate-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Settings */}
                    <div className="border-t border-slate-100 p-3">
                        {(() => {
                            const settingsHref = "/admin/settings";
                            const active = pathname === settingsHref;

                            return (
                                <Link
                                    href={settingsHref}
                                    onClick={onClose}
                                    className={`
                                        group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition
                                        ${active
                                            ? "bg-indigo-100 text-indigo-900 font-semibold shadow-sm"
                                            : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900"
                                        }
                                    `}
                                >
                                    <Settings className={`h-4 w-4 shrink-0 ${active ? "text-indigo-700" : "text-slate-400 group-hover:text-indigo-600"}`} />

                                    <div>
                                        <p className="text-sm font-medium">
                                            Settings
                                        </p>

                                        <p className="mt-0.5 text-[11px] text-slate-400">
                                            System configuration
                                        </p>
                                    </div>
                                </Link>
                            );
                        })()}
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;