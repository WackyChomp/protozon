
import IdeaForm from '@/components/IdeaForm'
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const page = async () => {
  const session = await auth();
  if(!session) { redirect('/') }
  
  return (
    <>
      <section className="yellow_container !min-h-[230px]">
        <h1 className='heading'>Submit your Idea/Pitch</h1>
      </section>

      <IdeaForm />
    </>
  )
}

export default page