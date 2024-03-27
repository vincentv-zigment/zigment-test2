import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const windowHeight = document.documentElement.clientHeight || window.innerHeight;
  
        const scrolled = (scrollTop / (scrollHeight - windowHeight)) * 100;
        setScrollPercentage(scrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className=" absolute -bottom-1.5 block   w-full h-1.5  ">
        <div
          className="h-full bg-brand-orange-deski transition-all duration-300"
          style={{ width: `${scrollPercentage}%` }}
        > </div>
      </div>
    );
};

export default ScrollProgressBar;