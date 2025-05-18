'use client'

import { Table } from '@radix-ui/themes'
import React from 'react'
import Link from 'next/link'

// Define the Issue type based on your schema
interface Issue {
    id: string;
    title: string;
    description: string;
    status: string;
    createdAt: Date;
}

const IssueTable = ({ issues }: { issues: Issue[] }) => {
    if (issues.length === 0) return <p>No issues found.</p>

    return (
        <Table.Root variant="surface">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {issues.map(issue => (
                    <Table.Row key={issue.id}>
                        <Table.Cell>
                            <Link href={`/issues/${issue.id}`}>
                                {issue.title}
                            </Link>
                        </Table.Cell>
                        <Table.Cell>{issue.status}</Table.Cell>
                        <Table.Cell>{new Date(issue.createdAt).toDateString()}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}

export default IssueTable
