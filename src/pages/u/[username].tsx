import ProfileCard from '@/components/ProfileCard';
import { getUser } from '@/services/user.service';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

export async function getServerSideProps ({ params }: GetServerSidePropsContext) {
  const user = await getUser(params?.username as string);
  if (!user) return ({ notFound: true });
  return {
    props: { username: params?.username }
  }
}

export default function Username({ username }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>{`${username || "User"} @ Rahazzia`}</title>
      </Head>
      <ProfileCard username={username as string} />
    </>
  )
}