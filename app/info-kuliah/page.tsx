"use client"
import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { AppNavbar } from "@/components/app-navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, BookOpen } from "lucide-react"

// Sample data for course information
const courseInfoData = [
  {
    id: 1,
    tanggal: "15/01/2025",
    infoKuliah: "Perubahan jadwal kuliah Algoritma dan Struktur Data - Kelas A pindah ke ruang 6.2.8",
    dosen: "Dr. Ahmad Susanto, M.Kom",
    mataKuliah: "Algoritma dan Struktur Data",
    waktu: "13:20-15:00",
    status: "Penting",
  },
  {
    id: 2,
    tanggal: "14/01/2025",
    infoKuliah: "Tugas Proyek Akhir Pemrograman Web deadline diperpanjang hingga 20 Januari 2025",
    dosen: "Marwan Noor Fauzy, M.Kom",
    mataKuliah: "Pemrograman Web",
    waktu: "15:30-17:10",
    status: "Deadline",
  },
  {
    id: 3,
    tanggal: "13/01/2025",
    infoKuliah: "Materi kuliah Basis Data minggu ini: Normalisasi Database dan ERD",
    dosen: "Prof. Dr. Siti Nurjanah, M.T",
    mataKuliah: "Basis Data",
    waktu: "08:00-09:40",
    status: "Info",
  },
  {
    id: 4,
    tanggal: "12/01/2025",
    infoKuliah: "Ujian Tengah Semester Jaringan Komputer akan dilaksanakan pada 25 Januari 2025",
    dosen: "Ir. Bambang Wijaya, M.Sc",
    mataKuliah: "Jaringan Komputer",
    waktu: "10:00-11:40",
    status: "Ujian",
  },
  {
    id: 5,
    tanggal: "11/01/2025",
    infoKuliah: "Praktikum Sistem Operasi minggu depan akan menggunakan Virtual Machine Ubuntu 22.04",
    dosen: "Drs. Hendra Kurniawan, M.Kom",
    mataKuliah: "Sistem Operasi",
    waktu: "13:20-15:00",
    status: "Praktikum",
  },
  {
    id: 6,
    tanggal: "10/01/2025",
    infoKuliah: "Presentasi Tugas Kelompok Rekayasa Perangkat Lunak dijadwalkan ulang ke 18 Januari 2025",
    dosen: "Dr. Rina Fitriana, S.T, M.T",
    mataKuliah: "Rekayasa Perangkat Lunak",
    waktu: "15:30-17:10",
    status: "Reschedule",
  },
]

export default function InfoKuliahPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const totalPages = Math.ceil(courseInfoData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = courseInfoData.slice(startIndex, endIndex)

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      Penting: { bg: "bg-red-100", text: "text-red-800", hover: "hover:bg-red-100" },
      Deadline: { bg: "bg-orange-100", text: "text-orange-800", hover: "hover:bg-orange-100" },
      Info: { bg: "bg-blue-100", text: "text-blue-800", hover: "hover:bg-blue-100" },
      Ujian: { bg: "bg-purple-100", text: "text-purple-800", hover: "hover:bg-purple-100" },
      Praktikum: { bg: "bg-green-100", text: "text-green-800", hover: "hover:bg-green-100" },
      Reschedule: { bg: "bg-yellow-100", text: "text-yellow-800", hover: "hover:bg-yellow-100" },
    }

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.Info

    return <Badge className={`${config.bg} ${config.text} ${config.hover}`}>{status}</Badge>
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
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
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Info Perkuliahan</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Informasi terkini mengenai perkuliahan dari dosen pengampu
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Info Cards - Mobile View */}
            <div className="block lg:hidden space-y-4">
              {currentData.map((item) => (
                <Card key={item.id} className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {item.tanggal}
                      </div>
                      {getStatusBadge(item.status)}
                    </div>

                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
                      {item.infoKuliah}
                    </h3>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <User className="w-4 h-4" />
                        {item.dosen}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <BookOpen className="w-4 h-4" />
                        {item.mataKuliah}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        {item.waktu}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Table - Desktop View */}
            <Card className="hidden lg:block bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardContent className="p-0">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Info Perkuliahan dari Dosen</h2>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#7C20A1] hover:bg-[#7C20A1]">
                        <TableHead className="text-white font-semibold text-center py-4 min-w-[80px]">No</TableHead>
                        <TableHead className="text-white font-semibold text-center py-4 min-w-[120px]">
                          Tanggal
                        </TableHead>
                        <TableHead className="text-white font-semibold text-center py-4 min-w-[400px]">
                          Info Kuliah
                        </TableHead>
                        <TableHead className="text-white font-semibold text-center py-4 min-w-[200px]">Dosen</TableHead>
                        <TableHead className="text-white font-semibold text-center py-4 min-w-[180px]">
                          Mata Kuliah
                        </TableHead>
                        <TableHead className="text-white font-semibold text-center py-4 min-w-[120px]">Waktu</TableHead>
                        <TableHead className="text-white font-semibold text-center py-4 min-w-[100px]">
                          Status
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentData.map((item, index) => (
                        <TableRow
                          key={item.id}
                          className={`${
                            index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700"
                          } hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors`}
                        >
                          <TableCell className="text-center py-4 font-medium">{startIndex + index + 1}</TableCell>
                          <TableCell className="text-center py-4">{item.tanggal}</TableCell>
                          <TableCell className="py-4 px-4">
                            <div className="max-w-md">
                              <p className="text-sm leading-relaxed">{item.infoKuliah}</p>
                            </div>
                          </TableCell>
                          <TableCell className="text-center py-4">
                            <div className="max-w-[180px] mx-auto">
                              <p className="text-sm truncate" title={item.dosen}>
                                {item.dosen}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell className="text-center py-4">
                            <div className="max-w-[160px] mx-auto">
                              <p className="text-sm truncate" title={item.mataKuliah}>
                                {item.mataKuliah}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell className="text-center py-4 text-sm">{item.waktu}</TableCell>
                          <TableCell className="text-center py-4">{getStatusBadge(item.status)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                          />
                        </PaginationItem>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <PaginationItem key={page}>
                            <PaginationLink
                              onClick={() => handlePageChange(page)}
                              isActive={currentPage === page}
                              className="cursor-pointer"
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        ))}

                        <PaginationItem>
                          <PaginationNext
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}

                {/* No Data Message */}
                {currentData.length === 0 && (
                  <div className="text-center py-12">
                    <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400 text-lg">Belum ada informasi perkuliahan</p>
                    <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
                      Informasi dari dosen akan muncul di sini
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Mobile Pagination */}
            {totalPages > 1 && (
              <div className="block lg:hidden">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => handlePageChange(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
