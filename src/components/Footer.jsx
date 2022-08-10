import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'


function Footer() {
  return (
    <div className='bg-[#837870] text-white flex justify-between items-center mt-12 '>
      <div className='w-[40%] pt-40 pl-20 opacity-80'>
        <h1 className='text-4xl'>Title Here</h1>
        <p className='text-2xl py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestiae nulla similique dicta iusto nisi sequi voluptatibus quo ea facere hic.</p>
        <div className='flex justify-start pb-40 cursor-pointer '>
          <AiOutlineInstagram size={40} style={{ backgroundColor: 'white', color: '#837870' }} className='rounded-full  mx-3  hover:opacity-80 ' />
          <FaFacebookF size={40} style={{ backgroundColor: 'white', color: '#837870' }} className='rounded-full mx-3  hover:opacity-80' />
          <AiOutlineTwitter size={40} style={{ backgroundColor: 'white', color: '#837870' }} className='rounded-full mx-3  hover:opacity-80' />
          <RiWhatsappFill size={40} style={{ backgroundColor: 'white', color: '#837870' }} className='rounded-full mx-3  hover:opacity-80' />

        </div>
      </div>

      <div className='opacity-80'>
        <h1 className='text-3xl pb-4'>About</h1>
        <ul  className='text-2xl'>
         
          <li>History</li>
          <li>Our Team</li>
          <li>Brand Guidelines</li>
          <li>Terms & Condition</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className='opacity-80'>
        <h1 className='text-3xl pb-4'>Services</h1>
        <ul className='text-2xl'>
          <li>How To Order</li>
          <li>Our Products</li>
          <li>Order Status</li>
          <li>Promo</li>
          <li>Payment Methods</li>
        </ul>
      </div>

      <div className='opacity-80 mr-16'>
        <h1 className='text-3xl pb-4'>Other</h1>
        <ul className='text-2xl'>
          <li>Contact Us</li>
          <li>Help</li>
          <li>Privacy</li>
         
        </ul>
      </div>

    </div>
  )
}

export default Footer