import React from 'react'
import { Helmet } from 'react-helmet-async'

const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>Statistics | Gadget heaven</title>
      </Helmet>
      <div className="text-center text-white w-full bg-[#9538E2] pb-32 pt-8">
        <p className="text-2xl font-bold">Statistics</p>
        <p className="text-sm mt-4 text-wrap">
          Explore the latest gadgets that will take your experience to the next
          level. <br /> From smart devices to the coolest accessories, we have
          it all!
        </p>
      </div>
    </div>
  )
}

export default Statistics