'use client'

import { useEffect, useRef } from 'react'

type CertificateImageProps = {
  name: string
}

export default function CertificateImage({ name }: CertificateImageProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const image = new Image()
    image.src = '/assets/images/certificate-template.png' // put this in /public

    image.onload = () => {
      // Set canvas size to image size
      canvas.width = image.width
      canvas.height = image.height

      // Draw certificate background
      ctx.drawImage(image, 0, 0)

      if (name) {
        // Name styling
        ctx.font = 'bold 64px serif'
        ctx.fillStyle = '#1f2937' // dark slate
        ctx.textAlign = 'center'

        // Position name (adjust Y to match your template)
        ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 40)
      }
    }
  }, [name])

  const downloadCertificate = () => {
    if (!canvasRef.current) return

    const link = document.createElement('a')
    link.download = 'certificate.png'
    link.href = canvasRef.current.toDataURL('image/png')
    link.click()
  }

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} className="w-full rounded-xl border" />

      <button onClick={downloadCertificate} className="btn-primary w-fit" disabled={!name}>
        Download Certificate
      </button>
    </div>
  )
}
