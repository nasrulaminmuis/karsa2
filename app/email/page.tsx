"use client"
import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { AppNavbar } from "@/components/app-navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, Mail, Key, User } from "lucide-react"

const emailRules = [
  "Email student ini sebagai fasilitas yang diberikan oleh Universitas AMIKOM Yogyakarta, untuk menunjang kegiatan perkuliahan dan kegiatan yang mendukung visi dan misi Universitas.",
  "Email ini tidak digunakan dalam hal melanggar hukum.",
  "Email tidak diperbolehkan untuk tujuan komersil tanpa persetujuan Universitas.",
  "Email student tidak diperbolehkan untuk digunakan dalam rangka mencari keuntungan finansial pribadi.",
  "Email ini tidak digunakan untuk hal-hal yang melanggar kebijakan Universitas, termasuk didalamnya menyebarkan konten yang mengandung unsur SARA, melanggar asusila dan pesan yang berbau SARA.",
  "Nama akun pengguna harus mencerminkan identitas pengguna.",
  "Universitas AMIKOM Yogyakarta tidak bertanggungjawab terhadap kerusakan data yang disebabkan oleh kelalaian pengguna ataupun penerimaan email diluar akun Amikom yang melanggar peraturan google.",
  "Apabila user melanggar ketentuan dari Universitas dan Google maka hak aksesnya dapat dicabut.",
]

const studentData = {
  nim: "22.12.9999",
  email: "kevinaljabar@students.amikom.ac.id",
  password: "kevin123",
}

export default function EmailPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const handleEmailAccess = () => {
    // In a real application, this would redirect to the email portal
    window.open("https://mail.google.com", "_blank")
  }

  return (
    <div className="min-h-screen bg-[#f5f3ff] dark:bg-gray-900 overflow-x-hidden">
      <AppSidebar />
      <AppNavbar />

      {/* Main Content */}
      <main className="pt-20 pb-8 lg:ml-72 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">EMail Mahasiswa</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Informasi dan akses email mahasiswa Universitas AMIKOM Yogyakarta
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Email Rules Card */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-[#7C20A1] text-white p-6 rounded-t-2xl">
                  <h2 className="text-xl font-bold">Ketentuan E-Mail Mahasiswa</h2>
                </div>

                {/* Rules Content */}
                <div className="p-6 lg:p-8">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">
                    Peraturan pembuatan dan penggunaan email @students.amikom.ac.id :
                  </p>

                  <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                    {emailRules.map((rule, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="font-bold text-[#7C20A1] flex-shrink-0">{index + 1}.</span>
                        <span className="leading-relaxed">{rule}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Email Access Button */}
            <div className="flex justify-center">
              <Button
                onClick={handleEmailAccess}
                className="bg-[#7C20A1] hover:bg-[#701a75] text-white px-8 py-3 rounded-lg font-medium text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                E-Mail Mahasiswa
              </Button>
            </div>

            {/* Student Email Information */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Informasi Akun Email</h3>

                <div className="space-y-6">
                  {/* NIM */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 min-w-0 sm:min-w-[200px]">
                      <User className="w-5 h-5 text-[#7C20A1] flex-shrink-0" />
                      <span className="font-medium text-gray-700 dark:text-gray-300">Nomor Induk Mahasiswa</span>
                    </div>
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-gray-900 dark:text-white font-mono bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg flex-1">
                        {studentData.nim}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(studentData.nim, "nim")}
                        className="flex-shrink-0"
                      >
                        {copiedField === "nim" ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 min-w-0 sm:min-w-[200px]">
                      <Mail className="w-5 h-5 text-[#7C20A1] flex-shrink-0" />
                      <span className="font-medium text-gray-700 dark:text-gray-300">E-Mail</span>
                    </div>
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-gray-900 dark:text-white font-mono bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg flex-1 truncate">
                        {studentData.email}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(studentData.email, "email")}
                        className="flex-shrink-0"
                      >
                        {copiedField === "email" ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 min-w-0 sm:min-w-[200px]">
                      <Key className="w-5 h-5 text-[#7C20A1] flex-shrink-0" />
                      <span className="font-medium text-gray-700 dark:text-gray-300">Password E-Mail</span>
                    </div>
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-gray-900 dark:text-white font-mono bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg flex-1">
                        {studentData.password}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(studentData.password, "password")}
                        className="flex-shrink-0"
                      >
                        {copiedField === "password" ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Status Akun:</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Aktif</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
