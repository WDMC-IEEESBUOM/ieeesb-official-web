import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-full h-full ">
        {/* Outer Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vh]">
          <Image
            className="animate-[spin_10s_linear_infinite]"
            src="/hero/outer_circle.svg"
            alt="Outer Circle"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle Outer Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh]">
          <Image
            className="animate-[spin_10s_linear_infinite] rotate-180"
            src="/hero/middle_outer_circle.svg"
            alt="Middle Outer Circle"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle Inner Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[65vh]">
          <Image
            className="animate-[spin_30s_linear_infinite]"
            src="/hero/middle_inner_circle.svg"
            alt="Middle Inner Circle"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Inner Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh]">
          <Image
            className="animate-[spin_15s_linear_infinite] rotate-180"
            src="/hero/inner_circle.svg"
            alt="Inner Circle"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
