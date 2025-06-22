"use client"
import { AppSidebar } from "@/components/app-sidebar"
import { AppNavbar } from "@/components/app-navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, GraduationCap, Phone, Mail, MapPin } from "lucide-react"

export default function WisudaPage() {
  const handleContactCommittee = () => {
    // In a real application, this would open contact information or redirect
    alert("Menghubungi panitia wisuda...")
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
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Pendaftaran Wisuda</h1>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Main Notice */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertCircle className="w-10 h-10 text-orange-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Belum Dapat Mendaftar Wisuda</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                    Anda belum boleh mendaftar wisuda karena belum memenuhi syarat mendaftar wisuda silakan hubungi
                    panitia wisuda untuk info lebih lanjut.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Informasi Kontak Panitia Wisuda
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#7C20A1] rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Telepon</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      (0274) 884201-207
                      <br />
                      Ext. 1234
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#7C20A1] rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      wisuda@amikom.ac.id
                      <br />
                      akademik@amikom.ac.id
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#7C20A1] rounded-lg flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Lokasi</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Gedung Rektorat Lt. 2
                      <br />
                      Bagian Akademik
                    </p>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <Button
                    onClick={handleContactCommittee}
                    className="bg-[#7C20A1] hover:bg-[#701a75] text-white px-8 py-3 rounded-lg font-medium"
                  >
                    Hubungi Panitia Wisuda
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Graduation Requirements */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Persyaratan Wisuda</h3>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-[#7C20A1] flex-shrink-0 mt-0.5" />
                    <span>Telah menyelesaikan semua mata kuliah dengan IPK minimal 2.00</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-[#7C20A1] flex-shrink-0 mt-0.5" />
                    <span>Telah lulus yudisium dan dinyatakan layak wisuda</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-[#7C20A1] flex-shrink-0 mt-0.5" />
                    <span>Tidak memiliki tunggakan pembayaran</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-[#7C20A1] flex-shrink-0 mt-0.5" />
                    <span>Telah mengembalikan semua pinjaman perpustakaan</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-[#7C20A1] flex-shrink-0 mt-0.5" />
                    <span>Melengkapi berkas administrasi wisuda</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Dates */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Jadwal Wisuda</h3>
                <div className="bg-[#f5f3ff] dark:bg-[#7C20A1]/10 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">Periode Wisuda:</span>
                      <p className="text-gray-600 dark:text-gray-400">Mei 2025</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">Batas Pendaftaran:</span>
                      <p className="text-gray-600 dark:text-gray-400">31 Maret 2025</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">Gladi Bersih:</span>
                      <p className="text-gray-600 dark:text-gray-400">15 Mei 2025</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">Hari Wisuda:</span>
                      <p className="text-gray-600 dark:text-gray-400">17 Mei 2025</p>
                    </div>
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
