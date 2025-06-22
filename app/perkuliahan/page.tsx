"use client"
import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { AppNavbar } from "@/components/app-navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Info, BookOpen, RefreshCw, Check } from "lucide-react"

// Sample data for course materials and grades
const courseData = [
  {
    id: 1,
    kode: "SI031",
    mataKuliah: "Metodologi Penelitian",
    sks: 2,
    kelas: "22S1SI02-Metodo(SI031)",
  },
  {
    id: 2,
    kode: "SI047",
    mataKuliah: "Interaksi Manusia Dan Komputer",
    sks: 2,
    kelas: "22S1SI02-Interak(SI047)",
  },
  {
    id: 3,
    kode: "SI048",
    mataKuliah: "Testing Dan Implementasi Sistem",
    sks: 2,
    kelas: "22S1SI02-Testing(SI048)",
  },
  {
    id: 4,
    kode: "SI139",
    mataKuliah: "Keamanan Siber",
    sks: 2,
    kelas: "22S1SI02-Keamana2(SI139)",
  },
  {
    id: 5,
    kode: "SI161",
    mataKuliah: "Proyek Inovasi Digital Bisnis",
    sks: 2,
    kelas: "22S1SI02-Proyek12(SI161)",
  },
  {
    id: 6,
    kode: "SI163",
    mataKuliah: "Machine Learning",
    sks: 2,
    kelas: "22S1SI02-Machine2(SI163)",
  },
]

// Sample data for class change options
const classChangeData = {
  courseInfo: {
    kode: "SI031",
    nama: "Testing Dan Implementasi (Teori)",
    dosen: "Deni Kurnianto Nugroho,S.Pd,M.Eng",
    jadwal: "Selasa,07.00 - 08.40/22S1SI",
  },
  availableClasses: [
    {
      id: 1,
      dosen: "Adity Rizki,S.T,M.Eng",
      jadwal: "Senin, 08.50 - 10.10/22S1SI02-Testing",
      selected: false,
    },
    {
      id: 2,
      dosen: "Arif Nur Rahman,M.Kom",
      jadwal: "Senin, 14.30 - 17.10/22S1SI02-Testing",
      selected: false,
    },
    {
      id: 3,
      dosen: "Fitri,S.Kom,M.Kom",
      jadwal: "Kamis, 08.50 - 10.10/22S1SI02-",
      selected: false,
    },
    {
      id: 4,
      dosen: "Ika Nur Fitri,S.Kom,M.Kom",
      jadwal: "Selasa, 08.50 - 10.10/22S1SI02-",
      selected: false,
    },
    {
      id: 5,
      dosen: "Deni Kurnianto,S.Pd,M.Eng",
      jadwal: "Selasa, 07.00 - 08.40/22S1SI02-Testing",
      selected: true,
    },
    {
      id: 6,
      dosen: "Maulana,S.Pd,M.Eng",
      jadwal: "Rabu, 07.00 - 08.40/22S1SI02-Testing",
      selected: false,
    },
  ],
}

const tabs = [
  { id: "materi", label: "Materi Dan Nilai Kelas", icon: BookOpen },
  { id: "pindah", label: "Pindah Kelas", icon: RefreshCw },
]

const semesterOptions = [
  { value: "6", label: "Semester 6" },
  { value: "5", label: "Semester 5" },
  { value: "4", label: "Semester 4" },
  { value: "3", label: "Semester 3" },
  { value: "2", label: "Semester 2" },
  { value: "1", label: "Semester 1" },
]

const yearOptions = [
  { value: "2025", label: "Tahun 2025" },
  { value: "2024", label: "Tahun 2024" },
  { value: "2023", label: "Tahun 2023" },
]

export default function PerkuliahanPage() {
  const [activeTab, setActiveTab] = useState("materi")
  const [selectedSemester, setSelectedSemester] = useState("6")
  const [selectedYear, setSelectedYear] = useState("2025")
  const [selectedClass, setSelectedClass] = useState(5)
  const [showResults, setShowResults] = useState(true)

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
  }

  const handleShowResults = () => {
    setShowResults(true)
  }

  const handleClassChange = (classId: number) => {
    setSelectedClass(classId)
  }

  const handleCourseDetail = (courseId: number) => {
    // In a real application, this would navigate to course detail page
    console.log(`Viewing details for course ${courseId}`)
    alert(`Membuka detail mata kuliah`)
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
              {activeTab === "materi" ? "Materi Dan Nilai Kelas" : "Pindah Kelas"}
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
            {/* Materi Dan Nilai Kelas Tab */}
            {activeTab === "materi" && (
              <div className="space-y-6">
                {/* Filters */}
                <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Semester
                        </label>
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
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Tahun Akademik
                        </label>
                        <Select value={selectedYear} onValueChange={setSelectedYear}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pilih Tahun" />
                          </SelectTrigger>
                          <SelectContent>
                            {yearOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Button
                          onClick={handleShowResults}
                          className="w-full bg-[#7C20A1] hover:bg-[#701a75] text-white px-6 py-2 rounded-lg font-medium"
                        >
                          Tampilkan
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Results Table */}
                {showResults && (
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
                              <TableHead className="text-white font-semibold text-center py-4">Kelas</TableHead>
                              <TableHead className="text-white font-semibold text-center py-4">Detail</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {courseData.map((course, index) => (
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
                                <TableCell className="text-center py-4 text-sm">{course.kelas}</TableCell>
                                <TableCell className="text-center py-4">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleCourseDetail(course.id)}
                                    className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 dark:text-blue-400 dark:hover:text-blue-300"
                                  >
                                    <Info className="w-4 h-4" />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Pindah Kelas Tab */}
            {activeTab === "pindah" && (
              <div className="space-y-6">
                {/* Course Information */}
                <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {classChangeData.courseInfo.kode} {classChangeData.courseInfo.nama}/
                          {classChangeData.courseInfo.dosen}
                        </h3>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-medium">{classChangeData.courseInfo.jadwal}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Available Classes */}
                <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Pilih Kelas yang Tersedia
                    </h4>
                    <div className="space-y-3">
                      {classChangeData.availableClasses.map((classOption) => (
                        <div
                          key={classOption.id}
                          className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                            selectedClass === classOption.id
                              ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                              : "border-gray-200 dark:border-gray-600 hover:border-[#7C20A1] hover:bg-[#f5f3ff] dark:hover:bg-[#7C20A1]/10"
                          }`}
                          onClick={() => handleClassChange(classOption.id)}
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                              {selectedClass === classOption.id ? (
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                  <Check className="w-4 h-4 text-white" />
                                </div>
                              ) : (
                                <Checkbox
                                  checked={selectedClass === classOption.id}
                                  onCheckedChange={() => handleClassChange(classOption.id)}
                                  className="w-6 h-6"
                                />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-gray-900 dark:text-white">{classOption.dosen}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">{classOption.jadwal}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Save Button */}
                    <div className="mt-6 flex justify-center">
                      <Button className="bg-[#7C20A1] hover:bg-[#701a75] text-white px-8 py-3 rounded-lg font-medium">
                        Simpan Perubahan Kelas
                      </Button>
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
