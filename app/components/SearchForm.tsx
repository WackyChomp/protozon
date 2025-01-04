import Form from 'next/form';
import SearchFormReset from './SearchFormReset';

type Props = {}

const SearchForm = (props: Props) => {
  const query = 'somethin sumthin sum ting'

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

        <button type='submit' className='search_btn text-purple-600'>
          S
        </button>
      </div>
    </Form>
  )
}

export default SearchForm