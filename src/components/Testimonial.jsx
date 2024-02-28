import Image from 'next/image'
import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    return (
        <div>
            <div className='container py-16 grid-cols-2'>
                <h2 className='font-medium pb-4 text-2xl'>Testimonials</h2>
                <div className='grid lg:grid-cols-[300px,1fr] gap-4'>
                    <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
                        <div className='text-center flex flex-col items-center gap-1'>
                            <Image
                                src={`/images/krishna.jpg`}
                                alt="Profile"
                                height={80}
                                width={80}
                                className='rounded-full inline-block object-cover size-14' />

                            <h2 className='text-gray-500 font-black text-[20px]'>Krishna Patel</h2>
                            <p>CEO & Founder Invision</p>
                            <FaQuoteLeft className='text-accent'/>
                            <p className='max-w-[200px] text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        </div>
                    </div>
                    <div className='bg-red-600 bg-[url(/images/banner-5.png)] bg-cover h-[500px] rounded-2xl grid place-items-center'>
                        <div className='bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3'>
                            <button className=' bg-blakish text-white p-2 rounded-md'>25% DISCOUNT</button>
                            <h2 className='font-extrabold text-2xl text-[#272727]'>Summer Collection</h2>
                            <p className='text-gray-500 text-[20px]'>Starting @ $20 <strong>Shop Now</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial