import LandingPageLayout from '@/components/Layout/LandingPageLayout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export type EbookI = {
  _id: string;
  slug: string;
  title: string;
  cover_image: string;
  subheading:string;
  pointers:string[];
  ebookpros:{
    img?:any, 
    description:string, 
    icon?:any 
  }[],
  summary:{
    title:string,
    description:string
  }
}

type Props = {
  data: EbookI[]
}



export const ebookData:EbookI[] = [
  {
    _id:'1',
    title:"6 AI Strategies To Skyrocket Your Coaching Business On Instagram Even If You Are An AI Novice!",
    slug:'6-AI-Strategies-To-Skyrocket-Your-Coaching-Business-On-Instagram',
    cover_image: 'https://cdn.zigment.ai/assets/1705484745-Ebook3D.png',
    subheading:'Are you a Coach, Creator or an Influencer wondering how you can utilize AI or GPT for your business?',
    pointers:[
      'Convert 5x more leads', 
      'Use AI to speed up your content game',
      'Put your Instagram on auto-pilot'
    ],
    ebookpros:[
      {
        description:`Easy hacks which you can implement today with little or no
        investment`,
        icon:'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.53 7.43c.42-.31.93-.47 1.54-.47s1.11.16 1.5.49c.39.32.65.7.79 1.12l1.89-.8c-.24-.71-.71-1.35-1.4-1.92-.5-.4-1.12-.65-1.85-.77V3h-2v2.11c-.41.08-.79.21-1.14.39-.35.18-.64.39-.9.63l1.43 1.43c.04-.04.09-.09.14-.13zM2.81 2.81 1.39 4.22l12.35 12.35c-.43.28-.95.43-1.55.43-.71 0-1.32-.23-1.83-.7-.5-.47-.86-1.07-1.06-1.81l-1.98.8c.34 1.17.95 2.08 1.83 2.73.57.42 1.19.68 1.85.83V21h2v-2.08c.44-.07.87-.17 1.29-.35.34-.14.64-.32.92-.53l4.57 4.57 1.41-1.41L2.81 2.81z"></path></svg>'
      },
      {
        description:`Get familiar with AI and its applications for your
        business`,
        icon:'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z"></path><path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"></path></svg>'
      },
      {
        description:`Learn how to implement and connect your CRMs with AI
        funnels`,
        icon:'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M267.4 211.6c-25.1 23.7-40.8 57.3-40.8 94.6 0 29.3 9.7 56.3 26 78L203.1 434c-4.4-1.6-9.1-2.5-14-2.5-10.8 0-20.9 4.2-28.5 11.8-7.6 7.6-11.8 17.8-11.8 28.6s4.2 20.9 11.8 28.5c7.6 7.6 17.8 11.6 28.5 11.6 10.8 0 20.9-3.9 28.6-11.6 7.6-7.6 11.8-17.8 11.8-28.5 0-4.2-.6-8.2-1.9-12.1l50-50.2c22 16.9 49.4 26.9 79.3 26.9 71.9 0 130-58.3 130-130.2 0-65.2-47.7-119.2-110.2-128.7V116c17.5-7.4 28.2-23.8 28.2-42.9 0-26.1-20.9-47.9-47-47.9S311.2 47 311.2 73.1c0 19.1 10.7 35.5 28.2 42.9v61.2c-15.2 2.1-29.6 6.7-42.7 13.6-27.6-20.9-117.5-85.7-168.9-124.8 1.2-4.4 2-9 2-13.8C129.8 23.4 106.3 0 77.4 0 48.6 0 25.2 23.4 25.2 52.2c0 28.9 23.4 52.3 52.2 52.3 9.8 0 18.9-2.9 26.8-7.6l163.2 114.7zm89.5 163.6c-38.1 0-69-30.9-69-69s30.9-69 69-69 69 30.9 69 69-30.9 69-69 69z"></path></svg>'
      },
    ],
    summary:{
      title:`AI Strategies For Your Coaching business on Instagram`,
      description:`Are you a Health / wellness coach, Business coach, Influencer,
      Spiritual counselor, Technical coach, Mindset mentor, Fitness
      trainer or running any type of coaching community on Instagram
      looking at increasing business revenue by adopting the AI or GPT
      in your business? We will walk you through the best strategies
      that will take your Coaching business to the next level. You
      will be provided with clear strategies to implement AI systems
      and tools that will surely improve your conversions and increase
      your revenue. Download this eBook to learn these AI strategies
      now!`
    }

  }
]

export async function getServerSideProps() {
  try {
    const getData = ebookData ;

    return { props: { data: getData } };
  } catch (error) {
    console.error(error);
    return { props: { data: null } };
  }
}

const index = ({ data }: Props) => {
  return (
    <LandingPageLayout>
      <Head>
        <title>Zigment.ai - Ebook </title>
        <meta name="description" content="Unlock successful conversational sales with our exclusive Ebook" />
        <meta property="og:title" content="Zigment.ai - Ebook" />
        <meta property="og:description" content="Unlock successful conversational sales with our exclusive Ebook" />
      </Head>
      <section className=' bg-slate-100'>
        <div className='mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-12 w-full'>
          <h2 className='text-xl text-brand-orange-deski uppercase font-medium'>Free Ebooks</h2>
          <div className='mt-6   gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            {/* Card */}
            {data.map((x,i)=>{
              return (
                <Link href={`/ebook/${x.slug}`} className='w-full	overflow-hidden  rounded-md  drop-shadow-md hover:drop-shadow-lg cursor-pointer bg-white group hover:scale-[102%] transition-all hover:z-10' key={x._id}>
                  <div className='h-36 p-2 w-full'>
                    <Image 
                      width={100} 
                      height={100} 
                      src={x.cover_image} 
                      alt={x.title} 
                      className=' h-full object-contain mx-auto'
                    />
                  </div>
                  <div className='p-4 '>
                    <h4 className='w-full font-medium underline underline-offset-2 group-hover:no-underline	transition-all'>6 AI Strategies To Skyrocket Your Coaching Business On Instagram Even If You Are An AI Novice!</h4>
                    <p className='text-xs mt-2 underline group-hover:no-underline underline-offset-2 transition-all'>Are you a Coach, Creator or an Influencer wondering how you can utilize AI or GPT for your business?</p>
                    <button className='text-slate-500 mt-4 underline group-hover:no-underline text-sm font-medium transition-all'>Ebook</button>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </LandingPageLayout>
  )
}

export default index