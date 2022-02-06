import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

const Testing = () => {
  const router = useRouter()
  console.log(router.query)
  console.log(router.query.testingId)
  return (
    <Link href="/">
      <h2> {router.query.testingId} </h2>
    </Link>
  )
};

export default Testing;
