import { PageProps } from '<nextjs>/.next/types/app/layout'
import Remove from '<nextjs>/components/Remove';
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '<nextjs>/pages/api/auth/[...nextauth]';


async function getNote(noteId: string, email: string) {
	const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`, {
		next: {revalidate: 10}
	})
	const note = await res.json();

	if (note.email === email) {
		return note;
	}
	else {
		throw new Error("Note Not Found!") 
	}
}

async function NotesPage({ params }: PageProps) {
  const session = await getServerSession(authOptions);
	const email : any = session?.user?.email
	

  const note : any = await getNote(params.id, email);
  
  if (note.code === 404) {
	throw new Error("Note Not Found!") 
  } 

  
	
  return (
    <div className='bg-gray-700 h-screen flex flex-col items-center justify-center'>
			<h1 className='mb-2 text-2xl font-bold tracking-tight text-white'>
				notes/{params.id}
			</h1>

			<div className='block w-96 bg-white border-2 p-8 h-96 border-gray-200 rounded-lg shadow dark:bg-blue-400 dark:border-gray-700'>
				<div className='flex'>
					<h3 className='mb-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white'>{note.title}</h3>
					<Remove noteId={params.id} />
				</div>
				<p className='text-xl text-gray-900 dark:text-gray-1000'>{note.content}</p>
				<p className='mt-3 text-xl dark:text-blue-950'>{note.created}</p>
			</div>



			
		</div>
  )
}

export default NotesPage