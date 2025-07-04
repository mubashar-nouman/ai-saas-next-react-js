"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { ChevronDown, FileText, Users, Mail, Sparkles, Clock, Zap, Globe, BarChart3, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200/30 bg-transparent backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
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
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex items-center space-x-1">
            <NavigationMenuItem>
              <Link href="/" passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-[13px] font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-10 px-3 py-2 text-[13px] font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[700px] p-5 bg-white rounded-xl">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Content Creation */}
                    <div className="space-y-0.5">
                      <div className="pb-2.5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                          <h3 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">Content Creation</h3>
                        </div>
                      </div>
                      
                      <Link href="/features/blog-posts" className="group flex items-start gap-3 rounded-lg p-2.5 hover:bg-gray-25 transition-colors duration-200">
                        <div className="mt-0.5 p-1.5 rounded-md bg-blue-25 group-hover:bg-blue-50 transition-colors">
                          <FileText className="h-3.5 w-3.5 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Blog Posts</div>
                          <div className="text-xs text-gray-500 mt-0.5">AI-powered long-form content</div>
                        </div>
                      </Link>

                      <Link href="/features/social-media" className="group flex items-start gap-3 rounded-lg p-2.5 hover:bg-gray-25 transition-colors duration-200">
                        <div className="mt-0.5 p-1.5 rounded-md bg-purple-25 group-hover:bg-purple-50 transition-colors">
                          <Users className="h-3.5 w-3.5 text-purple-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Social Media</div>
                          <div className="text-xs text-gray-500 mt-0.5">Engaging posts for all platforms</div>
                        </div>
                      </Link>

                      <Link href="/features/email-marketing" className="group flex items-start gap-3 rounded-lg p-2.5 hover:bg-gray-25 transition-colors duration-200">
                        <div className="mt-0.5 p-1.5 rounded-md bg-green-25 group-hover:bg-green-50 transition-colors">
                          <Mail className="h-3.5 w-3.5 text-green-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors">Email Marketing</div>
                          <div className="text-xs text-gray-500 mt-0.5">Compelling email campaigns</div>
                        </div>
                      </Link>

                      <Link href="/features/ad-copy" className="group flex items-start gap-3 rounded-lg p-2.5 hover:bg-gray-25 transition-colors duration-200">
                        <div className="mt-0.5 p-1.5 rounded-md bg-orange-25 group-hover:bg-orange-50 transition-colors">
                          <Sparkles className="h-3.5 w-3.5 text-orange-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Ad Copy</div>
                          <div className="text-xs text-gray-500 mt-0.5">Converting advertisements</div>
                        </div>
                      </Link>
                    </div>

                    {/* AI Features */}
                    <div className="space-y-0.5">
                      <div className="pb-2.5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                          <h3 className="text-xs font-semibold text-gray-800 uppercase tracking-wide">AI Features</h3>
                        </div>
                      </div>

                      <Link href="/features/smart-templates" className="group flex items-start gap-3 rounded-lg p-2.5 hover:bg-gray-25 transition-colors duration-200">
                        <div className="mt-0.5 p-1.5 rounded-md bg-indigo-25 group-hover:bg-indigo-50 transition-colors">
                          <Clock className="h-3.5 w-3.5 text-indigo-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">Smart Templates</div>
                          <div className="text-xs text-gray-500 mt-0.5">Industry-specific templates</div>
                        </div>
                      </Link>

                      <Link href="/features/seo-optimizer" className="group flex items-start gap-3 rounded-lg p-2.5 hover:bg-gray-25 transition-colors duration-200">
                        <div className="mt-0.5 p-1.5 rounded-md bg-yellow-25 group-hover:bg-yellow-50 transition-colors">
                          <Zap className="h-3.5 w-3.5 text-yellow-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 group-hover:text-yellow-600 transition-colors">SEO Optimizer</div>
                          <div className="text-xs text-gray-500 mt-0.5">Search engine optimization</div>
                        </div>
                      </Link>

                      <Link href="/features/multi-language" className="group flex items-start gap-3 rounded-lg p-2.5 hover:bg-gray-25 transition-colors duration-200">
                        <div className="mt-0.5 p-1.5 rounded-md bg-emerald-25 group-hover:bg-emerald-50 transition-colors">
                          <Globe className="h-3.5 w-3.5 text-emerald-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">Multi-language</div>
                          <div className="text-xs text-gray-500 mt-0.5">Content in 50+ languages</div>
                        </div>
                      </Link>

                      <Link href="/features/analytics" className="group flex items-start gap-3 rounded-lg p-2.5 hover:bg-gray-25 transition-colors duration-200">
                        <div className="mt-0.5 p-1.5 rounded-md bg-red-25 group-hover:bg-red-50 transition-colors">
                          <BarChart3 className="h-3.5 w-3.5 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors">Analytics</div>
                          <div className="text-xs text-gray-500 mt-0.5">Performance insights</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 mt-4 pt-3">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        Discover all features
                      </div>
                      <Button variant="ghost" size="sm" asChild className="text-xs text-blue-600 hover:text-blue-700 h-7 px-2">
                        <Link href="/features" className="flex items-center gap-1">
                          View all features
                          <ArrowRight className="h-2.5 w-2.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/pricing" passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-[13px] font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none">
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/templates" passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-[13px] font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none">
                  Templates
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/resources" passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-[13px] font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none">
                  Resources
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            asChild
            className="hidden sm:inline-flex text-[13px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 h-9 px-3"
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button 
            asChild
            className="!bg-gradient-to-r !from-blue-600 !to-purple-600 hover:!from-blue-700 hover:!to-purple-700 !text-white shadow-sm hover:shadow-md transition-all duration-200 h-9 px-4 text-[13px] font-medium"
          >
            <Link href="/signup">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}