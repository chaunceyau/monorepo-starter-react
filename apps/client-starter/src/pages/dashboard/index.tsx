import React from 'react';
import {Table} from '../../components/table';

const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    email: 'jane.cooper@example.com',
  },
  {
    name: 'Cody Fisher',
    title: 'Product Directives Officer',
    email: 'cody.fisher@example.com',
  },
];
const headings = ['Name', 'Title', 'Email'];

export function DashboardPage() {
  return (
    <div>
      <Table data={people} headings={headings} />
    </div>
  );
}
