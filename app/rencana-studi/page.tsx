"use client"
import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { AppNavbar } from "@/components/app-navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Calendar, Printer, CheckCircle, AlertCircle } from "lucide-react"

// Sample data for KRS schedule
const krsScheduleData = [
  {
    id: 1,
    namaProdi: "D3-Teknik Informatika",
    angkatan: "2022",
    tglMulai: "2025-03-13 00:00",
    tglSelesai: "2025-03-17 18:00",
  },
  {
    id: 2,
    namaProdi: "D3-Manajemen Informatika",
    angkatan: "2022",
    tglMulai: "2025-03-13 00:00",
    tglSelesai: "2025-03-17 18:00",
  },
  {
    id: 3,
    namaProdi: "S1-Sistem Informasi",
    angkatan: "2022",
    tglMulai: "2025-03-13 00:00",
    tglSelesai: "2025-03-17 18:00",
  },
  {
    id: 4,
    namaProdi: "S2-Teknologi Informasi",
    angkatan: "2022",
    tglMulai: "2025-03-13 00:00",
    tglSelesai: "2025-03-17 18:00",
  },
  {
    id: 5,
    namaProdi: "S1-Ilmu Komunikasi",
    angkatan: "2022",
    tglMulai: "2025-03-13 00:00",
    tglSelesai: "2025-03-17 18:00",
  },
  {
    id: 6,
    namaProdi: "S1-Informatika",
    angkatan: "2022",
    tglMulai: "2025-03-13 00:00",
    tglSelesai: "2025-03-17 18:00",
  },
  {
    id: 7,
    namaProdi: "S1-Hubungan Internasional",
    angkatan: "2022",
    tglMulai: "2025-03-13 00:00",
    tglSelesai: "2025-03-17 18:00",
  },
  { id: 8, namaProdi: "S1-Arsitektur", angkatan: "2022", tglMulai: "2025-03-13 00:00", tglSelesai: "2025-03-17 18:00" },
  {
    id: 9,
    namaProdi: "S1-Kewirausahaan",
    angkatan: "2022",
    tglMulai: "2025-03-13 00:00",
    tglSelesai: "2025-03-17 18:00",
  },
  { id: 10, namaProdi: "S1-Akuntansi", angkatan: "2022", tglMulai: "2025-03-13 00:00", tglSelesai: "2025-03-17 18:00" },
]

// Sample data for available courses
const availableCoursesData = [
  { id: 1, mataKuliah: "Metodologi Penelitian", sks: 2, selected: true },
  { id: 2, mataKuliah: "Interaksi Manusia Dan Komputer", sks: 2, selected: true },
  { id: 3, mataKuliah: "Testing Dan Implementasi Sistem", sks: 2, selected: true },
  { id: 4, mataKuliah: "Keamanan Siber", sks: 2, selected: true },
  { id: 5, mataKuliah: "Proyek Inovasi Digital Bisnis", sks: 2, selected: true },
  { id: 6, mataKuliah: "Machine Learning", sks: 2, selected: true },
  { id: 7, mataKuliah: "Pemrograman Mobile", sks: 3, selected: false },
  { id: 8, mataKuliah: "Analisis Big Data", sks: 3, selected: false },
  { id: 9, mataKuliah: "Cloud Computing", sks: 2, selected: false },
  { id: 10, mataKuliah: "Internet of Things", sks: 3, selected: false },
]

// Sample data for selected courses (for print)
const selectedCoursesData = [
  { no: 1, kode: "SI031", key: "6048", mataKuliah: "Metodologi Penelitian", sks: 2 },
  { no: 2, kode: "SI163", key: "6047", mataKuliah: "Machine Learning", sks: 2 },
]

const tabs = [
  { id: "jadwal", label: "Jadwal Pengambilan Krs", icon: Calendar },
  { id: "pengambilan", label: "Pengambilan Krs", icon: CheckCircle },
  { id: "cetak", label: "Cetak Krs", icon: Printer },
]

const studentData = {
  nama: "Kevin Aljabar",
  nim: "22.12.9999",
  jurusan: "Sistem Informasi",
  tahunAkademik: "2024/2025",
  semester: "Genap",
}

export default function RencanaStudiPage() {
  const [activeTab, setActiveTab] = useState("pengambilan")
  const [currentPage, setCurrentPage] = useState(1)
  const [courses, setCourses] = useState(availableCoursesData)
  const itemsPerPage = 5

  const getCurrentData = () => {
    if (activeTab === "jadwal") {
      return krsScheduleData
    }
    return []
  }

  const totalPages = Math.ceil(getCurrentData().length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = getCurrentData().slice(startIndex, endIndex)

  const selectedCourses = courses.filter((course) => course.selected)
  const totalSks = selectedCourses.reduce((sum, course) => sum + course.sks, 0)

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleCourseSelection = (courseId: number, checked: boolean) => {
    setCourses((prev) => prev.map((course) => (course.id === courseId ? { ...course, selected: checked } : course)))
  }

  const handlePrintKRS = () => {
    window.print()
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
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {activeTab === "jadwal"
                ? "Jadwal Pengambilan Krs"
                : activeTab === "pengambilan"
                  ? "Pengambilan Krs"
                  : "Cetak Krs"}
            </h1>
          </div>

          {/* Tabs Navigation */}
          <div className="mb-6">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="-mb-px flex space-x-8 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                      activeTab === tab.id
                        ? "border-[#7C20A1] text-[#7C20A1]"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="space-y-6">
            {/* Jadwal Pengambilan KRS Tab */}
            {activeTab === "jadwal" && (
              <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-[#7C20A1] hover:bg-[#7C20A1]">
                          <TableHead className="text-white font-semibold text-center py-4">No</TableHead>
                          <TableHead className="text-white font-semibold text-center py-4">Nama Prodi</TableHead>
                          <TableHead className="text-white font-semibold text-center py-4">Angkatan</TableHead>
                          <TableHead className="text-white font-semibold text-center py-4">Tgl Mulai</TableHead>
                          <TableHead className="text-white font-semibold text-center py-4">Tgl Selesai</TableHead>
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
                            <TableCell className="text-center py-4">{item.namaProdi}</TableCell>
                            <TableCell className="text-center py-4">{item.angkatan}</TableCell>
                            <TableCell className="text-center py-4">{item.tglMulai}</TableCell>
                            <TableCell className="text-center py-4">{item.tglSelesai}</TableCell>
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
                              className={
                                currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"
                              }
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Pengambilan KRS Tab */}
            {activeTab === "pengambilan" && (
              <div className="space-y-6">
                {/* Notification Banner */}
                <div className="bg-orange-100 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                    <p className="text-orange-800 dark:text-orange-200 text-sm font-medium">
                      Silahkan Isi Quesional Penilaian Dosen Untuk Periode 2023/2024 Genap
                    </p>
                  </div>
                </div>

                {/* Course Selection Summary */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl border-0">
                    <CardContent className="p-4 text-center">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Ditawarkan</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">(Klik Untuk Ambil Matkul)</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl border-0">
                    <CardContent className="p-4 text-center">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Mengulang</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">(Klik Untuk Mengulang)</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-xl border-0">
                    <CardContent className="p-4 text-center">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Lintas Prodi</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">(Klik Untuk Matkul Lintas)</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-500 shadow-lg rounded-xl border-0">
                    <CardContent className="p-4 text-center">
                      <div className="text-white font-semibold">Mata Kuliah yang Dipilih</div>
                      <div className="text-white text-lg font-bold">Jumlah Sks Dipilih : {totalSks}</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Course Selection Table */}
                <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-[#7C20A1] hover:bg-[#7C20A1]">
                            <TableHead className="text-white font-semibold text-center py-4">Mata Kuliah</TableHead>
                            <TableHead className="text-white font-semibold text-center py-4">Sks</TableHead>
                            <TableHead className="text-white font-semibold text-center py-4">Pilih</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {courses.map((course, index) => (
                            <TableRow
                              key={course.id}
                              className={`${
                                index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700"
                              } hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors`}
                            >
                              <TableCell className="py-4 px-6 font-medium">{course.mataKuliah}</TableCell>
                              <TableCell className="text-center py-4">{course.sks}</TableCell>
                              <TableCell className="text-center py-4">
                                <Checkbox
                                  checked={course.selected}
                                  onCheckedChange={(checked) => handleCourseSelection(course.id, checked as boolean)}
                                  className="w-5 h-5"
                                />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>

                {/* Save Button */}
                <div className="flex justify-center">
                  <Button className="bg-[#7C20A1] hover:bg-[#701a75] text-white px-8 py-3 rounded-lg font-medium">
                    Simpan KRS
                  </Button>
                </div>
              </div>
            )}

            {/* Cetak KRS Tab */}
            {activeTab === "cetak" && (
              <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
                <CardContent className="p-8">
                  {/* Print Header */}
                  <div className="text-center mb-8 print:mb-6">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="flex items-center justify-center h-72 w-72">
                        <img src="/images/amikom-logo.png" alt="AMIKOM Logo" className="w-72 h-72 object-contain" />
                      </div>
                      <div></div>
                    </div>
                  </div>

                  {/* Student Information */}
                  <div className="mb-8 print:mb-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">KARTU RENCANA STUDI</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex">
                          <span className="w-24 text-gray-600 dark:text-gray-400">Nama :</span>
                          <span className="font-medium text-gray-900 dark:text-white">{studentData.nama}</span>
                        </div>
                        <div className="flex">
                          <span className="w-24 text-gray-600 dark:text-gray-400">Nim :</span>
                          <span className="font-medium text-gray-900 dark:text-white">{studentData.nim}</span>
                        </div>
                        <div className="flex">
                          <span className="w-24 text-gray-600 dark:text-gray-400">Jurusan :</span>
                          <span className="font-medium text-gray-900 dark:text-white">{studentData.jurusan}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex">
                          <span className="w-32 text-gray-600 dark:text-gray-400">Tahun Akademik :</span>
                          <span className="font-medium text-gray-900 dark:text-white">{studentData.tahunAkademik}</span>
                        </div>
                        <div className="flex">
                          <span className="w-32 text-gray-600 dark:text-gray-400">Semester :</span>
                          <span className="font-medium text-gray-900 dark:text-white">{studentData.semester}</span>
                        </div>
                        <div className="flex">
                          <span className="w-32 text-gray-600 dark:text-gray-400">Tanggal / IP :</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            2025-05-13 09:59:51/102.169.39.34
                          </span>
                        </div>
                        <div className="flex">
                          <span className="w-32 text-gray-600 dark:text-gray-400">Tanggal Update :</span>
                          <span className="font-medium text-gray-900 dark:text-white">2025-02-17 14:05:54</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Course Table */}
                  <div className="mb-8">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-2 border-gray-900">
                          <TableHead className="border border-gray-900 text-center py-2 text-gray-900 dark:text-white font-bold">
                            No
                          </TableHead>
                          <TableHead className="border border-gray-900 text-center py-2 text-gray-900 dark:text-white font-bold">
                            Kode
                          </TableHead>
                          <TableHead className="border border-gray-900 text-center py-2 text-gray-900 dark:text-white font-bold">
                            Key
                          </TableHead>
                          <TableHead className="border border-gray-900 text-center py-2 text-gray-900 dark:text-white font-bold">
                            Mata Kuliah
                          </TableHead>
                          <TableHead className="border border-gray-900 text-center py-2 text-gray-900 dark:text-white font-bold">
                            Sks
                          </TableHead>
                          <TableHead className="border border-gray-900 text-center py-2 text-gray-900 dark:text-white font-bold">
                            Tgl Mid
                          </TableHead>
                          <TableHead className="border border-gray-900 text-center py-2 text-gray-900 dark:text-white font-bold">
                            Paraf
                          </TableHead>
                          <TableHead className="border border-gray-900 text-center py-2 text-gray-900 dark:text-white font-bold">
                            Tgl Uas
                          </TableHead>
                          <TableHead className="border border-gray-900 text-center py-2 text-gray-900 dark:text-white font-bold">
                            Paraf
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {selectedCoursesData.map((course) => (
                          <TableRow key={course.no}>
                            <TableCell className="border border-gray-900 text-center py-2">{course.no}</TableCell>
                            <TableCell className="border border-gray-900 text-center py-2">{course.kode}</TableCell>
                            <TableCell className="border border-gray-900 text-center py-2">{course.key}</TableCell>
                            <TableCell className="border border-gray-900 py-2 px-4">{course.mataKuliah}</TableCell>
                            <TableCell className="border border-gray-900 text-center py-2">{course.sks}</TableCell>
                            <TableCell className="border border-gray-900 text-center py-2">/ /</TableCell>
                            <TableCell className="border border-gray-900 text-center py-2"></TableCell>
                            <TableCell className="border border-gray-900 text-center py-2">/ /</TableCell>
                            <TableCell className="border border-gray-900 text-center py-2"></TableCell>
                          </TableRow>
                        ))}
                        <TableRow>
                          <TableCell colSpan={3} className="border border-gray-900 text-center py-2 font-bold">
                            Jumlah Sks
                          </TableCell>
                          <TableCell className="border border-gray-900 text-center py-2 font-bold">
                            {selectedCoursesData.reduce((sum, course) => sum + course.sks, 0)}
                          </TableCell>
                          <TableCell colSpan={5} className="border border-gray-900"></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  {/* Signatures */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm">
                    <div>
                      <p className="mb-16">Dosen Wali</p>
                      <p>(Fitri,S.Kom,M.Kom)</p>
                    </div>
                    <div>
                      <p className="mb-16">Profile</p>
                      <p>[Cetak]</p>
                    </div>
                    <div>
                      <p className="mb-4">Yogyakarta, 13 Mei 2025</p>
                      <p className="mb-12">PARAF</p>
                      <p>( Mel P Kurniawan, M.Kom )</p>
                    </div>
                  </div>

                  {/* Print Button */}
                  <div className="flex justify-center mt-8 print:hidden">
                    <Button
                      onClick={handlePrintKRS}
                      className="bg-[#7C20A1] hover:bg-[#701a75] text-white px-8 py-3 rounded-lg font-medium"
                    >
                      <Printer className="w-4 h-4 mr-2" />
                      Cetak KRS
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
