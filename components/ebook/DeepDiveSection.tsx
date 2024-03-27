import { EbookI } from "@/pages/ebook";

type Props = {
  data: EbookI;
};
 

const DeepDiveSection = ({ data }: Props) => {
  return (
    <>
      <section className="">
        <section className="">
          <div className=" w-full max-w-6xl mx-auto  mx-auto  pt-8 pb-12     px-5   md:px-10 xl:px-0 ">
            <div className="  md:flex gap-10 items-center">
              <div className="  relative">
                <div className=" px-12 md:px-4 md:w-[200px] lg:w-[240px]  lg:relative ">
                  <img
                    src={data.cover_image}
                    alt="How B2B Retailers are using B2C Strategies for Growth ebook"
                    data-ll-status="loaded"
                    className="md:absolute -top-52 right-2"
                  />
                </div>
              </div>
              <div className="  px-2">
                <h3 className="text-xl text-gray-600 text-center md:text-left sm:text-2xl mt-4 tracking-tight	font-poppins">
                  This eBook will acquaint you with
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 [&>div]:px-6 [&>div]:py-2  md:[&>div]:p-2 [&_img]:my-5 [&_p]:text-gray-600  ">
                  {data.ebookpros.map((x) => {
                    return (
                      <div className="text-center   md:text-left ">
                        <div className="w-20 h-20 mx-auto md:mx-0 my-8 rounded-full flex items-center justify-center  border   grayscale bg-white overflow-hidden drop-shadow-md">
                        {
                          x.icon && 
                          <div dangerouslySetInnerHTML={{ __html: x.icon }} className="[&_svg]:w-1/2 flex items-center justify-center text-gray-500" />
                        } 
                        {
                          x.img && 
                          <img src={x.img} className="w-1/2 h-1/2 flex items-center justify-center text-gray-500"/>
                        } 
                        </div>
                        <p data-positional-element-id="139">{x.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="launch-sec w-full mb-10 w-full max-w-6xl mx-auto  mx-auto  md:py-10  p-5 md:px-10 xl:px-0">
          <div className="">
            <div className="text-sm mt-16 text-gray-600 mx-auto max-w-4xl">
              <h2 className="md:leading-normal  text-center text-xl md:text-4xl">
                <span className="font-bold block">{data.summary.title}</span>{" "}
                {data.summary.description}
              </h2>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default DeepDiveSection;
