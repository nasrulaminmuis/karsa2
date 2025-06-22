"use client"
import { AppSidebar } from "@/components/app-sidebar"
import { AppNavbar } from "@/components/app-navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, CheckCircle, Download, GraduationCap, Play } from "lucide-react"

const guideItems = [
  {
    id: 1,
    title: "Cari Tahu Info Kuliah dari Dosen Pengampu",
    description: "Panduan mengakses informasi kuliah dari dosen pengampu",
    icon: Monitor,
    videoUrl: "#",
  },
  {
    id: 2,
    title: "Pengambilan KRS",
    description: "Panduan mengakses informasi kuliah dari dosen pengampu",
    icon: CheckCircle,
    videoUrl: "#",
  },
  {
    id: 3,
    title: "Instalasi AmikomOne",
    description: "Tutorial menginstal aplikasi AmikomOne pada perangkat Anda",
    icon: Download,
    videoUrl: "#",
  },
  {
    id: 4,
    title: "Panduan Pilih Kelas",
    description: "Cara memilih kelas dan melihat daftar kelas untuk mata kuliah",
    icon: GraduationCap,
    videoUrl: "#",
  },
]

export default function PanduanPage() {
  const handleWatchVideo = (videoUrl: string, title: string) => {
    // In a real application, this would open a video player or navigate to video
    console.log(`Playing video: ${title}`)
    alert(`Membuka video: ${title}`)
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
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Panduan Aplikasi & Fitur</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Panduan lengkap penggunaan aplikasi dan fitur-fitur yang tersedia
            </p>
          </div>

          {/* Guide Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {guideItems.map((item) => (
              <Card
                key={item.id}
                className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 lg:p-8 text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                      <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-gray-600 dark:text-gray-400" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Watch Video Button */}
                  <Button
                    onClick={() => handleWatchVideo(item.videoUrl, item.title)}
                    className="w-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-lg py-3 px-6 font-medium transition-colors"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Tonton Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12">
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Butuh Bantuan Lebih Lanjut?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Jika Anda memerlukan bantuan tambahan atau memiliki pertanyaan yang tidak terjawab dalam panduan ini,
                  silakan hubungi tim support kami.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#7C20A1] hover:bg-[#701a75] text-white px-6 py-3 rounded-lg">
                    Hubungi Support
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#7C20A1] text-[#7C20A1] hover:bg-[#7C20A1] dark:bg-[#7C20A1] dark:text-white hover:text-white px-6 py-3 rounded-lg"
                  >
                    FAQ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
