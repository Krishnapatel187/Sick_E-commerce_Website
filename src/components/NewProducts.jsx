import React from 'react'
import ProductCard from './ProductCard'

const NewProducts = () => {
    return (
        <div>
        <div className='container pt-16'>
            <h2 className='font-medium text-3xl pb-6 text-center'>New Products</h2>
            <div className='grid grid-cols-1 place-items-center sm:place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                {
                    productData.map((item, index) => {
                        return (
                            <ProductCard
                                key={index}
                                desc={item.desc}
                                price={item.price}
                                title={item.title}
                                img={item.img}
                                rating={item.rating}
                            />
                        )
                    })
                }
            </div>
        </div>
        </div>
    )
}

export default NewProducts

const productData = [
    {
        img: '/images/jacket.jpg',
        title: "Jacket",
        desc: "Men Yarn Fleece Full-zip Jacket",
        rating: 4,
        price: '45.00'
    },
    {
        img: '/images/jwellery-2.jpg',
        title: "Bracelet",
        desc: "Swarovski Millenia Bracelet, Pear cut Swarovski Zirconia, Clear, Rhodium Finish",
        rating: 5,
        price: "200.00"
    },
    {
        img: '/images/t-shirt.jpg',
        title: "T-Shirt",
        desc: "Cotton T-shirt",
        rating: 3,
        price: '39.00'
    },
    {
        img: '/images/skirt-2.jpg',
        title: 'Skirt',
        desc: "Formal Skirt",
        rating: 5,
        price: "55.00"
    },
    {
        img: '/images/heel.jpg',
        title: "Party Wear",
        desc: "Woman's Party Wear Shoes",
        rating: 3,
        price: '25.00'
    },
    {
        img: '/images/shoes-1.jpg',
        title: "Sports",
        desc: "Trekking & Running Shoes - Black",
        rating: 3,
        price: "58.00"
    },
    {
        img: '/images/smart-watch.jpg',
        title: "Watches",
        desc: "Smart Watch",
        rating: 4,
        price: '76.00'
    },
    {
        img: '/images/jwellery-1.jpg',
        title: "Bracelet",
        desc: "Swarovski Women's Infinity Heart Jewelry Collection, Rose Gold Tone & Rhodium Finish, Clear Crystals",
        rating: 4,
        price: "100.00"
    },
    {
        img: '/images/leather-watch.jpg',
        title: "Watches",
        desc: "Leather Watch with Stainless Steel Band",
        rating: 4,
        price: '88.00'
    },
    {
        img: '/images/skirt-1.jpg',
        title: 'Skirt',
        desc: "Black Wrap Midi Skirt",
        rating: 5,
        price: "65.00"
    }
]