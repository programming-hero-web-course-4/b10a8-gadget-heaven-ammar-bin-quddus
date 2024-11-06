import React from 'react'
import { getWishList } from '../utilities/addToStorage';
import { useLoaderData } from 'react-router-dom';
import ShowWishList from './ShowWishList';

const WishList = () => {
  
  const allData = useLoaderData();
  const cartListData = getWishList();

  const filteredWishListData = allData.filter((data) => cartListData.includes(data.product_id));


  return (
    <div className='w-11/12 mx-auto'>
      <div className="flex justify-start items-center">
        <p className="text-2xl font-bold">Wish List</p>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-4 mt-6">
        {
          filteredWishListData.map((data) => <ShowWishList key={data.product_id} data={data} />)
        }
      </div>
    </div>
  )
}

export default WishList