"use client";
import React, { useState } from 'react';
import { 
  CreditCard, 
  Calendar, 
  Zap, 
  Plus, 
  Check, 
  X, 
  History, 
  Settings, 
  AlertTriangle,
  Crown,
  Users,
  Star
} from 'lucide-react';

const BillingPage = () => {
  const [currentPlan, setCurrentPlan] = useState('pro');
  const [showCancelModal, setShowCancelModal] = useState(false);

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

  const paymentHistory = [
    { id: 1, date: '2024-07-01', plan: 'Pro', amount: '$19.00', status: 'Paid' },
    { id: 2, date: '2024-06-01', plan: 'Pro', amount: '$19.00', status: 'Paid' },
    { id: 3, date: '2024-05-01', plan: 'Pro', amount: '$19.00', status: 'Paid' },
    { id: 4, date: '2024-04-01', plan: 'Pro', amount: '$19.00', status: 'Failed' },
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
    <div className="h-[calc(100vh-64px)] overflow-scroll bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Billing & Subscription</h1>
          <p className="text-gray-600">Manage your subscription, usage, and payment methods</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Plan Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  {getPlanIcon(currentPlan)}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Current Plan</h2>
                  <p className="text-sm text-gray-600">Your active subscription details</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                      <span>{getCurrentPlan()?.name} Plan</span>
                      {currentPlan === 'pro' && <Crown className="w-6 h-6 text-yellow-500" />}
                      {currentPlan === 'team' && <Users className="w-6 h-6 text-purple-500" />}
                    </h3>
                    <p className="text-gray-600">
                      ${getCurrentPlan()?.price}/{getCurrentPlan()?.interval}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Next billing date</p>
                    <p className="font-semibold text-gray-900">August 31, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Token Usage */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Token Usage</h2>
                  <p className="text-sm text-gray-600">Track your monthly token consumption</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Tokens Used</span>
                  <span className="font-semibold">{tokenUsage.used.toLocaleString()} / {tokenUsage.total.toLocaleString()}</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-orange-500 to-red-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${tokenUsage.percentage}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-500">
                  <span>0</span>
                  <span>{tokenUsage.percentage}% used</span>
                  <span>{tokenUsage.total.toLocaleString()}</span>
                </div>

                {tokenUsage.percentage > 80 && (
                  <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                      <p className="text-orange-800 font-medium">Running low on tokens</p>
                    </div>
                    <p className="text-orange-700 text-sm mt-1">
                      Consider upgrading your plan or purchasing additional tokens.
                    </p>
                  </div>
                )}

                <button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Buy More Tokens</span>
                </button>
              </div>
            </div>

            {/* Payment History */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                  <History className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Payment History</h2>
                  <p className="text-sm text-gray-600">View your past transactions</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 font-semibold text-gray-700">Date</th>
                      <th className="text-left py-3 font-semibold text-gray-700">Plan</th>
                      <th className="text-left py-3 font-semibold text-gray-700">Amount</th>
                      <th className="text-left py-3 font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentHistory.map((payment) => (
                      <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50/50">
                        <td className="py-3 text-gray-600">{payment.date}</td>
                        <td className="py-3 text-gray-800">{payment.plan}</td>
                        <td className="py-3 font-semibold text-gray-800">{payment.amount}</td>
                        <td className="py-3">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            payment.status === 'Paid' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {payment.status === 'Paid' ? <Check className="w-3 h-3 mr-1" /> : <X className="w-3 h-3 mr-1" />}
                            {payment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Plan Options */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Available Plans</h2>
              
              <div className="space-y-4">
                {plans.map((plan) => (
                  <div 
                    key={plan.id}
                    className={`border-2 rounded-xl p-4 transition-all duration-200 ${
                      plan.id === currentPlan 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        {getPlanIcon(plan.id)}
                        <h3 className="font-bold text-gray-800">{plan.name}</h3>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">${plan.price}</p>
                        <p className="text-xs text-gray-500">/{plan.interval}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{plan.tokens.toLocaleString()} tokens/month</p>
                    
                    <ul className="space-y-1 mb-4">
                      {plan.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center space-x-1">
                          <Check className="w-3 h-3 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.id !== currentPlan && (
                      <button 
                        onClick={() => setCurrentPlan(plan.id)}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                      >
                        {plan.price > (getCurrentPlan()?.price || 0) ? 'Upgrade' : 'Downgrade'}
                      </button>
                    )}
                    
                    {plan.id === currentPlan && (
                      <div className="w-full bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-sm font-medium text-center">
                        Current Plan
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Payment Method</h2>
                  <p className="text-sm text-gray-600">Manage your billing details</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">VISA</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">•••• •••• •••• 4242</p>
                        <p className="text-sm text-gray-500">Expires 12/26</p>
                      </div>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Default</span>
                  </div>
                </div>

                <button className="w-full border-2 border-dashed border-gray-300 text-gray-600 py-3 px-4 rounded-xl hover:border-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Payment Method</span>
                </button>

                <button className="w-full bg-purple-500 text-white py-3 px-4 rounded-xl hover:bg-purple-600 transition-colors flex items-center justify-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span>Manage Billing Portal</span>
                </button>
              </div>
            </div>

            {/* Cancel Subscription */}
            {currentPlan !== 'free' && (
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Cancel Subscription</h2>
                    <p className="text-sm text-gray-600">End your current plan</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-800 text-sm">
                      Canceling will downgrade you to the Free plan at the end of your billing period.
                      You'll lose access to premium features and your token limit will be reduced.
                    </p>
                  </div>

                  <button 
                    onClick={() => setShowCancelModal(true)}
                    className="w-full bg-red-500 text-white py-3 px-4 rounded-xl hover:bg-red-600 transition-colors font-medium"
                  >
                    Cancel Subscription
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cancel Confirmation Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cancel Subscription?</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to cancel your {getCurrentPlan()?.name} subscription? 
                This action cannot be undone and you'll lose access to premium features.
              </p>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setShowCancelModal(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-xl hover:bg-gray-300 transition-colors font-medium"
                >
                  Keep Plan
                </button>
                <button 
                  onClick={() => {
                    setCurrentPlan('free');
                    setShowCancelModal(false);
                  }}
                  className="flex-1 bg-red-500 text-white py-3 px-4 rounded-xl hover:bg-red-600 transition-colors font-medium"
                >
                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingPage;