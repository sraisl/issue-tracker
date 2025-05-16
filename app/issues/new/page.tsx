'use client';

import React from 'react';
import {Button, TextArea, TextField} from "@radix-ui/themes";

const NewIssuePage = () => {
    return (
        <div className={"max-w-xl space-y-5"}>
            <TextField.Root placeholder={"Title"}></TextField.Root>
            <TextArea placeholder="description" />
            <Button>Submit New Issue</Button>
        </div>
    );
};

export default NewIssuePage;