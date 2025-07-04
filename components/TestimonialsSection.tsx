"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Content Creator",
      company: "Digital Marketing Agency",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      text: "This AI tool has completely transformed my content creation process. I can now produce high-quality blog posts in minutes instead of hours.",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Tech Startup",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      text: "The video converter and AI writing features are game-changers. Our team's productivity has increased by 300% since we started using this platform.",
    },
    {
      name: "Emily Rodriguez",
      role: "Social Media Manager",
      company: "E-commerce Brand",
      avatar: "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      text: "I love how easy it is to create engaging Instagram captions and convert content across different formats. The multi-tool dashboard is incredibly intuitive.",
    },
    {
      name: "David Kim",
      role: "Freelance Writer",
      company: "Independent",
      avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      text: "As a freelancer, this tool has been a lifesaver. The AI content quality is exceptional, and the file conversion features save me so much time.",
    },
    {
      name: "Lisa Thompson",
      role: "YouTube Creator",
      company: "Education Channel",
      avatar: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      text: "The YouTube description generator and video converter have streamlined my entire workflow. I can focus more on creating content rather than formatting.",
    },
    {
      name: "Alex Martinez",
      role: "Agency Owner",
      company: "Creative Agency",
      avatar: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      text: "We've been using this for our entire team. The collaboration features and processing speed are outstanding. Highly recommend for any creative team.",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-0 mb-4 inline-flex items-center shadow-sm">
            💬 Testimonials
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Users</span> Say
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Join thousands of creators, marketers, and businesses who trust our AI-powered tools for their content needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative flex flex-col border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group bg-white/80 backdrop-blur-lg rounded-2xl"
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Quote & stars */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-6 w-6 text-gray-300" />
                  <div className="flex space-x-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                  "{testimonial.text}"
                </p>

                {/* User info */}
                <div className="flex items-center space-x-3 mt-auto">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-sm"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                    <p className="text-xs text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
              {/* Optional subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-purple-50/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
