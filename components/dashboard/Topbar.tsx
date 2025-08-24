"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/stores/authStore";

const Topbar = () => {
  const { user, getCurrentUser } = useAuthStore();

  useEffect(() => {
    getCurrentUser()
      .catch(console.error);
  }, [getCurrentUser]);

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-white/10">
        <div className="flex flex-col">
          <p className="text-base font-semibold tracking-tight text-gray-800 dark:text-gray-100">Dashboard</p>
        </div>
        <div className="flex flex-row gap-3">
          <img src={"https://i.pravatar.cc/150?img=3"} alt="avatar" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{user?.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar