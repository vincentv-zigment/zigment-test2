import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import CTASection from '../ebook/CTASection';


type Props = {
  content: any
}

const MarkdownToHTML = ({ content }: Props) => {

  const renderers = {
    a: ({ node, children, href, ...props }: any) => {
      return <Link href={href}> {children} </Link>

    },
    img: ({ src, alt }: any) => (
      <Image src={src} alt={alt} width={100} height={100} className="w-full h-full" />
    ),
    customComponent: () => <CTASection />,
    strong:(props:any)=>{
      if(props.children[0] === 'CTA Section'){
        return <CTASection/> 
      }else{
        return <strong>{props.children[0]}</strong>
      }
    }

  };

  return (
    <div className='   
          px-4
          [&_p]:my-2
          [&_ul]:list-disc	
          [&_h1]:font-bold
          [&_h1]:md:text-3xl
          [&_h1]:text-2xl
          [&_h2]:font-semibold
          [&_h2]:md:text-2xl
          [&_h2]:text-xl
          [&_h2]:mt-5
          [&_ul]:pl-10
          [&_li]:p-1
          [&_table]:border
          [&_table]:border-black
          [&_table]:p-2
          [&_table]:py-4
          [&_table]:my-5
          [&_table]:mx-auto
          [&_tr]:border
          [&_tr]:border-black
          [&_tr]:p-2
          [&_td]:border
          [&_td]:border-black
          [&_td]:p-2
          [&_td]:text-center
          [&_th]:border
          [&_th]:border-black
          [&_th]:p-2
          font-mont 
        '>

      <ReactMarkdown
        children={content}
        components={renderers}
      />
    </div>
  )
}

export default MarkdownToHTML