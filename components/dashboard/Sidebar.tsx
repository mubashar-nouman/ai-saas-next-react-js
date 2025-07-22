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
        <aside className={`h-screen bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg border-r border-gray-200/60 dark:border-white/10 transition-all duration-300 ease-in-out ${isOpen ? "w-64" : "w-20"} flex flex-col justify-between shadow-md`}>
            <div className="">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200/60 dark:border-white/10">
                    {isOpen ? (
                        <>
                            <div className="flex items-center gap-x-3 py-1">
                                <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                                    <div className="w-3.5 h-3.5 bg-white rounded-sm opacity-90"></div>
                                </div>
                                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">Workspace</p>
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
                <nav className="flex-1 px-4 py-4">
                    <div className="space-y-2">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`
                                            group relative flex items-center px-3 py-3 rounded-xl text-sm font-medium
                                            transition-all duration-200 ease-out
                                            ${isActive
                                            ? "bg-violet-50 dark:bg-violet-900/50 text-violet-700 dark:text-violet-200 border border-violet-200 dark:border-violet-800"
                                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-500/10 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-gray-100"
                                        } ${!isOpen && "justify-center"}`} >
                                    <div className={isActive ? "text-violet-600 dark:text-violet-400" : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200"}>
                                        <item.icon size={20} />
                                    </div>
                                    {isOpen && <span className="ml-3 truncate">{item.label}</span>}
                                    {isActive && isOpen && <div className="ml-auto w-1.5 h-1.5 bg-violet-600 rounded-full"></div>}
                                    {!isOpen && (
                                        <div className="absolute left-full ml-3 px-3 py-1.5 bg-neutral-900/90 text-white text-xs rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 shadow-lg backdrop-blur-sm">
                                            {item.label}
                                        </div>
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </div>

            {/* Footer */}
            <div className="mt-auto px-4 py-4 space-y-3">
                {/* Upgrade Card */}
                <div className={`transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <div className="bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900/80 dark:to-purple-950/80 border border-violet-200/50 dark:border-violet-800/50 rounded-xl p-4">
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
                <button className={`group relative cursor-pointer flex items-center w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ease-out bg-red-50 text-red-700 border border-red-300 hover:bg-red-100 hover:border-red-300
                    ${!isOpen && "justify-center"}`
                    } onClick={onClickSignOut}>
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