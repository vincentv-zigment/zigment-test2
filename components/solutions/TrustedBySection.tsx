import Image from 'next/image';
import React from 'react';

type Props = {};

const TrustedBySection = (props: Props) => {
  // Define an array of objects for the logos
  const logos = [
    { src: 'https://cdn.zigment.ai/assets/1710830858-unigage_logo_small.png', alt: 'Unigage' },
    { src: 'https://cdn.zigment.ai/assets/1balance.svg', alt: '1balance' },
    { src: 'https://cdn.zigment.ai/assets/1710829319-vcnow.png', alt: 'vcnow' },
    { src: 'https://cdn.zigment.ai/assets/1710831597-mamabefit.png', alt: 'mamabefit' },
    { src: 'https://cdn.zigment.ai/assets/1711534462-bs-logo-2x.webp', alt: 'bluestone' },
    { src: 'https://cdn.zigment.ai/assets/1711534703-nova-ivf.jpg', alt: 'Nova IVF' },
    { src: 'https://cdn.zigment.ai/assets/service_buddy_logo.webp', alt: 'ServiceBuddy' },
    { src: 'https://cdn.zigment.ai/assets/1710830580-yezdi.png', alt: 'yezdi' },
    { src: 'https://cdn.zigment.ai/assets/1710832034-trinkerr.png', alt: 'trinkerr' },
  ];

  return (
    <section className="bg-white py-16 lg:py-20 w-full overflow-hidden">
      <div className="relative mx-auto max-w-7xl w-full px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {logos.map((logo, index) => (
            <div key={index} className="col-span-1 flex justify-center   py-8 px-8">
                <div className='h-12 '>
                    <Image width={500} height={500} className="w-full h-full object-contain" src={logo.src} alt={logo.alt}  />
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
