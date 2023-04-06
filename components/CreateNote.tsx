"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'



function CreateNote({ email }: any) {
	const router = useRouter();

	const [content, setContent] = useState('');
	const [title, setTitle] = useState('')

	async function createNote(title: string, content : string, email: string) {
		await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title,
					content,
					email, 
				}),
			});
			router.refresh();

			
	}

	function handleSubmit(e: any) {
		e.preventDefault();
		createNote(title, content, email)
	}

  return (
    <div className='mt-24'>
		<h2 className='text-white font-bold text-2xl mb-3'>Create a Note!</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="first_name" className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
            <textarea id="message" value={content} onChange={(e) => setContent(e.target.value)} rows={4} className="block w-80 p-2.5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your content here..."></textarea>
			<input type="submit" className="text-yellow-200 font-bold text-md animate-pulse mt-1" />

        </form>

    </div>
  )
}

export default CreateNote