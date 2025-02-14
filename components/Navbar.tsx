import Link from 'next/link';
import Image from 'next/image';
import { auth, signIn, signOut } from '@/auth';

import { BadgePlus, LogOut } from 'lucide-react';

import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const Navbar = async () => {
  const logo = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXJhYmJpdCI+PHBhdGggZD0iTTEzIDE2YTMgMyAwIDAgMSAyLjI0IDUiLz48cGF0aCBkPSJNMTggMTJoLjAxIi8+PHBhdGggZD0iTTE4IDIxaC04YTQgNCAwIDAgMS00LTQgNyA3IDAgMCAxIDctN2guMkw5LjYgNi40YTEgMSAwIDEgMSAyLjgtMi44TDE1LjggN2guMmMzLjMgMCA2IDIuNyA2IDZ2MWEyIDIgMCAwIDEtMiAyaC0xYTMgMyAwIDAgMC0zIDMiLz48cGF0aCBkPSJNMjAgOC41NFY0YTIgMiAwIDEgMC00IDB2MyIvPjxwYXRoIGQ9Ik03LjYxMiAxMi41MjRhMyAzIDAgMSAwLTEuNiA0LjMiLz48L3N2Zz4=`

  const session = await auth();

  return (
    <div className='px-5 py-3 bg-red-500 shadow-sm font-work-sans'>
      <nav className="flex justify-between items-center">
        <Link href='/' className='bg-black-200 flex items-center gap-1 rounded-md'>
          <Image src={logo} alt='logo' width={35} height={35} className='bg-yellow-400 rounded-l-md border-4 border-black-200'/>
          <span className='text-yellow-400 font-semibold text-4xl uppercase pr-0.5'>Protozon</span>
        </Link>

        <div className="bg-black-200 flex items-center gap-5 p-1 px-2 rounded-md">
          {session && session?.user ? (
            <>
              <Link href='/idea/create' className='flex flex-col items-center'>
                <span className='bg-blue-400 px-2 p-1 rounded-md max-sm:hidden'>Create</span>
                <BadgePlus className='text-primary-400 size-6 sm:hidden' />
              </Link>
              <form action={async () => {
                'use server';
                await signOut({ redirectTo:'/'});
              }}>
                <button type='submit' className='flex flex-col items-center'>
                  <span className='bg-blue-400 px-2 p-1 rounded-md max-sm:hidden'>Logout</span>
                  <LogOut className='size-6 sm:hidden text-primary-400' />
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
              <Avatar className='size-10'>
                <AvatarImage src={session?.user?.image} alt={session?.user?.name || ''} />
                <AvatarFallback>AV</AvatarFallback>
              </Avatar>
              </Link>
            </>
          ): (
            <form action={async () => {
              'use server';
              await signIn('github')
            }}>
              <button type='submit'>Login</button>
            </form>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar;