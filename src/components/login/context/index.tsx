'use client';
import { ReactNode } from 'react';
import { useForm, FormProvider, UseFormReturn, SubmitHandler } from 'react-hook-form';
import { LoginFormData } from '../interfaces';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useGlobalState } from '@/context';
import { useContext } from 'react';


interface LoginContextWrapperProps {
    children: ReactNode;
}

export default function LoginContextWrapper({ children }: LoginContextWrapperProps) {
    // Initialize the form methods with type
    const methods: UseFormReturn<LoginFormData> = useForm<LoginFormData>({
        defaultValues: {
            email: "",
            password: "",
        }
    });
    const {auth,setAuth} = useGlobalState();
    
    const onSubmit: SubmitHandler<LoginFormData> = async ({ email, password }: LoginFormData) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/auth/login`, {
                email, password
            });
            if(response.status === 403){
                toast.warning(response.data.message);
            }
            if (response.status === 200) {
                setAuth({
                    ...auth,
                    user: response.data.user,
                    // token: res.data.token,
                });
                localStorage.setItem("auth", JSON.stringify(response.data));
                toast.success(response.data.message);
            }
        } catch (error:any) {
            console.error("Error during user creation and update:", error);
            if(error.response.status === 403){
                return toast.warning(error.response.data.message);
            }
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
