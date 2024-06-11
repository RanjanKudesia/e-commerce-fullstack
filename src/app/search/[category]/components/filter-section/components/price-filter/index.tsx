"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useSearchState } from "../../../../context";

export default function PriceFilter() {
  const [isOpen, setIsOpen] = useState(true);
  const [maxHeight, setMaxHeight] = useState("0px");
  const { priceFilter, setPriceFilter } = useSearchState();

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
    color: "#E4E9EE",
    fontFamily: "Jost, sans-serif",
    "&.Mui-checked": {
      color: "#1E4C2F",
    },
  };

  const handleChange = (value: string) => {
    if (priceFilter === value) {
      setPriceFilter("");
    } else {
      setPriceFilter(value);
    }
  };

  const isChecked = (value: string): boolean => priceFilter === value;

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="flex justify-between cursor-pointer" onClick={toggleOpen}>
        <div className="text-[#0B0F0E] text-[16px] font-[600]">
          Price Filter
        </div>
        <Image
          src="/assets/svgs/UP_ARROW.svg"
          width="12"
          height="12"
          alt="up-arrow"
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        style={{
          maxHeight: maxHeight,
          overflow: "hidden",
          transition: "max-height 0.5s ease",
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked("under50")}
                onChange={() => handleChange("under50")}
                sx={checkBoxStyling}
              />
            }
            label={
              <div className="text-[#818B9C] text-[14px] md:text-[16px] font-[400]">
                Under Rs50
              </div>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked("50to100")}
                onChange={() => handleChange("50to100")}
                sx={checkBoxStyling}
              />
            }
            label={
              <div className="text-[#818B9C] text-[14px] md:text-[16px] font-[400]">
                Rs50 to Rs100
              </div>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked("100to200")}
                onChange={() => handleChange("100to200")}
                sx={checkBoxStyling}
              />
            }
            label={
              <div className="text-[#818B9C] text-[14px] md:text-[16px] font-[400]">
                Rs100 to Rs200
              </div>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked("above200")}
                onChange={() => handleChange("above200")}
                sx={checkBoxStyling}
              />
            }
            label={
              <div className="text-[#818B9C] text-[14px] md:text-[16px] font-[400]">
                Above Rs200
              </div>
            }
          />
        </FormGroup>
      </div>
    </div>
  );
}
