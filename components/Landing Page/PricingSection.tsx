"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
    const plans = [
        {
            title: "Starter",
            price: "$9",
            frequency: "per month",
            description: "Ideal for individuals and hobbyists starting with AI content.",
            features: [
                "Access to 20+ templates",
                "10,000 AI words per month",
                "Basic analytics",
                "Email support"
            ],
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Pro",
            price: "$29",
            frequency: "per month",
            description: "For growing teams and creators needing more power.",
            features: [
                "Access to 50+ templates",
                "100,000 AI words per month",
                "Advanced analytics",
                "Priority email support",
                "Plagiarism checker"
            ],
            color: "from-purple-500 to-pink-500",
            popular: true
        },
        {
            title: "Enterprise",
            price: "Contact",
            frequency: "us",
            description: "Custom solutions for large teams and agencies.",
            features: [
                "Unlimited AI words",
                "Custom templates",
                "Team collaboration tools",
                "Dedicated account manager",
                "24/7 premium support"
            ],
            color: "from-green-500 to-teal-500"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200 mb-4 inline-flex items-center">
                        Pricing Plans
                    </Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Choose the <span className="text-purple-600">Perfect Plan</span> for You
                    </h2>
                    <p className="text-base text-gray-600 max-w-2xl mx-auto">
                        Flexible pricing to fit your needs, whether you're a solo creator or a growing team.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border-[1px] border-gray-200 group ${plan.popular ? "ring-2 ring-purple-500 border-0" : ""
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-4 right-4">
                                    <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">
                                        Most Popular
                                    </Badge>
                                </div>
                            )}
                            <CardHeader className="pb-3">
                                {/* Neon capsule badge */}
                                <div
                                    className={`inline px-4 py-1 my-2 rounded-full bg-gradient-to-r ${plan.color} text-white text-xs font-semibold shadow-md hover:shadow-lg transition-all duration-300 ${plan.title === "Starter" ? "w-[75px]"
                                            : plan.title === "Pro" ? "w-[53px]"
                                                : plan.title === "Enterprise" ? "w-[90px]"
                                                    : ""
                                        }`}
                                >
                                    {plan.title}
                                </div>


                                <CardTitle className="text-2xl font-bold text-gray-900">
                                    {plan.price === "Contact" ? "Contact us" : plan.price}
                                    <span className="text-sm font-normal text-gray-500 ml-1">
                                        {plan.price !== "Contact" && plan.frequency}
                                    </span>
                                </CardTitle>
                                <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col justify-between pt-0">
                                <ul className="space-y-3 mt-4 mb-6">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-700">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto">
                                    <Button
                                        className={`w-full bg-gradient-to-r ${plan.color} text-white hover:shadow-md transition-all duration-200`}
                                    >
                                        {plan.price === "Contact" ? "Contact Sales" : "Get Started"}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
