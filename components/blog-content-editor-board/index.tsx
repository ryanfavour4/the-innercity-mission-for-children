'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const BlogContentEditorBoard = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none border w-full bg-white !w-full md:min-h-96 rounded-sm !text-base blog-content-editor-board p-4 border-textcolor/25 h-full min-h-48 active:none focus:none',
      },
    },
  })

  return <EditorContent editor={editor} />
}

export default BlogContentEditorBoard

export const ClassNaming = () => {
  return (
    <div className="">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur reprehenderit autem magnam
      nemo, tenetur reiciendis consectetur itaque velit, dolores cupiditate doloribus dignissimos
      voluptates labore ex quo. Porro nulla alias dolore?
    </div>
  )
}
