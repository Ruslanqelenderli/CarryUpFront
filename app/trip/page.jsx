"use client";

import Navbar1 from "../components/navbar1";
import Footer from "../components/footer";
import Image from "next/image";

export default function Trip() {
  return (
    <div className="bg-white h-screen min-h-[600px] ">
      <Navbar1 />
      <div className="grid grid-cols-3  px-[100px] mt-8 ">
        <div className="col-span-2 w-[80%] ">
          <div className="flex align-center gap-4 border-2 border-solid border-[#A0CCFF] rounded-xl firstBox ">
          <div className="rounded-xl pl-4 pr-5 pt-4 bg-[#f3fbff]" style={{borderRight:"2px solid #A0CCFF "}}>
            <Image
              src="/icons/megaphoneD.png"
              className=""
              width={30}
              height={30}
              alt="Carry UP"
              priority={true}
            />
            </div>
         

        <div className="flex gap-4 py-4"> 
        <span className="text-[#505050] font-semibold">
              Elanın başlıq adı Lorem Ipsum is simply dummy text
            </span>
            <span className="font-semibold text-[#3C87E0]">$20</span>
      
    <div>
    <Image
              src="/icons/heartD.png"
              className=""
              width={30}
              height={30}
              alt="Carry UP"
              priority={true}
            />
    </div>
    
        </div>
          </div>
          <div className=" gap-4 border-2 border-solid border-[#A0CCFF] p-5 rounded-xl mt-6">
            <h5 className="text-[#3C87E0] font-semibold text-[18px]" style={{borderLeft:"4px solid #3C87E0"}}>
              <span className="pl-1.5">Details</span>
            </h5>
            <div className="flex mt-3 gap-[15rem] secondBoxSend">
              <div className=" flex mb-4 pb-4 gap-3">
                <div className="border-2 border-solid border-[#A0CCFF] rounded-xl pl-3 pr-2.5 py-2 bg-[#f3fbff]">
                  <Image
                    src="/icons/locationD.png"
                    className=""
                    width={30}
                    height={30}
                    alt="Carry UP"
                    priority={true}
                  />
                </div>
                <div>
                  <p className="text-[#505050] font-semibold">Ganja</p>
                  <span className="text-[#A0CCFF] font-semibold text-[14px]">
                    From
                  </span>
                </div>
              </div>
              <div className=" flex mb-4 pb-4 gap-3">
                <div className="border-2 border-solid border-[#A0CCFF] rounded-xl pl-3 pr-2.5 py-2 bg-[#f3fbff]">
                  <Image
                    src="/icons/docD.png"
                    className=""
                    width={30}
                    height={30}
                    alt="Carry UP"
                    priority={true}
                  />
                </div>
                <div>
                  <p className="text-[#505050] font-semibold">3</p>
                  <span className="text-[#A0CCFF] font-semibold text-[14px]">
                    Count of documents
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-[15rem] secondBoxSend">
              <div className=" flex  gap-3">
                <div className="border-2 border-solid border-[#A0CCFF] rounded-xl pl-3 pr-2.5 py-2 bg-[#f3fbff]">
                  <Image
                    src="/icons/flagD.png"
                    className=""
                    width={30}
                    height={30}
                    alt="Carry UP"
                    priority={true}
                  />
                </div>
                <div>
                  <p className="text-[#505050] font-semibold">Baku</p>
                  <span className="text-[#A0CCFF] font-semibold text-[14px]">
                    To
                  </span>
                </div>
              </div>{" "}
              <div className=" flex gap-3">
                <div className="border-2 border-solid border-[#A0CCFF] rounded-xl pl-3 pr-2.5 py-2 bg-[#f3fbff]">
                  <Image
                    src="/icons/cashD.png"
                    className=""
                    width={30}
                    height={30}

                    alt="Carry UP"
                    priority={true}
                  />
                </div>
                <div>
                  <p className="text-[#505050] font-semibold">20 USD</p>
                  <span className="text-[#A0CCFF] font-semibold text-[14px]">
                    Price
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className=" gap-4 border-2 border-solid border-[#A0CCFF] p-5 rounded-xl mt-6">
            <h5 className="text-[#3C87E0] font-semibold text-[18px] " style={{borderLeft:"4px solid #3C87E0"}}>
              <span className="pl-1.5">Description</span>
            </h5>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur. Pellentesque feugiat
              mauris euismod non tincidunt sodales velit. At eu et donec amet
              consectetur eu quis. Nisl lorem amet sed morbi purus vitae dui.
              Malesuada egestas malesuada purus vulputate dignissim molestie.
            </p>
          </div>
        </div>


        <div className=" border-2 border-solid border-[#A0CCFF] rounded-xl p-4 h-[340px]">
          <div
            className="flex mb-4 pb-4 gap-3"
            style={{ borderBottom: "1px solid #A0CCFF" }}
          >
            <div className="border-2 border-solid border-[#A0CCFF] rounded-xl pl-3 pr-2.5 py-2 bg-[#f3fbff]">
              <Image
                src="/icons/emailD.png"
                className=""
                width={30}
                height={30}
                alt="Carry UP"
                priority={true}
              />
            </div>
            <div>
              <p className="text-[#505050] font-semibold">
                raul.qasimof1@gmail.com
              </p>
              <span className="text-[#A0CCFF] font-semibold text-[14px]">
                Email address
              </span>
            </div>
          </div>
          <div
            className="flex mb-4 pb-4 gap-3"
            style={{ borderBottom: "1px solid #A0CCFF" }}
          >
            <div className="border-2 border-solid border-[#A0CCFF] rounded-xl pl-3 pr-2.5 py-2 bg-[#f3fbff]">
              <Image
                src="/icons/calendarD.png"
                className=""
                width={30}
                height={30}
                alt="Carry UP"
                priority={true}
              />
            </div>
            <div>
              <p className="text-[#505050] font-semibold">February 12, 2024</p>
              <span className="text-[#A0CCFF] font-semibold text-[14px]">
                Publication date
              </span>
            </div>
          </div>
          <div
            className="flex mb-4 pb-4 gap-3"
            style={{ borderBottom: "1px solid #A0CCFF" }}
          >
            <div className="border-2 border-solid border-[#A0CCFF] rounded-xl pl-3 pr-2.5 py-2 bg-[#f3fbff]">
              <Image
                src="/icons/dateD.png"
                className=""
                width={30}
                height={30}
                alt="Carry UP"
                priority={true}
              />
            </div>
            <div>
              <p className="text-[#505050] font-semibold">February 20, 2024</p>
              <span className="text-[#A0CCFF] font-semibold text-[14px]">
                Last date to apply
              </span>
            </div>
          </div>
          <div className="flex  gap-3">
            <div className="border-2 border-solid border-[#A0CCFF] rounded-xl pl-3 pr-2.5 py-2 bg-[#f3fbff]">
              <Image
                src="/icons/handD.png"
                className=""
                width={30}
                height={30}
                alt="Carry UP"
                priority={true}
              />
            </div>
            <div>
              <p className="text-[#505050] font-semibold">2</p>
              <span className="text-[#A0CCFF] font-semibold text-[14px]">
                Number of applications
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
