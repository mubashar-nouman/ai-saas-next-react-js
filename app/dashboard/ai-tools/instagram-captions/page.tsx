"use client";

import React from 'react';
import { useInstagramCaptionsStore } from '@/stores/writerStore';
import { useRouter } from 'next/navigation';
import { Copy } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const InstagramCaptionsPage: React.FC = () => {
    const router = useRouter();
    const {
        topic,
        number,
        result,
        loading,
        error,
        setTopic,
        setNumber,
        generateCaptions,
        reset,
    } = useInstagramCaptionsStore();

    const handleCopy = () => {
        navigator.clipboard.writeText(result);
    };

    return (
        <div className="h-[calc(100vh-64px)] bg-gray-100 px-6 py-10">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-6">
                <button
                    onClick={() => {
                        reset();
                        router.back();
                    }}
                    className="text-sm px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-all"
                >
                    ← Back
                </button>

                <button
                    onClick={handleCopy}
                    disabled={!result}
                    className="text-sm px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-all flex items-center gap-2 disabled:opacity-50"
                >
                    <Copy size={16} />
                    Copy
                </button>
            </div>

            {/* Content Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Input Form */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">Instagram Captions Generator</h2>
                    <p className="text-sm text-gray-500 mb-6">
                        Generate engaging and creative captions for your Instagram posts using AI.
                    </p>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-700">Topic</label>
                        <input
                            type="text"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="e.g. Travel, Fitness, Food"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-700">Number of Captions</label>
                        <input
                            type="number"
                            min={1}
                            max={15}
                            value={number}
                            onChange={(e) => {
                                const val = e.target.value;
                                if (val === '') {
                                  setNumber(1);
                                } else {
                                  const parsed = parseInt(val);
                                  if (!isNaN(parsed)) {
                                    setNumber(Math.min(15, parsed));
                                  }
                                }
                              }}
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    


                    <button
                        onClick={generateCaptions}
                        disabled={loading}
                        className="w-full h-9 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg cursor-pointer"
                    >
                        {loading ? 'Generating...' : 'Generate Content'}
                    </button>

                    {error && <p className="text-red-600 text-sm mt-3">{error}</p>}
                </div>

                {/* Result Viewer */}
                <div className="bg-white rounded-xl shadow-md p-6 max-h-60vh">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Result</h2>

                    {result ? (
                        <div className="prose max-w-none prose-purple overflow-y-scroll text-sm whitespace-pre-wrap">
                            <ReactMarkdown>{result}</ReactMarkdown>
                        </div>
                    ) : (
                        <div className="text-gray-400 italic">
                            Output will appear here after generating captions.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InstagramCaptionsPage;
