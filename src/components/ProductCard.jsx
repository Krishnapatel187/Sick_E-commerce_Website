import Image from 'next/image'
import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
const ProductCard = ({ img, price, title, desc, rating }) => {

    const generateRating = ({ rating }) => {

        switch (rating) {
            case 1: return (
                <div className='flex gap-1 text-[20px] text-[#ff9529]'>
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </div>
            );
            case 2: return (
                <div className='flex gap-1 text-[20px] text-[#ff9529]'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </div>
            );
            case 3: return (
                <div className='flex gap-1 text-[20px] text-[#ff9529]'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </div>
            );
            case 4: return (
                <div className='flex gap-1 text-[20px] text-[#ff9529]'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </div>
            );
            case 5: return (
                <div className='flex gap-1 text-[20px] text-[#ff9529]'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
            );
        }
    }

    return (
        <div className='px-4 border border-gray-200 rounded-xl sm:w-[380px] md:w-[300px] lg:w-[320px] max-w-[400px]'>
            <Image
                src={img}
                alt={title}
                height={200}
                width={200}
                className='h-72 w-full object-cover transition duration-500 hover:scale-105 sm:h-80'
            />
            <div className='space-y-2 py-4 relative'>
                <h2 className='text-accent font-medium uppercase'>
                    {title}
                </h2>
                <p className='text-gray-500 line-clamp-1 text-sm/relaxed '>
                    {desc}
                </p>
                <div>{generateRating({ rating })}</div>
                <div className='gap-4 flex font-bold'>
                    ${price}
                    <del className='text-gray-500 font-normal'>${parseInt(price) + 50}.00</del>
                </div>
                <form class="mt-4">
                    <button
                        class="block w-full rounded bg-[#f5b8b8] hover:bg-accent hover:text-white p-4 text-sm font-medium transition hover:scale-105"
                    >
                        Add to Cart
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ProductCard