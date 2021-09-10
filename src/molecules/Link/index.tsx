import NextLink from 'next/link'
import { ReactNode } from 'react'

interface Props {
  href: {
    pathname: string
    query: { id: string }
  }
  children: ReactNode
}

export const Link = ({ href, children, ...props }: Props) => {
  return (
    <NextLink href={href}>
      <>
        <a {...props}></a>
        {children}
      </>
    </NextLink>
  )
}
