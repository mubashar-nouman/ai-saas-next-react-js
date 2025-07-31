"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "How does your AI content generation work?",
      answer: "Our AI uses advanced models trained on diverse data to produce high-quality, human-like content tailored to your brand."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely! You can cancel or change plans anytime directly from your dashboard — no hidden fees."
    },
    {
      question: "Do you support multiple languages?",
      answer: "Yes! Generate content in 25+ languages with native-level fluency and cultural relevance."
    },
    {
      question: "Is the generated content plagiarism-free?",
      answer: "Yes, every piece of content is unique and designed to pass leading plagiarism detection tools."
    },
    {
      question: "Do you offer team collaboration features?",
      answer: "Our Pro & Enterprise plans include real-time collaboration so teams can work together seamlessly."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge 
            variant="secondary"
            className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-0 mb-4 inline-flex items-center shadow-sm px-3 py-1 rounded-full text-xs font-semibold"
          >
            ❓ FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our AI tools, pricing, and features.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              value={`faq-${index}`}
              className="rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="flex justify-between items-center px-5 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 rounded-xl transition-colors">
                <span>{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
