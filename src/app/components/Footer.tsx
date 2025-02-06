import React from 'react'

import Image from 'next/image';
import FB from '../../../public/fb.png'
import WA from '../../../public/wa.gif'
import Link from 'next/link';
import Lo from '../../../public/Lo.png'
import { Noto_Nastaliq_Urdu } from "next/font/google"

const jameelnoori = Noto_Nastaliq_Urdu({
  weight: "400",
  subsets: ['latin'],
  display: 'swap'
})

function Footer() {
  return (
    <div className='bg-[#bbbdf6]'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <Image src={Lo}alt='Logo'width={80}height={80}></Image>
      <h2 className='text-2xl font-bold ml-5' >  <span  className={jameelnoori.className} >قاری عنایت اللہ سیالوی</span></h2>
    </a>
    
    
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
      <div className='flex gap-3'>
      <Link target='blank' href={"https://www.facebook.com/qari.inayatullah.sialvi"}>  <Image src={FB}alt='FB'width={40}height={40} /></Link>
      <Link target='blank' href={"https://chat.whatsapp.com/IseQreOV0ytH8KM3E3MwIB"}>  <Image src={WA}alt='wa'width={40}height={40} /></Link>
      </div>
      
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
