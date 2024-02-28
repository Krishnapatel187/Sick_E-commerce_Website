'use client';

import React from 'react'
import Slider from 'react-slick';
import Slice from './Slice';

const Hero = () => {
    let settings={
        dots: true,
        infinite: true,
       autoplay: true,
       pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const slideData =[
        {
            id:0,
            img:'/images/banner-1.png',
            title:'Trending Item',
            mainTitle:"WOMAN's LATEST FASHION SALE",
            price: '$20'
        },
        {
            id:1,
            img:'/images/banner-2.png',
            title:'Trending Item',
            mainTitle:"NEW FASHION SUMMER SALE",
            price: '$10'
        },
        {
            id:2,
            img:'/images/banner-4.png',
            title:'Sale Offer',
            mainTitle:"Modern Sunglasses",
            price: '$30'
        },
        {
            id:3,
            img:'/images/banner-3.png',
            title:'Trending Accessories',
            mainTitle:"WOMAN's Jwellery",
            price: '$15'
        }
    ]

  return (
    <div className=''>
        <div className='container pt-6 lg:pt-0'>
            <Slider {...settings}>
                {slideData.map((item)=> {
                    return <Slice key={item.id} 
                        img={item.img} 
                        title={item.title}
                        mainTitle={item.mainTitle}
                        price={item.price}
                    />
                }
                    )}
            </Slider>
        </div>
    </div>
  )
}

export default Hero