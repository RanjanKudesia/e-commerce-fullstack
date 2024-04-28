'use client';
import { useFormContext } from 'react-hook-form';

interface NameInputProps {
    placeholder?: string;
    id:string
}

const NameInput = ({ placeholder = "Enter your name",id }: NameInputProps) => {
    const { register } = useFormContext(); // Access form context

    return (
        <input
        className="w-full bg-[#F6F8FA] rounded-[12px] py-[10px] px-[16px] font-[500] text-[#0B0F0E] text-[14px] outline-none placeholder:font-[400] placeholder:text-[#818B9C]"
            type="text"
            id={id}
            {...register("name", { required: "Name is required" })}
            placeholder={placeholder}
        />
    );
}

export default NameInput;
