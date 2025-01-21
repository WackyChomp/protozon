import React from 'react';
import { client } from '@/sanity/lib/client'
import { IDEA_BY_ID_QUERY } from '@/lib/queries';

export const experimental_ppr = true;

const Page = async ({ params } : { params: Promise<{ id : string }> }) => {
  const id = (await params).id;

  const post = await client.fetch( IDEA_BY_ID_QUERY, {id} )

  console.log({id});

  return (
    <div>
      <h1 className='bg-pink-600 text-3xl'>This is a idea id: {id}</h1>
      <h1 className='bg-yellow-600 text-3xl'>This is the posts's title: {post.title}</h1>
    </div>
  )
}

export default Page