import { signUpAction } from '@/actions/signUpAction'
import SignUpForm from '@/components/forms/SignUpForm'
import React from 'react'

export default function SignUp() {

  const handleSignUp = async (signUpFormData: FormData ) => {
   
    'use server'    
    const res = await signUpAction(signUpFormData)
    console.log(res)
    
  } 
  return (
    <main>
      <SignUpForm handleSignUp = {handleSignUp}/>
    </main>
  )
}
