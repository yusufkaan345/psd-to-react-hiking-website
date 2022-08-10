import React, {useContext} from 'react'
import logo from '../assets/img1-86.png'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import {HiDotsVertical} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import { GlobalContext} from '../context/GlobalState'



function Navbar() {
    const { loginWithRedirect, logout, isAuthenticated, isLoading,user } = useAuth0();
    
    const {openModal,setOpenModal}=useContext(GlobalContext)
    const closeModal=()=>{ setOpenModal(!openModal)}
    return (
        <div className='flex justify-between  items-center'>
            <div className='my-8 ml-20'>
                <img src={logo} alt="" className='cursor-pointer' />
            </div>
            <div className='flex'>
                <ul className='flex mr-16 cursor-pointer items-center'>
                    <Link to='/'> <li className='menu-items'>HOME</li></Link>
                    <Link to='menu'> <li className='menu-items'>MENU</li></Link>
                    <Link to='contact-us'> <li className='menu-items'>CONTACT US</li></Link>

                </ul>
                <div className='mr-8'>

                    {isLoading ? <p>Loading...</p> :

                        !isAuthenticated ?
                            <div>
                                <button onClick={loginWithRedirect} className='button duration-300  text-white bg-[#EDB47C] mr-3 active:scale-95'>Log In</button>
                                <button onClick={loginWithRedirect} className='button duration-100 '>Sign Up</button>
                            </div>

                            :
                            <div className='flex items-center'>
                                <button onClick={logout} className='button duration-300  text-white bg-[#EDB47C] mr-3 active:scale-95'>Log Out</button>
                                {!openModal ?<HiDotsVertical onClick={closeModal} size={30} className='cursor-pointer hover:scale-110 active:scale-90 duration-200 hover:text-slate-600'/> : <p></p> }
                                {openModal && 
                                    
                                    <div className='w-[250px] h-[350px] bg-slate-400  absolute right-4 top-32  z-30 rounded-xl text-white '>
                                       <AiOutlineClose onClick={closeModal} size={30} className=' ml-[210px] mt-2 cursor-pointer hover:scale-110 duration-200 hover:text-black active:scale-90'/>
                                       <img src={user.picture} alt="" className='rounded-full ml-5 w-16'/>
                                       <p className='text-2xl ml-5 mt-6'>{user.given_name} </p>
                                       <p className='text-sm ml-5 mt-6'>{user.email} </p>

                                    </div>    
                                }
                            </div>
                    }


                </div>
            </div>


        </div>
    )
}

export default Navbar