"use client";

import React from 'react';
import { useBlogArticleStore } from '@/stores/writerStore';
import { useRouter } from 'next/navigation';
import { Copy, ArrowLeft, Edit3, Sparkles, Hash, Tags, Volume2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const BlogArticleGeneratorPage: React.FC = () => {
    const router = useRouter();
    const {
        topic,
        keywords,
        tone,
        result,
        loading,
        error,
        setTopic,
        setKeywords,
        setTone,
        generateArticle,
        reset,
    } = useBlogArticleStore();

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
                                <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg">
                                    <Edit3 className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-lg font-bold text-gray-800">Blog Article Generator</p>
                                    <p className="text-sm text-gray-500">AI-powered full article creation</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleCopy}
                            disabled={!result}
                            className="flex items-center space-x-2 text-sm px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
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
                            <div className="p-2 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">Blog Article Generator</h2>
                                <p className="text-sm text-gray-600">Generate comprehensive and engaging blog articles using AI.</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="flex items-center space-x-2 mb-3 font-semibold text-gray-700">
                                    <Hash className="w-4 h-4" />
                                    <span>Topic</span>
                                </label>
                                <input
                                    type="text"
                                    value={topic}
                                    onChange={(e) => setTopic(e.target.value)}
                                    placeholder="e.g. The Future of AI, Sustainable Living Tips, Remote Work Best Practices"
                                    className="w-full border-2 border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label className="flex items-center space-x-2 mb-3 font-semibold text-gray-700">
                                    <Tags className="w-4 h-4" />
                                    <span>Keywords</span>
                                </label>
                                <input
                                    type="text"
                                    value={keywords}
                                    onChange={(e) => setKeywords(e.target.value)}
                                    placeholder="e.g. SEO, digital marketing, content strategy, optimization"
                                    className="w-full border-2 border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label className="flex items-center space-x-2 mb-3 font-semibold text-gray-700">
                                    <Volume2 className="w-4 h-4" />
                                    <span>Tone</span>
                                </label>
                                <Select value={tone} onValueChange={setTone}>
                                    <SelectTrigger className="w-full border-2 border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 bg-white">
                                        <SelectValue placeholder="Select tone" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg z-50" side="bottom" align="start">
                                        <SelectItem value="professional" className="hover:bg-gray-100">Professional</SelectItem>
                                        <SelectItem value="casual" className="hover:bg-gray-100">Casual</SelectItem>
                                        <SelectItem value="friendly" className="hover:bg-gray-100">Friendly</SelectItem>
                                        <SelectItem value="formal" className="hover:bg-gray-100">Formal</SelectItem>
                                        <SelectItem value="conversational" className="hover:bg-gray-100">Conversational</SelectItem>
                                        <SelectItem value="authoritative" className="hover:bg-gray-100">Authoritative</SelectItem>
                                        <SelectItem value="informative" className="hover:bg-gray-100">Informative</SelectItem>
                                        <SelectItem value="persuasive" className="hover:bg-gray-100">Persuasive</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <button
                                onClick={generateArticle}
                                disabled={loading}
                                className="w-full h-11 bg-emerald-600 cursor-pointer hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Generating...</span>
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-4 h-4" />
                                        <span>Generate Article</span>
                                    </>
                                )}
                            </button>

                            {error && (
                                <div className="py-3 px-4 bg-red-50 border border-red-200 rounded-xl">
                                    <p className="text-red-600 text-sm font-medium">{error}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Results Panel */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg">
                                <Copy className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h2 className="text-[22px] font-bold text-gray-800">Your Result</h2>
                            </div>
                        </div>

                        {result ? (
                            <div className="max-h-96 overflow-y-auto bg-gradient-to-b from-gray-50 to-white rounded-xl border border-gray-200 p-6">
                                <div className="prose max-w-none prose-emerald text-sm whitespace-pre-wrap">
                                    <ReactMarkdown>{result}</ReactMarkdown>
                                </div>
                            </div>
                        ) : (
                            <div className="h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center p-8">
                                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mb-4">
                                    <Edit3 className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-600 mb-2">Ready to Generate</h3>
                                <p className="text-gray-500 text-[15px]">
                                    Your complete blog article will appear here after generation.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogArticleGeneratorPage;