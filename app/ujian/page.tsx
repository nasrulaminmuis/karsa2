"use client"
import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { AppNavbar } from "@/components/app-navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Download, Upload, Edit, Trash2, X } from "lucide-react"

// Sample data for different exam types
const examData = {
  susulan: [
    { id: 1, mataKuliah: "Statistik", soal: "download", tanggalUjian: "01/01/2001", jawaban: "actions" },
    { id: 2, mataKuliah: "Pemrograman Web", soal: "download", tanggalUjian: "01/01/2001", jawaban: "actions" },
    { id: 3, mataKuliah: "Basis Data", soal: "download", tanggalUjian: "02/01/2001", jawaban: "actions" },
    { id: 4, mataKuliah: "Algoritma", soal: "download", tanggalUjian: "03/01/2001", jawaban: "actions" },
    { id: 5, mataKuliah: "Jaringan Komputer", soal: "download", tanggalUjian: "04/01/2001", jawaban: "actions" },
  ],
  remidi: [
    { id: 1, mataKuliah: "Statistik", soal: "download", tanggalUjian: "01/01/2001", jawaban: "actions" },
    { id: 2, mataKuliah: "ppw", soal: "download", tanggalUjian: "01/01/2001", jawaban: "actions" },
    { id: 3, mataKuliah: "pwl", soal: "download", tanggalUjian: "01/01/2001", jawaban: "actions" },
  ],
  uts: [
    { id: 1, mataKuliah: "Statistik", soal: "download", tanggalUjian: "01/01/2001", jawaban: "actions" },
    { id: 2, mataKuliah: "ppw", soal: "download", tanggalUjian: "01/01/2001", jawaban: "actions" },
    { id: 3, mataKuliah: "pwl", soal: "download", tanggalUjian: "01/01/2001", jawaban: "actions" },
    { id: 4, mataKuliah: "Matematika Diskrit", soal: "download", tanggalUjian: "02/01/2001", jawaban: "actions" },
    { id: 5, mataKuliah: "Sistem Operasi", soal: "download", tanggalUjian: "03/01/2001", jawaban: "actions" },
  ],
  uas: [
    { id: 1, mataKuliah: "Statistik", soal: "download", tanggalUjian: "01/01/2001", jawaban: "actions" },
    { id: 2, mataKuliah: "ppw", soal: "download", tanggalUjian: "01/01/2001", jawaban: "actions" },
    { id: 3, mataKuliah: "pwl", soal: "download", tanggalUjian: "01/01/2001", jawaban: "actions" },
    { id: 4, mataKuliah: "Rekayasa Perangkat Lunak", soal: "download", tanggalUjian: "02/01/2001", jawaban: "actions" },
    { id: 5, mataKuliah: "Kecerdasan Buatan", soal: "download", tanggalUjian: "03/01/2001", jawaban: "actions" },
    { id: 6, mataKuliah: "Grafika Komputer", soal: "download", tanggalUjian: "04/01/2001", jawaban: "actions" },
  ],
  pendadaran: [
    { id: 1, ruang: "6.2.7", tanggal: "01/01/2001", nilai: "0", status: "Dibatalkan" },
    { id: 2, ruang: "6.2.7", tanggal: "01/01/2001", nilai: "0", status: "Ditunda" },
    { id: 3, ruang: "6.2.8", tanggal: "01/01/2001", nilai: "88", status: "Selesai" },
    { id: 4, ruang: "6.2.9", tanggal: "02/01/2001", nilai: "85", status: "Selesai" },
    { id: 5, ruang: "6.3.1", tanggal: "03/01/2001", nilai: "90", status: "Selesai" },
  ],
}

const tabs = [
  { id: "susulan", label: "Susulan" },
  { id: "remidi", label: "Remidi" },
  { id: "uts", label: "UTS" },
  { id: "uas", label: "UAS" },
  { id: "pendadaran", label: "Pendadaran" },
]

export default function UjianPage() {
  const [activeTab, setActiveTab] = useState("uas")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3
  const [showSusulanAlert, setShowSusulanAlert] = useState(false)

  const getCurrentData = () => {
    return examData[activeTab as keyof typeof examData] || []
  }

  const totalPages = Math.ceil(getCurrentData().length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = getCurrentData().slice(startIndex, endIndex)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Selesai":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Selesai</Badge>
      case "Ditunda":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Ditunda</Badge>
      case "Dibatalkan":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Dibatalkan</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setCurrentPage(1) // Reset to first page when changing tabs
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleDaftarUjian = () => {
    setShowSusulanAlert(true)
  }

  return (
    <div className="min-h-screen bg-[#f5f3ff] dark:bg-gray-900 overflow-x-hidden">
      {/* Susulan Alert */}
      {showSusulanAlert && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-red-500 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Ujian SUSULAN untuk periode ini belum dibuka</span>
          </div>
          <button
            onClick={() => setShowSusulanAlert(false)}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      <AppSidebar />
      <AppNavbar />

      {/* Main Content */}
      <main className="pt-20 pb-8 lg:ml-72 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Ujian</h1>
          </div>

          {/* Tabs Navigation */}
          <div className="mb-6">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="-mb-px flex space-x-8 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? "border-[#7C20A1] text-[#7C20A1]"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="space-y-6">
            {/* Download Notice for UTS and UAS */}
            {(activeTab === "uts" || activeTab === "uas") && (
              <div className="bg-orange-100 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  Download Soal dan Upload Jawaban Ujian susulan tahun akademik 2024/2025 semester Genap
                </p>
              </div>
            )}

            {/* Daftar Ujian Button for Susulan */}
            {activeTab === "susulan" && (
              <div className="mb-4">
                <Button
                  onClick={handleDaftarUjian}
                  className="bg-[#7C20A1] hover:bg-[#701a75] text-white px-6 py-2 rounded-lg"
                >
                  Daftar Ujian
                </Button>
              </div>
            )}

            {/* Table Card */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardContent className="p-0">
                {/* Table Container with horizontal scroll */}
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#7C20A1] hover:bg-[#7C20A1]">
                        {activeTab === "pendadaran" ? (
                          <>
                            <TableHead className="text-white font-semibold text-center py-4">Ruang</TableHead>
                            <TableHead className="text-white font-semibold text-center py-4">Tanggal</TableHead>
                            <TableHead className="text-white font-semibold text-center py-4">NILAI</TableHead>
                            <TableHead className="text-white font-semibold text-center py-4">Status</TableHead>
                          </>
                        ) : (
                          <>
                            <TableHead className="text-white font-semibold text-center py-4">Mata Kuliah</TableHead>
                            <TableHead className="text-white font-semibold text-center py-4">Soal</TableHead>
                            <TableHead className="text-white font-semibold text-center py-4">Tanggal Ujian</TableHead>
                            <TableHead className="text-white font-semibold text-center py-4">JAWABAN</TableHead>
                          </>
                        )}
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
                          {activeTab === "pendadaran" ? (
                            <>
                              <TableCell className="text-center py-4 font-medium">
                                {"ruang" in item ? item.ruang : ""}
                              </TableCell>
                              <TableCell className="text-center py-4">
                                {"tanggal" in item ? item.tanggal : ""}
                              </TableCell>
                              <TableCell className="text-center py-4 font-semibold">
                                {"nilai" in item ? item.nilai : ""}
                              </TableCell>
                              <TableCell className="text-center py-4">
                                {"status" in item ? getStatusBadge(item.status) : ""}
                              </TableCell>
                            </>
                          ) : (
                            <>
                              <TableCell className="text-center py-4 font-medium">
                                {"mataKuliah" in item ? item.mataKuliah : ""}
                              </TableCell>
                              <TableCell className="text-center py-4">
                                <Button variant="ghost" size="sm" className="text-[#7C20A1] hover:text-[#701a75]">
                                  <Download className="w-4 h-4" />
                                </Button>
                              </TableCell>
                              <TableCell className="text-center py-4">
                                {"tanggalUjian" in item ? item.tanggalUjian : ""}
                              </TableCell>
                              <TableCell className="text-center py-4">
                                <div className="flex justify-center gap-2">
                                  <Button variant="ghost" size="sm" className="text-[#7C20A1] hover:text-[#701a75]">
                                    <Upload className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm" className="text-[#7C20A1] hover:text-[#701a75]">
                                    <Edit className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </>
                          )}
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
                  <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">Tidak ada data untuk ditampilkan</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
