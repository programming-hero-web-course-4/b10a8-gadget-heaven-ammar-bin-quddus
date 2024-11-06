import React from 'react'

const ShowCart = ({data}) => {
    const {product_title, product_image, description, price} = data

  return (
    <div className='w-full p-2 bg-white rounded-xl flex justify-between items-start shadow-xl'>
        <div className='flex items-center gap-3'>
            <img className='w-24 h-24' src={product_image} alt={product_title} />
            <div>
                <p>{product_title}</p>
                <p>{description}</p>
                <p>Price: ${price}</p>
            </div>
        </div>
        <button className='btn btn-circle btn-sm'><i className="fa-regular fa-circle-xmark text-red-600 text-xl"></i></button>
    </div>
  )
}

export default ShowCart