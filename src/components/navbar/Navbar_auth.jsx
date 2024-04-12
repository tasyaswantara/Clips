import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import Logo from "../../assets/img/auth/Logo_Clips_color.svg";

const NavList = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Home",
    path: "#",
  },
];

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOut, setisOut] = useState(false);

  return (
    <div className="fixed z-[999] block w-screen md:hidden">
      <div className=" flex h-[75px] w-[88vw]  items-center justify-between  bg-white  dark:!bg-navy-900 lg:hidden">
        <a href="/">
          <div className="flex items-center justify-center gap-3">
            <img src={Logo} className="w-[150px] md:w-[50px] xl:w-[45px]" />
          </div>
        </a>

        <div>
          {isOpen ? (
            <FaXmark
              className="flex h-8 w-8 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <FaBars
              className="flex h-6 w-6 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="h-auto w-full bg-white pb-8 pl-10">
          <div
            onMouseOut={() => setIsOpen(false)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <ul>
              {NavList.map((item, index) => {
                return (
                  <li key={index} className="mb-6">
                    <a
                      href={item.path}
                      className="hover:text-orange-default text-neutral-20 text-center text-[16px] font-[500]"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
              {isLoggedIn && (
                <li className="mb-6">
                  <a
                    href="#"
                    className="hover:text-orange-default text-neutral-20 text-center text-[16px] font-[500]"
                  >
                    Profile
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div>
            <button className="bg-transparent m-0 p-0">
              <a
                href={isLoggedIn ? "#" : "/#/auth/login"}
                className={`${
                  isLoggedIn
                    ? "bg-[#CC0100] hover:bg-[#842525]"
                    : " hover:bg-orange-hover bg-blueSecondary"
                } rounded-[50px] border-0 px-5  py-2 text-center text-[14px] font-[600] text-white  hover:text-white`}
                onClick={
                  isLoggedIn ? () => setisOut(true) : () => setisOut(false)
                }
              >
                {isLoggedIn ? "Logout" : "Masuk"}
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
