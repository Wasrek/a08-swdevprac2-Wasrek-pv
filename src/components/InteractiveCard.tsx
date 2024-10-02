"use client";

import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import React from "react";

interface Props {
  hospitalName: string;
  imgSrc: string;
}


export default function InteractiveCard({children, contentName, hid} : {children:React.ReactNode, contentName:string, hid:string}) {

    function onCardMouseAction(event:React.SyntheticEvent){
        if(event.type == 'mouseover'){
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.add('shadow-2xl')
            event.currentTarget.classList.remove('bg-white')
            event.currentTarget.classList.add('bg-neutral-200')
        }else{
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.add('shadow-lg')
            event.currentTarget.classList.remove('bg-neutral-200')
            event.currentTarget.classList.add('bg-white')
        }
    }
  return (
    <div className='w-full h-[300px] bg-white rounded-lg shadow-lg'
    onMouseOver={(e)=>onCardMouseAction(e)}
    onMouseOut={(e)=>onCardMouseAction(e)}>
     {children}
    </div>
  );
}
