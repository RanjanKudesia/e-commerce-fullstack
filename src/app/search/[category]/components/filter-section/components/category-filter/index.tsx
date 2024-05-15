'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSearchState } from '../../../../context';

export default function CategoryFilter() {
    const { subCategories, subCategory, setSubCategory } = useSearchState();
    const [isOpen, setIsOpen] = useState(true);
    const [maxHeight, setMaxHeight] = useState("0px");

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            setMaxHeight("200px");
        } else {
            setMaxHeight("0px");
        };
    }, [isOpen]);

    const checkBoxStyling = {
        color: '#1E4C2F',
        '&.Mui-checked': {
            color: '#1E4C2F',
        },
    };

    const overflowStyle = isOpen ? 'auto' : 'hidden';

    const handleCategoryChange = (category: string) => {
        if (subCategory === category) {
            setSubCategory(""); // If already selected, deselect it
        } else {
            setSubCategory(category); // Otherwise, select the new category
        }
    };

    return (
        <div className="w-full flex flex-col justify-center">
            <div className="flex justify-between cursor-pointer" onClick={toggleOpen}>
                <div className="text-[#0B0F0E] text-[16px] font-[600]">Category</div>
                <Image src='/assets/svgs/UP_ARROW.svg' width='12' height='12' alt='up-arrow' className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            <div className='overflow-y-auto' style={{ maxHeight: maxHeight, overflowY: overflowStyle, transition: 'max-height 0.5s ease' }}>
                <FormGroup>
                    {subCategories.length > 0 && subCategories.map((category, index) => (
                        <FormControlLabel
                            key={`${category}-${index}`}
                            control={
                                <Checkbox
                                    checked={subCategory === category}
                                    onChange={() => handleCategoryChange(category)}
                                    sx={checkBoxStyling}
                                />
                            }
                            label={<div className='text-[#818B9C] text-[16px] font-[400]'>{category}</div>}
                        />
                    ))}
                </FormGroup>
            </div>
        </div>
    );
};
