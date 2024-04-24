'use client';
import { useFormContext } from 'react-hook-form';

interface PasswordInputProps {
    placeholder?: string;
}

const PasswordInput = ({ placeholder = "Enter your password" }: PasswordInputProps) => {
    const { register } = useFormContext(); // Access form context

    return (
        <input
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder={placeholder}
            className=""
        />
    );
}

export default PasswordInput;
