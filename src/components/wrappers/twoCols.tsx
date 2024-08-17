import React from 'react'

type Props = {
    children: React.ReactNode;
}

export default function Twocols({children}: Props) {
  return (
    <div className="mx-auto max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 items-center lg:gap-24 lg:grid-flow-col-dense">
        {children}
    </div>
  )
}
