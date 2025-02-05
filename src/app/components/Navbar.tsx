import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Lo from '../../../public/Lo.png'


  

function Navbar() {
  return (
    <div className='bg-pink-300'>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
    <Image src={Lo}alt='Logo'width={80}height={80} ></Image>
      <span className="ml-3 text-xl font-bold">قاری عنایت اللہ سیالوی</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-10">
      <Link href={"/"} className='text-2xl font-bold' >ہـــوم</Link>
      <Link href={"/about"} className='text-2xl font-bold'  >ہــمارے بــارے مــیں</Link>
      <Link href={"/contact"} className='text-2xl font-bold'  > ر ابــطہ</Link>
    </nav>
    
    
  </div>
</header>

    </div>
  )
}

export default Navbar
