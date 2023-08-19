import { ComponentPropsWithoutRef } from 'react';
import Nav from '../Nav';
import Footer from '../Footer';

type PropTypes = ComponentPropsWithoutRef<"div">;

export default function Layout(props: PropTypes) {
  return (
    <main className="flex flex-col min-h-screen">
      <Nav />
      <div className="p-5 my-6">
        {props.children}
      </div>
      <Footer />
    </main>
  )
}