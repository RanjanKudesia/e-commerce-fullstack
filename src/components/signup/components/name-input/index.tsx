'use client';
import { useFormContext } from 'react-hook-form';

interface NameInputProps {
    placeholder?: string;
}

const NameInput = ({ placeholder = "Enter your name" }: NameInputProps) => {
    const { register } = useFormContext(); // Access form context

    return (
        <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder={placeholder}
            className=""
        />
    );
}

export default NameInput;
