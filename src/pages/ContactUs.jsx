import React from 'react'
import imgLeaf from '../assets/img1-34.png'

function ContactUs() {
    return (
        <div>
            <div style={{ backgroundImage: `url(${imgLeaf})` }} className='w-full h-screen flex flex-col items-start justify-center pl-24 bg-no-repeat bg-cover'>
                <h1 className='text-[80px] text-[#EDB47C] font-extrabold drop-shadow-title2 '><em>EXPLORE</em></h1>
                <h1  className='text-[80px] text-slate-600 font-extrabold drop-shadow-title2 '><em>THE WORLD</em> </h1>
            </div>

            <div className='bg-[#EDB47C] flex flex-col items-center mt-12' >
                <h1 className='text-white text-6xl pt-32 font-bold'>Title Here</h1>
                <p className=' text-gray-600 text-3xl w-[70%] text-center pt-20 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Numquam nam itaque veritatis consectetur illum harum.
                </p>
                <div className='flex pt-12 pb-16'>
                    <input type="text" className=' rounded-l-full px-24 py-5 ' />
                    <button className='bg-[#837870] text-white rounded-r-full px-6'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs