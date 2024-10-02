'use client';
import styles from './banner.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Banner () {
  const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
  const [index, setIndex] = useState(0)
  const router = useRouter()

  return (
    <div className={styles.banner} onClick={()=>setIndex((index+1)%4)}>
      <Image src={covers[index]}
      alt='cover'
      fill={true}
      priority
      objectFit='cover'/>
      <div className={styles.bannerText}>
        <h1 className='text-3xl font-medium'>Vaccine Service Center</h1>
        <h3 className='text-xl'>Get your COVID-19 vaccines today!</h3>
      </div>
      <button className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
      hover:bg-cyan-600 hover:text-white hover:border-transparent"
      onClick={(e)=>{e.stopPropagation(); router.push('/hospital')}}>
        Select Your Hospital
      </button>
    </div>
  );
}

