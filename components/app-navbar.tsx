"use client"
import { Search, Bell, Menu, User, LogOut } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const userData = {
  name: "Kevin Aljabar",
  nim: "22.12.9999",
}

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
    <header className="fixed top-0 left-0 right-0 lg:left-72 h-16 bg-slate-50 dark:bg-slate-900 z-30 border-b border-white/20 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between max-w-7xl">
        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMobileSidebar}>
          <Menu className="w-5 h-5 text-violet-600" />
        </Button>

        {/* Page Title */}
        <h1 className="text-lg lg:text-xl font-semibold text-slate-900 dark:text-white">Dashboard</h1>

        {/* Search Bar - Responsive width */}
        <div className="flex-1 max-w-sm mx-4 lg:mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-violet-600" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-10 bg-white dark:bg-slate-800 border-white dark:border-slate-700 rounded-full focus:ring-violet-600 focus:border-violet-600 shadow-sm w-full"
            />
          </div>
        </div>

        {/* Right side - Responsive */}
        <div className="flex items-center gap-2 lg:gap-4 flex-shrink-0 px-0">
          {/* Notification */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </Button>

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="bg-violet-600 rounded-full px-2 lg:px-4 py-2 flex items-center gap-2 lg:gap-3 shadow-md hover:bg-violet-700"
              >
                <div
                  className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center cursor-pointer mx-0 gap-x-0 mt-0"
                  onClick={handlePhotoClick}
                >
                  <span className="text-violet-600 font-semibold text-xs lg:text-sm">
                    {userData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="text-white hidden sm:block">
                  <div className="font-medium text-sm">{userData.name}</div>
                  <div className="text-violet-200 text-xs">{userData.nim}</div>
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
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
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
