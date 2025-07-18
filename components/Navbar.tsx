"use client";
import { useState } from "react";
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
import { useRouter } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (href: string) => {
    setMobileOpen(false);
    router.push(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200/30 bg-white/70 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-sm">
            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              AI Content Write
            </span>
            <span className="text-[10px] text-gray-400 -mt-0.5 font-medium">Powered by AI</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex items-center space-x-1">
            {[
              { href: "/", label: "Home" },
              { href: "/profile", label: "Pricing" },
              { href: "/templates", label: "Templates" },
              { href: "/resources", label: "Resources" },
            ].map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={href}
                    className="group inline-flex h-10 items-center justify-center rounded-md bg-transparent px-3 py-2 text-[13px] font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:outline-none"
                    prefetch={true}
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/features"
                  className="group inline-flex h-10 items-center justify-center rounded-md bg-transparent px-3 py-2 text-[13px] font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:outline-none"
                  prefetch={true}
                >
                  Features
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="ghost"
            asChild
            className="text-[13px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 h-9 px-3"
          >
            <Link href="/login" prefetch={true}>Login</Link>
          </Button>
          <Button
            asChild
            className="!bg-gradient-to-r !from-blue-600 !to-purple-600 hover:!from-blue-700 hover:!to-purple-700 !text-white shadow-sm hover:shadow-md transition-all duration-200 h-9 px-4 text-[13px] font-medium"
          >
            <Link href="/signup" prefetch={true}>Get Started</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-1 px-4 py-3">
            {[
              { href: "/", label: "Home" },
              { href: "/pricing", label: "Pricing" },
              { href: "/templates", label: "Templates" },
              { href: "/resources", label: "Resources" },
              { href: "/features", label: "Features" },
            ].map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleNavigation(href)}
                className="block px-3 py-2 text-sm font-medium text-gray-700 rounded hover:bg-gray-50 text-left w-full"
              >
                {label}
              </button>
            ))}
            <div className="flex gap-2 mt-2">
              <Button 
                variant="outline" 
                className="flex-1" 
                onClick={() => handleNavigation("/login")}
              >
                Login
              </Button>
              <Button 
                className="flex-1 !bg-gradient-to-r !from-blue-600 !to-purple-600 !text-white"
                onClick={() => handleNavigation("/signup")}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}