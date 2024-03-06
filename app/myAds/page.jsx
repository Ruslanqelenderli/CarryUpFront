"use-client"

import React, { useState } from 'react'


function MyAds() {
    const [activeButton,setActiveButton] = useState(1)

    const toggleActiveButton = (index) => {
        setActiveButton(index) 
      }

      const list = [
        {published: "10.12.2023",from:"Baku, Azerbaijan", to: "Amsterdam, Netherland", transport:"Plane",deadline:"10.12.2023"},
        {published: "10.12.2023",from:"Baku, Azerbaijan", to: "Amsterdam, Netherland", transport:"Plane",deadline:"10.12.2023"},
        {published: "10.12.2023",from:"Baku, Azerbaijan", to: "Amsterdam, Netherland", transport:"Plane",deadline:"10.12.2023"},
        {published: "10.12.2023",from:"Baku, Azerbaijan", to: "Amsterdam, Netherland", transport:"Plane",deadline:"10.12.2023"},
        {published: "10.12.2023",from:"Baku, Azerbaijan", to: "Amsterdam, Netherland", transport:"Plane",deadline:"10.12.2023"},
        {published: "10.12.2023",from:"Baku, Azerbaijan", to: "Amsterdam, Netherland", transport:"Plane",deadline:"10.12.2023"},
        {published: "10.12.2023",from:"Baku, Azerbaijan", to: "Amsterdam, Netherland", transport:"Plane",deadline:"10.12.2023"},
        {published: "10.12.2023",from:"Baku, Azerbaijan", to: "Amsterdam, Netherland", transport:"Plane",deadline:"10.12.2023"},
        {published: "10.12.2023",from:"Baku, Azerbaijan", to: "Amsterdam, Netherland", transport:"Plane",deadline:"10.12.2023"},

      ]
    
  return (
    <div className=' w-3/4 ml-14 '>
   <div className='flex justify-evenly mb-3'>
   <button className={`bg-[white] py-[10px] px-[55px]  ${ activeButton === 1 ? "activeButton" : "deactiveButton"}`} onClick={() => toggleActiveButton(1)}>New</button>
            <button className={`bg-[white] py-[10px] px-[50px] ${ activeButton === 2 ? "activeButton" : "deactiveButton"}`} onClick={() => toggleActiveButton(2)}>Active</button>
            <button className={`bg-[white] py-[10px] px-[43px] ${ activeButton === 3 ? "activeButton" : "deactiveButton"}`} onClick={() => toggleActiveButton(3)}>Delivered</button>
            <button className={`bg-[white] py-[10px] px-[43px] ${ activeButton === 4 ? "activeButton" : "deactiveButton"}`} onClick={() => toggleActiveButton(4)}>Timed out</button>
   </div>



            <div className='active-content secondBox2 bg-white aside shadow-md w-full  px-7 py-5 '>

                {activeButton == 1 ? 
                <div  className="section relative"
                style={{
                  height: "calc(100vh - 220px)",
                  overflowY: "auto",
                }}>
 <table className='adsTable w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead className='sticky top-0 bg-white'>
                        <tr>
                            <th scope="col" class="px-6 py-3">Published</th>
                            <th scope="col" class="px-6 py-3">From</th>
                            <th scope="col" class="px-6 py-3">To</th>
                            <th scope="col" class="px-6 py-3">Transport</th>
                            <th scope="col" class="px-6 py-3">Deadline</th>


                        </tr>
                    </thead>
                    <tbody>
                     {
                        list.map((v) => (
                            <>
                            <tr className='bg-white border-b  hover:bg-[#BCB6FF] hover:text-[white] text-[#717171]'>
                            <td class="px-6 py-4">{v.published}</td>
                            <td class="px-6 py-4">{v.from}</td>
                            <td class="px-6 py-4">{v.to}</td>
                            <td class="px-6 py-4">{v.transport}</td>
                            <td class="px-6 py-4">{v.deadline}</td>
                            </tr>
                            </>
                        ))
                     }
                    </tbody>
                </table>
                     </div>
                
                : null }
     
    </div>
    </div>
  
  )
}

export default MyAds
