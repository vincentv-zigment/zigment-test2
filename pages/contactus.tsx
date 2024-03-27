import bgimage from "@/assets/images/contactus/ils_08.svg";
import person1 from "@/assets/images/contactus/ils_08.1.svg";
import person2 from "@/assets/images/contactus/ils_08.2.svg";
import Image from "next/image";
import LandingPageLayout from "@/components/Layout/LandingPageLayout";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import Spinner from "@/components/common/Spinner";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { testimonies } from "@/lib/testimonial";

const inputStyle = `placeholder:text-gray-400
block w-full h-full  
border-2 border-x-transparent
border-t-transparent 
text-xl mb-2 px-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 font-medium focus:border-x-transparent focus:border-t-transparent focus:border-black 
placeholder:text-gray-400`;

type FormDataI = {
  name: string;
  email: string;
  companyName: string;
  description: string;
};

export default function Example() {
  const [formData, setFormData] = useState<FormDataI>({
    name: "",
    email: "",
    companyName: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormDataI>({
    name: "",
    email: "",
    companyName: "",
    description: "",
  });

  const [loading, setLoading] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
    // Reset the error when the user types again
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const handleValidation = () => {
    let isValid = true;
    const newErrors: any = {};

    // Validate each field (you can add your own validation logic)

    // Validate Name field
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate Email field
    // You can add your email validation logic here
    // For a simple example, checking if it's not empty
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    }

    // Validate Company Name field
    // You can add your company name validation logic here
    // For a simple example, checking if it's not empty
    if (formData.companyName.trim() === "") {
      newErrors.companyName = "Company Name is required";
      isValid = false;
    }

    // Validate Description field
    // You can add your description validation logic here
    // For a simple example, checking if it's not empty
    if (formData.description.trim() === "") {
      newErrors.description = "Description is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true)
    // Validate the form before submitting
    if (handleValidation()) {
      // Your form submission logic  
      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/cms/new-lead`, {
          name: formData.name,
          email: formData.email,
          company_name: formData.companyName,
          requirements: formData.description
        })
        console.log(res, 'res')
        setLoading(false)
        setIsSubmitted(true)
      } catch (error) {
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  };

  const [testimony, setTestimony] = useState(0)
  useEffect(() => {
    // Set up an interval that increments the `testimony` state
    const interval = setInterval(() => {
      setTestimony((currentValue) => {
        if (currentValue < testimonies.length - 1) {
          return currentValue + 1;
        } else {
          // Once the value reaches 3, clear the interval

          return 0; // Return current value to avoid further changes
        }
      });
    }, 3000); // Every 3 seconds

    // Clean up the interval when the component is unmounted or when `testimony` reaches 3
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <LandingPageLayout>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className=" w-full px-20  py-16 bg-brand-orange-deskibg">
            <h1 className="text-5xl font-bold text-gray-800">Less Effort.<br />  More Results. </h1>
            <p className="mt-4 text-gray-600">
              Unlock the power of Zigment to revolutionize your sales strategy, seamlessly integrating with platforms like Email, WhatsApp, SMS, Facebook, and Instagram.
            </p>
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800">Leverage Zigment's cutting-edge AI to:</h2>
              <ul className=" text-gray-600 mt-4 space-y-2 [&>li]:flex [&>li]:gap-2 [&>li]:items-center ">
                <li><IoIosCheckmarkCircleOutline className="text-brand-orange-deski" /> Engage across Email, WhatsApp, SMS, FB, IG with AI-driven conversations.</li>
                <li><IoIosCheckmarkCircleOutline className="text-brand-orange-deski" /> Broaden your audience with personalized, multi-platform content.</li>
                <li><IoIosCheckmarkCircleOutline className="text-brand-orange-deski" /> Simplify engagement with unified, automated messaging solutions.</li>
                <li><IoIosCheckmarkCircleOutline className="text-brand-orange-deski" /> Boost engagement and conversion with targeted strategies.</li>
              </ul>

            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800"> Ready to take the next step? Contact us at</h3>
              <p className="text-gray-800 font-semibold mt-4 flex items-center gap-2">
                <a href="tel:1800113123" className="block border border-black border-dashed rounded-md  w-fit px-4 py-1">
                  <span className="text-brand-orange-deski">US</span>{'  '}+1 669 215 4556</a>
                <a href="tel:18005253535" className="block border border-black border-dashed rounded-md  w-fit px-4 py-1">
                  <span className="text-brand-orange-deski">UK</span>{'  '}+44 7883 304762</a>
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-sm  text-gray-800">Or write to us at</h3>
              <p className="text-gray-600 mt-2 font-semibold">
                <a href="mailto:sales@zohocampaigns.com" className="block">10xsales@zigment.ai</a>
                <a href="mailto:support@zohocampaigns.com" className="block">support@zigment.ai</a>
              </p>
            </div>
            <div className="mt-8">
              <div className="flex items-center">
                <div className="bg-white p-8 shadow-lg">
                  <img src={testimonies[testimony]?.img} alt="Placeholder for a testimonial portrait" className="w-24 h-24 object-contain rounded-full" />
                  <p className="mt-4 font-semibold text-lg">
                    "{testimonies[testimony]?.testimony}"
                  </p>
                  <p className="mt-2 text-gray-800 font-semibold">{testimonies[testimony]?.name}</p>
                  <p className="text-gray-600 text-sm">{testimonies[testimony]?.designation}</p>
                  <div className="flex items-center gap-2 mt-4">
                    {testimonies.map((x, i) => <div onClick={() => setTestimony(i)} className={`block cursor-pointer rounded-full w-3 h-3 rounded-full ${i === testimony ? 'bg-brand-orange-deski' : 'bg-gray-400'} `}></div>)}
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className=" w-full  px-6  py-16">
            {isSubmitted ?
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-green-500 text-xl font-semibold mb-2">
                    Thank you for submitting the form!
                  </p>
                  <p className="text-gray-700">
                    We will get back to you as soon as possible.
                  </p>
                </div>
              </div>
              :
              <>
                {/* Form Component */}
                <form
                  action=""
                  className="
                    w-full max-w-lg mx-auto
                    
                    "
                >
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
                    It all starts here!
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className={errors.name ? "text-red-500" : "text-gray-400"}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={inputStyle}
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className={errors.email ? "text-red-500" : "text-gray-400"}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className={inputStyle}
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company_name"
                        className={
                          errors.companyName ? "text-red-500" : "text-gray-400"
                        }
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        placeholder="Enter your company name..."
                        className={inputStyle}
                        value={formData.companyName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="description"
                        className={
                          errors.description ? "text-red-500" : "text-gray-400"
                        }
                      >
                        Your Requirement
                      </label>
                      <input
                        type="text"
                        id="description"
                        placeholder="What are you looking for..."
                        className={inputStyle}
                        value={formData.description}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="my-10 block text-center px-10 border transition-all hover:bg-brand-orange-deski border-brand-orange-deski w-full py-3 rounded-md hover:text-white text-lg text-brand-orange-deski font-bold "
                  >
                    {loading ?
                      <div className="w-full flex items-center justify-center h-[28px]">
                        <Spinner color="white" />
                      </div>
                      :
                      'Submit'}
                  </button>
                </form>

              </>
            }



          </div>
        </div>
      </LandingPageLayout>
    </>
  );
}
