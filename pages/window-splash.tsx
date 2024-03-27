import { ProgressBar } from "react-loader-spinner";
import {BarLoader} from 'react-spinners'

export default function WindowSplashScreen() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <div className="flex h-full flex-col items-center justify-center  pt-16 pb-12">
          <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
            <div className="flex flex-shrink-0 justify-center">
                <img
                  className="h-10 w-auto"
                  src="https://cdn.zigment.ai/assets/zigment_logo_latest.svg"
                  alt=""
                />
            </div>
            <div className="py-16">
              <div className="text-center">
               
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl ">Loading...</h1>
                <p className="mt-6 text-lg text-black max-w-xs mx-auto">This should only take a sec! Thank you for your patience</p>
                
              </div>
               <div className="max-w-md w-fit mx-auto mt-6">
                    <BarLoader color="black" width={320} />
               </div>

            </div>
          </main>
    
        </div>
      </>
    )
  }
  