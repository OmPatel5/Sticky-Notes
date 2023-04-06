"use client"
import React from 'react'
import Axios from 'axios'
import { useRouter } from 'next/navigation';




function Remove({ noteId }: any) {
  const router = useRouter();

  async function removeNote(noteid: string) {
    await Axios.delete(`http://127.0.0.1:8090/api/collections/notes/records/${noteid}`).then((response) => {
      console.log(response)
    })
    router.refresh();
  }

  
  async function onRemove(e: any) {
    e.preventDefault();
    await removeNote(noteId);
    router.push('/')
  }

  return (
    <div>
        <button className="text-yellow-400 ml-10 mt-4" onClick={(e) => onRemove(e)}>Remove</button>
    </div>
  )
}

export default Remove