
// import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";
import { useState, useMemo } from 'react';


// const extensions = [
//   BaseKit.configure({
//     placeholder: {  
//       showOnlyCurrent: true, 
//     },    

//     characterCount: {  
//       limit: 50_000,  
//     },  
//   }),
// ];

export default function RichTextEditor({value, onChange, className}) {
  // const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);
  // const [value, setValue] = useState('ddd');
  return null
  // return(
  //   <ReactQuill theme="snow" value={value} 
  //     onChange={(e)=>onChange(e)} className={className}/>
  // )
}
// function RichTextEditor3({value, onChange, className}) {
//   return(
//     <RichEditor
//       output='html'
//       content={value}
//       onChangeContent={onChange}
//       extensions={extensions}
//     />
//   )
// }


// function RichTextEditor2({value, onChange, className}) {
    
//     const editor = useEditor({
//       // extensions: [StarterKit.configure({
//       //   heading: {
//       //     levels: [1, 2, 3],
//       //   },
//       // })],
//       extensions: [
//         StarterKit.configure({
//           heading: true, 
//         }),
//         Heading.configure({
//           levels: [1, 2, 3],
//         }),
//       ],
//       extensions: [
//         Document,
//         Paragraph,
//         Text,
//         Heading.configure({
//           levels: [1, 2, 3],
//         }),
//       ],
      
//       value,
//       onUpdate({ editor }) {
//         onChange(editor.getHTML()); 
//       },
//     });
//     return(
//       <div className='h-fit '>
//               <div className="flex flex-wrap gap-2 mb-3">
//         <button
//           onClick={() => editor?.chain().focus().toggleBold().run()}
//           className={`px-2 py-1 border rounded ${
//             editor?.isActive('bold') ? 'bg-gray-200' : ''
//           }`}
//         >
//           Bold
//         </button>

//         <button
//           onClick={() => editor?.chain().focus().toggleItalic().run()}
//           className={`px-2 py-1 border rounded ${
//             editor?.isActive('italic') ? 'bg-gray-200' : ''
//           }`}
//         >
//           Italic
//         </button>

//         <button
//           onClick={() => editor?.chain().focus().toggleUnderline().run()}
//           className={`px-2 py-1 border rounded ${
//             editor?.isActive('underline') ? 'bg-gray-200' : ''
//           }`}
//         >
//           Underline
//         </button>

//         <button
//           onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
//           className={`px-2 py-1 border rounded ${
//             editor?.isActive('heading', { level: 1 }) ? 'bg-gray-200' : ''
//           }`}
//         >
//           H1
//         </button>

//         <button
//           onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
//           className={`px-2 py-1 border rounded ${
//             editor?.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''
//           }`}
//         >
//           H2
//         </button>

//         <button
//           onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
//           className={`px-2 py-1 border rounded ${
//             editor?.isActive('heading', { level: 3 }) ? 'bg-gray-200' : ''
//           }`}
//         >
//           H3
//         </button>

//         <button
//           onClick={() => editor?.chain().focus().setParagraph().run()}
//           className={`px-2 py-1 border rounded ${
//             editor?.isActive('paragraph') ? 'bg-gray-200' : ''
//           }`}
//         >
//           Paragraph
//         </button>
//       </div>

//       <EditorContent editor={editor} className={className +' editor'}/>
//       </div>
//     )
// }
