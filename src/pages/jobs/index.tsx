import Table from '../../components/Table'

const people = [
  { name: 'Jane Cooper', title: 'Regional Paradigm Technician', role: 'Admin', email: 'jane.cooper@example.com' },
  // More people...
]

export default function Jobs() {

  const headerLabels = ['Name', 'Title', 'Email', 'role'];
  return (
    <Table
      data={people}
      headerLabels={headerLabels}
    />
  )
}
