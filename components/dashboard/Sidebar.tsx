"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Home,
    Settings,
    History,
    CreditCard,
    FileText,
    Download,
    Wand2,
    ChevronLeft,
    Menu,
    Crown,
    LogOut
} from "lucide-react";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const pathname = usePathname();
    const { logout } = useAuthStore();
    const router = useRouter();

    const menuItems = [
        { href: "/dashboard", icon: Home, label: "Dashboard" },
        { href: "/dashboard/ai-tools", icon: Wand2, label: "AI Tools" },
        { href: "/dashboard/downloaders", icon: Download, label: "Downloaders" },
        { href: "/dashboard/conversions", icon: FileText, label: "File Conversions" },
        { href: "/dashboard/billing", icon: CreditCard, label: "Billing" },
        { href: "/dashboard/history", icon: History, label: "History" },
        { href: "/dashboard/settings", icon: Settings, label: "Settings" },
    ];

    // Function to check if a menu item is active
    function isItemActive(href: string) {
        // Normalize paths by removing trailing slashes
        const normalizePath = (path: string) => path.replace(/\/+$/, '');
        const currentPath = normalizePath(pathname);
        const itemPath = normalizePath(href);
        
        // Exact match for /dashboard
        if (itemPath === "/dashboard") {
            return currentPath === "/dashboard";
        }
        
        // For subpages, check if current path starts with item path and is either exact match or has a slash after
        return currentPath === itemPath || currentPath.startsWith(itemPath + "/");
    }

    function onClickSignOut(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        logout().then(() => {
            // router.push("/login");
            window.location.href = "/login";
        }).catch((error) => {
            console.error("Logout failed:", error);
        });
    }

    return (
        <aside className={`h-screen bg-gradient-to-b from-white/70 to-white/40 dark:from-neutral-950/70 dark:to-neutral-900/40 backdrop-blur-xl border-r border-white/20 dark:border-white/10 transition-[width] duration-300 ease-in-out ${isOpen ? "w-64" : "w-20"} flex flex-col`}>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-[14px] border-b border-gray-200 dark:border-white/10">
                {isOpen ? (
                    <>
                        <div className="flex items-center gap-x-3 py-1">
                            <div className="w-8 h-8 bg-violet-600/90 rounded-xl flex items-center justify-center ring-1 ring-violet-300/40">
                                <div className="w-3.5 h-3.5 bg-white rounded-md opacity-90"></div>
                            </div>
                            <p className="text-lg font-semibold tracking-tight text-gray-800 dark:text-gray-100">Workspace</p>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="h-8 w-8 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-500/10 rounded-lg"
                        >
                            <ChevronLeft size={18} />
                        </Button>
                    </>
                ) : (
                    <div className="w-full flex justify-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="h-8 w-8 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-500/10 rounded-lg"
                        >
                            <Menu size={18} />
                        </Button>
                    </div>
                )}
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 py-4 overflow-y-auto">
                <div className="space-y-1">
                    {menuItems.map((item) => {
                        const isActive = isItemActive(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                                    group relative flex items-center px-3 py-3 rounded-lg text-sm font-medium
                                    transition-all duration-200 ease-out
                                    ${isActive
                                        ? "bg-violet-600/15 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300 border-[1px] border-violet-600 dark:border-violet-400"
                                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-gray-100 border-l-3 border-transparent"
                                    } ${!isOpen ? "justify-center" : "gap-x-3"}`}
                            >
                                <div className={isActive ? "text-violet-600 dark:text-violet-400" : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200"}>
                                    <item.icon size={20} />
                                </div>
                                {isOpen && <span className="truncate">{item.label}</span>}
                                {!isOpen && (
                                    <div className="absolute left-full ml-3 px-3 py-1.5 bg-neutral-900/90 text-white text-xs rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 backdrop-blur-sm">
                                        {item.label}
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Footer */}
            <div className="mt-auto px-4 py-4 space-y-3 border-t border-white/20 dark:border-white/10">
                {/* Upgrade Card */}
                <div className={`transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <div className="bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900/50 dark:to-purple-950/50 border border-violet-200/60 dark:border-violet-800/40 rounded-xl p-4">
                        <div className="flex items-center gap-x-2.5 mb-2">
                            <div className="bg-white/80 dark:bg-violet-950/80 p-1.5 rounded-full border border-violet-200/80 dark:border-violet-800/80">
                                <Crown size={16} className="text-violet-600 dark:text-violet-400" />
                            </div>
                            <span className="text-sm font-semibold text-violet-800 dark:text-violet-200">Free Plan</span>
                        </div>
                        <p className="text-[13px] text-violet-700 dark:text-violet-300 mb-3.5">Unlock more features.</p>
                        <Button size="sm" className="w-full h-9 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg">
                            Upgrade to Pro
                        </Button>
                    </div>
                </div>

                {/* Sign Out Button */}
                <button
                    className={`group relative cursor-pointer flex items-center w-full px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ease-out
                    bg-red-50/50 text-red-700 dark:bg-red-900/20 dark:text-red-300 border border-red-200/50 dark:border-red-800/30 
                    hover:bg-red-100/50 dark:hover:bg-red-900/30 hover:border-red-300/60 dark:hover:border-red-700/50
                    ${!isOpen && "justify-center"}`}
                    onClick={onClickSignOut}
                >
                    <LogOut size={20} />
                    {isOpen && <span className="ml-3 truncate">Sign Out</span>}
                    {!isOpen && (
                        <div className="absolute left-full ml-3 px-3 py-1.5 bg-neutral-900 text-white text-xs rounded-md opacity-0 pointer-events-none group-hover:opacity-100 z-50">
                            Sign Out
                        </div>
                    )}
                </button>
            </div>
        </aside>
    );
}