import React from 'react'
import { Input } from '../ui/input'
import { SignUpErrorType } from '@/types/ErrorTypes'

export default function SignUpFeild() {

  const [errorMessages, setErrorMessages] = React.useState<SignUpErrorType>({
    email: '',
    password: '',
    name: '',
    phoneNumber: '',
    nickname: '',
    birth: '',
    address: '',
    gender: ''
  })

  const [isError, setIsError] = React.useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  

    if (e.target.name === 'email') {
      if (!e.target.value.includes('@')) {
        setErrorMessages({
          ...errorMessages,
          email: '이메일 형식이 아닙니다.'
        })
        setIsError(true)
      } else {
        setErrorMessages({
          ...errorMessages,
          email: ''
        })
        setIsError(false)
      }
    }

  }

  return (
    <>
      <Input type="text" name="email" placeholder='email' onChange={handleChange}/>
      <p className='text-red-500 text-xs'>{isError? errorMessages.email : null}</p>
      <Input type="password" name="password" placeholder='password' onChange={handleChange}/>
      <Input type="password" name="confirm-password" placeholder='confirm-pass' onChange={handleChange}/>
      <Input type="text" name="name" placeholder='name' onChange={handleChange}/>
      <Input type="text" name="phoneNumber" placeholder='phoneNumber' onChange={handleChange}/>
      <Input type="text" name="nickname" placeholder='nickname' onChange={handleChange}/>
      <Input type="date-local" name="birth" placeholder='birth' onChange={handleChange}/>
      <Input type="text" name="address" placeholder='address' onChange={handleChange}/>
      {/* radio button select gender */}
      <Input type="text" name='gender' placeholder='gender' onChange={handleChange}/>
    </>
  )
}
