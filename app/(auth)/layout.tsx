import React, { ReactNode } from 'react'

function layout({children}: {children: ReactNode}) {
  return (
    <div className='auth-container'>{children}</div>
  )
}

export default layout