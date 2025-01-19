import React from 'react'

const Page = async ({ params } : { params: Promise<{ id : string }> }) => {
  const id = (await params).id;
  return (
    <div>
      <h1 className='bg-pink-600 text-3xl'>This is a idea id: {id}</h1>
    </div>
  )
}

export default Page