import Link from 'next/link';
import Image from 'next/image';
import { auth, signIn, signOut } from '@/auth';

const Navbar = async () => {
  const logo = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXJhYmJpdCI+PHBhdGggZD0iTTEzIDE2YTMgMyAwIDAgMSAyLjI0IDUiLz48cGF0aCBkPSJNMTggMTJoLjAxIi8+PHBhdGggZD0iTTE4IDIxaC04YTQgNCAwIDAgMS00LTQgNyA3IDAgMCAxIDctN2guMkw5LjYgNi40YTEgMSAwIDEgMSAyLjgtMi44TDE1LjggN2guMmMzLjMgMCA2IDIuNyA2IDZ2MWEyIDIgMCAwIDEtMiAyaC0xYTMgMyAwIDAgMC0zIDMiLz48cGF0aCBkPSJNMjAgOC41NFY0YTIgMiAwIDEgMC00IDB2MyIvPjxwYXRoIGQ9Ik03LjYxMiAxMi41MjRhMyAzIDAgMSAwLTEuNiA0LjMiLz48L3N2Zz4=`

  const session = await auth();

  return (
    <div className='px-5 py-3 bg-green-500 shadow-sm font-work-sans'>
      <nav className="flex justify-between items-center">
        <Link href='/' className='bg-black-200 flex items-center gap-1 rounded-md'>
          <Image src={logo} alt='logo' width={35} height={35} className='bg-yellow-400 rounded-l-md border-4 border-black-200'/>
          <span className='text-yellow-400 font-semibold text-4xl uppercase pr-0.5'>Protozon</span>
        </Link>

        <div className="text- bg-yellow-400 flex items-center gap-5 p-1 px-2 rounded-md">
          {session && session?.user ? (
            <>
              <Link href='/idea/create'>
                <span className='bg-blue-400 px-2 p-1 rounded-md'>Create</span>
              </Link>
              <form action={async () => {
                'use server';
                await signOut({ redirectTo:'/'});
              }}>
                <button type='submit' className='bg-blue-400 px-2 rounded-md'>Logout</button>
              </form>

              <Link href={`/user${session?.id}`}>
                <span className='bg-blue-400 px-2 p-1 rounded-md'>{session?.user?.name}</span>
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