import AuthServiceHeader from '@/components/layouts/AuthServiceHeader'
import AuthServiceHeaderCsr from '@/components/layouts/AuthServiceHeaderCsr'
import React from 'react'
import { headers } from 'next/headers'

function layout({
  children,
}: Readonly<{
  children: React.ReactNode,
  params: { slug: string }
}>) {
  
  return (
    <>
      <AuthServiceHeaderCsr/>
      {children}
    </>
  )
}

export default layout
