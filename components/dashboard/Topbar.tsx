"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/stores/authStore";
import { useEffect } from "react";

export default function Topbar() {
    const { user, getCurrentUser, loading } = useAuthStore();

    useEffect(() => {
        getCurrentUser();
      }, []);

      
  return (
    <header className="bg-white border-b border-gray-100 px-6 py-[14px] flex justify-between items-center">
      
      {/* Left Section */}
      <div>
        <p className="text-xl font-medium text-gray-900">Dashboard</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-3">
        
        {/* User Info */}
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="Profile" />
            <AvatarFallback className="text-sm font-medium bg-gray-100 text-gray-700">JD</AvatarFallback>
          </Avatar>

          <div className="hidden sm:block text-left">
            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
        </div>
      </div>
    </header>
  );
}