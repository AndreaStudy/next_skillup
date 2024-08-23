'use client'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { SignUpRequestType } from '@/types/RequestTypes'
import { SignUpErrorType } from '@/types/ErrorTypes'
import SignUpFeild from './SignUpFeild'

export default function SignUpForm({handleSignUp}: {handleSignUp:(formData: FormData) => void}) {

  // const [payload, setPayload] = React.useState<SignUpRequestType>({
  //   email: '',
  //   password: '',
  //   name: '',
  //   phoneNumber: '',
  //   nickname: '',
  //   birth: new Date(),
  //   address: '',
  //   gender: '남성'
  // })

  
  // const handleSignUp = async ( payload:SignUpRequestType ) => {
  //   const res = await fetch(`http://localhost:8080/api/v1/auth/sign-up`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       payload
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   return await res.json()
  // }

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   if (isError) return;
  //   const data = handleSignUp(payload)
  //   console.log(data)
  // }

 

  return (
    <form className='mx-4 flex flex-col gap-2' action={handleSignUp}>
      <SignUpFeild />
      <Button type='submit' className='w-full'>회원가입</Button>
    </form>
  )
}
