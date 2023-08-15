import ProfileCard from '@/components/ProfileCard';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Username() {
  const router = useRouter();
  const { username } = router.query;
  const { data:session } = useSession();
  useEffect(() => {
    if (session?.user?.username === username) router.push("/dashboard");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <ProfileCard username={username as string} />
    </>
  )
}