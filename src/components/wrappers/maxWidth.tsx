'use client'
import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    children: React.ReactNode;
    className?: string;
}

export default function MaxWidthWrapper({children, className}: Props) {
  return (
    <div className={cn(`px-2.5 md:px-12 w-full mx-auto max-w-screen-2xl`, className)} suppressHydrationWarning>
        {children}
    </div>
  )
}