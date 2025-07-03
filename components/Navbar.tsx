"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
    ChevronDown,
    FileText,
    Users,
    Mail,
    Sparkles,
    Clock,
    Zap,
    Globe,
    BarChart3,
    ArrowRight,
} from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200/30 bg-white/95 backdrop-blur-md">
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-sm">
                        <svg
                            className="h-5 w-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                            AI Content Write
                        </span>
                        <span className="text-xs text-gray-500 -mt-1">Powered by AI</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList className="flex items-center space-x-1">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/"
                                    className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                >
                                    Home
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50">
                                Features
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                {/* Replace with your features mega menu */}
                                <div className="w-[700px] p-6 bg-white border-0 rounded-lg">
                                    <div className="grid grid-cols-2 gap-8">
                                        {/* Content Creation */}
                                        <div className="space-y-1">
                                            <div className="pb-3">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                                    <h3 className="text-sm font-semibold text-gray-900">Content Creation</h3>
                                                </div>
                                            </div>

                                            <Link href="/features/blog-posts" className="group flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200">
                                                <div className="mt-0.5 p-2 rounded-md bg-blue-50 group-hover:bg-blue-100 transition-colors">
                                                    <FileText className="h-4 w-4 text-blue-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Blog Posts</div>
                                                    <div className="text-sm text-gray-500 mt-0.5">AI-powered long-form content</div>
                                                </div>
                                            </Link>

                                            <Link href="/features/social-media" className="group flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200">
                                                <div className="mt-0.5 p-2 rounded-md bg-purple-50 group-hover:bg-purple-100 transition-colors">
                                                    <Users className="h-4 w-4 text-purple-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Social Media</div>
                                                    <div className="text-sm text-gray-500 mt-0.5">Engaging posts for all platforms</div>
                                                </div>
                                            </Link>

                                            <Link href="/features/email-marketing" className="group flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200">
                                                <div className="mt-0.5 p-2 rounded-md bg-green-50 group-hover:bg-green-100 transition-colors">
                                                    <Mail className="h-4 w-4 text-green-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">Email Marketing</div>
                                                    <div className="text-sm text-gray-500 mt-0.5">Compelling email campaigns</div>
                                                </div>
                                            </Link>

                                            <Link href="/features/ad-copy" className="group flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200">
                                                <div className="mt-0.5 p-2 rounded-md bg-orange-50 group-hover:bg-orange-100 transition-colors">
                                                    <Sparkles className="h-4 w-4 text-orange-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Ad Copy</div>
                                                    <div className="text-sm text-gray-500 mt-0.5">Converting advertisements</div>
                                                </div>
                                            </Link>
                                        </div>

                                        {/* AI Features */}
                                        <div className="space-y-1">
                                            <div className="pb-3">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                                                    <h3 className="text-sm font-semibold text-gray-900">AI Features</h3>
                                                </div>
                                            </div>

                                            <Link href="/features/smart-templates" className="group flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200">
                                                <div className="mt-0.5 p-2 rounded-md bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
                                                    <Clock className="h-4 w-4 text-indigo-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">Smart Templates</div>
                                                    <div className="text-sm text-gray-500 mt-0.5">Industry-specific templates</div>
                                                </div>
                                            </Link>

                                            <Link href="/features/seo-optimizer" className="group flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200">
                                                <div className="mt-0.5 p-2 rounded-md bg-yellow-50 group-hover:bg-yellow-100 transition-colors">
                                                    <Zap className="h-4 w-4 text-yellow-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium text-gray-900 group-hover:text-yellow-600 transition-colors">SEO Optimizer</div>
                                                    <div className="text-sm text-gray-500 mt-0.5">Search engine optimization</div>
                                                </div>
                                            </Link>

                                            <Link href="/features/multi-language" className="group flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200">
                                                <div className="mt-0.5 p-2 rounded-md bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                                                    <Globe className="h-4 w-4 text-emerald-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">Multi-language</div>
                                                    <div className="text-sm text-gray-500 mt-0.5">Content in 50+ languages</div>
                                                </div>
                                            </Link>

                                            <Link href="/features/analytics" className="group flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200">
                                                <div className="mt-0.5 p-2 rounded-md bg-red-50 group-hover:bg-red-100 transition-colors">
                                                    <BarChart3 className="h-4 w-4 text-red-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">Analytics</div>
                                                    <div className="text-sm text-gray-500 mt-0.5">Performance insights</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-100 mt-6 pt-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm text-gray-500">
                                                Discover all features
                                            </div>
                                            <Button variant="ghost" size="sm" asChild className="text-sm text-blue-600 hover:text-blue-700">
                                                <Link href="/features" className="flex items-center gap-1">
                                                    View all features
                                                    <ArrowRight className="h-3 w-3" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/pricing"
                                    className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                >
                                    Pricing
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/templates"
                                    className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                >
                                    Templates
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/resources"
                                    className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                >
                                    Resources
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Right Side Buttons */}
                <div className="flex items-center gap-3">
                    <Link href="/login">
                        <Button
                            variant="ghost"
                            className="hidden sm:inline-flex text-gray-700 hover:text-gray-900"
                        >
                            Login
                        </Button>
                    </Link>
                    <Link href="/signup" className="cursor-pointer">
                        <Button
                            variant="ghost"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-200 px-5 py-2 rounded-md"
                        >
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
