"use client"
import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { AppNavbar } from "@/components/app-navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { AlertTriangle, Save, User, Users } from "lucide-react"

// Sample student data
const initialStudentData = {
  nim: "22.12.9999",
  nik: "1111231245679987",
  nama: "Kevin Aljabar",
  jenisKelamin: "Laki - Laki",
  programStudi: "S1 - Informatika",
  fakultas: "S1 - Informatika",
  angkatan: "Angkatan M.Kom",
  tempatLahir: "Yogyakarta",
  tanggalLahir: "1999-12-22",
  agama: "Islam",
  statusPernikahan: "Belum Menikah",
  alamat: "Jl. Ring Road Utara, Condongcatur, Depok, Sleman",
  noTelepon: "081234567890",
  email: "kevinaljabar@students.amikom.ac.id",
}

const initialFatherData = {
  nama: "Budi",
  nik: "1123321233114456",
  tanggalLahir: "2000/12/06",
  pendidikan: "Sekolah Menengah Atas",
  pekerjaan: "Wiraswasta",
  penghasilan: "Rp 5.000.000 - Rp 10.000.000",
  alamat: "Jl. Ring Road Utara, Condongcatur, Depok, Sleman",
  noTelepon: "081234567891",
}

const initialMotherData = {
  nama: "Siti",
  nik: "1123321233114457",
  tanggalLahir: "1975/08/15",
  pendidikan: "Sekolah Menengah Atas",
  pekerjaan: "Ibu Rumah Tangga",
  penghasilan: "< Rp 1.000.000",
  alamat: "Jl. Ring Road Utara, Condongcatur, Depok, Sleman",
  noTelepon: "081234567892",
}

const genderOptions = [
  { value: "Laki - Laki", label: "Laki - Laki" },
  { value: "Perempuan", label: "Perempuan" },
]

const religionOptions = [
  { value: "Islam", label: "Islam" },
  { value: "Kristen", label: "Kristen" },
  { value: "Katolik", label: "Katolik" },
  { value: "Hindu", label: "Hindu" },
  { value: "Buddha", label: "Buddha" },
  { value: "Konghucu", label: "Konghucu" },
]

const maritalStatusOptions = [
  { value: "Belum Menikah", label: "Belum Menikah" },
  { value: "Menikah", label: "Menikah" },
  { value: "Cerai", label: "Cerai" },
]

const educationOptions = [
  { value: "SD", label: "SD" },
  { value: "SMP", label: "SMP" },
  { value: "Sekolah Menengah Atas", label: "Sekolah Menengah Atas" },
  { value: "D3", label: "D3" },
  { value: "S1", label: "S1" },
  { value: "S2", label: "S2" },
  { value: "S3", label: "S3" },
]

const incomeOptions = [
  { value: "< Rp 1.000.000", label: "< Rp 1.000.000" },
  { value: "Rp 1.000.000 - Rp 2.500.000", label: "Rp 1.000.000 - Rp 2.500.000" },
  { value: "Rp 2.500.000 - Rp 5.000.000", label: "Rp 2.500.000 - Rp 5.000.000" },
  { value: "Rp 5.000.000 - Rp 10.000.000", label: "Rp 5.000.000 - Rp 10.000.000" },
  { value: "> Rp 10.000.000", label: "> Rp 10.000.000" },
]

export default function ProfilPage() {
  const [studentData, setStudentData] = useState(initialStudentData)
  const [fatherData, setFatherData] = useState(initialFatherData)
  const [motherData, setMotherData] = useState(initialMotherData)
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleStudentDataChange = (field: string, value: string) => {
    setStudentData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFatherDataChange = (field: string, value: string) => {
    setFatherData((prev) => ({ ...prev, [field]: value }))
  }

  const handleMotherDataChange = (field: string, value: string) => {
    setMotherData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSaveData = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setShowSuccessModal(true)
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
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Data Lengkap Mahasiswa</h1>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Important Notice */}
            <div className="bg-orange-100 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div className="text-orange-800 dark:text-orange-200 text-sm leading-relaxed">
                  <strong>PERHATIAN!</strong> Silahkan isian data secara lengkap. Data yang diisikan merupakan data yang{" "}
                  <strong>SEBENAR - BENARNYA</strong>, validitas entrian data akan menjadi{" "}
                  <strong>TANGGUNG JAWAB</strong> Mahasiswa yang bersangkutan. Data tersebut akan digunakan untuk
                  pelaporan ke <strong>LLDIKTI, IJAZAH</strong> ataupun keperluan lain yang berhubungan dengan Akademik
                  dan Kemahasiswaan.
                </div>
              </div>
            </div>

            {/* Student Biodata */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                  <User className="w-6 h-6 text-[#7C20A1]" />
                  Biodata Mahasiswa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* NIM */}
                  <div>
                    <Label htmlFor="nim" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      NIM <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="nim"
                      value={studentData.nim}
                      onChange={(e) => handleStudentDataChange("nim", e.target.value)}
                      className="mt-1 bg-gray-100 dark:bg-gray-700"
                      disabled
                    />
                  </div>

                  {/* NIK */}
                  <div>
                    <Label htmlFor="nik" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      NIK <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="nik"
                      value={studentData.nik}
                      onChange={(e) => handleStudentDataChange("nik", e.target.value)}
                      className="mt-1"
                      placeholder="Masukkan NIK"
                    />
                  </div>

                  {/* Nama */}
                  <div>
                    <Label htmlFor="nama" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="nama"
                      value={studentData.nama}
                      onChange={(e) => handleStudentDataChange("nama", e.target.value)}
                      className="mt-1"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  {/* Jenis Kelamin */}
                  <div>
                    <Label htmlFor="jenisKelamin" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Jenis Kelamin <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={studentData.jenisKelamin}
                      onValueChange={(value) => handleStudentDataChange("jenisKelamin", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Pilih jenis kelamin" />
                      </SelectTrigger>
                      <SelectContent>
                        {genderOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Program Studi */}
                  <div>
                    <Label htmlFor="programStudi" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Program Studi
                    </Label>
                    <Input
                      id="programStudi"
                      value={studentData.programStudi}
                      className="mt-1 bg-gray-100 dark:bg-gray-700"
                      disabled
                    />
                  </div>

                  {/* Fakultas */}
                  <div>
                    <Label htmlFor="fakultas" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Fakultas
                    </Label>
                    <Input
                      id="fakultas"
                      value={studentData.fakultas}
                      className="mt-1 bg-gray-100 dark:bg-gray-700"
                      disabled
                    />
                  </div>

                  {/* Tempat Lahir */}
                  <div>
                    <Label htmlFor="tempatLahir" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Tempat Lahir <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="tempatLahir"
                      value={studentData.tempatLahir}
                      onChange={(e) => handleStudentDataChange("tempatLahir", e.target.value)}
                      className="mt-1"
                      placeholder="Masukkan tempat lahir"
                    />
                  </div>

                  {/* Tanggal Lahir */}
                  <div>
                    <Label htmlFor="tanggalLahir" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Tanggal Lahir <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="tanggalLahir"
                      type="date"
                      value={studentData.tanggalLahir}
                      onChange={(e) => handleStudentDataChange("tanggalLahir", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  {/* Agama */}
                  <div>
                    <Label htmlFor="agama" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Agama <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={studentData.agama}
                      onValueChange={(value) => handleStudentDataChange("agama", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Pilih agama" />
                      </SelectTrigger>
                      <SelectContent>
                        {religionOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Status Pernikahan */}
                  <div>
                    <Label htmlFor="statusPernikahan" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Status Pernikahan
                    </Label>
                    <Select
                      value={studentData.statusPernikahan}
                      onValueChange={(value) => handleStudentDataChange("statusPernikahan", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Pilih status pernikahan" />
                      </SelectTrigger>
                      <SelectContent>
                        {maritalStatusOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* No Telepon */}
                  <div>
                    <Label htmlFor="noTelepon" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      No. Telepon <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="noTelepon"
                      value={studentData.noTelepon}
                      onChange={(e) => handleStudentDataChange("noTelepon", e.target.value)}
                      className="mt-1"
                      placeholder="Masukkan nomor telepon"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={studentData.email}
                      className="mt-1 bg-gray-100 dark:bg-gray-700"
                      disabled
                    />
                  </div>
                </div>

                {/* Alamat */}
                <div>
                  <Label htmlFor="alamat" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Alamat Lengkap <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="alamat"
                    value={studentData.alamat}
                    onChange={(e) => handleStudentDataChange("alamat", e.target.value)}
                    className="mt-1"
                    placeholder="Masukkan alamat lengkap"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Father's Biodata */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                  <Users className="w-6 h-6 text-[#7C20A1]" />
                  Biodata Ayah Kandung
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nama Ayah */}
                  <div>
                    <Label htmlFor="namaAyah" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="namaAyah"
                      value={fatherData.nama}
                      onChange={(e) => handleFatherDataChange("nama", e.target.value)}
                      className="mt-1"
                      placeholder="Masukkan nama ayah"
                    />
                  </div>

                  {/* NIK Ayah */}
                  <div>
                    <Label htmlFor="nikAyah" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      NIK <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="nikAyah"
                      value={fatherData.nik}
                      onChange={(e) => handleFatherDataChange("nik", e.target.value)}
                      className="mt-1"
                      placeholder="Masukkan NIK ayah"
                    />
                  </div>

                  {/* Tanggal Lahir Ayah */}
                  <div>
                    <Label htmlFor="tanggalLahirAyah" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Tanggal Lahir <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="tanggalLahirAyah"
                      value={fatherData.tanggalLahir}
                      onChange={(e) => handleFatherDataChange("tanggalLahir", e.target.value)}
                      className="mt-1"
                      placeholder="DD/MM/YYYY"
                    />
                  </div>

                  {/* Pendidikan Ayah */}
                  <div>
                    <Label htmlFor="pendidikanAyah" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Pendidikan Terakhir
                    </Label>
                    <Select
                      value={fatherData.pendidikan}
                      onValueChange={(value) => handleFatherDataChange("pendidikan", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Pilih pendidikan terakhir" />
                      </SelectTrigger>
                      <SelectContent>
                        {educationOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Pekerjaan Ayah */}
                  <div>
                    <Label htmlFor="pekerjaanAyah" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Pekerjaan
                    </Label>
                    <Input
                      id="pekerjaanAyah"
                      value={fatherData.pekerjaan}
                      onChange={(e) => handleFatherDataChange("pekerjaan", e.target.value)}
                      className="mt-1"
                      placeholder="Masukkan pekerjaan ayah"
                    />
                  </div>

                  {/* Penghasilan Ayah */}
                  <div>
                    <Label htmlFor="penghasilanAyah" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Penghasilan
                    </Label>
                    <Select
                      value={fatherData.penghasilan}
                      onValueChange={(value) => handleFatherDataChange("penghasilan", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Pilih range penghasilan" />
                      </SelectTrigger>
                      <SelectContent>
                        {incomeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* No Telepon Ayah */}
                  <div>
                    <Label htmlFor="noTeleponAyah" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      No. Telepon
                    </Label>
                    <Input
                      id="noTeleponAyah"
                      value={fatherData.noTelepon}
                      onChange={(e) => handleFatherDataChange("noTelepon", e.target.value)}
                      className="mt-1"
                      placeholder="Masukkan nomor telepon ayah"
                    />
                  </div>
                </div>

                {/* Alamat Ayah */}
                <div>
                  <Label htmlFor="alamatAyah" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Alamat Lengkap
                  </Label>
                  <Textarea
                    id="alamatAyah"
                    value={fatherData.alamat}
                    onChange={(e) => handleFatherDataChange("alamat", e.target.value)}
                    className="mt-1"
                    placeholder="Masukkan alamat lengkap ayah"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Mother's Biodata */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                  <Users className="w-6 h-6 text-[#7C20A1]" />
                  Biodata Ibu Kandung
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nama Ibu */}
                  <div>
                    <Label htmlFor="namaIbu" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="namaIbu"
                      value={motherData.nama}
                      onChange={(e) => handleMotherDataChange("nama", e.target.value)}
                      className="mt-1"
                      placeholder="Masukkan nama ibu"
                    />
                  </div>

                  {/* NIK Ibu */}
                  <div>
                    <Label htmlFor="nikIbu" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      NIK <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="nikIbu"
                      value={motherData.nik}
                      onChange={(e) => handleMotherDataChange("nik", e.target.value)}
                      className="mt-1"
                      placeholder="Masukkan NIK ibu"
                    />
                  </div>

                  {/* Tanggal Lahir Ibu */}
                  <div>
                    <Label htmlFor="tanggalLahirIbu" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Tanggal Lahir <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="tanggalLahirIbu"
                      value={motherData.tanggalLahir}
                      onChange={(e) => handleMotherDataChange("tanggalLahir", e.target.value)}
                      className="mt-1"
                      placeholder="DD/MM/YYYY"
                    />
                  </div>

                  {/* Pendidikan Ibu */}
                  <div>
                    <Label htmlFor="pendidikanIbu" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Pendidikan Terakhir
                    </Label>
                    <Select
                      value={motherData.pendidikan}
                      onValueChange={(value) => handleMotherDataChange("pendidikan", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Pilih pendidikan terakhir" />
                      </SelectTrigger>
                      <SelectContent>
                        {educationOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Pekerjaan Ibu */}
                  <div>
                    <Label htmlFor="pekerjaanIbu" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Pekerjaan
                    </Label>
                    <Input
                      id="pekerjaanIbu"
                      value={motherData.pekerjaan}
                      onChange={(e) => handleMotherDataChange("pekerjaan", e.target.value)}
                      className="mt-1"
                      placeholder="Masukkan pekerjaan ibu"
                    />
                  </div>

                  {/* Penghasilan Ibu */}
                  <div>
                    <Label htmlFor="penghasilanIbu" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Penghasilan
                    </Label>
                    <Select
                      value={motherData.penghasilan}
                      onValueChange={(value) => handleMotherDataChange("penghasilan", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Pilih range penghasilan" />
                      </SelectTrigger>
                      <SelectContent>
                        {incomeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* No Telepon Ibu */}
                  <div>
                    <Label htmlFor="noTeleponIbu" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      No. Telepon
                    </Label>
                    <Input
                      id="noTeleponIbu"
                      value={motherData.noTelepon}
                      onChange={(e) => handleMotherDataChange("noTelepon", e.target.value)}
                      className="mt-1"
                      placeholder="Masukkan nomor telepon ibu"
                    />
                  </div>
                </div>

                {/* Alamat Ibu */}
                <div>
                  <Label htmlFor="alamatIbu" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Alamat Lengkap
                  </Label>
                  <Textarea
                    id="alamatIbu"
                    value={motherData.alamat}
                    onChange={(e) => handleMotherDataChange("alamat", e.target.value)}
                    className="mt-1"
                    placeholder="Masukkan alamat lengkap ibu"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Validation Notice */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <p className="text-red-800 dark:text-red-200 text-sm">
                <strong>Pastikan isian yang bertanda * sudah di lengkapi.</strong>
                <br />
                Saya setuju dengan ini, data yang sudah saya isikan diatas adalah data yang{" "}
                <strong>BENAR dan bisa DIPERTANGGUNGJAWABKAN.</strong>
              </p>
            </div>

            {/* Save Button */}
            <div className="flex justify-center pb-8">
              <Button
                onClick={handleSaveData}
                disabled={isLoading}
                className="bg-[#7C20A1] hover:bg-[#701a75] text-white px-8 py-3 rounded-lg font-medium min-w-[200px]"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Menyimpan...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Simpan Data
                  </div>
                )}
              </Button>
            </div>
            {/* Success Modal */}
            {showSuccessModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl p-8 max-w-sm mx-4 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Data Berhasil Disimpan</h3>
                  <Button
                    onClick={() => setShowSuccessModal(false)}
                    className="bg-[#7C20A1] hover:bg-[#701a75] text-white px-8 py-2 rounded-lg font-medium"
                  >
                    Simpan
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
