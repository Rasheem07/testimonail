import React, { Ref, MouseEventHandler } from 'react';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  playbtnref: Ref<HTMLButtonElement>;
  onclick: MouseEventHandler<HTMLButtonElement>;
  className?: string
};

export default function Playbtn({ playbtnref, onclick, className}: Props) {
  return (
    <button
      ref={playbtnref}
      onClick={onclick}
      className={cn("cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full bg-purple-600 shadow-inner", className)}
    >
      <Play className="h-12 w-12 text-zinc-100 fill-zinc-100" />
    </button>
  );
}
