import {signOut} from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { authOptions } from '<nextjs>/pages/api/auth/[...nextauth]';
import Link from 'next/link';
import CreateNote from '<nextjs>/components/CreateNote';


async function getNotes(email : any) {
	const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records?page=1&filter=(email='${email}')`, {cache: 'no-store'})
	const notes = await res.json();

  return notes?.items as any[];
}

async function Notes() {
  const session = await getServerSession(authOptions);
	const notes = await getNotes(session?.user?.email)
	console.log(notes)

  return (
    <div className='bg-gray-700 h-screen flex flex-col items-center justify-center '>
			<h1 className='text-9xl mb-8 text-white'>notes!</h1>

			<div className='flex flex-wrap justify-center mt-4'>
			{notes?.map((note) => {
				return (
						<Note key={note.id} note={note} />
				)
			})}
			</div>

			<CreateNote email={session?.user?.email}/>
			
    </div>
  )
}

function Note({ note }: any) {
	return (
		<>
			<Link href={`/${note.id}`}>
				<div className="max-w-xs p-6 bg-white border-2 	 border-gray-200 rounded-lg shadow dark:bg-yellow-400 dark:border-gray-700">
								<h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{note.title}</h2>
								<p className='font-normal text-gray-900 dark:text-gray-1000'>{note.content}</p>
								<p className='mt-3 font-normal dark:text-gray-500'>created: {note.created}</p>
				</div>
			</Link>
		</>
	)
}

export default Notes