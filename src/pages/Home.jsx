import React from 'react'
import bgHome from '../assets/img1-78.png'
import card1 from '../assets/img1-58.png'
import card2 from '../assets/img1-52.png'
import card3 from '../assets/img1-66.png'
import {Link} from 'react-router-dom'
function Home() {
    return (
        <div>
            <div style={{ backgroundImage: `url(${bgHome})` }} className='w-full h-[100%] bg-no-repeat bg-cover'>
                <div className='ml-24'>
                    <div className='text-[#EDB47C] text-8xl font-extrabold pt-[230px] leading-[7rem] drop-shadow-title tracking-[0.2rem]'>
                        <h1>IT'S TIME</h1>
                        <h1>FOR HIKING</h1>
                    </div>
                    <div>
                        <h1 className='font-bold pt-6 pb-16 text-2xl tracking-[0.3rem] opacity-70'><em>LOREMIPSUM DOLOR</em></h1>
                    </div>
                    <div>
                      <Link to='menu'> <button className='font-extrabold bg-white rounded-full py-3 px-7 text-2xl duration-200 hover:bg-[#EDB47C]  hover:scale-110   '><span className='opacity-50 hover:text-white hover:opacity-100'>READ MORE</span></button></Link> 
                    </div>
                    <div className='w-[35%] text-[22px] pb-[100px] pt-[75px] opacity-80'>
                        <p>
                            <em>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Voluptatum tenetur recusandae velit natus, esse sapiente.
                                recusandae velit natus.
                            </em>
                        </p>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col items-center pt-40'>


                <div>
                    <h1 className='text-[#F6A44E] text-6xl font-extrabold tracking-[0.3rem]'>LET'S GO</h1>
                </div>


                <div className='w-[50vw] text-center opacity-50 pt-10 text-3xl'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptatibus commodi eum quaerat a quae suscipit .</p>
                </div>


                <div className='flex justify-center pt-20'>
                    <div className='card-size '>
                        <img src={card1} alt="" className='image-size contain' />
                        <h1 className='card-title'>Lorem Ipsum</h1>
                        <p className='card-text'>Lorem ipsum dolor sit, amet consectetur adipisicing...</p>
                    </div>
                    <div className='card-size'>
                        <img src={card2} alt=""  className='image-size contain ' />
                        <h1 className='card-title'>Lorem Ipsum</h1>
                        <p className='card-text'>Lorem ipsum dolor sit, amet consectetur adipisicing...</p>
                    </div>
                    <div className='card-size'>
                        <img src={card3} alt=""  className='image-size contain' />
                        <h1 className='card-title'>Lorem Ipsum</h1>
                        <p className='card-text'>Lorem ipsum dolor sit, amet consectetur adipisicing...</p>
                    </div>
                
                </div>


                <div>
                    <button className=' mt-5 px-12 py-5 text-white text-2xl font-semibold bg-[#837870] rounded-full hover:scale-110 duration-200'>SHOW MORE</button>
                </div>

            </div>

        </div>
    )
}

export default Home