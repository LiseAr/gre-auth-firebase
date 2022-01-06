import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'

export default function profile() {
  return (
    <div>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['gre.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}