import bgimage from "@/assets/images/contactus/ils_08.svg";
import person1 from "@/assets/images/contactus/ils_08.1.svg";
import person2 from "@/assets/images/contactus/ils_08.2.svg";
import Image from "next/image";
import LandingPageLayout from "@/components/Layout/LandingPageLayout";
import { ChangeEvent, useState } from "react";
import Spinner from "@/components/common/Spinner";
import axios from "axios";

const inputStyle = `placeholder:text-gray-400
block w-full h-full  
border-2 border-x-transparent
border-t-transparent 
text-xl mb-2 px-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 font-medium focus:border-x-transparent focus:border-t-transparent focus:border-black 
placeholder:text-gray-400`;

type FormDataI = {
  name: string;
  email: string;
  skillset: string;
  description: string;
};

export default function Example() {
  const [formData, setFormData] = useState<FormDataI>({
    name: "",
    email: "",
    skillset: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormDataI>({
    name: "",
    email: "",
    skillset: "",
    description: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

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
    if (formData.skillset.trim() === "") {
      newErrors.skillset = "Company Name is required";
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
    setLoading(true);
    // Validate the form before submitting
    if (handleValidation()) {
      // Your form submission logic
      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/cms/new-lead`,
          {
            name: formData.name,
            email: formData.email,
            skill_set: formData.skillset,
            tell_us_about_yourself: formData.description
          })
        setLoading(false);
        setIsSubmitted(true);
      } catch (error) {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <LandingPageLayout>
        <div className="flex flex-col lg:flex-row">
          <div className="h-[400px] md:h-full md:min-h-screen flex flex-col relative justify-end  bg-gray-100 w-full  ">
            <div className="text-xl md:text-3xl text-center md:mt-10 absolute inset-x-0 mx-auto top-10">
              <p>AI is disrupting "every" industry.</p>
              <p>Let us get ahead of the curve, together!</p>
            </div>
            <div className="relative">
              <div className="flex items-center absolute bottom-0">
                <Image src={person1} className="w-6/12 left-0" alt="" />
                <Image src={person2} className="w-4/12" alt="" />
              </div>
              <Image
                src={bgimage}
                alt=""
                className="w-full px-10 "
                width={200}
              />
            </div>
          </div>
          <div className="  w-full px-6  py-16">

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
                  <div
                    className="
                            space-y-6"
                  >
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
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="skillset"
                        className={
                          errors.skillset ? "text-red-500" : "text-gray-400"
                        }
                      >
                        Skillset
                      </label>
                      <input
                        type="text"
                        id="skillset"
                        placeholder="Enter your skills..."
                        className={inputStyle}
                        value={formData.name}
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
                        Tell Us about yourself
                      </label>
                      <input
                        type="text"
                        id="description"
                        placeholder="Tell Us about yourself..."
                        className={inputStyle}
                        style={{ outline: "none" }}
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="my-10 block text-center px-10 border transition-all hover:bg-brand-orange-deski border-brand-orange-deski w-full py-3 rounded-md hover:text-white text-lg text-brand-orange-deski font-bold "
                  >
                    {loading ? (
                      <div className="w-full flex items-center justify-center h-[28px]">
                        <Spinner color="white" />
                      </div>
                    ) : (
                      "Submit"
                    )}
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
