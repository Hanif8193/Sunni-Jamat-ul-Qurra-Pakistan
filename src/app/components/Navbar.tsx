import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Lo from '../../../public/Lo.png'
import { Noto_Nastaliq_Urdu } from "next/font/google"

const jameelnoori = Noto_Nastaliq_Urdu({
  weight: "400",
  subsets: ['latin'],
  display: 'swap'
})

  

function Navbar() {
  return (
    <div className='bg-[#9893da]'>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
    <Image src={Lo}alt='Logo'width={80}height={80} ></Image>
    <h2 className='text-2xl font-bold ml-5' >  <span  className={jameelnoori.className} >قاری عنایت اللہ سیالوی</span></h2>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-10">
      <Link href={"/"} className='text-2xl font-bold' ><span  className={jameelnoori.className}>ہـــوم</span></Link>
      <Link href={"/about"} className='text-2xl font-bold'  ><span  className={jameelnoori.className}>ہــمارے بــارے مــیں</span></Link>
      <Link href={"/contact"} className='text-2xl font-bold'  ><span  className={jameelnoori.className}> ر ابــطہ</span></Link>
    </nav>
    
    
  </div>
</header>

    </div>
  )
}

export default Navbar
