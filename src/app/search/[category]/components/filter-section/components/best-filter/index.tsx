'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function BestFilter() {
    const [isOpen, setIsOpen] = useState(true);
    const [maxHeight, setMaxHeight] = useState("0px");
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            setMaxHeight("1000px");
        } else {
            setMaxHeight("0px");
        }
    }, [isOpen]);

    const checkBoxStyling = {
        color: '#E4E9EE',
        fontFamily: 'Jost, sans-serif',
        '&.Mui-checked': {
            color: '#1E4C2F',
        },
    };

    const handleChange = (param: string, checked: boolean) => {
        const newSearchParams = new URLSearchParams(searchParams);

        if (checked) {
            newSearchParams.set(param, "true");
        } else {
            newSearchParams.delete(param);
        }

        // Building the new URL
        const basePath = pathname;  // Gets the current path without query string
        const queryString = newSearchParams.toString();  // Gets the query string from URLSearchParams
        const newUrl = queryString ? `${basePath}?${queryString}` : basePath;  // Append query string if not empty

        router.push(newUrl);
    };

    const isChecked = (param: string): boolean => searchParams.get(param) === "true";

    return (
        <div className="w-full flex flex-col justify-center">
            <div className="flex justify-between cursor-pointer" onClick={toggleOpen}>
                <div className="text-[#0B0F0E] text-[16px] font-[600]">Best Filter</div>
                <Image src='/assets/svgs/UP_ARROW.svg' width='12' height='12' alt='up-arrow' className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            <div style={{ maxHeight: maxHeight, overflow: 'hidden', transition: 'max-height 0.5s ease' }}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox
                            checked={isChecked("above4stars")}
                            onChange={(event) => handleChange("above4stars", event.target.checked)}
                            sx={checkBoxStyling}
                        />}
                        label={<div className='text-[#818B9C] text-[14px] md:text-[16px] font-[400]'>Above 4 Stars</div>}
                    />
                    <FormControlLabel
                        control={<Checkbox
                            checked={isChecked("branded")}
                            onChange={(event) => handleChange("branded", event.target.checked)}
                            sx={checkBoxStyling}
                        />}
                        label={<div className='text-[#818B9C] text-[14px] md:text-[16px] font-[400]'>Branded</div>}
                    />
                    <FormControlLabel
                        control={<Checkbox
                            checked={isChecked("discount")}
                            onChange={(event) => handleChange("discount", event.target.checked)}
                            sx={checkBoxStyling}
                        />}
                        label={<div className='text-[#818B9C] text-[14px] md:text-[16px] font-[400]'>Discount</div>}
                    />
                </FormGroup>
            </div>
        </div>
    );
}
