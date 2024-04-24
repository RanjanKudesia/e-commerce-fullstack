'use client';
import { useFormContext } from 'react-hook-form';

interface EmailInputProps {
    placeholder?: string;
}

const EmailInput = ({ placeholder = "Enter your email" }: EmailInputProps) => {
    const { register } = useFormContext(); // Access form context

    return (
        <input 
        type='email'
            {...register("email", { required: "Email is required" })}
            placeholder={placeholder}
            className=""
        />
    );
}

export default EmailInput;
