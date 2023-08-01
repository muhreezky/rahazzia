import { ComponentPropsWithoutRef } from 'react';
import Nav from '../Nav';

type PropTypes = ComponentPropsWithoutRef<"div">;

export default function Layout(props: PropTypes) {
  return (
    <>
      <Nav />
      <main className="p-5 my-6">
        {props.children}
      </main>
    </>
  )
}