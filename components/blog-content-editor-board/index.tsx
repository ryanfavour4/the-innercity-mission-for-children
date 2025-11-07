'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuFormatting from './menu-formatting'

const BlogContentEditorBoard = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'prose focus:outline-none border bg-white md:min-h-96 rounded-sm p-4 border-textcolor/25 h-full min-h-48 active:none focus:none',
      },
    },
  })

  return (
    <>
      <MenuFormatting editor={editor} />
      <EditorContent editor={editor} />
    </>
  )
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
