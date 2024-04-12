import { Link, Routes, Route, Navigate } from "react-router-dom";
import routes from "../../routes.jsx";
//components
import FixedPlugin from "../../components/fixedPlugin/FixedPlugin";
import Navbar from "../../components/navbar/Navbar_auth";
import Footer from "../../components/footer/FooterAuthDefault";

//assets
import background_auth from "../../assets/img/auth/Image_Wrapper.jpg";
import logo from "../../assets/img/auth/Logo_Clip.svg";

export default function Auth() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/u/auth") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  document.documentElement.dir = "ltr";
  return (
    <div>
      <div className="relative float-right h-full min-h-screen w-full !bg-white p-6 pt-0 dark:!bg-navy-900 md:p-0">
        <Navbar />
        <FixedPlugin />
        <main className={`mx-auto min-h-screen`}>
          <div className="relative flex">
            <div className=" mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:mt-[8vh]  md:h-[70vh] md:max-w-[75%] lg:mt-0 lg:h-screen  lg:max-w-[100vw] lg:px-8 lg:pt-0 lg:pl-[20vw] xl:h-[100vh] xl:px-0 xl:pl-[20vw]">
              <div className="  mb-auto flex h-full items-end justify-start pl-5 pr-5 md:justify-end md:pr-0 md:pl-0  lg:max-w-full lg:pl-0">
                <div className="  relative w-full min-w-full md:h-full lg:w-[50%] lg:min-w-[50%]">
                  <Routes>
                    {getRoutes(routes)}
                    <Route
                      path="/"
                      element={<Navigate to="/u/auth/sign-in" replace />}
                    />
                    <Route
                      path="/"
                      element={<Navigate to="/u/auth/sign-up" replace />}
                    />
                  </Routes>
                  <Footer />
                </div>
              </div>
              <div className="absolute left-0 hidden h-full min-h-screen lg:block lg:w-[49vw] 2xl:w-[44vw]">
                <div
                  className=" relative flex h-full w-full items-center justify-center bg-cover bg-center pr-[10%] pb-[10%] lg:rounded-br-[120px] xl:rounded-br-[200px]"
                  style={{ backgroundImage: `url(${background_auth})` }}
                >
                  <div className=" flex w-[50vw]  flex-col items-center justify-center  gap-5 2xl:w-[40vw]">
                    <img src={logo} alt="" className="w-[55%] 2xl:w-[50%]" />
                    <h1 className=" text-6xl font-bold leading-[60px] text-white">
                      CLIPS.ID
                    </h1>
                    <h2 className=" text-[1.8vw] font-semibold leading-8 text-white xl:text-[1.6vw] 2xl:text-2xl">
                      Create Your Shorten Links, Customize Anytime
                    </h2>
                  </div>

                  <p className=" absolute bottom-4 text-center text-sm text-white">
                    © 2024 Clips ID. All Rights Reserved. Made with love by
                    Clips Team!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    /* <div className=" flex h-screen min-h-screen w-screen justify-between !bg-white dark:!bg-navy-900">
       <main className={`mx-auto min-h-screen`}>
      <div className="hidden h-full min-h-screen w-[50%] md:block lg:w-[49vw] 2xl:w-[44vw]">
        <div
          className=" relative flex h-full w-full items-center justify-center bg-cover bg-center pr-[10%] pb-[10%] lg:rounded-br-[120px] xl:rounded-br-[200px]"
          style={{ backgroundImage: `url(${background_auth})` }}
        >
          <img src={logo} alt="" className="w-[60%]" />
          <p className=" absolute bottom-4 text-center text-sm text-white">
            © 2024 Clips ID. All Rights Reserved. Made with love by Clips Team!
          </p>
        </div>
      </div>
      <div className=" relative flex flex-col h-full w-full items-center justify-center pl-5 pr-5 md:w-[50%] md:pr-0">
        <div className=" w-full md:w-min md:min-w-[65%] md:max-w-[420px] md:max-h-[80vh] ">
          <Routes>
            {getRoutes(routes)}
            <Route
              path="/"
              element={<Navigate to="/u/auth/sign-in" replace />}
            />
          </Routes>
          
          <FixedPlugin />
          <Footer/>
        </div>
      </div>
      </main>
    </div> */
  );
}
