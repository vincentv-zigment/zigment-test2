import cloud from "@/assets/images/solutions/cloud.svg";
import quotes from "@/assets/images/solutions/quotes.svg";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import SwiperCore,{ Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SolutionSectionHeading from "./SolutionSectionHeading";

const imageStyle = "h-20  lg:h-48 object-contain object-center";

type Props = {
  testimonies: {
    img: any;
    name?: string;
    designation: string;
    testimony: string;
    id: number;
  }[];
  hideComp?:boolean
};

const swiperParams = {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 2000, // Adjust the delay as needed
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

export default function TestimonySection({ testimonies, hideComp }: Props) {
  SwiperCore.use([Autoplay])
  return (
    <section className="  bg-white py-16 lg:py-20 w-full overflow-hidden">
      <div className="relative mx-auto max-w-7xl w-full px-4   pb-12 sm:px-6 lg:px-8 ">
        <Image
          src={cloud}
          alt=""
          className="absolute w-[600px] top-20 bottom-1 -left-20"
        />
        <div className="relative lg:flex lg:items-center lg:justify-centers w-full ">
          <div className="hidden lg:flex w-1/2 lg:flex-shrink-0   justify-center ">
            <SolutionSectionHeading className=" leading-tight  ">
              Our
              <span className="block my-4">Customers</span>
              Love us
            </SolutionSectionHeading>
          </div>

          <div className="relative   w-full shrink overflow-hidden">
            <h3 className="text-6xl md:text-9xl font-black md:text-center z-20 relative text-slate-200">
              Feedback
            </h3>
            <Image className="w-[75px] my-10" alt="" src={quotes} />
            <div className="">
              <Swiper
                loop={true}
                navigation={{
                  nextEl: ".next",
                  prevEl: ".prev",
                }}
                modules={[Navigation, Autoplay]}
                speed={4000}
                autoplay={{
                  delay: 10,
                  disableOnInteraction: false,
                }}
                className="mySwiper h-[300px] md:max-w-sm lg:max-w-lg mx-auto"
              >
                {testimonies.map((x) => (
                  <SwiperSlide key={`testimony_id_${x.id}`}>
                    <div className="text-2xl font-medium leading-9 text-gray-900 p-2">
                      <p>{x.testimony}</p>
                    </div>
                    <footer className="mt-8">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0    ">
                          <Image
                            className="h-12 w-12 rounded-full object-contain"
                            src={x.img}
                            width={100}
                            height={100}
                            alt=""
                          />
                        </div>
                        <div className="ml-4 lg:ml-0">
                          <div className="text-base font-medium text-gray-900">
                            {x.name}
                          </div>
                          <div className="text-base font-medium text-brand-orange-deski">
                            {x.designation}
                          </div>
                        </div>
                      </div>
                    </footer>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="relative flex gap-1 mt-2 hidden">
              <div className="inline-block prev cursor-pointer">
                <ArrowLeftIcon className="w-6 " />
              </div>
              <div className="inline-block next   cursor-pointer">
                <ArrowRightIcon className="w-6" />
              </div>
            </div>
          </div>
        </div>
        {!hideComp  && 

        <>
          <div className="md:hidden mt-10">
            <Swiper
                loop={true}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              slidesPerView={3}
              speed={2000}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src={"https://cdn.zigment.ai/assets/bs-logo-2x.webp"}
                  alt=""
                  width={200}
                  height={200}
                  className={imageStyle}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"https://cdn.zigment.ai/assets/1balance.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className={imageStyle}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"https://cdn.zigment.ai/assets/curejoy_logo.jpeg"}
                  alt=""
                  width={100}
                  height={100}
                  className={imageStyle}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"https://cdn.zigment.ai/assets/noveivf.jpg"}
                  alt=""
                  width={100}
                  height={100}
                  className={imageStyle}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"https://cdn.zigment.ai/assets/unigage_logo.jpeg"}
                  alt=""
                  width={200}
                  height={200}
                  className={imageStyle}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=" hidden md:flex flex-wrap md:flex-nowrap items-center justify-center mt-10 gap-2 lg:gap-10 relative z-10 ">
            <Image
              src={"https://cdn.zigment.ai/assets/bs-logo-2x.webp"}
              alt=""
              width={200}
              height={200}
              className={imageStyle}
            />

            <Image
              src={"https://cdn.zigment.ai/assets/1balance.svg"}
              alt=""
              width={100}
              height={100}
              className={imageStyle}
            />

            <Image
              src={"https://cdn.zigment.ai/assets/curejoy_logo.jpeg"}
              alt=""
              width={100}
              height={100}
              className={imageStyle}
            />
            <Image
              src={"https://cdn.zigment.ai/assets/noveivf.jpg"}
              alt=""
              width={100}
              height={100}
              className={imageStyle}
            />

            <Image
              src={"https://cdn.zigment.ai/assets/unigage_logo.jpeg"}
              alt=""
              width={200}
              height={200}
              className={imageStyle}
            />
          </div>
        </>
        
        }

      </div>
    </section>
  );
}
