'use client'
import { db } from "@/firebase/config/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import React,{useEffect,useState} from "react";

async function fetchDataFromFirestore(){
  const q = query(collection(db, 'productsv2'), where('brand_rating', '>', 4));
  const productsSnapshot = await getDocs(q);

  const data = [];
  productsSnapshot.forEach((doc) => {
    // Push each document's data to the data array
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
}


export default function TProducts() {

  return (
    <div className="w-full  px-[24px] md:px-[120px] gap-x-[24px] gap-[32px] md:grid grid-cols-3 md:gap-y-[32px]"></div>
  );
}
