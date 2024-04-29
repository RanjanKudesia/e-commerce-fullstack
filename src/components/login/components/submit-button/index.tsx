'use client';
import { useFormContext } from 'react-hook-form';

const SubmitButton = ({ label = "Submit" }: { label?: string }) => {
    const { formState: { isSubmitting } } = useFormContext(); // useFormContext hook to access form state

    return (
        <button type="submit" disabled={isSubmitting} className="w-full rounded-[8px] py-[11px] px-[10px] text-center bg-[#1E4C2F] text-white">
            {isSubmitting ? 'Processing...' : label}
        </button>
    );
}

export default SubmitButton;
