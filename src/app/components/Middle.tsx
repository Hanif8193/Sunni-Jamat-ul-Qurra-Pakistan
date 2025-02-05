import React from 'react'
import Image from 'next/image'
import Q1 from '../../../public/Q1.png'
import Q2 from '../../../public/Q2.png'
import Q3 from '../../../public/Q3.png'
import Q4 from '../../../public/Q4.png'
import Link from 'next/link'

function Middle() {
  return (
    <div className='bg-green-200 px-10'>
        <p className="text-2xl font-bold text-center  mb-20 sm:text-4xl">بین الاقوامی قاری</p>
        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-5 sm:px-10">
      <div>
       <Link target='block' href={"https://www.youtube.com/shorts/y5nGX7ENVHE"}><Image src={Q1}alt='Rija'width={200}height={200}></Image></Link>
       <p className='text-2xl font-bold mt-2 mb-2'>قاری رجا ایوب</p>
       <p>قاری رجا ایوب تنزانیہ سے تعلق رکھتے ہیں۔
ان کی تلاوت میں عالمی معیار اور دل کو چھو لینے والی خوبصورتی موجود ہے۔
وہ قرآن مجید کی تلاوت کے ذریعے لوگوں کو روحانی روشنی فراہم کرتے ہیں۔</p>
       
      </div>
      <div>
      <Link target='block' href={"https://www.youtube.com/watch?v=cMUYrTLd1Ts"}><Image src={Q2}alt='Hamdi'width={200}height={200}></Image></Link>
      <p className='text-2xl font-bold mt-2 mb-2' >قاری حمدی کنجو</p>
      <p>قاری حمدی کنجو شام سے تعلق رکھتے ہیں۔
ان کی تلاوت میں روحانیت اور دل کو چھو لینے والی خوبصورتی پائی جاتی ہے۔
وہ بہترین قاری اور نعت خوان کے طور پر مشہور ہیں۔
</p>
      </div>
      <div>
      <Link  target='block' href={"https://www.youtube.com/watch?v=cEYxqf0e56o"}><Image src={Q3}alt='Al Shaikh Abdullah Syed Misri'width={200}height={200}></Image></Link>
      
      <p className='text-2xl font-bold mt-2 mb-2'>لشیخ عبداللہ سید مصری</p>
      <p >الشیخ عبداللہ سید مصری علمِ قرآن میں گہری بصیرت کے حامل ہیں۔
ان کی تلاوت میں روحانیت اور جادوئی روانی محسوس ہوتی ہے۔
وہ اپنی منفرد اندازِ قرآن سے لوگوں کو روحانی روشنی عطا کرتے ہیں۔

</p>
  </div>
  <div>
      
      
      <Link  target='block' href={"https://www.youtube.com/watch?v=LvRPfIumkao"}><Image src={Q4}alt='Al Shaikh Abdullah Syed Misri'width={200}height={200}></Image></Link>
      
      <p className='text-2xl font-bold mt-2 mb-2'>قاری وجیہ دیوان
</p>
      <p >قاری وجیہ دیوان ایک مشہور قرآنی قاری ہیں جن کی تلاوت سننے والوں کے دلوں کو سکون بخشتی ہے۔
ان کی قرآنی تلاوت میں تجوید اور خوش الحانی کا حسین امتزاج پایا جاتا ہے۔
قاری وجیہ دیوان نے اپنی خوبصورت آواز اور مہارت سے کئی لوگوں کو قرآن سیکھنے کی ترغیب دی ہے۔
</p>
  </div>
     
     





        </div>
    </div>
  )
}

export default Middle
