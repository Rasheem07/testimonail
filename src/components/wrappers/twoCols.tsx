import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    children: React.ReactNode;
    className?: string
}

export default function Twocols({children, className}: Props) {
  return (
    <div className={cn("mx-auto flex flex-col max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 items-center lg:gap-24 lg:grid-flow-col-dense", className)}>
        {children}
    </div>
  )
}
