"use client";
import React, { useState } from 'react';
import { 
  CreditCard, 
  Zap, 
  Check, 
  Crown,
  Users,
  Star,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';

const BillingPage = () => {
  const [currentPlan, setCurrentPlan] = useState('pro');

  // Mock data
  const tokenUsage = {
    used: 750,
    total: 1000,
    percentage: 75
  };

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      interval: 'month',
      tokens: 100,
      description: 'Perfect for trying out our AI tools',
      features: [
        'Basic AI writing tools',
        'Limited generations per day',
        'Standard support'
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 19,
      interval: 'month',
      tokens: 1000,
      description: 'Best for individual creators and professionals',
      features: [
        'All AI writing tools',
        'Unlimited generations',
        'Priority support',
        'Advanced templates',
        'Export options'
      ]
    },
    {
      id: 'team',
      name: 'Team',
      price: 49,
      interval: 'month',
      tokens: 5000,
      description: 'Designed for teams and organizations',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Brand guidelines',
        'Analytics dashboard',
        'Custom templates',
        'API access'
      ]
    }
  ];

  const getPlanIcon = (planId: string) => {
    switch(planId) {
      case 'free': return <Star className="w-5 h-5" />;
      case 'pro': return <Crown className="w-5 h-5" />;
      case 'team': return <Users className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const getCurrentPlan = () => plans.find(p => p.id === currentPlan);

  return (
    <div className="h-[calc(100vh-64px)] overflow-y-scroll bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-1">Billing</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your subscription and usage</p>
        </div>

        {/* Current Plan & Usage Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Current Plan Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                  {getPlanIcon(currentPlan)}
                </div>
                <div>
                  <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Current Plan</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{getCurrentPlan()?.name} Plan</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  ${getCurrentPlan()?.price}
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">/{getCurrentPlan()?.interval}</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Next billing: Aug 31</p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {getCurrentPlan()?.tokens.toLocaleString()} tokens per month
              </p>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center">
                Manage subscription
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Token Usage Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-lg">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Token Usage</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">This month</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {tokenUsage.used.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  of {tokenUsage.total.toLocaleString()} tokens
                </span>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${tokenUsage.percentage}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">{tokenUsage.percentage}% used</span>
                <span className="text-gray-500 dark:text-gray-400">
                  {tokenUsage.total - tokenUsage.used} remaining
                </span>
              </div>

              {tokenUsage.percentage > 80 && (
                <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                  <p className="text-sm text-orange-800 dark:text-orange-200 font-medium">
                    Running low on tokens
                  </p>
                  <p className="text-sm text-orange-600 dark:text-orange-300 mt-1">
                    Consider upgrading to avoid interruptions
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">Plans</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Choose the right plan for your needs</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative bg-white dark:bg-gray-800 rounded-lg border-2 p-6 transition-all duration-200 ${
                  plan.id === currentPlan 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                {plan.id === currentPlan && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Current Plan
                    </span>
                  </div>
                )}

                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg">
                    {getPlanIcon(plan.id)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{plan.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{plan.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">${plan.price}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">/{plan.interval}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {plan.tokens.toLocaleString()} tokens included
                  </p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.id !== currentPlan ? (
                  <button 
                    onClick={() => setCurrentPlan(plan.id)}
                    className={`w-full py-2.5 px-4 rounded-lg font-medium text-sm transition-colors ${
                      plan.price > (getCurrentPlan()?.price || 0)
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100'
                    }`}
                  >
                    {plan.price > (getCurrentPlan()?.price || 0) ? 'Upgrade' : 'Downgrade'}
                    {plan.price > (getCurrentPlan()?.price || 0) && <ArrowUpRight className="w-4 h-4 ml-2 inline" />}
                  </button>
                ) : (
                  <button 
                    disabled
                    className="w-full py-2.5 px-4 rounded-lg font-medium text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                  >
                    Current Plan
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Payment Method</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Manage your billing information</p>
              </div>
            </div>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
              Update
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">VISA</span>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">•••• •••• •••• 4242</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Expires 12/26</p>
              </div>
            </div>
            <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full font-medium">
              Default
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;