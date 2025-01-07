import IdeaCard from "@/components/IdeaCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams } : {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  const posts = [{ 
    _createdAt: new Date(),
    views: 201,
    author: { _id: 1, name: 'Joshua' },
    id: 1,
    description: "Briefly describe what you see on screen PS: it's a kitty kat :)",
    image: 'https://media1.tenor.com/m/RzBwcGVkMTAAAAAd/cat-kiss.gif',
    category: 'Fur Ball',
    title: 'Dancing Feline',
  }]

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
            posts.map((post: IdeaCardType, index: number) => (
              <IdeaCard key={post?._id} post={post} />
            ))
          ): (
            <p className="no-results">No Ideas</p>
          )}
        </ul>
      </section>
    </>
  );
}