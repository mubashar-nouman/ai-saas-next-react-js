"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle, Sparkles, Zap, Users, Star, TrendingUp, FileText, Download, Video, Music, Image, FileVideo, Instagram, Youtube, File } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";


const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const [openDemo, setOpenDemo] = useState(false);


  const rotatingWords = ['Content', 'Videos', 'Audio Files', 'Documents', 'Social Media'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: FileText, text: 'AI Content Writer' },
    { icon: File, text: 'Files Converter' },
    { icon: Download, text: 'Media Downloader' }
  ];

  const tools = [
    {
      name: 'AI Writer',
      icon: FileText,
      description: 'Generate blog posts, articles, and copy',
      status: 'Generating...',
      progress: 85,
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Video Converter',
      icon: FileVideo,
      description: 'Convert MP4 to AVI, MOV, WMV',
      status: 'Converting...',
      progress: 62,
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'YouTube Downloader',
      icon: Youtube,
      description: 'Download videos from YouTube',
      status: 'Downloading...',
      progress: 94,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Instagram Downloader',
      icon: Instagram,
      description: 'Save posts, stories, and reels',
      status: 'Processing...',
      progress: 78,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tools.length);
    }, 3000);

    return () => clearInterval(tabInterval);
  }, []);

  const stats = [
    { icon: Users, value: '50K+', label: 'Happy Users' },
    { icon: TrendingUp, value: '5M+', label: 'Files Processed' },
    { icon: Star, value: '4.9', label: 'User Rating' },
    { icon: Zap, value: '24/7', label: 'Available' }
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">All-in-One Digital Tools</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                Create AI Content or Convert <br />{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {rotatingWords[currentWord]}
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full transform scale-x-0 animate-pulse"></div>
                </span> {' '}
                <span className="text-gray-700">Effortlessly</span>
              </h1>

              <p className="text-sm text-gray-600 max-w-xl">
                Your ultimate toolkit for AI content creation, file conversions, and media downloads. Transform ideas into content, convert any file format, and download from social platforms.
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-green-100/30 border border-green-300 text-green-800 text-sm font-medium backdrop-blur-sm hover:bg-green-200/50 transition-colors duration-300"
                >
                  {/* Small icon or emoji */}
                  <span className="text-green-600 text-base">
                    <feature.icon className="h-4 w-4" />
                  </span>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200 cursor-pointer"
              >
                <span className="flex items-center gap-1">
                  <span className='text-sm'>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
              </Button>

              <Dialog open={openDemo} onOpenChange={setOpenDemo}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-lg px-6 py-3 bg-white/80 hover:bg-white transition-all duration-200 cursor-pointer"
                  >
                    <Play className="w-4 h-4 text-blue-600" />
                    <span className='text-sm'>Watch Demo</span>
                  </Button>
                </DialogTrigger>

                <DialogContent className="max-w-3xl p-0 overflow-hidden">
                  <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/ilAE9TPkvWo?si=2TvHEMOOwi0mRRV9"
                      title="Demo Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>

            </div>


            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-6">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                <img src="https://images.unsplash.com/photo-1649123245135-4db6ead931b5?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white shadow-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+50K</span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Trusted by <span className="font-semibold text-gray-900">50,000+ creators & professionals</span>
              </div>
            </div>

          </div>

          {/* Right Content - Multi-Tool Dashboard */}
          <div className={`relative transition-all px-6 sm:px-0 duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">

              {/* Main Dashboard Card */}
              <Card className="shadow-2xl border-0 backdrop-blur-md bg-white/95 overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-6">

                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Sparkles className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Multi-Tool Dashboard</h3>
                          <p className="text-sm text-gray-500">All your creative tools in one place</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-600 font-medium">Active</span>
                      </div>
                    </div>

                    {/* Tool Tabs */}
                    <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
                      {tools.map((tool, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveTab(index)}
                          className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md text-xs font-medium transition-all duration-300 ${activeTab === index
                            ? 'bg-white shadow-sm text-gray-900'
                            : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                          <tool.icon className="h-3 w-3" />
                          <span className="hidden sm:inline">{tool.name.split(' ')[0]}</span>
                        </button>
                      ))}
                    </div>

                    {/* Active Tool Display */}
                    <div className="space-y-4">
                      <div className={`bg-gradient-to-r ${tools[activeTab].color} rounded-xl p-4 text-white`}>
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                            {React.createElement(tools[activeTab].icon, { className: "h-4 w-4" })}
                          </div>
                          <div>
                            <h4 className="font-semibold">{tools[activeTab].name}</h4>
                            <p className="text-sm opacity-90">{tools[activeTab].description}</p>
                          </div>
                        </div>

                        {/* Progress */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{tools[activeTab].status}</span>
                            <span>{tools[activeTab].progress}%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div
                              className="bg-white h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${tools[activeTab].progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-3 border border-green-200">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-green-800">Files Processed</span>
                          </div>
                          <p className="text-lg font-bold text-green-900 mt-1">2,847</p>
                        </div>
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 border border-blue-200">
                          <div className="flex items-center space-x-2">
                            <Zap className="h-4 w-4 text-blue-600" />
                            <span className="text-sm font-medium text-blue-800">Avg Speed</span>
                          </div>
                          <p className="text-lg font-bold text-blue-900 mt-1">2.3s</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                          <FileText className="h-3 w-3 mr-1" />
                          AI Writing
                        </Badge>
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                          <Video className="h-3 w-3 mr-1" />
                          Video Convert
                        </Badge>
                        <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                          <Download className="h-3 w-3 mr-1" />
                          Media Download
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Tool Icons */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white p-3 rounded-xl shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <Youtube className="h-5 w-5" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-xl shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <Instagram className="h-5 w-5" />
              </div>

              <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-green-500 to-teal-500 text-white p-2 rounded-lg shadow-lg">
                <FileVideo className="h-4 w-4" />
              </div>

              <div className="absolute bottom-1/4 -left-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg shadow-lg">
                <Music className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;