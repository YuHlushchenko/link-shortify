'use client'

// ? Rortal in React is a way to render a component outside of the DOM hierarchy of the parent component
// ? so it can be rendered in a different part of the DOM tree

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: React.ReactNode | React.ReactNode[] // ? the content that will be rendered in the portal
  element?: HTMLElement // ? the container in which the portal will be rendered
}

export const Portal = ({ children, element }: PortalProps) => {
  const [domNode, setDomNode] = useState<HTMLElement | null>(null)

  // * wait for the document to be defined
  useEffect(() => {
    setDomNode(element || document.body)
  }, [element])

  if (!domNode) return null

  return createPortal(children, domNode)
}
