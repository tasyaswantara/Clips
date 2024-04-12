import { FaGear } from "react-icons/fa6";

const Under_const = ({title,desc}) => {
  return (
    <section className="fixed z-50 flex h-screen w-screen items-center justify-center backdrop-blur-sm ">
      <div className="relative mt-14 flex h-1/2 w-1/2 justify-center rounded-[20px] bg-gradient-to-br from-[#868CFF] via-[#432CF3] to-brand-500 pb-4">
        <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-b from-[#868CFF] to-brand-500 dark:!border-navy-800">
          <FaGear size={52} style={{ fill: "white" }} />
        </div>

        <div className=" flex h-full w-full  flex-col items-center justify-center px-[2vh] ">
          <p className=" text-[10vw] font-bold text-white md:text-[7vw]">
            {title}
          </p>
          <p className="text-center text-[4vw] font-normal text-white md:max-w-[75%] md:text-[2vw] xl:text-[30px]">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Under_const;
