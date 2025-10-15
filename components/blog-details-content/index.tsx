import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type BlogContentProps = {
  content: string
}

export const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  // ✅ Detect if it's HTML (very simple check)
  const isHTML = /<\/?[a-z][\s\S]*>/i.test(content.trim())

  if (isHTML) {
    // ✅ Render HTML safely
    return (
      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
    )
  }

  // ✅ Else, render as Markdown
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      // className="prose prose-lg max-w-none"
    >
      {content}
    </ReactMarkdown>
  )
}
