"use client"
import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { AppNavbar } from "@/components/app-navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Printer, GraduationCap, FileText } from "lucide-react"

// Sample data for KHS (Kartu Hasil Studi)
const khsData = [
  { id: 1, kode: "SI031", mataKuliah: "Metodologi Penelitian", sks: 2, nilai: "A" },
  { id: 2, kode: "SI047", mataKuliah: "Interaksi Manusia Dan Komputer", sks: 2, nilai: "A" },
  { id: 3, kode: "SI048", mataKuliah: "Testing Dan Implementasi Sistem", sks: 2, nilai: "A" },
  { id: 4, kode: "SI139", mataKuliah: "Keamanan Siber", sks: 2, nilai: "A" },
  { id: 5, kode: "SI161", mataKuliah: "Proyek Inovasi Digital Bisnis", sks: 2, nilai: "A" },
  { id: 6, kode: "SI163", mataKuliah: "Machine Learning", sks: 2, nilai: "A" },
]

// Sample data for Transcript
const transcriptData = [
  { id: 1, kode: "SI031", mataKuliah: "Metodologi Penelitian", sifat: "Wajib", sks: 2, nilai: "A" },
  { id: 2, kode: "SI047", mataKuliah: "Interaksi Manusia Dan Komputer", sifat: "Wajib", sks: 2, nilai: "A" },
  { id: 3, kode: "SI048", mataKuliah: "Testing Dan Implementasi Sistem", sifat: "Wajib", sks: 2, nilai: "A" },
  { id: 4, kode: "SI161", mataKuliah: "Proyek Inovasi Digital Bisnis", sifat: "Wajib", sks: 2, nilai: "A" },
  { id: 5, kode: "SI163", mataKuliah: "Machine Learning", sifat: "Wajib", sks: 2, nilai: "A" },
  { id: 6, kode: "SI031", mataKuliah: "Metodologi Penelitian", sifat: "Wajib", sks: 2, nilai: "A" },
]

const tabs = [
  { id: "khs", label: "Kartu Hasil Studi", icon: FileText },
  { id: "transkip", label: "Transkip Nilai", icon: GraduationCap },
]

const semesterOptions = [
  { value: "ganjil", label: "Ganjil" },
  { value: "genap", label: "Genap" },
]

const academicYearOptions = [
  { value: "2024/2025", label: "2024/2025" },
  { value: "2023/2024", label: "2023/2024" },
  { value: "2022/2023", label: "2022/2023" },
]

export default function HasilStudiPage() {
  const [activeTab, setActiveTab] = useState("khs")
  const [selectedSemester, setSelectedSemester] = useState("ganjil")
  const [selectedYear, setSelectedYear] = useState("2024/2025")

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
  }

  const handlePrintKHS = () => {
    window.print()
  }

  const handlePrintTranscript = () => {
    window.print()
  }

  const calculateGPA = (courses: typeof khsData) => {
    const gradePoints: { [key: string]: number } = {
      A: 4.0,
      "A-": 3.7,
      "B+": 3.3,
      B: 3.0,
      "B-": 2.7,
      "C+": 2.3,
      C: 2.0,
      "C-": 1.7,
      "D+": 1.3,
      D: 1.0,
      E: 0.0,
    }

    const totalPoints = courses.reduce((sum, course) => sum + gradePoints[course.nilai] * course.sks, 0)
    const totalSks = courses.reduce((sum, course) => sum + course.sks, 0)

    return totalSks > 0 ? (totalPoints / totalSks).toFixed(2) : "0.00"
  }

  const totalSksKHS = khsData.reduce((sum, course) => sum + course.sks, 0)
  const gpaKHS = calculateGPA(khsData)

  const totalSksTranscript = transcriptData.reduce((sum, course) => sum + course.sks, 0)
  const gpaTranscript = calculateGPA(transcriptData)

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
              {activeTab === "khs" ? "Kartu Hasil Studi" : "Transkip Nilai"}
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
            {/* Kartu Hasil Studi Tab */}
            {activeTab === "khs" && (
              <div className="space-y-6">
                {/* Information Notice */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    Berikut ini Khs, untuk nilai yang belum keluar Defaultnya E atau kosong.
                  </p>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih Semester" />
                      </SelectTrigger>
                      <SelectContent>
                        {semesterOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <Select value={selectedYear} onValueChange={setSelectedYear}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih Tahun Akademik" />
                      </SelectTrigger>
                      <SelectContent>
                        {academicYearOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* KHS Table */}
                <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-[#7C20A1] hover:bg-[#7C20A1]">
                            <TableHead className="text-white font-semibold text-center py-4">No</TableHead>
                            <TableHead className="text-white font-semibold text-center py-4">Kode</TableHead>
                            <TableHead className="text-white font-semibold text-center py-4">Mata Kuliah</TableHead>
                            <TableHead className="text-white font-semibold text-center py-4">Sks</TableHead>
                            <TableHead className="text-white font-semibold text-center py-4">Nilai</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {khsData.map((course, index) => (
                            <TableRow
                              key={course.id}
                              className={`${
                                index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700"
                              } hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors`}
                            >
                              <TableCell className="text-center py-4 font-medium">{index + 1}</TableCell>
                              <TableCell className="text-center py-4">{course.kode}</TableCell>
                              <TableCell className="py-4 px-6">{course.mataKuliah}</TableCell>
                              <TableCell className="text-center py-4">{course.sks}</TableCell>
                              <TableCell className="text-center py-4">
                                <span className="font-semibold text-green-600 dark:text-green-400">{course.nilai}</span>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    {/* Summary */}
                    <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Jumlah Sks</div>
                          <div className="text-2xl font-bold text-[#7C20A1]">{totalSksKHS}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Index Prestasi</div>
                          <div className="text-2xl font-bold text-[#7C20A1]">{gpaKHS}</div>
                        </div>
                      </div>
                    </div>

                    {/* Print Button */}
                    <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex justify-center">
                        <Button
                          onClick={handlePrintKHS}
                          className="bg-[#7C20A1] hover:bg-[#701a75] text-white px-6 py-3 rounded-lg font-medium"
                        >
                          <Printer className="w-4 h-4 mr-2" />
                          Print Khs
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Transkip Nilai Tab */}
            {activeTab === "transkip" && (
              <div className="space-y-6">
                {/* Information Notice */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    Berikut adalah daftar salinan nilai kumulatif :
                  </p>
                </div>

                {/* Transcript Table */}
                <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-[#7C20A1] hover:bg-[#7C20A1]">
                            <TableHead className="text-white font-semibold text-center py-4">No</TableHead>
                            <TableHead className="text-white font-semibold text-center py-4">Kode</TableHead>
                            <TableHead className="text-white font-semibold text-center py-4">Mata Kuliah</TableHead>
                            <TableHead className="text-white font-semibold text-center py-4">Sifat</TableHead>
                            <TableHead className="text-white font-semibold text-center py-4">Sks</TableHead>
                            <TableHead className="text-white font-semibold text-center py-4">Nilai</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {transcriptData.map((course, index) => (
                            <TableRow
                              key={course.id}
                              className={`${
                                index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700"
                              } hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors`}
                            >
                              <TableCell className="text-center py-4 font-medium">{index + 1}</TableCell>
                              <TableCell className="text-center py-4">{course.kode}</TableCell>
                              <TableCell className="py-4 px-6">{course.mataKuliah}</TableCell>
                              <TableCell className="text-center py-4">{course.sifat}</TableCell>
                              <TableCell className="text-center py-4">{course.sks}</TableCell>
                              <TableCell className="text-center py-4">
                                <span className="font-semibold text-green-600 dark:text-green-400">{course.nilai}</span>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    {/* Summary Section */}
                    <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Jumlah Sks:</div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-xs text-gray-500 dark:text-gray-400">Wajib</div>
                            <div className="text-lg font-bold text-[#7C20A1]">100</div>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-xs text-gray-500 dark:text-gray-400">Pilihan</div>
                            <div className="text-lg font-bold text-[#7C20A1]">8</div>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-xs text-gray-500 dark:text-gray-400">Konsentrasi</div>
                            <div className="text-lg font-bold text-[#7C20A1]">8</div>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-xs text-gray-500 dark:text-gray-400">Total</div>
                            <div className="text-lg font-bold text-[#7C20A1]">116</div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Index Prestasi Kumulatif:</div>
                        <div className="text-3xl font-bold text-[#7C20A1]">{gpaTranscript}</div>
                      </div>
                    </div>

                    {/* Print Button */}
                    <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex justify-center">
                        <Button
                          onClick={handlePrintTranscript}
                          className="bg-[#7C20A1] hover:bg-[#701a75] text-white px-6 py-3 rounded-lg font-medium"
                        >
                          <Printer className="w-4 h-4 mr-2" />
                          Print Transkip
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
