'use clinet'
import React from 'react'

const Main = () => {
  return (
    <div className='h-[100vh]' style={{
       
        backgroundPosition:'center',
    opacity:'0.7',  
    backgroundImage: `url("https://images.unsplash.com/photo-1733000546765-b3cbea52e6c4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}}>
         <div className='w-[70%] mx-auto flex h-[100vh] items-center'>
           <div className='main-body mt-5'>
           <div className='body1 '>
                <h1 className='text-center'>Find Your Home in Tolet World Bd</h1>
                <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique temporibus officiis officia facere recusandae, suscipit ut doloremque ea! Quas, provident. Quia dolorum ea temporibus non perferendis,
                     cum ullam accusamus assumenda?</p>
                     <div className="button-group flex justify-center my-5">
                        <button className=' bg-white mr-2 text-black '>For Rent</button>
                        <button className='border-2 text-white'>For Sale</button>
                     </div>

            </div>
            <div className='body2 mt-[64px] text-center'>
                <p className='mb-[8px]'>Search that you desire would be your home in Tolet Bd</p>
                <div className='w-[70%] mx-auto border-2 p-[20px] flex justify-around'>
                    <select className='px-5 py-0  text-base bg-white text-black ' name="" id="">
                        <option  value="Select District">Select District</option>
                        <option  value="Bogra">Bograt</option>
                        <option  value="Select District">Select District</option>
                        <option  value="Select District">Select District</option>
                    </select>
                    <select className='px-5  text-base bg-white text-black' name="" id="">
                        <option  value="Select District">Select Area of Your</option>
                        <option  value="Bogra">Bograt</option>
                        <option  value="Select District">Select District</option>
                        <option  value="Select District">Select District</option>
                    </select>
                    <select className='px-5  text-base bg-white text-black' name="" id="">
                        <option  value="Select District">Select Propety Type</option>
                        <option  value="Bogra">Bograt</option>
                        <option  value="Select District">Select District</option>
                        <option  value="Select District">Select District</option>
                    </select>
                    <button className='bg-red-400'>Find</button>
                </div>
            </div>
           </div>
         </div>

    </div>
  )
}

export default Main