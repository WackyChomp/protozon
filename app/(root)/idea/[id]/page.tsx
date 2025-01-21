import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client'
import { IDEA_BY_ID_QUERY } from '@/lib/queries';
import { formatDate } from '@/lib/utils';

export const experimental_ppr = true;

const Page = async ({ params } : { params: Promise<{ id : string }> }) => {
  const id = (await params).id;

  const post = await client.fetch( IDEA_BY_ID_QUERY, {id} )

  console.log({id});

  return (
    <div>
      <h1 className='bg-pink-600 text-3xl'>This is a idea id: {id}</h1>
      <h1 className='bg-yellow-600 text-3xl'>This is the posts's title: {post.title}</h1>

      <section className="yellow_container !min-h-[230px]">
        <p className="tag">{formatDate(post?._createdAt)}</p>
        <h1 className="heading">{post.title}</h1>
        <p className="sub_heading !max-w-5xl">{post.description}</p>
      </section>

      <section className="section_container">
        <img 
          src={post.image} 
          alt="thumbnail" 
          className='w-full h-auto rounded-xl'
        />

        <div className="space-y-5 mt-10 max-w-4xl">
          <div className="bg-blue-400 flex-between gap-5">
            <Link href={`/user${post.author?._id}`}
              className='flex gap-2 items-center mb-4'
            >
              <Image 
                src={post.author.image}
                alt='avatar'
                width={65}
                height={65}
                className='rounded-full drop-shadow-lg'
              />
              
              <div>
                <p className="text-20-medium">{post.author.name}</p>
                <p className="text-16-medium !text-red-600">@{post.author.username}</p>
              </div>
            </Link>

            <div className="flex gap-1.5">
              <p className="category_tag">{post.category}</p>
            </div>
          </div>


          <div className="bg-red-400">
            <h3 className="text-3xl font-semibold">Pitch Details</h3>
            <div className="">{post.pitch}</div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Page