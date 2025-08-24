"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Home,
    Settings,
    History,
    CreditCard,
    FileText,
    Download,
    ChevronLeft,
    Menu,
    Crown,
    LogOut,
    Sparkles
} from "lucide-react";
import { useAuthStore } from "@/stores/authStore";


export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const pathname = usePathname();
    const { logout } = useAuthStore();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const menuItems = [
        { href: "/dashboard", icon: Home, label: "Dashboard" },
        { href: "/dashboard/ai-tools", icon: Sparkles, label: "AI Tools" },
        { href: "/dashboard/downloaders", icon: Download, label: "Downloaders" },
        { href: "/dashboard/conversions", icon: FileText, label: "File Conversions" },
        { href: "/dashboard/history", icon: History, label: "History" },
        { href: "/dashboard/billing", icon: CreditCard, label: "Billing" },
        { href: "/dashboard/settings", icon: Settings, label: "Settings" },
    ];

    function isItemActive(href: string) {
        const normalizePath = (path: string) => path.replace(/\/+$/, '');
        const currentPath = normalizePath(pathname);
        const itemPath = normalizePath(href);
        
        if (itemPath === "/dashboard") {
            return currentPath === "/dashboard";
        }
        
        return currentPath === itemPath || currentPath.startsWith(itemPath + "/");
    }

    function onClickSignOut(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        logout().then(() => {
            window.location.href = "/login";
        }).catch((error) => {
            console.error("Logout failed:", error);
        });
    }

    const renderMenuItem = (item: { href: string; icon: React.ComponentType<{ size: number }>; label: string }) => {
        const isActive = isItemActive(item.href);
        return (
            <Link
                key={item.href}
                href={item.href}
                className={`
                    group relative flex items-center px-4 py-3 rounded-xl text-sm font-medium
                    transition-all duration-200 ease-out
                    ${isActive
                        ? "bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-700/60 shadow-md backdrop-blur-sm"
                        : "text-slate-600 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-100 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
                    } 
                    ${!isOpen ? "justify-center" : "gap-x-3"}
                `}
            >
                <div className={`
                    ${isActive 
                        ? "text-indigo-600 dark:text-indigo-400" 
                        : "text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200"
                    }
                    w-5 h-5 flex-shrink-0
                `}>
                    <item.icon size={20} />
                </div>
                {isOpen && <span className="truncate font-medium">{item.label}</span>}
                {!isOpen && (
                    <div className="absolute left-full ml-3 px-3 py-2 bg-slate-900/95 text-white text-xs rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 backdrop-blur-sm border border-slate-700/50 shadow-lg whitespace-nowrap">
                        {item.label}
                    </div>
                )}
            </Link>
        );
    };

    if (!isMounted) {
        return (
            <aside className="h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-r border-slate-200/60 dark:border-slate-700/60 w-64 flex flex-col shadow-xl backdrop-blur-sm">
                {/* Header */}
                <div className="flex-shrink-0 p-6 border-b border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">AI Workspace</span>
                    </div>
                </div>
                
                {/* Navigation - Grows to fill space */}
                <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
                    {menuItems.map(item => (
                        <div key={item.href} className="flex items-center px-4 py-3 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 gap-x-3 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                            <item.icon size={20} />
                            <span>{item.label}</span>
                        </div>
                    ))}
                </nav>
                
                {/* Footer - Always at bottom */}
                <div className="flex-shrink-0 p-6 border-t border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm space-y-4">
                    {/* Upgrade Card */}
                    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 border border-indigo-200/60 dark:border-indigo-700/60 rounded-2xl p-5 shadow-lg backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                                <Crown className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-bold text-indigo-800 dark:text-indigo-200">Free Plan</span>
                        </div>
                        <p className="text-xs text-indigo-700 dark:text-indigo-300 mb-4 leading-relaxed">Unlock premium features and unlimited AI generations</p>
                        <Button size="sm" className="w-full h-9 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs font-semibold shadow-lg">
                            Upgrade to Pro
                        </Button>
                    </div>
                    
                    {/* Sign Out Button */}
                    <button className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 text-red-700 dark:text-red-300 border border-red-200/60 dark:border-red-700/60 hover:from-red-100 hover:to-pink-100 dark:hover:from-red-800/30 dark:hover:to-pink-800/30 gap-x-3 shadow-sm backdrop-blur-sm transition-all duration-200">
                        <LogOut size={20} className="flex-shrink-0" />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>
        );
    }

    return (
        <aside className={`h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-r border-slate-200/60 dark:border-slate-700/60 transition-all duration-300 ease-in-out ${isOpen ? "w-64" : "w-16"} flex flex-col shadow-xl backdrop-blur-sm`}>
            {/* Header - Fixed height */}
            <div className="flex-shrink-0 p-6 border-b border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                {isOpen ? (
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent truncate">AI Workspace</span>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="h-9 w-9 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-700/80 rounded-xl transition-all duration-200 flex-shrink-0"
                        >
                            <ChevronLeft size={18} />
                        </Button>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="h-9 w-9 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-700/80 rounded-xl transition-all duration-200"
                        >
                            <Menu size={18} />
                        </Button>
                    </div>
                )}
            </div>

            {/* Navigation - Flexible height, grows to fill available space */}
            <nav className="flex-1 p-6 space-y-2 overflow-y-auto min-h-0">
                {menuItems.map(item => renderMenuItem(item))}
            </nav>

            {/* Footer - Fixed at bottom, never moves */}
            <div className="flex-shrink-0 p-6 border-t border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm space-y-4">
                {/* Upgrade Card - Only visible when expanded */}
                <div className={`transition-all duration-300 ${isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden pointer-events-none"}`}>
                    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 border border-indigo-200/60 dark:border-indigo-700/60 rounded-2xl p-5 shadow-lg backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                                <Crown className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-bold text-indigo-800 dark:text-indigo-200">Free Plan</span>
                        </div>
                        <p className="text-xs text-indigo-700 dark:text-indigo-300 mb-4 leading-relaxed">Unlock premium features and unlimited AI generations</p>
                        <Button size="sm" className="w-full h-9 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs font-semibold shadow-lg transition-all duration-200">
                            Upgrade to Pro
                        </Button>
                    </div>
                </div>

                {/* Sign Out Button - Always visible */}
                <button
                    className={`group relative cursor-pointer flex items-center w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ease-out
                    bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 text-red-700 dark:text-red-300 border border-red-200/60 dark:border-red-700/60 
                    hover:from-red-100 hover:to-pink-100 dark:hover:from-red-800/30 dark:hover:to-pink-800/30 shadow-sm backdrop-blur-sm hover:shadow-md
                    ${!isOpen && "justify-center"}`}
                    onClick={onClickSignOut}
                >
                    <LogOut size={20} className="flex-shrink-0" />
                    {isOpen && <span className="ml-3 truncate">Sign Out</span>}
                    {!isOpen && (
                        <div className="absolute left-full ml-3 px-3 py-2 bg-slate-900/95 text-white text-xs rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 backdrop-blur-sm border border-slate-700/50 shadow-lg whitespace-nowrap">
                            Sign Out
                        </div>
                    )}
                </button>
            </div>
        </aside>
    );
}