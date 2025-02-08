import React from 'react'
import { client } from '@/sanity/lib/client'
import { IDEA_BY_AUTHOR_QUERY } from '@/lib/queries'
import IdeaCard, { IdeaTypeCard } from './IdeaCard'
import { Skeleton } from './ui/skeleton'
import { cn } from '@/lib/utils'

const UserIdeas = async ({ id }: { id:string }) => {

  const ideas = await client.fetch(IDEA_BY_AUTHOR_QUERY, {
    id
  })

  return(
    <div>
      {ideas.length > 0 ? (ideas.map((idea: IdeaTypeCard) =>(
        <IdeaCard key={idea._id} post={idea} />
      ))
    ) : (
        <p className="no_result">No Posts ${`:(`}</p>
      )}
    </div>
  )
}

export const IdeaCardSkeleton = () => (
  <>
  {[0, 1, 2, 3, 4].map((index: number) =>(
    <li key={cn('skeleton', index)}>
      <Skeleton className='idea_card_skeleton' />
    </li>
  ))}
  </>
)

export default UserIdeas