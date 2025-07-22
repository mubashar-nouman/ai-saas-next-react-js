import { create } from 'zustand';
import axios from 'axios';

const API = process.env.NEXT_PUBLIC_API_URL;

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  register: (name: string, email: string, password: string) => Promise<User | null>;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => Promise<void>;
  getCurrentUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,

  register: async (name, email, password) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(
        `${API}/api/auth/register`,
        { name, email, password },
        { withCredentials: true }
      );
      const userData = res.data;
      set({ user: userData, loading: false });
      return userData;
    } catch (err: any) {
      set({
        error: err?.response?.data?.message || 'Registration failed',
        loading: false,
      });
      return null;
    }
  },

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(
        `${API}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      const userData = res.data;
      set({ user: userData, loading: false });
      return userData;
    } catch (err: any) {
      set({
        error: err?.response?.data?.message || 'Login failed',
        loading: false,
      });
      return null;
    }
  },

  logout: async () => {
    try {
      await axios.post(`${API}/api/auth/logout`, {}, { withCredentials: true });
      set({ user: null });
    } catch (err) {
      console.error('Logout error:', err);
    }
  },

  getCurrentUser: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`${API}/api/auth/me`, { withCredentials: true });
      set({ user: res.data, loading: false });
    } catch (err: any) {
      set({
        user: null,
        error: err?.response?.data?.message || 'Failed to get current user',
        loading: false,
      });
    }
  }

}));
