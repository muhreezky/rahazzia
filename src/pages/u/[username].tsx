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
  const desc = `Kirim pesan anonim untuk @${username}`;
  const title = `${username} @ Rahazzia`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={desc} />
        <meta name="robots" content="index,follow" />
      </Head>
      <ProfileCard username={username as string} />
    </>
  )
}