import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import Table from '../components/elements/Table'

const people = [
  { name: 'Jane Cooper', title: 'Regional Paradigm Technician', role: 'Admin', email: 'jane.cooper@example.com' },
  // More people...
]

export default function Users() {

  const headerLabels = ['Name', 'Title', 'Email', 'role'];
  return (
    <Table
      data={people}
      headerLabels={headerLabels}
    />
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