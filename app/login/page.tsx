"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"

export default function LoginPage() {
  const [nim, setNim] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [recaptchaChecked, setRecaptchaChecked] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!nim || !password) {
      alert("Silakan lengkapi NIM dan Password")
      return
    }

    if (!recaptchaChecked) {
      alert("Silakan centang reCAPTCHA")
      return
    }

    setIsLoading(true)

    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to dashboard after successful login
    window.location.href = "/"
  }

  const handleGoogleLogin = () => {
    // Handle Google login
    alert("Login dengan Google Account")
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Building Image - Full Coverage */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-purple-600"></div>

        {/* Building Image - Full Coverage */}
        <div className="absolute inset-0">
          <Image
            src="/images/amikom-building.png"
            alt="AMIKOM University Building"
            fill
            className="object-cover w-full h-full"
            priority
            sizes="50vw"
          />
        </div>

        {/* Optional Overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen lg:min-h-0">
        <div className="w-full max-w-md space-y-6 sm:space-y-8">
          {/* Logo and Header */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-20">
                <Image
                  src="/images/amikom-logo.png"
                  alt="AMIKOM University Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
              Silahkan Login dengan NPM dan Password AMIKOM anda
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* NIM Field */}
            <div>
              <Label htmlFor="nim" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                NIM
              </Label>
              <Input
                id="nim"
                type="text"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                placeholder="NIM Amikom"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {/* reCAPTCHA */}
            <div className="flex items-center space-x-3">
              <Checkbox
                id="recaptcha"
                checked={recaptchaChecked}
                onCheckedChange={(checked) => setRecaptchaChecked(checked as boolean)}
                className="w-5 h-5"
              />
              <Label htmlFor="recaptcha" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                Saya bukan robot
              </Label>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#7C20A1] hover:bg-[#701a75] text-white py-3 px-4 rounded-lg font-medium text-base shadow-lg transition-colors"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Logging in...
                </div>
              ) : (
                "Login"
              )}
            </Button>

            {/* Google Login Button */}
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleLogin}
              className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 py-3 px-4 rounded-lg font-medium text-base transition-colors"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Amikom Google Account
              </div>
            </Button>
          </form>

          {/* Footer Links */}
          <div className="text-center space-y-2">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <a href="#" className=" transition-colors">
                Lupa Password?
              </a>
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500">© 2025 Universitas AMIKOM Yogyakarta</div>
          </div>
        </div>
      </div>
    </div>
  )
}
