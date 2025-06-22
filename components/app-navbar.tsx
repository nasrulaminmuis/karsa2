"use client"
import { Search, Bell, Menu, User, LogOut } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const userData = {
  name: "Kevin Aljabar",
  nim: "22.12.9999",
}

// Contoh data notifikasi
const notificationData = [
  {
    id: 1,
    title: "Pembayaran Berhasil",
    description: "Pembayaran UKT semester ini telah berhasil.",
    time: "5 menit yang lalu",
  },
  {
    id: 2,
    title: "Jadwal Baru",
    description: "Jadwal mata kuliah Kecerdasan Buatan telah diperbarui.",
    time: "1 jam yang lalu",
  },
  {
    id: 3,
    title: "Pengingat Penting",
    description: "Jangan lupa untuk mengisi KRS Anda sebelum batas waktu.",
    time: "3 jam yang lalu",
  },
]

export function AppNavbar() {
  const toggleMobileSidebar = () => {
    const sidebar = document.getElementById("mobile-sidebar")
    if (sidebar) {
      sidebar.classList.toggle("hidden")
    }
  }

  const handleProfileClick = () => {
    window.location.href = "/profil"
  }

  const handlePhotoClick = () => {
    window.location.href = "/foto-profil"
  }

  const handleLogout = () => {
    // Handle logout logic
    console.log("Logging out...")
    // Redirect to login page
    window.location.href = "/login"
  }

  return (
    <header className="fixed top-0 left-0 right-0 lg:left-72 h-16 bg-background dark:bg-gray-900 z-30 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between max-w-7xl">
        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMobileSidebar}>
          <Menu className="w-5 h-5 text-[#7C20A1]" />
        </Button>

        {/* Page Title */}
        <h1 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>

        {/* Search Bar - Responsive width */}
        <div className="flex-1 max-w-sm mx-4 lg:mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#7C20A1]" />
            <Input
              type="search"
              placeholder="Cari menu..."
              className="pl-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-full focus:ring-[#7C20A1] focus:border-[#7C20A1] shadow-sm w-full"
            />
          </div>
        </div>

        {/* Right side - Responsive */}
        <div className="flex items-center gap-2 lg:gap-4 flex-shrink-0 px-0">
          {/* Notification Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                {/* Indikator notifikasi baru */}
                {notificationData.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 sm:w-96">
              <DropdownMenuLabel className="flex justify-between items-center">
                <span>Notifikasi</span>
                <span className="text-xs font-normal text-gray-500">{notificationData.length} baru</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-y-auto">
                {notificationData.length > 0 ? (
                  notificationData.map((notif) => (
                    <DropdownMenuItem key={notif.id} className="flex flex-col items-start gap-1 p-3 cursor-pointer">
                      <p className="font-semibold">{notif.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{notif.description}</p>
                      <p className="text-xs text-blue-500 mt-1">{notif.time}</p>
                    </DropdownMenuItem>
                  ))
                ) : (
                  <div className="text-center text-gray-500 p-4">Tidak ada notifikasi baru.</div>
                )}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center cursor-pointer text-[#7C20A1] focus:text-[#5d177a]">
                <span>Lihat semua notifikasi</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="bg-[#7C20A1] rounded-full px-2 lg:px-4 py-3 flex items-center gap-2 lg:gap-3 shadow-md hover:bg-[#701a75]"
              >
                <div
                  className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center cursor-pointer mx-0 gap-x-0 mt-0"
                  onClick={(e) => {
                    e.stopPropagation() // Mencegah dropdown menu terbuka saat foto diklik
                    handlePhotoClick()
                  }}
                >
                  <span className="text-[#7C20A1] font-semibold text-xs lg:text-sm">
                    {userData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="text-white hidden sm:block">
                  <div className="font-medium text-sm">{userData.name}</div>
                  <div className="text-purple-200 text-xs">{userData.nim}</div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={handleProfileClick} className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profil Lengkap</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handlePhotoClick} className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Foto Profil</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600 focus:text-red-700">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}