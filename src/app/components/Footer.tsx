import React from 'react'

import Image from 'next/image';
import FB from '../../../public/fb.png'
import LI from '../../../public/li.gif'
import WA from '../../../public/wa.gif'
import Link from 'next/link';
import Lo from '../../../public/Lo.png'


function Footer() {
  return (
    <div className='bg-pink-300'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <Image src={Lo}alt='Logo'width={80}height={80}></Image>
       <span className="ml-3 text-xl font-bold"> قاری عنایت اللہ سیالوی</span>
    </a>
    
    
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
      <div className='flex gap-3'>
      <Link target='blank' href={"https://www.facebook.com/qari.inayatullah.sialvi"}>  <Image src={FB}alt='FB'width={20}height={20} /></Link>
      <Link target='blank' href={"https://www.linkedin.com/in/hanif-memon-821b602b4/"}>  <Image src={LI}alt='li'width={20}height={20} /></Link>
      <Link target='blank' href={"https://chat.whatsapp.com/IseQreOV0ytH8KM3E3MwIB"}>  <Image src={WA}alt='wa'width={20}height={20} /></Link>
      </div>
      
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
