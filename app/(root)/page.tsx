import { auth } from "@/auth";
import IdeaCard, { IdeaCardType } from "@/components/IdeaCard";
import SearchForm from "../../components/SearchForm";
import { IDEA_QUERY } from "@/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

// import { client } from '@/sanity/lib/client'         // old way of fetching data

export default async function Home({ searchParams } : {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;
  const params = { search: query || null }

  const session = await auth();
  console.log(session?.id);

  // ----- EXAMPLE POST FOR TESTING HOW DATA IS RENDERED ON A CARD -----
  // const fake_post = [{ 
  //   _createdAt: new Date(),
  //   views: 201,
  //   author: { _id: 1, name: 'Joshua' },
  //   id: 1,
  //   description: "Briefly describe what you see on screen PS: it's not a kitty kat :(",
  //   image: 'https://i.etsystatic.com/37712799/r/il/c03fd3/4174014590/il_fullxfull.4174014590_lj2s.jpg',
  //   category: 'Fur Ball',
  //   title: 'Dancing Feline',
  // }]

  // const posts = await client.fetch(IDEA_QUERY)     // old way of fetching
  const { data: posts } = await sanityFetch({ query: IDEA_QUERY, params });
  console.log(JSON.stringify(posts, null, 2))


  return (
    <>
      <section className="yellow_container iso_pattern">
        <div className='heading sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px]'>
          Spread the word <br/> This is the place
        </div>
        <p className="sub_heading !max-w-3xl">
          Share your ideas, bridge new connections, and innovate!
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for: "${query}"` : 'All Ideas'}
        </p>

        <ul className="mt-7 card_grid md:grid-cols-3 sm:grid-cols-2">
          {posts?.length > 0 ? (
            posts.map((post: IdeaCardType) => (
              <IdeaCard key={post?._id} post={post} />
            ))
          ): (
            <p className="no-results">No Ideas</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}