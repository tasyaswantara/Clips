/*eslint-disable*/
import React from "react";
export default function Footer() {
  return (
    <div className=" max-w-screen relative bottom-4 flex w-full  flex-col items-center justify-center md:left-0 lg:absolute lg:max-w-[420px] lg:flex-row xl:w-full ">
      <ul className="flex flex-wrap items-center gap-4 sm:flex-nowrap md:gap-[14px]">
        <li>
          <a
            target="blank"
            href="mailto:hello@simmmple.com"
            className="text-sm text-gray-700 hover:text-gray-600 md:text-sm  "
          >
            Contact Us
          </a>
        </li>

        <li>
          <a
            target="blank"
            href="https://simmmple.com/terms-of-service"
            className="text-sm text-gray-700 hover:text-gray-600 md:text-sm  "
          >
            Terms of Use
          </a>
        </li>
        <li>
          <a
            target="blank"
            href="https://blog.horizon-ui.com/"
            className="text-sm text-gray-700 hover:text-gray-600 md:text-sm "
          >
            Our Instagram
          </a>
        </li>
      </ul>
    </div>
  );
}
