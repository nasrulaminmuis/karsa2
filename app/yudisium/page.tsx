"use client"
import { AppSidebar } from "@/components/app-sidebar"
import { AppNavbar } from "@/components/app-navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { X, Check, AlertCircle } from "lucide-react"
import { useState } from "react"

// Sample data for yudisium checklist
const yudisiumChecklist = [
  {
    id: 1,
    checklist: "Pendaftaran yudisium belum dibuka",
    status: "incomplete",
  },
  {
    id: 2,
    checklist: "Eligible untuk mendaftar yudisium",
    status: "incomplete",
  },
]

export default function YudisiumPage() {
  const [showAlert, setShowAlert] = useState(true)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <Check className="w-5 h-5 text-green-600" />
      case "incomplete":
        return <X className="w-5 h-5 text-red-600" />
      default:
        return <AlertCircle className="w-5 h-5 text-yellow-600" />
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f3ff] dark:bg-gray-900 overflow-x-hidden">
      {/* Alert Banner */}
      {showAlert && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-sm font-bold">i</span>
            </div>
            <span className="text-sm font-medium">Periode pendaftaran yudisium belum di buka.</span>
          </div>
          <button onClick={() => setShowAlert(false)} className="text-white hover:text-gray-200 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
      <AppSidebar />
      <AppNavbar />

      {/* Main Content */}
      <main className={`pb-8 lg:ml-72 min-h-screen transition-all duration-300 ${showAlert ? "pt-32" : "pt-20"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Pendaftaran Yudisium</h1>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Information Notice */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Untuk mendaftar yudisium, silakan perhatikan check list di bawah, apabila check list hijau semua
                    maka anda dapat mendaftar yudisium untuk periode mulai tanggal s/d
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Checklist Table */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#7C20A1] hover:bg-[#7C20A1]">
                        <TableHead className="text-white font-semibold text-center py-4 w-20">NO</TableHead>
                        <TableHead className="text-white font-semibold text-center py-4">CHECKLIST</TableHead>
                        <TableHead className="text-white font-semibold text-center py-4 w-32">STATUS</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {yudisiumChecklist.map((item, index) => (
                        <TableRow
                          key={item.id}
                          className={`${
                            index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700"
                          } hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors`}
                        >
                          <TableCell className="text-center py-6 font-medium text-lg">{item.id}</TableCell>
                          <TableCell className="py-6 px-6 text-gray-900 dark:text-white font-medium">
                            {item.checklist}
                          </TableCell>
                          <TableCell className="text-center py-6">
                            <div className="flex justify-center">{getStatusIcon(item.status)}</div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Status Summary */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-lg">
                      <X className="w-4 h-4" />
                      <span className="font-medium">Belum Memenuhi Syarat Yudisium</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Silakan lengkapi semua persyaratan yang diperlukan
                    </p>
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
