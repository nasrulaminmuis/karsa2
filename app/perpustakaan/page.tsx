"use client"
import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { AppNavbar } from "@/components/app-navbar"
import { Card, CardContent } from "@/components/ui/card"
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

// Sample data for library loans
const libraryData = {
  pinjamanAktif: [
    { id: 1, judul: "stoik", pinjam: "01/01/2001", kembali: "01/09/2001", denda: 0 },
    { id: 2, judul: "algo", pinjam: "01/01/2001", kembali: "01/09/2001", denda: 2000 },
    { id: 3, judul: "plural", pinjam: "01/01/2001", kembali: "01/09/2001", denda: 0 },
    { id: 4, judul: "Pemrograman Web", pinjam: "02/01/2001", kembali: "02/09/2001", denda: 1000 },
    { id: 5, judul: "Basis Data", pinjam: "03/01/2001", kembali: "03/09/2001", denda: 0 },
    { id: 6, judul: "Algoritma Struktur Data", pinjam: "04/01/2001", kembali: "04/09/2001", denda: 500 },
    { id: 7, judul: "Jaringan Komputer", pinjam: "05/01/2001", kembali: "05/09/2001", denda: 0 },
  ],
  riwayat: [
    { id: 1, judul: "stoik", pinjam: "01/01/2001", kembali: "01/09/2001", denda: 0 },
    { id: 2, judul: "algo", pinjam: "01/01/2001", kembali: "01/09/2001", denda: 2000 },
    { id: 3, judul: "plural", pinjam: "01/01/2001", kembali: "01/09/2001", denda: 0 },
    { id: 4, judul: "Matematika Diskrit", pinjam: "15/12/2000", kembali: "15/01/2001", denda: 3000 },
    { id: 5, judul: "Sistem Operasi", pinjam: "20/11/2000", kembali: "20/12/2000", denda: 0 },
    { id: 6, judul: "Rekayasa Perangkat Lunak", pinjam: "10/10/2000", kembali: "10/11/2000", denda: 1500 },
    { id: 7, judul: "Kecerdasan Buatan", pinjam: "05/09/2000", kembali: "05/10/2000", denda: 0 },
    { id: 8, judul: "Grafika Komputer", pinjam: "01/08/2000", kembali: "01/09/2000", denda: 2500 },
  ],
}

const tabs = [
  { id: "pinjamanAktif", label: "Pinjaman Aktif" },
  { id: "riwayat", label: "Riwayat" },
]

export default function PerpustakaanPage() {
  const [activeTab, setActiveTab] = useState("pinjamanAktif")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const getCurrentData = () => {
    return libraryData[activeTab as keyof typeof libraryData] || []
  }

  const totalPages = Math.ceil(getCurrentData().length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = getCurrentData().slice(startIndex, endIndex)

  const formatCurrency = (amount: number) => {
    if (amount === 0) return "0"
    return amount.toLocaleString("id-ID")
  }

  const getDendaBadge = (denda: number) => {
    if (denda === 0) {
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Lunas</Badge>
    } else {
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Rp {formatCurrency(denda)}</Badge>
    }
  }

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setCurrentPage(1) // Reset to first page when changing tabs
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
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Perpustakaan</h1>
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
            {/* Table Card */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardContent className="p-0">
                {/* Table Container with horizontal scroll */}
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#7C20A1] hover:bg-[#7C20A1]">
                        <TableHead className="text-white font-semibold text-center py-4 min-w-[200px]">JUDUL</TableHead>
                        <TableHead className="text-white font-semibold text-center py-4 min-w-[120px]">
                          PINJAM
                        </TableHead>
                        <TableHead className="text-white font-semibold text-center py-4 min-w-[120px]">
                          KEMBALI
                        </TableHead>
                        <TableHead className="text-white font-semibold text-center py-4 min-w-[120px]">DENDA</TableHead>
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
                          <TableCell className="text-center py-4 font-medium">
                            <div className="truncate max-w-[180px] mx-auto" title={item.judul}>
                              {item.judul}
                            </div>
                          </TableCell>
                          <TableCell className="text-center py-4">{item.pinjam}</TableCell>
                          <TableCell className="text-center py-4">{item.kembali}</TableCell>
                          <TableCell className="text-center py-4">
                            {item.denda === 0 ? (
                              <span className="text-gray-600 dark:text-gray-400">0</span>
                            ) : (
                              <span className="font-semibold text-red-600 dark:text-red-400">
                                {formatCurrency(item.denda)}
                              </span>
                            )}
                          </TableCell>
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

                {/* Summary Information */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Menampilkan {startIndex + 1}-{Math.min(endIndex, getCurrentData().length)} dari{" "}
                      {getCurrentData().length} data
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm">
                      <div className="text-gray-600 dark:text-gray-400">
                        Total Buku: <span className="font-semibold text-[#7C20A1]">{getCurrentData().length}</span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        Total Denda:{" "}
                        <span className="font-semibold text-red-600">
                          Rp {formatCurrency(getCurrentData().reduce((sum, item) => sum + item.denda, 0))}
                        </span>
                      </div>
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
