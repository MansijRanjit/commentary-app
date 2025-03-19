'use client'
import { useSession, signIn, signOut } from "next-auth/react"

export default function SignIn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className="bg-red-600 px-[10px] py-[5px]  rounded" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button className="bg-green-600 px-[10px] py-[5px]  rounded" onClick={() => signIn()}>Sign in</button>
    </>
  )
}