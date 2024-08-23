import { getServerSession } from 'next-auth'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options'

export default async function page() {

  const session = await getServerSession(options)
  console.log(session?.expires)

  return (
    <div>
      main
    </div>
  )
}
