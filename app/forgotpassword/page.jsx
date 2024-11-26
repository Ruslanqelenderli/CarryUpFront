"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/navbar";

export default function Page() {
  const [users, setUsers] = useState({
    email: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUsers((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <Navbar />
      <main className=" flex flex-col items-center justify-center w-full flex-1 px-20  md:flex-row min-h-screen">
        <div className="main flex  w-[33%] flex-col bg-white rounded-2xl shadow-2xl justify-center  items-center px-7 pt-6 ">
          <Image
            src="/images/carry.png"
            width={150}
            height={50}
            alt="Carry UP"
            priority={true}
          />

          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 pt-7">
              <div className="w-full  px-3 md:mb-0">
                <label className="block  text-sm  mb-2">Email</label>
                <input
                  className="border w-full py-2.5 px-3 mb-3 focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=" Email"
                  name="email"
                  value={users.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              className={`bg-[#635bb2] w-full text-white font-bold py-2.5 px-4 mt-4 mb-4 transition-colors `}
              type="button"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
