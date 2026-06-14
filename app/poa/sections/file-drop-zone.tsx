import { useRef, useState } from 'react'

export function FileDropZone({ onChange }: { onChange: (file: File | null) => void }) {
  const [isDragActive, setIsDragActive] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Handle drag states
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true)
    } else if (e.type === 'dragleave') {
      setIsDragActive(false)
    }
  }

  // Handle dropped file
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0])
    }
  }

  // Handle clicked file upload
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    onChange(e.target.files?.[0] ?? null)
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0])
    }
  }

  // Programmatically trigger hidden input click
  const onButtonClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="mx-auto w-full">
      {/* --- THE DROP ZONE BOX --- */}
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
        className={`group relative flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center transition-all duration-200 ${
          isDragActive
            ? 'bg-blue-50/50 scale-[0.99] border-blue-500'
            : 'bg-gray-50/50 hover:bg-gray-50 border-gray-300 hover:border-gray-400'
        } `}
      >
        {/* Hidden Native File Input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple={false}
          accept=".jpg,.jpeg,.png,.gif,.webp"
          onChange={handleChange}
          className="hidden"
        />

        {/* Upload Icon */}
        <div className="mb-4 text-3xl transition-transform duration-200 group-hover:-translate-y-0.5">
          {uploadedFile ? '📄' : '📁'}
        </div>

        {/* Main Text Content */}
        {uploadedFile ? (
          <div className="w-full max-w-xs truncate">
            <p className="text-sm font-semibold text-gray-800">Ready to upload:</p>
            <p className="mt-0.5 truncate text-xs font-medium text-blue-600">{uploadedFile.name}</p>
            <p className="mt-1 text-[10px] text-gray-400">
              ({(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB)
            </p>
          </div>
        ) : (
          <div>
            <p className="text-sm font-semibold text-gray-700">
              Drag & drop your file here, or{' '}
              <span className="text-blue-600 group-hover:underline">browse</span>
            </p>

            {/* Allowed file formats */}
            <p className="mt-1 text-xs text-gray-500">Supports: JPG, PNG, GIF, or WEBP</p>

            {/* --- MAXIMUM MB SUBTEXT --- */}
            <p className="mt-3 text-[11px] font-medium uppercase tracking-wide text-gray-400">
              Maximum file size: 5MB
            </p>
          </div>
        )}
      </div>

      {/* Optional Reset Button */}
      {uploadedFile && (
        <div className="mt-3 text-right">
          <button
            onClick={() => setUploadedFile(null)}
            className="text-xs font-medium text-red-500 hover:text-red-600 hover:underline"
          >
            Clear file
          </button>
        </div>
      )}
    </div>
  )
}
