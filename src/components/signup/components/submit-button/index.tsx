'use client';
import { useFormContext } from 'react-hook-form';

const SubmitButton = ({ label = "Submit" }: { label?: string }) => {
    const { formState: { isSubmitting } } = useFormContext(); // useFormContext hook to access form state

    return (
        <button type="submit" disabled={isSubmitting} className="btn btn-primary">
            {isSubmitting ? 'Processing...' : label}
        </button>
    );
}

export default SubmitButton;
