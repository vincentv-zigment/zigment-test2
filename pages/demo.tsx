// import CustomSelect4 from "@/components/app-ui/flow-editor/common/CustomSelect4";
import Spinner from "@/components/common/Spinner";
// import Placeholder from "@/components/demopage/Placeholder";
import { useToast } from "@/components/hooks/useToast";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import validator from "validator";

const bioData = {
  name: 'Zigment AI',
  username: 'zigment.ai',
  url: 'https://zigment.ai',
  titleImg: true,
  avatar: 'https://cdn.zigment.ai/assets/zigment.svg',
  avatarImg: 'https://cdn.zigment.ai/assets/zigment.svg',
  nftAvatar: true,
  description: 'Conversational AI Platform For Sales Optimization ',
  subdesc: 'A Futuristic Upgrade For Your Sales Funnel',
  companyName: 'Zigment.AI',
  footerURL: 'https://zigment.ai',
  footerText: 'Powered by'
};

const countryCodesToLocale = {
  '+91': 'en-IN', // India
  '+1': ['en-US', 'en-CA', 'fr-CA'],  // USA and Canada
  '+44': 'en-GB', // United Kingdom
  '+49': 'de-DE', // Germany
  '+33': 'fr-FR', // France
  '+971': 'ar-AE', // United Arab Emirates (Dubai)
  '+31': 'nl-NL', // Netherlands
  '+61': 'en-AU', // Australia
  '+63': 'en-PH', // Philippines (English)
  '+55': 'pt-BR', // Brazil
  '+46': 'sv-SE'  // Sweden
}

function isValidPhoneWithCountryCode(phone:string) {
  const normalizedPhone = phone.trim().replace(/[\s-]/g, '');
  if (!normalizedPhone.startsWith('+')) {

    console.log(normalizedPhone.startsWith('+'), 'normalizedPhone.startsWith('+')')

    return false; // Does not start with a '+' sign, indicating missing country code
  }

  // Attempt to match the phone number with one of the known country codes
  for (const [code, locale] of Object.entries(countryCodesToLocale)) {
    if (normalizedPhone.startsWith(code)) {
      // Check if the remainder of the phone number is valid for the determined locale(s)
      if (Array.isArray(locale)) {
        return locale.some(loc => validator.isMobilePhone(normalizedPhone, loc as any));
      } else {
        return validator.isMobilePhone(normalizedPhone, locale as any);
      }
    }
  }

  // No matching country code found or phone number format is invalid
  return false;
}

type SocialMediaLink = {
  title: string;
  url: string;
  icon: string;
};

type StateLinks = {
  id: string;
  title: string;
  links: SocialMediaLink[];
};

const useStateLinks: StateLinks[] = [
  {
    id: 'zigment_sales_agent',
    title: 'Zigment Sales Agent',
    links: [
      // {
      //   title: 'Whatsapp',
      //   url: 'https://zigment.ai',
      //   icon: 'https://cdn.zigment.ai/assets/WhatsApp.svg.webp',
      // },
      {
        title: 'Instagram',
        url: 'https://ig.me/m/zigment.ai',
        icon: 'https://cdn.zigment.ai/assets/Instagram_logo_2016.svg',
      },
      {
        title: 'Messenger',
        url: 'https://fb.me/zigment',
        icon: 'https://cdn.zigment.ai/assets/1708945988-Facebook_Messenger_logo_2020.svg',
      }
    ]
  }

]


const Links = () => {
  const {
    name,
    titleImg,
    avatarImg,
    description,
    subdesc,
    footerText,
    footerURL,
    companyName,
  } = bioData;



  const [selectedUseCase, setSelectedUseCase] = useState<string>('zigment_sales_agent');
  const [filteredList, setFilteredList] = useState<SocialMediaLink[]>([]);
  const { addToast } = useToast()
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [formData, setFormData] = useState({ email: '', companyName: '', full_name: '', phone: '' });
  const [errors, setErrors] = useState({
    full_name: false,
    email: false,
    companyName: false,
    phone: false,
  });

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const filter = useStateLinks.filter(x => x.id === selectedUseCase)
    if (filter.length === 0) return
    setFilteredList(filter[0].links)
  }, [selectedUseCase])
  const handleValidation = () => {
    let isValid = true;
    const newErrors: any = {};

    // Validate each field (you can add your own validation logic)

    // Validate Name field
    if (formData.full_name.trim() === "") {
      newErrors.full_name = true;
      isValid = false;
    }


    // Validate Company Name field
    // You can add your company name validation logic here
    // For a simple example, checking if it's not empty
    if (formData.companyName.trim() === "") {
      newErrors.companyName = true;
      isValid = false;
    }

    if (!validator.isEmail(formData.email.trim())) {
      addToast('error', 'Email is not in Correct format')
      newErrors.email = true;
      isValid = false;
    }



    const phoneValidator  = isValidPhoneWithCountryCode(formData.phone)

    if (!phoneValidator) {
      addToast('error', 'Phone Number is not in Correct format')
      newErrors.phone = true;
      isValid = false;
    }



    setErrors(newErrors);
    if (!isValid) addToast('error', 'Please fill all the Details')
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
          name: formData.full_name,
          email: formData.email,
          company_name: formData.companyName,
          phone: formData.phone
        })
        console.log(res, 'res')
        setLoading(false)
        setEmailSubmitted(true)

      } catch (error) {
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  };

  return (
    <div style={{
      background: `url('/bg.png') no-repeat`,
      backgroundSize: '100%',
      backgroundPosition: '-50vh 10%',
      backgroundAttachment: 'fixed',
      backgroundColor: 'black',
    }}

    >
      {
        emailSubmitted ?
          <div className="min-h-screen flex bg-brand-orange-deski/10   text-white flex-col justify-between items-center text-center p-6">
            <div>
              <div className="flex flex-col items-center    ">
                <div className="h-16 w-16   rounded-full bg-white   p-2">

                  <img src={avatarImg} alt="Avatar" className={`w-full h-full rounded-full`} />
                </div>
                <div className="flex flex-col items-center">
                  {titleImg ? (
                    <img src={'/2.png'} alt="Title" className="w-36  my-4" />
                  ) : (
                    <h1 className="text-4xl font-bold">{name}</h1>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-center">
                {description && <h1 className="text-xl leading-9 font-medium">{description}</h1>}
                {subdesc && <h4 className="text-lg mt-2.5">{subdesc}</h4>}
              </div>

              <div>
                {/* Social Icons */}
                <div className="flex justify-center items-center gap-2 mt-4">
                  <div className="w-64 text-black">
                    {/* <CustomSelect4
                      val={selectedUseCase}
                      setVal={(val) => setSelectedUseCase(val)}
                      list={
                        useStateLinks.map((x) => {
                          return {
                            id: x.id,
                            value: x.id, label: x.title
                          };
                        })
                      }
                    /> */}
                  </div>
                </div>

                {/* Install Section */}
                {filteredList && (
                  <div className="mt-4 max-w-sm w-full mx-auto mb-4">
                    <div className="text-sm uppercase tracking-wider  bg-gradient-to-r from-amber-500 to-pink-500 font-medium text-white py-2 rounded-md">Try on</div>
                    <div className="space-y-4 mt-4">
                      {filteredList.map((x: any) => {
                        return (
                          <div className="py-3 px-4 border border-white/20  cursor-pointer flex items-center rounded-lg justify-between   transition-all duration-300 group custom-gradient-hover hover:border-transparent relative overflow-hidden"
                            onClick={() => {
                              window.open(x.url, '_blank')
                            }}>
                            <div className="block   absolute inset-x-0 mx-auto w-3/4 opacity-0 group-hover:opacity-100 group-hover:w-full h-full z-10  from-fuchsia-600/5  bg-gradient-to-r   to-pink-600/5 transition-all duration-300">

                            </div>
                            <div className="flex items-center gap-4 ">
                              <Image src={x.icon} alt={x.title} width={100} height={100} className="w-8 h-8" />
                              <span className="font-medium">{x.title}</span>
                            </div>
                            <button className="group-hover:text-brand-orange-deski transition-all  "><MdOutlineArrowOutward /></button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-10">
              <div className="text-base font-medium">
                <h4>{footerText} <span onClick={() => {
                  window.open(footerURL, '_blank')
                }} className="opacity-70 cursor-pointer hover:opacity-100 transition-opacity duration-300">{companyName}</span></h4>
              </div>
            </div>
          </div>
          :
          <>
            <div className="fixed inset-x-0 bottom-1/2 translate-y-1/2 mx-auto bg-white h-fit  border border-gray-200 overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl  sm:my-8 sm:w-full sm:max-w-lg sm:p-6 z-20">

              <div className="sm:flex w-full sm:items-start">

                <div className="mt-3  text-center w-full sm:mt-0 sm:text-center">
                  <h3 className="text-xl font-medium leading-6 text-gray-900">
                    Your Sneak Peek: Exclusive Demo Access
                  </h3>
                  <div className="mt-8  w-full space-y-4">
                    <input
                      type="text"
                      value={formData.companyName}
                      name="companyName"
                      className={`block w-full rounded-md    shadow-sm focus:border-brand-orange-deski focus:ring-brand-orange-deski sm:text-sm ${errors.companyName && 'border-red-800 ring-1 ring-red-500'}`}
                      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                      placeholder="Company Name..."
                    />
                    <input
                      type="text"
                      value={formData.full_name}
                      name="full_name"
                      className={`block w-full rounded-md    shadow-sm focus:border-brand-orange-deski focus:ring-brand-orange-deski sm:text-sm ${errors.full_name && 'border-red-800 ring-1 ring-red-500'}`}
                      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                      placeholder="Full Name"
                    />
                    <input
                      type="text"
                      value={formData.email}
                      name="email"
                      className={`block w-full rounded-md    shadow-sm focus:border-brand-orange-deski focus:ring-brand-orange-deski sm:text-sm ${errors.email && 'border-red-800 ring-1 ring-red-500'}`}
                      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                      placeholder="Email"
                    />
                    <input
                      type="text"
                      value={formData.phone}
                      name="phone"
                      className={`block w-full rounded-md    shadow-sm focus:border-brand-orange-deski focus:ring-brand-orange-deski sm:text-sm ${errors.phone && 'border-red-800 ring-1 ring-red-500'}`}
                      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                      placeholder="Phone Number..."
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4   w-full">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-brand-orange-deski px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2    sm:text-sm"
                  onClick={(e) => { handleSubmit(e) }}

                >
                  {loading ?
                    <Spinner color="" />
                    : 'Show Me Demo'}

                </button>
                <div className="text-center text-xs mt-2 ">We respect your privacy & information</div>

              </div>
            </div>
            <div className="fixed w-screen h-screen bg-white/20 z-[10] inset-0">

            </div>

            {/* <Placeholder /> */}
          </>
      }
    </div>
  );
};

export default Links;

