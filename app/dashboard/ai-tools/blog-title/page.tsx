"use client";

import React from 'react';
import { useBlogTitleStore } from '@/stores/writerStore';
import { useRouter } from 'next/navigation';
import { Copy, ArrowLeft, Type, Sparkles, Lightbulb } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const BlogTitleGeneratorPage: React.FC = () => {
    const router = useRouter();
    const {
        topic,
        result,
        loading,
        error,
        setTopic,
        generateTitles,
        reset,
    } = useBlogTitleStore();

    const handleCopy = () => {
        navigator.clipboard.writeText(result);
    };

    return (
        <div className="h-[calc(100vh-64px)] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => {
                                    reset();
                                    router.back();
                                }}
                                className="flex items-center space-x-2 text-sm px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all duration-200 hover:shadow-sm"
                            >
                                <ArrowLeft size={16} />
                                <span>Back</span>
                            </button>
                            
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                                    <Type className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-lg font-bold text-gray-800">Blog Title Generator</p>
                                    <p className="text-sm text-gray-500">AI-powered title generation</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleCopy}
                            disabled={!result}
                            className="flex items-center space-x-2 text-sm px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
                        >
                            <Copy size={16} />
                            <span>Copy</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Input Panel */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
                        <div className="flex items-start space-x-3 mb-6">
                            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">Blog Title Generator</h2>
                                <p className="text-sm text-gray-600">Generate catchy and SEO-optimized blog titles that attract readers and boost your post visibility.</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="flex items-center space-x-2 mb-3 font-semibold text-gray-700">
                                    <Lightbulb className="w-4 h-4" />
                                    <span>Blog Topic</span>
                                </label>
                                <textarea
                                    rows={4}
                                    value={topic}
                                    onChange={(e) => setTopic(e.target.value)}
                                    placeholder="Enter your blog topic or subject. For example: 'How to improve productivity at work' or 'Best practices for remote team collaboration'..."
                                    className="w-full border-2 border-gray-200 rounded-xl px-3 py-3 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 resize-none text-sm leading-relaxed"
                                />
                                <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                                    <span>{topic.length} characters</span>
                                    <span>{topic.split(/\s+/).filter(word => word.length > 0).length} words</span>
                                </div>
                            </div>

                            <button
                                onClick={generateTitles}
                                disabled={loading || !topic.trim()}
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg flex items-center justify-center space-x-2"
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                        <span>Generating Titles...</span>
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-4 h-4" />
                                        <span>Generate Blog Titles</span>
                                    </>
                                )}
                            </button>

                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Output Panel */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
                        <div className="flex items-start space-x-3 mb-6">
                            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                                <Type className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">Generated Titles</h2>
                                <p className="text-sm text-gray-600">Your AI-generated blog titles will appear here.</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {result ? (
                                <div className="prose prose-sm max-w-none">
                                    <ReactMarkdown>{result}</ReactMarkdown>
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Type className="w-8 h-8 text-gray-400" />
                                    </div>
                                    <p className="text-gray-500 text-sm">Generated titles will appear here</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogTitleGeneratorPage;