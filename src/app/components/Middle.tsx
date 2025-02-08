
import React from 'react'
import Image from 'next/image'
import Q1 from '../../../public/Q1.png'
import Q2 from '../../../public/Q2.png'
import Q3 from '../../../public/Q3.png'
import Q4 from '../../../public/Q4.png'
import Link from 'next/link'
import { Noto_Nastaliq_Urdu } from "next/font/google"

const jameelnoori = Noto_Nastaliq_Urdu({
  weight: "400",
  subsets: ['latin'],
  display: 'swap'
})

function Middle() {
  return (
    <div className='bg-pink-50 px-10'>
        <p className="text-2xl font-bold text-center  mb-20 sm:text-4xl"><span  className={jameelnoori.className}>بین الاقوامی قاری</span></p>
        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-5 sm:px-10">
      <div>
       <Link target='block' href={"https://www.youtube.com/watch?v=4Jch8NauTNE&list=PLbSNCooIBU92ZiGj5npdOWPNnflXWT1w3"}><Image src={Q1}alt='Rija'width={200}height={200}></Image></Link>
       <p className='text-2xl font-bold mt-2 mb-2'><span className={jameelnoori.className}>قاری رجا ایوب</span></p>
       <p className={jameelnoori.className}>قاری رجا ایوب تنزانیہ سے تعلق رکھتے ہیں۔
ان کی تلاوت میں عالمی معیار اور دل کو چھو لینے والی خوبصورتی موجود ہے۔
وہ قرآن مجید کی تلاوت کے ذریعے لوگوں کو روحانی روشنی فراہم کرتے ہیں۔</p>
       
      </div>
      <div>
      <Link target='block' href={"https://www.youtube.com/watch?v=cMUYrTLd1Ts"}><Image src={Q2}alt='Hamdi'width={200}height={200}></Image></Link>
      <p className='text-2xl font-bold mt-2 mb-2' ><span className={jameelnoori.className}>قاری حمدی کنجو</span></p>
      <p className={jameelnoori.className}>قاری حمدی کنجو شام سے تعلق رکھتے ہیں۔
ان کی تلاوت میں روحانیت اور دل کو چھو لینے والی خوبصورتی پائی جاتی ہے۔
وہ بہترین قاری اور نعت خوان کے طور پر مشہور ہیں۔
</p>
      </div>
      <div>
      <Link  target='block' href={"https://www.youtube.com/watch?v=cEYxqf0e56o"}><Image src={Q3}alt='Al Shaikh Abdullah Syed Misri'width={200}height={200}></Image></Link>
      
      <p className='text-2xl font-bold mt-2 mb-2'><span className={jameelnoori.className}>الشیخ عبداللہ سید مصری</span></p>
      <p className={jameelnoori.className} >الشیخ عبداللہ سید مصری علمِ قرآن میں گہری بصیرت کے حامل ہیں۔
ان کی تلاوت میں روحانیت اور جادوئی روانی محسوس ہوتی ہے۔
وہ اپنی منفرد اندازِ قرآن سے لوگوں کو روحانی روشنی عطا کرتے ہیں۔

</p>
  </div>
  <div>
      
      
      <Link  target='block' href={"https://www.youtube.com/watch?v=LvRPfIumkao"}><Image src={Q4}alt='Al Shaikh Abdullah Syed Misri'width={200}height={200}></Image></Link>
      
      <p className='text-2xl font-bold mt-2 mb-2'><span className={jameelnoori.className}>قاری وجیہ دیوان</span>
</p>
      <p className={jameelnoori.className}>قاری وجیہ دیوان ایک مشہور قرآنی قاری ہیں جن کی تلاوت سننے والوں کے دلوں کو سکون بخشتی ہے۔
ان کی قرآنی تلاوت میں تجوید اور خوش الحانی کا حسین امتزاج پایا جاتا ہے۔
قاری وجیہ دیوان نے اپنی خوبصورت آواز اور مہارت سے کئی لوگوں کو قرآن سیکھنے کی ترغیب دی ہے۔
</p>
  </div>
     
     





        </div>
    </div>
  )
}

export default Middle