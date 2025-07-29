import { create } from 'zustand';
import axios from 'axios';

const API = process.env.NEXT_PUBLIC_API_URL;

interface CaptionsState {
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

export const useInstagramCaptionsStore = create<CaptionsState>((set, get) => ({
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

    reset: () => set({ topic: '', number: 3, result: '', error: null }),
}));
