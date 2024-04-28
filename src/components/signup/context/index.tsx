'use client';
import { ReactNode } from 'react';
import { useForm, FormProvider, UseFormReturn, SubmitHandler } from 'react-hook-form';
import { SignupFormData } from '../interfaces';
import axios from 'axios';
import { toast } from 'react-toastify';

interface SignupContextWrapperProps {
    children: ReactNode;
}

export default function SignupContextWrapper({ children }: SignupContextWrapperProps) {
    // Initialize the form methods with type
    const methods: UseFormReturn<SignupFormData> = useForm<SignupFormData>({
        defaultValues: {
            email: "",
            password: "",
            name: ""
        }
    });

    const onSubmit: SubmitHandler<SignupFormData> = async ({ email, password, name }: SignupFormData) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/auth/signup`, {
                email, password, name
            });
            if (response.status === 201) {
                console.log(response);
                toast.success(response.data.message);
            }
        } catch (error:any) {
            console.error("Error during user creation and update:", error);
            toast.error(error.response.data.code);
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="block">
                {children}
            </form>
        </FormProvider>
    );
}
