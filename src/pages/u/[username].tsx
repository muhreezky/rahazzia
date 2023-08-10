import { useRouter } from 'next/router'
import React from 'react'

export default function Username() {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div>Username</div>
  )
}