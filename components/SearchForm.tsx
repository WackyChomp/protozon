import Form from 'next/form';
import SearchFormReset from './SearchFormReset';
import { Search } from 'lucide-react';

const SearchForm = ({ query }: { query?: string }) => {
  //const query = 'somethin sumthin sum ting'

  return (
    <Form action='/' scroll={false} className='search_form'>
      <input 
        name='query' 
        defaultValue={query}
        className='search_input'
        placeholder='Search for something'
      />

      <div className="flex gap-4">
        {query && ( <SearchFormReset /> )}

        <button type='submit' className='search_btn text-primary-400'>
          <Search className='hover:size-8 transition'/>
        </button>
      </div>
    </Form>
  )
}

export default SearchForm