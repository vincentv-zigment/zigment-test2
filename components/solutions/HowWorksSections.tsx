import img15 from "@/assets/images/solutions/howworks/InitialOnboarding.svg";
import img16 from "@/assets/images/solutions/howworks/Integrationprocess.svg";
import img17 from "@/assets/images/solutions/howworks/SeeMagicinRealtime.svg";
import Image from "next/image";
import SolutionSectionHeading from "./SolutionSectionHeading";


type Props = {
  howworks: { title: string; description: string; imageUrl: any }[];
  heading?: string;
};

export default function HowWorksSections({
  howworks,
  heading = "Getting Started Is Easy",
}: Props) {
  return (
    <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <SolutionSectionHeading>

            {heading}
          </SolutionSectionHeading>
        </div>
        <div className="mx-auto mt-12 grid md:px-10 max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {howworks.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden text-center  "
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-48 mx-auto object-fit"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <div className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
