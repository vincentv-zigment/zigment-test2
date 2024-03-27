import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useRouter } from "next/router";
import React, { ChangeEvent, Fragment, useState } from "react";
import { MdClose } from "react-icons/md";
import validator from "validator";
import Spinner from "../common/Spinner";
import { EbookI } from "@/pages/ebook";


type Props = {
  data:EbookI
};

type FormDataI = {
  name: string;
  email: string;
};

const errorText = "text-xs mt-1 text-red-500";

const HeroSection = ({data}: Props) => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState<FormDataI>({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState<FormDataI>({
    name: "",
    email: "",
  });

  const router = useRouter();

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

    if(!validator.isEmail(formData.email)){
      newErrors.email = "Invalid Mail";
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
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/cms/new-lead`,
          {
            name: formData.name,
            email: formData.email,
            is_ebook: true,
            ebook_link: data.slug,
          }
        );
        console.log(res, "res");
        router.push('/ebook/thankyou')
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
      <section className="main-banner-sec  bg-brand-ebook-yellow ">
        <div className="w-full max-w-6xl mx-auto md:flex items-center pt-10 pb-16   px-5 md:px-10 xl:px-0 text-center md:text-left">
          <div className="md:mr-10">
            <h1 className="font-bold block text-2xl lg:text-4xl mb-5">
              <span className="text-lg font-semibold uppercase text-brand-ebook-orange block     pb-4">
                Free eBook
              </span>
              {data.title}
            </h1>
            <p
              data-positional-element-id="135"
              className="text-gray-600 font-medium py-2 lg:py-0 text-lg lg:text-sm"
            >
              {data.subheading}
            </p>
            <ul className="[&>li]:flex [&>li]:items-center [&>li]:items-center [&>li]:gap-2 text-lg   w-full  md:text-base	md:ml-2 text-gray-900 space-y-8 lg:space-y-4 w-fit mx-auto  mt-4 ">
              {data.pointers.map((x)=>{
                return (
                  <li>
                <CheckIcon className="w-5 h-5" />
                <span>{x}</span>
              </li>
                )
              })}
               
            </ul>
          </div>
          <button
            className="transition-all mt-10 lg:mb-10 inline-block w-60  py-3 text-xl font-normal text-white text-center bg-brand-ebook-orange hover:bg-white hover:text-brand-ebook-orange border border-brand-ebook-orange md:hidden"
            onClick={() => setOpen(true)}
          >
            Download Free Ebook
          </button>
          <div className="bg-white started-form py-10 px-6 rounded-lg hidden md:block h-fit items-center">
            <div className="">
              <h2 className="mb-3 text-3xl">Get Your Free Copy</h2>
              <div className=" w-80">
                <div
                >
                  <div className="space-y-6 mt-6 [&_input]:w-full">
                    <div className="h-12">
                      <div className="input">
                        <input
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          type="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className={errorText}>{errors.email}</div>
                    </div>
                    <div className="h-12">
                      <legend className="hs-field-desc hidden"></legend>
                      <div className="input">
                        <input
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className={errorText}>{errors.name}</div>
                    </div>
                    <div className="h-20">
                      {!isSubmitted && 
                        <button
                          className="transition-all w-full mt-6 inline-block w-60 h-12 text-xl font-normal text-white text-center bg-brand-ebook-orange hover:bg-white hover:text-brand-ebook-orange border border-brand-ebook-orange relative "
                          onClick={handleSubmit}
                        >
                          {
                            loading ? 
                            <span className="w-full block flex items-center justify-center">
                              <Spinner color=""/>
                            </span>
                            :
                            'Submit'
                          }
                        </button>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto my-auto -translate-y-1/2 top-1/3">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                  <div className="space-y-6 mt-6 [&_input]:w-full relative">
                    <button
                      className="p-1 absolute uppercase -top-8 -right-1"
                      onClick={() => setOpen(false)}
                    >
                      <MdClose />
                    </button>
                    <div className="ebook-form w-80">
                      <div
                        id="hbspt-form-750fb965-93d8-441c-b78d-6674ced631cf"
                        className="hbspt-form"
                        data-hs-forms-root="true"
                      >
                        <div className="space-y-6 mt-6 [&_input]:w-full">
                          <div className="hs_email hs-email hs-fieldtype-text field hs-form-field">
                      
                            <div className="input">
                              <input
                                id="email"
                                name="email"
                                placeholder="example@gmail.com"
                                type="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="">
                            <div className="input">
                              <input
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>

                          <div className="">
                            <div className=" hidden"></div>
                            <div className="actions">
                              <button
                                className="transition-all w-full mt-10 inline-block w-60 py-3 text-xl font-normal text-white text-center bg-brand-ebook-orange hover:bg-white hover:text-brand-ebook-orange border border-brand-ebook-orange"
                                onClick={handleSubmit}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                          <input name="hs_context" type="hidden" />
                        </div>
                      </div>
                    </div>
                    <input name="hs_context" type="hidden" />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default HeroSection;
