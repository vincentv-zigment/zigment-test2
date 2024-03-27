// Spinner.tsx
import Image from "next/image";
import React from "react";

const LoadingAnimationWithZigLogo = (props: any) => {
  const { color } = props;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-blinkingBg">
        <Image
          src={
            "https://cdn.zigment.ai/assets/zigment_logo_latest.svg"
          }
          width={300}
          height={300}
          className={`pr-2 block`}
          alt="zigment"
        />
      </div>
    </div>
  );
};

export default LoadingAnimationWithZigLogo;
