import Ping from './Ping'
import { IDEA_VIEWS_QUERY } from '@/lib/queries'
import { client } from '@/sanity/lib/client'
import { writeClient } from '@/sanity/lib/write-client'

import { unstable_after as after } from 'next/server'

const View = async ({ id }: { id: string }) => {

  const { views: totalViews } = await client
    .withConfig({useCdn:false})
    .fetch(IDEA_VIEWS_QUERY, { id }) 

  after(async () => await writeClient
    .patch(id)
    .set({ views: totalViews + 1 })
    .commit());
  
  return (
    <div className='view_container'>

      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <div className="view_text">
        <span className="font-black">{totalViews} views</span>
        <span className="font-black"> - Spooky Skeleton Here</span>
      </div>

    </div>
  )
}

export default View