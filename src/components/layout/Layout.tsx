import { PropsWithChildren, ReactElement } from 'react'

type PropTypes = PropsWithChildren & ReactElement;

export default function Layout(props: PropTypes) {
  return (
    <div>{props.children}</div>
  )
}