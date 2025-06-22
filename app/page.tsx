import { AppSidebar } from "@/components/app-sidebar"
import { AppNavbar } from "@/components/app-navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 overflow-x-hidden">
      <AppSidebar />
      <AppNavbar />

      {/* Main Content - Responsive container */}
      <main className="pt-20 pb-8 lg:ml-72 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Dashboard Cards - Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Statistik Card */}
            <Card className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl border-0 min-w-0">
              <CardHeader className="pb-2">
                <CardTitle className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                  Statistik
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">4.00</div>
                  <div className="grid grid-cols-6 gap-1 sm:gap-2 h-16 sm:h-20 items-end w-auto">
                    {[100, 100, 100, 100, 100, 100].map((height, i) => (
                      <div
                        key={i}
                        className="bg-violet-600 rounded-sm w-3 sm:w-4"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="grid grid-cols-6 gap-1 sm:gap-2 mt-1 w-full">
                    {["SMT 1", "SMT 2", "SMT 3", "SMT 4", "SMT 5", "SMT 6"].map((label, i) => (
                      <div key={i} className="text-xs text-center text-slate-500">
                        {label}
                      </div>
                    ))}
                  </div>
                  
                </div>
              </CardContent>
            </Card>

            {/* IPK Card */}
            <Card className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl border-0 min-w-0">
              <CardHeader className="pb-2">
                <CardTitle className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">IPK</CardTitle>
                <CardDescription className="text-violet-600 text-xs sm:text-sm">Lihat detail</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgb(124 58 237)"
                        strokeWidth="3"
                        strokeDasharray="100, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-violet-600">4.00</div>
                        <div className="text-xs text-slate-500">Prestasi</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Status Mahasiswa Card */}
            <Card className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl border-0 min-w-0">
              <CardHeader className="pb-2">
                <CardTitle className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                  Status Mahasiswa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center h-20 sm:h-24">
                  <CheckCircle className="w-10 h-10 sm:w-14 sm:h-14 text-emerald-500 mb-2" />
                  <span className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">Aktif</span>
                </div>
              </CardContent>
            </Card>

            {/* Calendar Card */}
            <Card className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl border-0 min-w-0">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <span className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">MEI 2025</span>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" className="w-6 h-6 p-0">
                      <ChevronLeft className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="w-6 h-6 p-0">
                      <ChevronRight className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 text-xs">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                    <div key={day} className="text-center font-medium text-slate-500 p-1">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 31 }, (_, i) => (
                    <div
                      key={i}
                      className="text-center p-1 hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded text-xs cursor-pointer"
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section - Responsive 3 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Jadwal Kuliah */}
            <Card className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl border-0 min-w-0">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                  Jadwal Kuliah
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 bg-violet-50 dark:bg-violet-900/20 rounded-lg">
                  <div className="font-medium text-sm sm:text-base text-slate-900 dark:text-white truncate-responsive">
                    Tugas Proyek UI/UX
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 truncate-responsive">
                    Marwan Noor Fauzy, M.Kom
                  </div>
                  <div className="text-xs sm:text-sm text-violet-600 font-medium">13:20-15:00 • 05.04.08</div>
                </div>
                <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="font-medium text-sm sm:text-base text-slate-900 dark:text-white truncate-responsive">
                    Interaksi Manusia dan Komputer
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 truncate-responsive">
                    Tri Susanto, M.Kom
                  </div>
                  <div className="text-xs sm:text-sm text-violet-600 font-medium">15:30-17:10</div>
                </div>
              </CardContent>
            </Card>

            {/* Presensi */}
            <Card className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl border-0 min-w-0">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                  Presensi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div>
                  <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                    Input Kode Presensi
                  </label>
                  <Input
                    placeholder="Masukan kode presensi"
                    className="mt-2 focus:ring-violet-600 focus:border-violet-600 text-sm"
                  />
                </div>
                <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white shadow-md py-2 sm:py-3 text-sm sm:text-base">
                  Submit
                </Button>
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3">Scan QR Code</div>
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-slate-200 dark:bg-slate-700 rounded-lg mx-auto flex items-center justify-center">
                    <Image src="/images/qr-code.png" alt="QR Code" width={112} height={112} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Info Kampus */}
            <Card className="bg-white dark:bg-slate-800 shadow-xl rounded-2xl border-0 min-w-0">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                  Info Kampus
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 bg-violet-50 dark:bg-violet-900/20 rounded-lg">
                  <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">
                    Permohonan Open Recruitment SS UPT ME
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Periode Juni 2025-September 2025</div>
                  <div className="text-xs text-violet-600 font-medium mt-1">2 Mar 2025</div>
                </div>
                <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">
                    Recruitment SS DIPK
                  </div>
                  <div className="text-xs text-violet-600 font-medium mt-1">28 Februari 2025</div>
                </div>
                <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">
                    Recruitment Student Staff Teknisi UPT Lab
                  </div>
                  <div className="text-xs text-violet-600 font-medium mt-1">11 Februari 2025</div>
                </div>
                <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">
                    Pembayaran Registrasi Semester Genap 2024/2025
                  </div>
                  <div className="text-xs text-violet-600 font-medium mt-1">11 Februari 2025</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
