import { create } from 'zustand';
import axios from 'axios';

const API = process.env.NEXT_PUBLIC_API_URL;

interface BlogTitleState {
    topic: string;
    result: string;
    loading: boolean;
    error: string | null;
    setTopic: (val: string) => void;
    generateTitles: () => void;
    reset: () => void;
}

interface BlogArticleState {
    topic: string;
    keywords: string;
    tone: string;
    result: string;
    loading: boolean;
    error: string | null;
    setTopic: (val: string) => void;
    setKeywords: (val: string) => void;
    setTone: (val: string) => void;
    generateArticle: () => void;
    reset: () => void;
}

interface BlogTopicIdeasState {
    niche: string;
    result: string;
    loading: boolean;
    error: string | null;
    setNiche: (val: string) => void;
    generateTopicIdeas: () => void;
    reset: () => void;
}

interface ArticleRewriterState {
    text: string;
    result: string;
    loading: boolean;
    error: string | null;
    setText: (val: string) => void;
    rewriteArticle: () => void;
    reset: () => void;
}

interface TextImproverState {
    text: string;
    result: string;
    loading: boolean;
    error: string | null;
    setText: (val: string) => void;
    improveText: () => void;
    reset: () => void;
}

interface YouTubeTitleState {
    topic: string;
    result: string;
    loading: boolean;
    error: string | null;
    setTopic: (val: string) => void;
    generateTitles: () => void;
    reset: () => void;
}

interface YouTubeDescriptionState {
    topic: string;
    keywords: string;
    result: string;
    loading: boolean;
    error: string | null;
    setTopic: (val: string) => void;
    setKeywords: (val: string) => void;
    generateDescription: () => void;
    reset: () => void;
}

interface YouTubeTagsState {
    topic: string;
    result: string;
    loading: boolean;
    error: string | null;
    setTopic: (val: string) => void;
    generateTags: () => void;
    reset: () => void;
}


interface InstaCaptionsState {
    topic: string;
    number: number;
    result: string;
    loading: boolean;
    error: string | null;
    setTopic: (val: string) => void;
    setNumber: (val: number) => void;
    generateCaptions: () => void;
    reset: () => void;
}

interface LinkedInPostState {
    topic: string;
    result: string;
    loading: boolean;
    error: string | null;
    setTopic: (val: string) => void;
    generatePost: () => void;
    reset: () => void;
}

interface TwitterThreadState {
    topic: string;
    number: string;
    result: string;
    loading: boolean;
    error: string | null;
    setTopic: (val: string) => void;
    setNumber: (val: string) => void;
    generateThread: () => void;
    reset: () => void;
}

export const useBlogTitleStore = create<BlogTitleState>((set, get) => ({
    topic: '',
    result: '',
    loading: false,
    error: null,

    setTopic: (val) => set({ topic: val }),

    generateTitles: async () => {
        const { topic } = get();
        if (!topic) {
            set({ error: 'Please enter a topic', result: '' });
            return;
        }

        set({ loading: true, error: null });
        try {
            const response = await axios.post(
                `${API}/api/writer/blog-title`,
                { topic },
                { withCredentials: true }
            );
            set({ result: response.data.content, loading: false });
        } catch (err: any) {
            set({ error: err.response?.data?.message || 'Failed to generate titles', loading: false });
        }
    },

    reset: () => set({ topic: '', result: '', loading: false, error: null }),
}));

export const useBlogArticleStore = create<BlogArticleState>((set, get) => ({
    topic: '',
    keywords: '',
    tone: 'Professional',
    result: '',
    loading: false,
    error: null,

    setTopic: (val) => set({ topic: val }),
    setKeywords: (val) => set({ keywords: val }),
    setTone: (val) => set({ tone: val }),

    generateArticle: async () => {
        const { topic, keywords, tone } = get();
        if (!topic || !keywords || !tone) {
            set({ error: 'Please fill in all fields', result: '' });
            return;
        }

        set({ loading: true, error: null });
        try {
            const response = await axios.post(
                `${API}/api/writer/blog-content`,
                { topic, keywords, tone },
                { withCredentials: true }
            );
            set({ result: response.data.content, loading: false });
        } catch (err: any) {
            set({ error: err.response?.data?.message || 'Failed to generate article', loading: false });
        }
    },

    reset: () => set({ topic: '', keywords: '', tone: 'Professional', result: '', error: null }),
}));

export const useBlogTopicIdeasStore = create<BlogTopicIdeasState>((set, get) => ({
    niche: '',
    result: '',
    loading: false,
    error: null,

    setNiche: (val) => set({ niche: val }),

    generateTopicIdeas: async () => {
        const { niche } = get();
        if (!niche) {
            set({ error: 'Please enter a niche', result: '' });
            return;
        }

        set({ loading: true, error: null });
        try {
            const response = await axios.post(
                `${API}/api/writer/blog-ideas`,
                { niche },
                { withCredentials: true }
            );
            set({ result: response.data.content, loading: false });
        } catch (err: any) {
            set({ error: err.response?.data?.message || 'Failed to generate topic ideas', loading: false });
        }
    },

    reset: () => set({ niche: '', result: '', loading: false, error: null }),
}));

export const useArticleRewriterStore = create<ArticleRewriterState>((set, get) => ({
    text: '',
    result: '',
    loading: false,
    error: null,

    setText: (val) => set({ text: val }),

    rewriteArticle: async () => {
        const { text } = get();
        if (!text) {
            set({ error: 'Please enter text to rewrite', result: '' });
            return;
        }

        set({ loading: true, error: null });
        try {
            const response = await axios.post(
                `${API}/api/writer/article-rewriter`,
                { text },
                { withCredentials: true }
            );
            set({ result: response.data.content, loading: false });
        } catch (err: any) {
            set({ error: err.response?.data?.message || 'Failed to rewrite article', loading: false });
        }
    },

    reset: () => set({ text: '', result: '', loading: false, error: null }),
}));

export const useTextImproverStore = create<TextImproverState>((set, get) => ({
    text: '',
    result: '',
    loading: false,
    error: null,

    setText: (val) => set({ text: val }),

    improveText: async () => {
        const { text } = get();
        if (!text) {
            set({ error: 'Please enter text to improve', result: '' });
            return;
        }

        set({ loading: true, error: null });
        try {
            const response = await axios.post(
                `${API}/api/writer/text-improver`,
                { text },
                { withCredentials: true }
            );
            set({ result: response.data.content, loading: false });
        } catch (err: any) {
            set({ error: err.response?.data?.message || 'Failed to improve text', loading: false });
        }
    },

    reset: () => set({ text: '', result: '', loading: false, error: null }),
}));

export const useYouTubeTitleStore = create<YouTubeTitleState>((set, get) => ({
    topic: '',
    result: '',
    loading: false,
    error: null,

    setTopic: (val) => set({ topic: val }),

    generateTitles: async () => {
        const { topic } = get();
        if (!topic) {
            set({ error: 'Please enter a topic', result: '' });
            return;
        }

        set({ loading: true, error: null });
        try {
            const response = await axios.post(
                `${API}/api/writer/youtube-title`,
                { topic },
                { withCredentials: true }
            );
            set({ result: response.data.content, loading: false });
        } catch (err: any) {
            set({ error: err.response?.data?.message || 'Failed to generate titles', loading: false });
        }
    },

    reset: () => set({ topic: '', result: '', loading: false, error: null }),
}));

export const useYouTubeDescriptionStore = create<YouTubeDescriptionState>((set, get) => ({
    topic: '',
    keywords: '',
    result: '',
    loading: false,
    error: null,

    setTopic: (val) => set({ topic: val }),
    setKeywords: (val) => set({ keywords: val }),

    generateDescription: async () => {
        const { topic, keywords } = get();
        if (!topic || !keywords) {
            set({ error: 'Please fill in all fields', result: '' });
            return;
        }

        set({ loading: true, error: null });
        try {
            const response = await axios.post(
                `${API}/api/writer/youtube-description`,
                { topic, keywords },
                { withCredentials: true }
            );
            set({ result: response.data.content, loading: false });
        } catch (err: any) {
            set({ error: err.response?.data?.message || 'Failed to generate description', loading: false });
        }
    },

    reset: () => set({ topic: '', keywords: '', result: '', loading: false, error: null }),
}));

export const useYouTubeTagsStore = create<YouTubeTagsState>((set, get) => ({
    topic: '',
    result: '',
    loading: false,
    error: null,

    setTopic: (val) => set({ topic: val }),

    generateTags: async () => {
        const { topic } = get();
        if (!topic) {
            set({ error: 'Please enter a topic', result: '' });
            return;
        }

        set({ loading: true, error: null });
        try {
            const response = await axios.post(
                `${API}/api/writer/youtube-tags`,
                { topic },
                { withCredentials: true }
            );
            set({ result: response.data.content, loading: false });
        } catch (err: any) {
            set({ error: err.response?.data?.message || 'Failed to generate tags', loading: false });
        }
    },

    reset: () => set({ topic: '', result: '', loading: false, error: null }),
}));



export const useInstagramCaptionsStore = create<InstaCaptionsState>((set, get) => ({
    topic: '',
    number: 3,
    result: '',
    loading: false,
    error: null,

    setTopic: (val) => set({ topic: val }),
    setNumber: (val) => set({ number: val }),

    generateCaptions: async () => {
        const { topic, number } = get();
        if (!topic || !number) {
            set({ error: 'Please fill in all fields' });
            return;
        }

        set({ loading: true, error: null });
        try {
            const response = await axios.post(
                `${API}/api/writer/instagram-caption`,
                {
                    topic,
                    number,
                },
                {
                    withCredentials: true,
                }
            );
            set({ result: response.data.content, loading: false });
        } catch (err: any) {
            set({ error: err.response?.data?.message || 'Failed to generate', loading: false });
        }
    },

    reset: () => set({ topic: '', number: 1, result: '', error: null }),
}));

export const useLinkedInPostsStore = create<LinkedInPostState>((set, get) => ({
    topic: '',
    result: '',
    loading: false,
    error: null,

    setTopic: (val) => set({ topic: val }),

    generatePost: async () => {
        const { topic } = get();
        if (!topic) {
            set({ error: 'Please enter a topic', result: '' });
            return;
        }

        set({ loading: true, error: null });
        try {
            const response = await axios.post(
                `${API}/api/writer/linkedin-post`,
                { topic },
                { withCredentials: true }
            );
            set({ result: response.data.content, loading: false });
        } catch (err: any) {
            set({ error: err.response?.data?.message || 'Failed to generate post', loading: false });
        }
    },

    reset: () => set({ topic: '', result: '', loading: false, error: null }),
}));

export const useTwitterThreadStore = create<TwitterThreadState>((set, get) => ({
    topic: '',
    number: '2',
    result: '',
    loading: false,
    error: null,

    setTopic: (val) => set({ topic: val }),
    setNumber: (val) => set({ number: val }),

    generateThread: async () => {
        const { topic, number } = get();
        if (!topic || !number) {
            set({ error: 'Please fill in all fields', result: '' });
            return;
        }

        set({ loading: true, error: null });
        try {
            const response = await axios.post(
                `${API}/api/writer/twitter-thread`,
                { topic, number },
                { withCredentials: true }
            );
            set({ result: response.data.content, loading: false });
        } catch (err: any) {
            set({ error: err.response?.data?.message || 'Failed to generate thread', loading: false });
        }
    },

    reset: () => set({ topic: '', number: '3', result: '', loading: false, error: null }),
}));