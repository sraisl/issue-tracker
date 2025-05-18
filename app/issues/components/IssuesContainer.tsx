'use client'

import React, { useEffect, useState } from 'react'
import IssueTable from './IssueTable'
import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'

interface Issue {
    id: string;
    title: string;
    description: string;
    status: string;
    createdAt: Date;
}

const IssuesContainer = () => {
    const [issues, setIssues] = useState<Issue[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchIssues = async () => {
            try {
                setIsLoading(true)
                const response = await fetch('/api/issues')

                if (!response.ok) {
                    throw new Error('Failed to fetch issues')
                }

                const data = await response.json()
                setIssues(data)
            } catch (error) {
                console.error('Error fetching issues:', error)
                setError('Error loading issues. Please try again later.')
            } finally {
                setIsLoading(false)
            }
        }

        fetchIssues()
    }, [])

    return (
        <div className="space-y-5">
            <Flex justify="between">
                <h1 className="text-xl font-bold">Issues</h1>
            </Flex>

            {isLoading && <p>Loading issues...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!isLoading && !error && <IssueTable issues={issues} />}
        </div>
    )
}

export default IssuesContainer
