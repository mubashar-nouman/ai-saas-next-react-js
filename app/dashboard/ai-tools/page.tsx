'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Type,
  FileText,
  Lightbulb,
  PenSquare,
  Wand2,
  Youtube,
  Instagram,
  Linkedin,
  Twitter,
  Tags,
  Search,
  ArrowRight,
} from 'lucide-react';

const tools = [
  {
    name: 'Blog Title Generator',
    description: 'Generate catchy blog titles that attract readers and boost your post visibility effectively.',
    slug: 'blog-title-generator',
    icon: Type,
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Blog Content Writer',
    description: 'Write full blog articles based on your topics, outlines, and targeted SEO keywords easily.',
    slug: 'blog-content-writer',
    icon: FileText,
    gradient: 'from-sky-400 to-cyan-400',
  },
  {
    name: 'Blog Topic Ideas',
    description: 'Discover trending and unique blog topics to keep your content calendar consistently fresh.',
    slug: 'blog-topic-ideas',
    icon: Lightbulb,
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Article Rewriter',
    description: 'Rewrite existing articles to be plagiarism-free while retaining the core message and clarity.',
    slug: 'article-rewriter',
    icon: PenSquare,
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    name: 'Text Improver',
    description: 'Refine and improve your writing by eliminating errors, redundancies, and awkward phrasing.',
    slug: 'text-improver',
    icon: Wand2,
    gradient: 'from-blue-400 to-sky-500',
  },
  {
    name: 'YouTube Title Generator',
    description: 'Create SEO-optimized YouTube video titles to improve ranking and increase viewer clicks.',
    slug: 'youtube-title-generator',
    icon: Youtube,
    gradient: 'from-red-500 to-rose-500',
  },
  {
    name: 'YouTube Description Writer',
    description: 'Write compelling YouTube descriptions that improve video SEO and audience engagement easily.',
    slug: 'youtube-description-writer',
    icon: Youtube,
    gradient: 'from-red-500 to-rose-600',
  },
  {
    name: 'YouTube Tags Generator',
    description: 'Generate the best SEO tags for your YouTube videos to maximise visibility and reach online.',
    slug: 'youtube-tags-generator',
    icon: Tags,
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    name: 'Instagram Caption Generator',
    description: 'Write engaging Instagram captions to increase post reach, engagement, and audience interaction.',
    slug: 'instagram-caption-generator',
    icon: Instagram,
    gradient: 'from-pink-500 to-fuchsia-600',
  },
  {
    name: 'LinkedIn Post Writer',
    description: 'Generate professional LinkedIn posts to boost your personal branding and network engagement.',
    slug: 'linkedin-post-writer',
    icon: Linkedin,
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Twitter Thread Generator',
    description: 'Create engaging Twitter threads to share insights, stories, or educational content effectively.',
    slug: 'twitter-thread-generator',
    icon: Twitter,
    gradient: 'from-sky-400 to-cyan-500',
  },
];

type ToolCardProps = {
  name: string;
  description: string;
  slug: string;
  icon: React.ComponentType<{ className: string }>;
  gradient: string;
};

const ToolCard = ({ name, description, slug, icon: Icon, gradient }: ToolCardProps) => (
  <Link href={`/dashboard/ai-tools/${slug}`} className="group block h-full">
    <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition hover:border-blue-400 p-5">
      
      <div className=" ">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient}`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="mt-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition">
            {name}
          </h3>

          <p className="text-sm text-gray-500 mt-2 line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-4">
          <span className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:underline">
            Go Now <ArrowRight className="w-4 h-4 ml-1" />
          </span>
        </div>
      </div>
    </div>
  </Link>
);

const AiToolsPage = () => {
  const [search, setSearch] = useState('');

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase()) ||
    tool.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-slate-50 h-[calc(100vh-64px)] overflow-y-auto w-full py-10 px-4 sm:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search AI tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.slug}
                name={tool.name}
                description={tool.description}
                slug={tool.slug}
                icon={tool.icon}
                gradient={tool.gradient}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">No tools found.</p>
        )}
      </div>
    </div>
  );
};

export default AiToolsPage;
