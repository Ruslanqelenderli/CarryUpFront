"use-client"

import React, { useState } from 'react'


function MyPackages() {
    const [activeButton,setActiveButton] = useState(1)

    const toggleActiveButton = (index) => {
        setActiveButton(index) 
      }

 
    
  return (
    <div className=' w-3/4 ml-14 '>
   <div className='flex  mb-3'>
   <button className={`bg-[white] py-[10px] px-[55px]  ${ activeButton === 1 ? "activeButton" : "deactiveButton"}`} onClick={() => toggleActiveButton(1)}>Active</button>
            <button className={`bg-[white] py-[10px] px-[50px] ml-4 ${ activeButton === 2 ? "activeButton" : "deactiveButton"}`} onClick={() => toggleActiveButton(2)}>Delivered</button>
            
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
                            <th scope="col" class="px-6 py-3">Column #1</th>
                            <th scope="col" class="px-6 py-3">Column #2</th>
                            <th scope="col" class="px-6 py-3">Column #3</th>
                            <th scope="col" class="px-6 py-3">Column #4</th>


                        </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
                     </div>
                
                : null }
     
    </div>
    </div>
  
  )
}

export default MyPackages
