'use client';

import React, {useState} from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import {Button, Callout, TextField} from "@radix-ui/themes";
import {useForm, Controller} from "react-hook-form";
import {useRouter} from "next/navigation";

interface IssueForm {
    title: string;
    description: string;
}

const NewIssuePage = () => {
    const router = useRouter();
    const {register, control, handleSubmit} = useForm<IssueForm>();
    const [error, setError] = useState('');

    return (
        <div className='max-w-xl space-y-5'>
            {error && <Callout.Root color='red'>
                <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
        <form
            onSubmit={handleSubmit(async (data) => {
                try {
                    await axios.post("/api/issues", data);
                    router.push("/issues");
                } catch (error) {
                    setError('An unexpected error occurred.');
                }
            })}>
            <TextField.Root placeholder={"Title"} {...register('title')}></TextField.Root>
            <Controller
                name="description"
                control={control}
                render={({field}) => <SimpleMDE placeholder='Description' {...field} />}
            />
            <Button> Submit New Issue</Button>
        </form>
    </div>
    );
};

export default NewIssuePage;