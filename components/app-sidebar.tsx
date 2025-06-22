"use client";
import {
  BookOpen,
  Calendar,
  CreditCard,
  FileText,
  GraduationCap,
  Home,
  Library,
  Mail,
  MessageSquare,
  School,
  Trophy,
  Users,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

import { Button } from "@/components/ui/button";

// Data menu berdasarkan screenshot - removed Profil
const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Panduan Aplikasi & Fitur",
    url: "/panduan",
    icon: BookOpen,
  },
  {
    title: "E-Mail",
    url: "/email",
    icon: Mail,
  },
  {
    title: "Info Kuliah",
    url: "/info-kuliah",
    icon: FileText,
  },
  {
    title: "Rencana Studi",
    url: "/rencana-studi",
    icon: Calendar,
  },
  {
    title: "Hasil Studi",
    url: "/hasil-studi",
    icon: Trophy,
  },
  {
    title: "Perkuliahan",
    url: "/perkuliahan",
    icon: School,
  },
  {
    title: "Ujian",
    url: "/ujian",
    icon: FileText,
  },
  {
    title: "Bimbingan",
    url: "https://bit.ly/pengajuanjudulbaru",
    icon: MessageSquare,
  },
  {
    title: "Yudisium",
    url: "/yudisium",
    icon: GraduationCap,
  },
  {
    title: "Wisuda",
    url: "/wisuda",
    icon: Users,
  },
  {
    title: "Perpustakaan",
    url: "/perpustakaan",
    icon: Library,
  },
  {
    title: "Pembayaran",
    url: "/pembayaran",
    icon: CreditCard,
  },
];

import { usePathname } from "next/navigation";

export function AppSidebar() {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();

  const isActive = (url: string) => {
    return pathname === url;
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-4 top-4 bottom-4 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 z-40 max-h-[calc(100vh-2rem)] mx-5">
        {/* Header dengan Logo */}
        <div className="p-4 lg:p-6 border-b border-gray-100 dark:border-gray-700 flex-shrink-0">
          <div className="flex items-center justify-center">
            <div className="relative w-40 h-16">
              <Image
                src="/images/amikom-logo.png"
                alt="AMIKOM University Logo"
                fill
                className="object-contain dark:brightness-125" // COBA NILAI INI
                priority
              />
            </div>
          </div>
        </div>

        {/* Menu Items - Scrollable */}
        <div className="flex-1 overflow-y-auto py-2 lg:py-4 max-h-[calc(100vh-240px)]">
          <nav className="px-3 lg:px-4 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-[#f5f3ff] dark:hover:bg-[#7C20A1]/20 text-gray-700 dark:text-gray-300 hover:text-[#7C20A1] dark:hover:text-[#7C20A1] ${
                  isActive(item.url)
                    ? "bg-[#f5f3ff] dark:bg-[#7C20A1]/20 text-[#7C20A1]"
                    : ""
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="truncate">{item.title}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Footer - Fixed at bottom */}
        <div className="p-3 lg:p-4 border-t border-gray-100 dark:border-gray-700 space-y-2 flex-shrink-0">
          {/* Theme Toggle */}
          <div className="flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 hover:bg-[#f5f3ff] dark:hover:bg-[#7C20A1]/20"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[#7C20A1]" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-[#7C20A1]" />
            </Button>
          </div>

          {/* Logout Button */}
          <Button
            onClick={() => (window.location.href = "/login")}
            className="w-full bg-[#7C20A1] hover:bg-[#701a75] text-white rounded-lg py-2.5 shadow-md"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar - Hidden by default, can be toggled */}
      <div className="lg:hidden fixed inset-0 z-50 hidden" id="mobile-sidebar">
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() =>
            document.getElementById("mobile-sidebar")?.classList.add("hidden")
          }
        ></div>
        <div className="fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-800 shadow-xl">
          {/* Same content as desktop but in mobile format */}
          <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-center">
              <div className="relative w-40 h-16">
                <Image
                  src="/images/amikom-logo.png"
                  alt="AMIKOM University Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-4 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-[#f5f3ff] dark:hover:bg-[#7C20A1]/20 text-gray-700 dark:text-gray-300 hover:text-[#7C20A1] dark:hover:text-[#7C20A1] ${
                    isActive(item.url)
                      ? "bg-[#f5f3ff] dark:bg-[#7C20A1]/20 text-[#7C20A1]"
                      : ""
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="truncate">{item.title}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="p-4 border-t border-gray-100 dark:border-gray-700 space-y-2">
            <div className="flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-8 h-8 hover:bg-[#f5f3ff] dark:hover:bg-[#7C20A1]/20"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[#7C20A1]" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-[#7C20A1]" />
              </Button>
            </div>
            <Button
              onClick={() => (window.location.href = "/login")}
              className="w-full bg-[#7C20A1] hover:bg-[#701a75] text-white rounded-lg py-2.5 shadow-md"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
