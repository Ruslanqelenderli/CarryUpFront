// "use-client"

// import React, { useState } from 'react'


// function MyPackages() {
//     const [activeButton,setActiveButton] = useState(1)

//     const toggleActiveButton = (index) => {
//         setActiveButton(index) 
//       }

 
    
//   return (
//     <div className=' w-3/4 ml-14 '>
//    <div className='flex  mb-3'>
//    <button className={`bg-[white] py-[10px] px-[55px]  ${ activeButton === 1 ? "activeButton" : "deactiveButton"}`} onClick={() => toggleActiveButton(1)}>Active</button>
//             <button className={`bg-[white] py-[10px] px-[50px] ml-4 ${ activeButton === 2 ? "activeButton" : "deactiveButton"}`} onClick={() => toggleActiveButton(2)}>Delivered</button>
            
//    </div>



//             <div className='active-content secondBox2 bg-white aside shadow-md w-full  px-7 py-5 '>

//                 {activeButton == 1 ? 
//                 <div  className="section relative"
//                 style={{
//                   height: "calc(100vh - 220px)",
//                   overflowY: "auto",
//                 }}>
//  <table className='adsTable w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
//                     <thead className='sticky top-0 bg-white'>
//                         <tr>
//                             <th scope="col" class="px-6 py-3">Column #1</th>
//                             <th scope="col" class="px-6 py-3">Column #2</th>
//                             <th scope="col" class="px-6 py-3">Column #3</th>
//                             <th scope="col" class="px-6 py-3">Column #4</th>


//                         </tr>
//                     </thead>
//                     <tbody>
                    
//                     </tbody>
//                 </table>
//                      </div>
                
//                 : null }
     
//     </div>
//     </div>
  
//   )
// }

// export default MyPackages
"use-client"

import Image from 'next/image'
import React, { useState } from 'react'


function MyPackages() {
    const [activeButton,setActiveButton] = useState(1)

    const toggleActiveButton = (index) => {
        setActiveButton(index) 
      }

 
    
  return (
    <div className=' w-3/4 ml-14 '>




            <div className='active-content secondBox2 bg-white aside shadow-md w-full  px-7 py-5 '>

               <div className="mt-8">
            <h3>Change Password</h3>
            <div className="flex flex-wrap -mx-3 mb-2 mt-4">
              <div className="w-full md:w-1/3 px-3 md:mb-0 mb-6  relative">
                <label className="block tracking-wide text-gray text-sm  text-left mb-1">
                  Current Password
                </label>
                <input
                  className="appearance-none block w-full  border border-gray-200 rounded-md-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white "
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <Image
                  src="/icons/hide.png"
                  width={25}
                  height={35}
                  alt="Hide"
                  className="mt-0.5 hide"

                  priority={true}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 md:mb-0 mb-6  relative">
                <label className="block tracking-wide text-gray text-sm  text-left mb-1">
                  New Password
                </label>
                <input
                  className="appearance-none block w-full  border border-gray-200 rounded-md-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white "
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <Image
                  src="/icons/hide.png"
                  width={25}
                  height={35}
                  alt="Hide"
                  className="mt-0.5 hide"

                  priority={true}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 md:mb-0 mb-6  relative">
                <label className="block tracking-wide text-gray text-sm  text-left mb-1">
                  Confirm New Password
                </label>
                <input
                  className="appearance-none block w-full  border border-gray-200 rounded-md-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white "
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <Image
                  src="/icons/hide.png"
                  width={25}
                  height={35}
                  alt="Hide"
                  className="mt-0.5 hide"
                  priority={true}
                />
              </div>
            </div>
            <div className="float-right m-5">
              <button className="bg-transparent  font-semibold  py-1.5 px-8 border mr-4   rounded-md cancelButton">
                Cancel
              </button>
              <button className="  font-bold py-1.5 px-10 border  rounded-md saveButton">
                Save
              </button>
            </div>

          </div>
     
    </div>
    </div>
  
  )
}

export default MyPackages
