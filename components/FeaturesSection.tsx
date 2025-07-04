"use client";

import React from 'react';
import Link from 'next/link';
import { Youtube, FileText, Instagram, Hash, Mail, ShoppingBag, Search, PenTool, Megaphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FeaturesSection = () => {
  const featureCards = [
    {
      icon: Youtube,
      title: "YouTube Description Generator",
      description: "Create compelling video descriptions that boost engagement and discoverability with SEO optimization.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: FileText,
      title: "Blog & Article Writer",
      description: "Generate high-quality, SEO-optimized blog posts and articles with proper structure and formatting.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Instagram,
      title: "Instagram Caption Creator",
      description: "Craft engaging captions with trending hashtags that increase your reach and engagement rates.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Hash,
      title: "Social Media Manager",
      description: "Create platform-specific content for Facebook, Twitter, LinkedIn with optimal posting strategies.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Mail,
      title: "Email Marketing Writer",
      description: "Write persuasive email campaigns with high conversion rates and personalized messaging.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: ShoppingBag,
      title: "Business Copy Generator",
      description: "Create professional sales pages, product descriptions, and marketing copy that converts.",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Search,
      title: "SEO Content Optimizer",
      description: "Optimize your content for search engines with keyword research and meta descriptions.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: PenTool,
      title: "Creative Writing Assistant",
      description: "Generate creative stories, scripts, and narrative content with unique storytelling elements.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Megaphone,
      title: "Ad Copy Generator",
      description: "Create high-converting ad copy for Google Ads, Facebook Ads, and other advertising platforms.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 mb-4 inline-flex items-center">
            Features
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI Content Tools for
            <span className="block text-blue-600">Every Need</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Choose from a wide range of AI-powered tools to elevate your content strategy across platforms.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featureCards.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-[1px] pt-0 border-amber-50 duration-500 group"
            >
             <div className={`h-[7px] rounded-t-lg bg-gradient-to-r ${feature.color}`} />

              <CardHeader className="pb-3">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-3 w-fit transition-transform duration-300`}>
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-md font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {feature.description}
                </p>
                {/* <Link href="/dashboard" className="text-sm text-blue-600 hover:underline font-medium">
                  Learn more →
                </Link> */}
              </CardContent>

              {/* Subtle Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
