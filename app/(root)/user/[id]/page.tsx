import { auth } from "@/auth";
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID_QUERY } from "@/lib/queries";
import { notFound } from "next/navigation";


const Page = async ({ params }: { params: Promise<{id:string}> }) => {
  const id = (await params).id
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, {id})

  if(!user) return notFound()

  return (
    <section>
     <div className="bg-red-600 flex flex-between p-3">
       <div>User Page</div>
       <div>Name: {user.name}</div>
       <div>User Id: {id}</div>
      </div>
    </section>
  )
}

export default Page