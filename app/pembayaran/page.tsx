"use client"
import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { AppNavbar } from "@/components/app-navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CreditCard, AlertCircle, CheckCircle, Clock } from "lucide-react"

// Sample payment data
const paymentData = [
  {
    id: 1,
    itemPembayaran: "SPP Tetap",
    noVirtualAccount: "4575 01 11 1111111",
    nominal: 3500000,
    keterangan: "Belum Dibayar",
    status: "unpaid",
  },
  {
    id: 2,
    itemPembayaran: "SPP Variabel",
    noVirtualAccount: "4575 01 11 1111111",
    nominal: 2500000,
    keterangan: "Belum Dibayar",
    status: "unpaid",
  },
  {
    id: 3,
    itemPembayaran: "Dana Pengembangan",
    noVirtualAccount: "4575 01 11 1111111",
    nominal: 6000000,
    keterangan: "Belum Dibayar",
    status: "unpaid",
  },
  {
    id: 4,
    itemPembayaran: "Perkuliahan Perbaikan",
    noVirtualAccount: "4575 01 11 1111111",
    nominal: 0,
    keterangan: "Opsional",
    status: "optional",
  },
  {
    id: 5,
    itemPembayaran: "Cuti",
    noVirtualAccount: "4575 01 11 1111111",
    nominal: 207500,
    keterangan: "Opsional",
    status: "optional",
  },
  {
    id: 6,
    itemPembayaran: "Pengunduran Diri",
    noVirtualAccount: "4575 01 11 1111111",
    nominal: 100000,
    keterangan: "Opsional",
    status: "optional",
  },
  {
    id: 7,
    itemPembayaran: "Biaya TOEFL",
    noVirtualAccount: "4575 01 11 1111111",
    nominal: 100000,
    keterangan: "Opsional",
    status: "optional",
  },
]

const bankOptions = [
  { value: "muamalat", label: "Muamalat" },
  { value: "bni", label: "BNI" },
  { value: "mandiri", label: "Mandiri" },
  { value: "bca", label: "BCA" },
]

const yearOptions = [
  { value: "2025/2026", label: "2025/2026" },
  { value: "2024/2025", label: "2024/2025" },
  { value: "2023/2024", label: "2023/2024" },
]

const semesterOptions = [
  { value: "genap", label: "Genap" },
  { value: "ganjil", label: "Ganjil" },
]

export default function PembayaranPage() {
  const [selectedBank, setSelectedBank] = useState("muamalat")
  const [selectedYear, setSelectedYear] = useState("2025/2026")
  const [selectedSemester, setSelectedSemester] = useState("genap")

  const formatCurrency = (amount: number) => {
    if (amount === 0) return "Rp 0"
    return `Rp ${amount.toLocaleString("id-ID")}`
  }

  const getStatusBadge = (status: string, keterangan: string) => {
    switch (status) {
      case "unpaid":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{keterangan}</Badge>
      case "paid":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{keterangan}</Badge>
      case "optional":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">{keterangan}</Badge>
      default:
        return <Badge variant="secondary">{keterangan}</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "unpaid":
        return <AlertCircle className="w-4 h-4 text-red-600" />
      case "paid":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "optional":
        return <Clock className="w-4 h-4 text-gray-600" />
      default:
        return null
    }
  }

  const totalUnpaid = paymentData
    .filter((item) => item.status === "unpaid")
    .reduce((sum, item) => sum + item.nominal, 0)

  return (
    <div className="min-h-screen bg-[#f5f3ff] dark:bg-gray-900 overflow-x-hidden">
      <AppSidebar />
      <AppNavbar />

      {/* Main Content */}
      <main className="pt-20 pb-8 lg:ml-72 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Info Pembayaran</h1>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Payment Period Information */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardContent className="p-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Periode Pembayaran saat ini adalah 2024/2025 Semester : 2
                </h2>
                <p className="text-red-600 dark:text-red-400 font-medium mb-4">
                  Cek informasi pembayaran anda dengan memilih Tahun Kuliah dan Semester di bawah ini.
                </p>

                {/* Filters */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <Select value={selectedBank} onValueChange={setSelectedBank}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih Bank" />
                      </SelectTrigger>
                      <SelectContent>
                        {bankOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
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
                </div>
              </CardContent>
            </Card>

            {/* Bank Information */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Info biaya kuliah, Virtual Account bank Muamalat dan keterangan status pembayaran. Untuk tata cara
                  pembayaran via bank Muamalat dapat anda lihat{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                    di sini
                  </a>
                </p>
              </CardContent>
            </Card>

            {/* Payment Table */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#7C20A1] hover:bg-[#7C20A1]">
                        <TableHead className="text-white font-semibold text-center py-4">No</TableHead>
                        <TableHead className="text-white font-semibold text-center py-4">Item Pembayaran</TableHead>
                        <TableHead className="text-white font-semibold text-center py-4">No. Virtual Account</TableHead>
                        <TableHead className="text-white font-semibold text-center py-4">Nominal</TableHead>
                        <TableHead className="text-white font-semibold text-center py-4">Keterangan</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paymentData.map((item, index) => (
                        <TableRow
                          key={item.id}
                          className={`${
                            index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700"
                          } hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors`}
                        >
                          <TableCell className="text-center py-4 font-medium">{item.id}</TableCell>
                          <TableCell className="py-4 px-6">{item.itemPembayaran}</TableCell>
                          <TableCell className="text-center py-4 font-mono text-sm">{item.noVirtualAccount}</TableCell>
                          <TableCell className="text-center py-4">
                            <span
                              className={`font-semibold ${
                                item.status === "unpaid"
                                  ? "text-red-600 dark:text-red-400"
                                  : "text-gray-900 dark:text-white"
                              }`}
                            >
                              {formatCurrency(item.nominal)}
                            </span>
                          </TableCell>
                          <TableCell className="text-center py-4">
                            <div className="flex items-center justify-center gap-2">
                              {getStatusIcon(item.status)}
                              {getStatusBadge(item.status, item.keterangan)}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Payment Summary */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <CreditCard className="w-5 h-5 text-[#7C20A1]" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Total Belum Dibayar
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                        {formatCurrency(totalUnpaid)}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Item Lunas</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        {paymentData.filter((item) => item.status === "paid").length}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Item Belum Lunas</span>
                      </div>
                      <div className="text-2xl font-bold text-red-600">
                        {paymentData.filter((item) => item.status === "unpaid").length}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Instructions */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Cara Pembayaran</h3>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#7C20A1] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      1
                    </span>
                    <span>Gunakan nomor Virtual Account yang tertera untuk melakukan pembayaran</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#7C20A1] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      2
                    </span>
                    <span>Pembayaran dapat dilakukan melalui ATM, Internet Banking, atau Mobile Banking</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#7C20A1] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      3
                    </span>
                    <span>Status pembayaran akan terupdate otomatis setelah pembayaran berhasil</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#7C20A1] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      4
                    </span>
                    <span>Simpan bukti pembayaran untuk keperluan administrasi</span>
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
