'use client'

import React from 'react';
import {Button} from "@radix-ui/themes";
import Link from "next/link";
import IssuesContainer from "@/app/issues/components/IssuesContainer";

const IssuesPage = () => {
    return (
        <div className='space-y-5'>
            <IssuesContainer/>
            <div className='mt-4'>
                <Button><Link href="/issues/new">new Issue</Link></Button>
            </div>
        </div>
    );
};

export default IssuesPage;