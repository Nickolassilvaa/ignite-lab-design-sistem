import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface HeadingProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  className?: string
}

export function Heading({
  children,
  asChild,
  size = 'md',
  className,
}: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'
  return (
    <Comp
      className={clsx(
        'text-gray-100 font-bold font-sans,',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        },
        className,
      )}
    >
      {children}
    </Comp>
  )
}
