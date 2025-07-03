"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle, Sparkles, Zap, Users, Star, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const rotatingWords = ['Blog Posts', 'Social Media', 'Email Copy', 'Ad Content', 'SEO Articles'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    '50+ AI Writing Templates',
    'Multi-language Support',
    'SEO Optimization',
    'Plagiarism-free Content'
  ];

  const stats = [
    { icon: Users, value: '10K+', label: 'Happy Users' },
    { icon: TrendingUp, value: '1M+', label: 'Content Created' },
    { icon: Star, value: '4.9', label: 'User Rating' },
    { icon: Zap, value: '10x', label: 'Faster Writing' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.04'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-16 left-8 w-48 h-48 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.06] animate-pulse"></div>
      <div className="absolute top-32 right-8 w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.06] animate-pulse delay-1000"></div>
      <div className="absolute bottom-16 left-16 w-48 h-48 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.06] animate-pulse delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Badge */}
            <Badge variant="secondary" className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 hover:bg-blue-100">
              <Sparkles className="h-3 w-3" />
              <span className="text-xs font-medium">Powered by Advanced AI</span>
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                <span className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Create Amazing
                </span>
                <span className="block mt-1 relative">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {rotatingWords[currentWord]}
                  </span>
                </span>
                <span className="block mt-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  in Seconds
                </span>
              </h1>
              
              <p className="text-base text-gray-600 max-w-lg leading-relaxed">
                Transform your ideas into high-quality, engaging content with our AI-powered writing assistant. 
                Create content that converts and saves you hours of work.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                <span className="flex items-center space-x-2">
                  <span>Start Writing for Free</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button variant="outline" size="lg" className="group bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg transition-all duration-300">
                <Play className="h-4 w-4 text-blue-600 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 pt-4 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-1">
                    <stat.icon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="text-base font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual/Demo */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main Card */}
              <Card className="shadow-xl border-gray-200/60 backdrop-blur-md">
                <CardContent className="p-5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-gray-900">AI Content Generator</h3>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-600">Live</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Topic</label>
                        <div className="text-gray-900 font-medium text-sm">
                          "Benefits of Remote Work for Productivity"
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-3">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Generated Content</label>
                        <div className="text-gray-700 text-xs leading-relaxed">
                          Remote work has revolutionized the modern workplace, offering unprecedented flexibility and productivity benefits...
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center space-x-1.5 text-xs text-gray-600">
                          <Zap className="h-3 w-3 text-yellow-500" />
                          <span>Generated in 2.3s</span>
                        </div>
                        <Badge variant="secondary" className="text-xs bg-green-50 text-green-700 border-green-200">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          SEO Optimized
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg shadow-lg">
                <Sparkles className="h-3.5 w-3.5" />
              </div>
              
              <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-green-500 to-teal-500 text-white p-2 rounded-lg shadow-lg">
                <CheckCircle className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;