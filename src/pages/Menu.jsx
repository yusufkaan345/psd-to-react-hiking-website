import React from 'react'
import img1 from '../assets/img1-62.png'
import img2 from '../assets/img1-45.png'
import imgLeaf from '../assets/img1-39.png'

function Menu() {
    return (
        <div>
            <div className='grid grid-rows-2 grid-cols-2 '>
                
                    <div style={{ backgroundImage: `url(${img1})` }}  className='bg-cover  w-full h-[800px] bg-no-repeat '>
                       
                    </div>
                    <div  className='bg-[#837870] text-white flex flex-col justify-center pl-16 '>
                        <h1 className='text-6xl font-semibold pb-4'>Discount Up To</h1>
                        <h1 className='text-6xl font-semibold pb-12'>%50 All Excursions</h1>
                       <p className='w-[70%] text-3xl opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Nobis maxime dolore totam quidem,
                         molestias nulla facilis nam delectus.</p>
                         <button className='bg-[#F6A44E] w-[30%] rounded-full px-10 py-4 mt-9 text-2xl hover:scale-110 duration-200'>Read More</button>
                    </div>
                    <div  className='bg-[#EDB47C] text-white flex flex-col justify-center pl-16 '>
                    <h1 className='text-6xl font-semibold pb-4'>January's Promo</h1>
                        <h1 className='text-6xl font-semibold pb-12'>Buy 1 Get 1 Free</h1>
                       <p className='w-[70%] text-3xl opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Nobis maxime dolore totam quidem,
                         molestias nulla facilis nam delectus.</p>
                         <button className='bg-[#F6A44E] w-[30%] rounded-full px-10 py-4 mt-9 text-2xl hover:scale-110 duration-200'>Read More</button>
                    </div>
                    <div  style={{ backgroundImage: `url(${img2})` }} className=' bg-cover bg-no-repeat'>
                        
                    </div>
               

            </div>

            <div className=' bg-emerald-600 mt-10 relative flex flex-col items-center text-white'>
                  <img src={imgLeaf} alt="" className='absolute w-[550px] top-0 left-11'/>
                  <h1 className='pt-[200px] text-6xl font-bold z-10'>Hiking Mountains</h1>
                 <p className='w-[65%] text-center text-2xl opacity-60 pt-28 pb-14 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio, 
                    eveniet similique consectetur laborum quaerat iure accusantium dolore aliquam
                     magni est perspiciatis? Nisi neque, quas adipisci ea ad magni ipsam? Consequatur 7
                     sunt ut adipisci vitae delectus unde molestiae nisi quisquam atque voluptas, 
                    sed doloremque a. Placeat numquam maxime error dignissimos!</p>

            </div>
        </div>
    )
}

export default Menu