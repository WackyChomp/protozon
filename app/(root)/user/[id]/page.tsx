import { Suspense } from "react";
import { auth } from "@/auth";
import { notFound } from "next/navigation";
import Image from "next/image";
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID_QUERY } from "@/lib/queries";

import UserIdeas, { IdeaCardSkeleton } from "@/components/UserIdeas";

export const experimental_ppr = true;


const Page = async ({ params }: { params: Promise<{id:string}> }) => {
  const id = (await params).id
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, {id})

  if(!user) return notFound()

  return (
    <section className="profile_container lg:flex-row">
     <div className="bg-red-600 flex flex-between p-3">
       <div>User Page</div>
       <div>Name: {user.name}</div>
       <div>User Id: {id}</div>
      </div>

      <div className="profile_card max-lg:w-full">
        <div className="profile_title">
          <h3 className="text-2xl font-extrabold uppercase text-center line-clamp-1">
            {user.name}
          </h3>
        </div>

        <Image 
          src={user.image}
          alt={user.name}
          width={200}
          height={200}
        />

        <p className="text-1xl font-extrabold mt-8 text-center">
          @{user?.username}
        </p>
        <p className="mt-1 text-center text-14-normal">
          {user?.bio}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-5 lg:mt-5">
        <p className="text-2xl font-bold">
          {session ?.id == id ? 'Your' : 'All'} Ideas
        </p>
        <ul>
          <Suspense fallback={<IdeaCardSkeleton/>}>
            {/* add all ideas by user */}
            <UserIdeas id={id} />
          </Suspense>
        </ul>
      </div>
      
    </section>
  )
}

export default Page