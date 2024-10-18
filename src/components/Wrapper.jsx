import classNames from 'classnames'
import React from 'react'

const Wrapper = ({ children  , className}) => {
  return (
    <main className={classNames('max-w-screen-2xl mx-auto',className)}>
      {children}
    </main>
  )
}

export default Wrapper
