// components/dashboard/Sidebar.tsx
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li><Link href="/dashboard">🏠 Home</Link></li>
        <li><Link href="/dashboard/settings">⚙️ Settings</Link></li>
        {/* Add more links */}
      </ul>
    </aside>
  );
}
