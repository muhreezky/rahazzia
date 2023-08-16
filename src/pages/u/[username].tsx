import ProfileCard from '@/components/ProfileCard';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Username() {
  const router = useRouter();
  const { username } = router.query;
  const { data:session } = useSession();
  useEffect(() => {
    if (session) {
      session.user?.username === username ? router.push("/dashboard") : null;
    }
  }, [router, session, username]);
  return (
    <>
      <Head>
        <title>{`${username} @ Rahazzia`}</title>
      </Head>
      <ProfileCard username={username as string} />
    </>
  )
}