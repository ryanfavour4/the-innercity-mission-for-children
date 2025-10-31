'use client'
import BlogContentEditorBoard from '@/components/blog-content-editor-board'
import React, { useEffect, useState } from 'react'

export default function CreateBlogPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [content, setContent] = useState('')
  
  console.log(setContent)

  useEffect(() => {
    // Ensure component only runs on client
    setIsMounted(true)
  }, [])

  const handleSubmit = async () => {
    const post = {
      title,
      category,
      content,
      date: new Date().toISOString(),
    }

    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })

    alert('✅ Blog saved!')
  }

  if (!isMounted) return <div className="p-4 text-gray-500">Loading editor...</div>

  return (
    <div className="mx-auto max-w-4xl space-y-4 p-4">
      <h1 className="text-2xl font-bold">✍️ New Blog Post</h1>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog title"
        className="w-full rounded border p-2"
      />

      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="w-full rounded border p-2"
      />

      {/* Editor */}
      <BlogContentEditorBoard />

      {/* Preview */}
      <div className="border-t pt-4">
        <h2 className="mb-2 text-xl font-semibold">👀 Preview</h2>
        <div
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      {/* JSON View */}
      <details className="bg-gray-50 rounded p-2">
        <summary className="cursor-pointer font-medium">🧾 JSON Output</summary>
        <pre className="bg-gray-100 mt-2 overflow-x-auto rounded p-2 text-sm">
          {JSON.stringify({ title, category, content }, null, 2)}
        </pre>
      </details>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 text-white"
      >
        Save Blog
      </button>
    </div>
  )
}
