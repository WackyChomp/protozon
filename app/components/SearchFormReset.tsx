'use client'

import Link from 'next/link';
import { X } from 'lucide-react';

const SearchFormReset = () => {

  const reset = () => {
    const form = document.querySelector('search_form') as HTMLFormElement
    if (form) form.reset()
  }

  return (
    <button type='reset' onClick={reset}>
      <Link href='/' className='search_btn text-purple-600'>
        <X className='hover:rotate-180 transition'/>
      </Link>
    </button>
  )
}

export default SearchFormReset