import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <section className="yellow_container iso_pattern">
      <div className='heading sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px]'>
        Spread the word <br/> This is the place
      </div>
      <p className="sub_heading !max-w-3xl">
        Share your ideas, bridge new connections, and innovate!
      </p>

      <SearchForm />
    </section>
  );
}