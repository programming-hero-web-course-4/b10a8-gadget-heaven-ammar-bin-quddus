import React from 'react'

const ReviewCart = ({reviews}) => {
    
    const {customer_image, review, customer_name} = reviews;

    console.log(reviews)

  return (
    <div className='p-3 w-full rounded-lg bg-purple-400 text-white shadow-lg flex flex-col items-center justify-center gap-3 text-center'>
        <img className='w-16 h-16 rounded-full object-top object-cover' src={customer_image} alt="" />
        <p className='text-xl font-bold'>{customer_name}</p>
        <p className='text-sm font-mono'>&quot; {review} &quot;</p>
    </div>
  )
}

export default ReviewCart