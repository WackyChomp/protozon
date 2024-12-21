import Link from 'next/link';
import Image from 'next/image';
import { auth, signIn, signOut } from '@/auth';

const Navbar = async () => {
  const logo = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXJhYmJpdCI+PHBhdGggZD0iTTEzIDE2YTMgMyAwIDAgMSAyLjI0IDUiLz48cGF0aCBkPSJNMTggMTJoLjAxIi8+PHBhdGggZD0iTTE4IDIxaC04YTQgNCAwIDAgMS00LTQgNyA3IDAgMCAxIDctN2guMkw5LjYgNi40YTEgMSAwIDEgMSAyLjgtMi44TDE1LjggN2guMmMzLjMgMCA2IDIuNyA2IDZ2MWEyIDIgMCAwIDEtMiAyaC0xYTMgMyAwIDAgMC0zIDMiLz48cGF0aCBkPSJNMjAgOC41NFY0YTIgMiAwIDEgMC00IDB2MyIvPjxwYXRoIGQ9Ik03LjYxMiAxMi41MjRhMyAzIDAgMSAwLTEuNiA0LjMiLz48L3N2Zz4=`

  const session = await auth();

  return (
    <div className='px-5 py-3 bg-green-500 shadow-sm font-work-sans'>
      <nav className="flex justify-between items-center">
        <Link href='/' className='bg-red-700 flex items-center gap-2 rounded-md'>
          <Image src={logo} alt='logo' width={40} height={40}/>
          <span className='text-black font-semibold text-4xl uppercase'>Protozon</span>
        </Link>

        <div className="text- bg-yellow-500 flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href='/collection/create'>
                <span>Create</span>
              </Link>
              <form action={async () => {
                'use server';
                await signOut({ redirectTo:'/'});
              }}>
                <button type='submit'>Logout</button>
              </form>

              <Link href={`/user${session?.id}`}>
                <span>{session?.user?.name}</span>
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