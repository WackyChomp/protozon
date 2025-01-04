'use client'

import Link from 'next/link';

const SearchFormReset = () => {

  const reset = () => {
    const form = document.querySelector('search_form') as HTMLFormElement
    if (form) form.reset()
  }

  return (
    <button type='reset' onClick={reset}>
      <Link href='/' className='search_btn text-purple-600'>
        (x)
      </Link>
    </button>
  )
}

export default SearchFormReset