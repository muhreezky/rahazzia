import ProfileCard from '@/components/ProfileCard';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Username() {
  const router = useRouter();
  const { username } = router.query;
  return (
    <>
      <Head>
        <title>{`${username || "User"} @ Rahazzia`}</title>
      </Head>
      <ProfileCard username={username as string} />
    </>
  )
}