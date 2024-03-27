import LandingPageLayout from "@/components/Layout/LandingPageLayout";
import CategoriesButton from "@/components/integrations/CategoriesButton";
import SearchBar from "@/components/integrations/SearchBar";
import axiosWithoutAuth from "@/lib/axiosAPIwithoutAuth";
import { classNames } from "@/lib/common";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import { useEffect, useState } from "react";

type Props = {
  data: IntegrationDataI[];
};

export interface IntegrationDataI {
  id: string;
  app_name: string;
  logo_url: string;
  app_description: string;
  category: string
}


export async function getServerSideProps() {
  try {
    const getData = await axiosWithoutAuth.get(
      `/integration/public/fetch-all`
    );

    return {
      props: {
        data: getData.data,
      }
    };
  } catch (error) {
    console.error(error);
    return { props: { data: null } };
  }
}

const index = ({ data }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoryList, setCategoryList] = useState(
    data.map((x) => x.category.split(',')).flat().filter((x, i, arr) => arr.indexOf(x) === i)
  );
  const [integrationsList, setIntegrationsList] = useState(data)

  useEffect(() => {
    if (selectedCategory === null || selectedCategory === 'ALL') {
      setIntegrationsList(data)
    } else {
      setIntegrationsList(data.filter((x) => x.category.split(',').includes(selectedCategory)))
    }
  }, [selectedCategory])

  return (
    <LandingPageLayout>
      <Head>
        <title>Integrations</title>
        <meta
          name="description"
          content="Connect with third-party tools that you're already using"
        />
        <meta property="og:title" content="Integrations" />
        <meta
          property="og:description"
          content="Connect with third-party tools that you're already using"
        />
      </Head>
      <section className="  bg-white">
        <div className="max-w-5xl md:px-5 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between py-10 lg:py-14">
          <div className="flex gap-8 justify-between ">
            <div className="shrink-0  ">
              <button className="flex items-center gap-1 focus:ring-2 focus:ring-brand-orange-deski px-2 py-1">
                <h3 className="font-semibold text-xl w-fit">All Categories</h3>
              </button>
               
                <div className="mt-2 w-full flex flex-col">
                  <button
                    className={
                      classNames(selectedCategory === 'ALL' ? `bg-brand-orange-deskibg text-bold` : ``, `px-2 py-1 w-full hover:bg-brand-orange-deskibg text-left`)
                    }

                    onClick={() => {
                      setSelectedCategory('ALL')
                    }}>
                    All
                  </button>
                  {categoryList.map((x, __index__) => {
                    return (
                      <button
                        className={
                          classNames(selectedCategory === x ? `bg-brand-orange-deskibg text-bold` : ``, `px-2 py-1 w-full hover:bg-brand-orange-deskibg text-left`)
                        }
                        key={`${x.trim()}-integration-${__index__}`}
                        onClick={() => {
                          setSelectedCategory(x)
                        }}>
                        {x}
                      </button>
                    )
                  })}
                </div>
            </div>
            <div className="w-full max-w-2xl shrink-0">
              <div className="relative h-fit">

                <SearchBar />
              </div>
              <div className="grid grid-cols-2  gap-4">
                {integrationsList.map((x: IntegrationDataI, index__: number) => (
                  <div
                    className="w-full h-16	  cursor-pointer  p-2 border border-white hover:border-slate-100 hover:shadow-md rounded-md flex items-center gap-3 relative"
                    key={`${x.id}-integration-${index__}`}
                  >
                    <div className="w-12 h-12 p-2 border overflow-hidden border-slate-100 shrink-0 flex items-center justify-center">
                      <img
                        src={x.logo_url}
                        alt=""
                        className="w-full h-auto object-fit"
                      />
                    </div>
                    <div className=" ">
                      <h3 className="  font-semibold">{x.app_name}</h3>
                      <p className="text-sm text-gray-600">{x.app_description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </LandingPageLayout>
  );
};

export default index;
