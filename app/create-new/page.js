import React from 'react'
import style from "../app.module.css";
import Navbar1 from '../components/navbar1';


function CreateNew() {
  return (
    <div className={style.create}>
      <Navbar1 />

      <div className="flex justify-center mt-6">
        <div
          className=" aside bg-white rounded-2xl shadow-lg max-w-3xl py-4 px-7 w-full border border-[#B632FF] border-solid"
       
        >
            <h4 className='font-semibold text-[20px] text-[#4A4A4A]'>Post an ad</h4>

               <div className="text-left p-2">
              <p className="font-semibold text-lg leading-normal mb-2 p-2 text-[#4A4A4A] mt-3">
                Reason for publication
                <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                  *
                </span>
              </p>
            </div>

            <div className="flex justify-evenly">
              <div className="text-center">
                <button
                  className={`border border-[#C5D9FF] rounded-lg w-32 h-12 font-medium text-[#C5D9FF]
               `}
                //   onClick={handleClickSend}
                  type="button"
                >
                  For Send
                </button>
                <p
                  className={`w-60  text-sm text-[#85AEFF]`}
                >
                  If you want to send something with someone, click on it
                </p>
              </div>
              <div className="text-center">
                <button
                  className={`border border-[#C5D9FF] rounded-lg w-32 h-12 font-medium text-[#C5D9FF] `}
                //   onClick={handleAnotherClick}
                  type="button"
                >
                  For Carry
                </button>
                <p
                  className={`w-52  text-sm text-[#85AEFF]`}
                >
                  If you want to carry something, click on it
                </p>
              </div>
            </div>

            <div className="flex md:flex-row flex-col mt-4 p-6 gap-20">
              <div className="font-semibold text-lg">
                <h2 htmlFor="#" className="text-[#4A4A4A] font-semibold mb-1">
                  Title
                  <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                    *
                  </span>
                </h2>
                <textarea
                  className="border border-[#C5D9FF] rounded-lg p-2 resize-none w-64 placeholder:text-[#ACC9FF] focus:outline-none focus:border-[#78A7FF]"
                  name="title"
                  id="title_textarea"
                  cols="25"
                  rows="2"
                  placeholder="Type here..."
                  style={{ letterSpacing: "0.4px" }}
                  // value={formData.title}
                  // onChange={handleChange}
                  maxLength={200}
                ></textarea>
                <p
                  id="result"
                  className="text-[#85AEFF] text-xs leading-normal font-medium md:text-right"
                >
                  {/* {text.length} / {limit} */}
                </p>
              </div>
              <div className="font-semibold text-lg">
                <h2 htmlFor="#" className="text-[#4A4A4A] mb-1">
                  Description
                  <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                    *
                  </span>
                </h2>
                <div className="">
                  <div>
                    <textarea
                      className="border border-[#C5D9FF] rounded-lg p-2 resize-none placeholder:text-[#ACC9FF] focus:outline-none focus:border-[#78A7FF]"
                      name="description"
                      id="title_textarea"
                      cols="30"
                      rows="3"
                      placeholder="Type here..."
                      style={{ letterSpacing: "0.4px" }}
                      // value={formData?.description}
                      // onChange={handleChange}
                      maxLength={200}
                    ></textarea>
                  </div>
                  <div className="">
                    <p
                      id="result"
                      className="text-[#85AEFF] text-xs leading-normal font-medium md:text-right"
                    >
                      {/* {text1.length} / {limit1} */}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex md:flex-row flex-col p-6 gap-24">
              <div className="flex flex-row gap-1">
                <div className="flex flex-col">
                  <label htmlFor="" className="mb-1">
                    Category
                    <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                      *
                    </span>
                  </label>
                  <input
                    disabled
                    type="text"
                    className="border border-[#C5D9FF] placeholder:text-[#717171] rounded-md bg-[#F2F6FF] p-2 w-40 focus:outline-none focus:border-[#C5D9FF] cursor-not-allowed"
                    placeholder="Document"
                  />
                </div>
                <div className="flex flex-col ml-2">
                  <label htmlFor="" className="mb-1">
                    Count
                    <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                      *
                    </span>
                  </label>
                  <input
                    type="number"
                    className="border border-[#C5D9FF] rounded-md bg-[#F2F6FF] p-2 w-20 focus:outline-none focus:border-[#C5D9FF]"
                    placeholder="1"
                    // value={formData.count}
                    // onChange={handleChange}
                    name="count"
                  />
                </div>
              </div>

              <div className="flex gap-10">
                <div className="flex flex-col">
                  <label htmlFor="" className="mb-1">
                    Price
                    <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                      *
                    </span>
                  </label>
                  <input
                    // value={formData.price}
                    // onChange={handleChange}
                    // onInput={(e) => maxLengthCheck(e.target)}
                    max="999"
                    min="0"
                    maxLength={3}
                    type="number"
                    className="border border-[#C5D9FF] rounded-lg p-2 w-28
                   focus:outline-none focus:border-[#78A7FF] placeholder:text-[#ACC9FF]"
                    placeholder="Amount"
                    name="price"
                    pattern="[0-9]*"
                  />
                </div>

                <div className="mt-[6px]">
                  <label htmlFor="" className="flex ">
                    Currency
                    <span
                      className="text-[#FF5C00] font-semibold text-2xl transform
                     translate-x-0 -translate-y-1"
                    >
                      *
                    </span>
                  </label>
                <label className='text-[#5C5C5C]'>
                  <input type='radio' name="radio" className='mr-1'/>
                  Azn
                </label>
                <label className='ml-3 text-[#5C5C5C]'>
                  <input type='radio' name="radio" className='mr-1'/>
                  Usd
                </label>
                </div>

                
              </div>
            </div>

            <div>
                  <div className="flex flex-col p-6 gap-20 md:flex-row">
                    <div className="flex flex-col">
                      <label htmlFor="">
                        From
                        <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        className="border border-[#C5D9FF] rounded-md p-2 w-64 focus:outline-none focus:border-[#C5D9FF]"
                        placeholder="City"
                        // value={formData.fromPlace}
                        name={"fromPlace"}
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="">
                        To
                        <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        className="border border-[#C5D9FF] rounded-md p-2 w-64 focus:outline-none focus:border-[#C5D9FF]"
                        placeholder="City"
                        // value={formData.toPlace}
                        name={`toPlace`}
                        // onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col p-6 gap-20 md:flex-row">
                 
                    <div className="flex flex-col">
                      <label htmlFor="">
                      Date of appointment*
                        <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                          *
                        </span>
                      </label>
                      <input
                        type="date"
                        className="border border-[#C5D9FF] rounded-m p-2 w-64 focus:outline-none focus:border-[#C5D9FF]"
                        
                        name={`toTripDate`}
                        // value={formData.toTripDate}
                        // onChange={handleChange}
                      />
                    </div>
                  </div>
         
              
                </div>

       
        </div>
      </div>

    </div>
  )
}

export default CreateNew