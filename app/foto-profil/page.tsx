"use client"
import { useState, useRef } from "react"
import type React from "react"

import { AppSidebar } from "@/components/app-sidebar"
import { AppNavbar } from "@/components/app-navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { AlertTriangle, Upload, Camera, X } from "lucide-react"

export default function FotoProfilPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Silakan pilih file gambar yang valid")
        return
      }

      // Validate file size (1MB = 1048576 bytes)
      if (file.size > 1048576) {
        alert("Ukuran file maksimal 1 MB")
        return
      }

      setSelectedFile(file)

      // Create preview URL
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Silakan pilih file terlebih dahulu")
      return
    }

    setIsUploading(true)

    // Simulate upload process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsUploading(false)
    setShowSuccessModal(true)
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
      setPreviewUrl(null)
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleChooseFile = () => {
    fileInputRef.current?.click()
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
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Foto Profil</h1>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Upload Guidelines */}
            <div className="bg-orange-100 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div className="text-orange-800 dark:text-orange-200">
                  <p className="font-semibold mb-3">PERHATIAN! Silakan patuhi ketentuan upload foto berikut :</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Foto Resmi Berwarna : Kemeja Putih, berdasi (kecuali yg berhijab warna putih)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Berjas Almamater dengan background warna biru</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Resolusi foto 340x400 pixel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Ukuran file foto Max. 1 MB</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Upload Section */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl border-0 max-w-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                  <Camera className="w-6 h-6 text-[#7C20A1]" />
                  Foto Profil Mahasiswa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* File Upload Area */}
                <div>
                  <Label htmlFor="foto" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    File Foto
                  </Label>

                  {/* Preview Area */}
                  {previewUrl && (
                    <div className="mb-4 relative inline-block">
                      <img
                        src={previewUrl || "/placeholder.svg"}
                        alt="Preview"
                        className="w-32 h-40 object-cover rounded-lg border-2 border-gray-200 dark:border-gray-600"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleRemoveFile}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  )}

                  {/* File Input */}
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-[#7C20A1] transition-colors">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="foto"
                    />

                    {!selectedFile ? (
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto">
                          <Upload className="w-8 h-8 text-gray-400" />
                        </div>
                        <div>
                          <Button type="button" variant="outline" onClick={handleChooseFile} className="mb-2">
                            Choose File
                          </Button>
                          <p className="text-sm text-gray-500 dark:text-gray-400">No File Chosen</p>
                        </div>
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                          Drag and drop atau klik untuk memilih file
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{selectedFile.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                        <Button type="button" variant="outline" onClick={handleChooseFile} size="sm">
                          Ganti File
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Upload Button */}
                <div className="flex justify-center">
                  <Button
                    onClick={handleUpload}
                    disabled={!selectedFile || isUploading}
                    className="bg-[#7C20A1] hover:bg-[#701a75] text-white px-8 py-3 rounded-lg font-medium min-w-[150px]"
                  >
                    {isUploading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Uploading...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        Upload Foto
                      </div>
                    )}
                  </Button>
                </div>

                {/* Additional Information */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    <strong>Tips:</strong> Pastikan foto yang diupload sesuai dengan ketentuan di atas. Foto yang tidak
                    sesuai ketentuan akan ditolak dan harus diupload ulang.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
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
      </main>
    </div>
  )
}
