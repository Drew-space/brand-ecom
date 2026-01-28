import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className=" bg-white py-10 ">
      <div className=" max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-4 font-primary ">
        {/* left col */}
        <div className="flex flex-col space-y-4">
          {/* top text */}
          <div className="bg-zinc-900 h-120 flex flex-col justify-between p-8 rounded-3xl shadow-sm ">
            <h2 className=" text-4xl md:text-6xl uppercase text-white shadow-sm tracking-tighter font-bold">
              Step into comfort <br /> for every age and every style
            </h2>
            <p className="text-zinc-300 font-medium md:text-lg mt-4">
              Discover the perfect blend of style and comfort with our exclusive
              footwear collection. From trendy sneakers to classic designs, we
              have something for everyone. Step up your shoe game today!
            </p>
          </div>
          {/* bottom Small image grid */}

          <div className="grid grid-cols-2 gap-4 ">
            {/* image 1 */}
            <div className="relative h-57.5 bg-zinc-300 rounded-3xl flex items-end p-3 overflow-clip ">
              <div
                className="absolute inset-0 bg-center bg-cover  "
                style={{
                  backgroundImage: "url('/img/portrait-man-showing-shoe.jpg')",
                }}
              ></div>
              <span className=" text-[14px] md:text-md  bg-zinc-900/70 backdrop-blur-sm text-white font-semibold tracking-wide z-20 px-2 py-1 rounded-full ">
                #Male Collection
              </span>
            </div>
            {/* image 2 */}
            <div className="relative h-57.5 bg-zinc-300 rounded-3xl flex items-end p-3 overflow-clip ">
              <div
                className="absolute inset-0 bg-center bg-cover  "
                style={{
                  backgroundImage: "url('/img/woman-pic.jpg')",
                }}
              ></div>
              <span className=" text-[14px] md:text-md bg-zinc-900/70 backdrop-blur-sm text-white font-semibold tracking-wide z-20 px-2 py-1 rounded-full ">
                #Female Collection
              </span>
            </div>
          </div>
        </div>
        {/* right col */}
        <div className="relative hidden lg:inline-flex bg-zinc-300 rounded-3xl overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-zinc-500">
            <div
              className="absolute inset-0 bg-center bg-cover  "
              style={{
                backgroundImage: "url('/img/kids.jpg')",
              }}
            ></div>
            <div className="absolute bottom-4 right-4 space-x-3 flex">
              <button className=" group bg-white/90 backdrop-blur-xs cursor-pointer text-zinc-900  centered-row gap-10  uppercase pl-3 pr-2 py-1 rounded-full hover:bg-zinc-900 hover:text-zinc-50 transition-all duration-200 ease-in font-semibold ">
                Kids Collection{" "}
                <span className="size-8 bg-zinc-800 group-hover:bg-zinc-100 rounded-full center-item ">
                  <ArrowUpRight className="text-zinc-50 group-hover:text-zinc-800 " />
                </span>
              </button>
              {/* second button */}
              <button className=" border border-zinc-50 backdrop-blur-xs cursor-pointer text-zinc-900  justify-center  gap-10  uppercase pl-3 pr-2 py-1  flex flex-row items-center transition-all rounded-full hover:bg-zinc-900 hover:text-zinc-50 duration-200 ease-in font-semibold  centered-row ">
                Contact Us
                <span className="size-8 bg-zinc-50 rounded-full center-item  ">
                  <Mail className="text-zinc-800  w-5" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:hidden bg-[#586b3f] text-white p-4 uppercase flex justify-center rounded-full font-bold ">
          Shop Now
        </div>
      </div>
    </section>
  );
};

export default Hero;
