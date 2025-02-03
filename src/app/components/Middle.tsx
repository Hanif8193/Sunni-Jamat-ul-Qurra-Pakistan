import React from 'react'
import Image from 'next/image'
import Q1 from '../../../public/Q1.png'
import Q2 from '../../../public/Q2.png'
import Q3 from '../../../public/Q3.png'
import Link from 'next/link'

function Middle() {
  return (
    <div className='bg-green-200 px-10'>
        <p  className='text-2xl font-bold ml-60 sm:text-4xl text-center  mb-5'>بین الاقوامی قاری</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 px-10">
      <div>
       <Link target='block' href={"https://www.youtube.com/watch?v=O_n8y-E-II8&t=2s"}><Image src={Q1}alt='Rija'width={200}height={200}></Image></Link>
       <p>قاری رجا ایوب</p>
       <p>قاری رجا ایوب تنزانیہ سے تعلق رکھتے ہیں۔
ان کی تلاوت میں عالمی معیار اور دل کو چھو لینے والی خوبصورتی موجود ہے۔
وہ قرآن مجید کی تلاوت کے ذریعے لوگوں کو روحانی روشنی فراہم کرتے ہیں۔</p>
       
      </div>
      <div>
      <Link target='block' href={"https://www.youtube.com/watch?v=cMUYrTLd1Ts"}><Image src={Q2}alt='Hamdi'width={200}height={200}></Image></Link>
      <p>قاری حمدی کنجو</p>
      <p>قاری حمدی کنجو شام سے تعلق رکھتے ہیں۔
ان کی تلاوت میں روحانیت اور دل کو چھو لینے والی خوبصورتی پائی جاتی ہے۔
وہ بہترین قاری اور نعت خوان کے طور پر مشہور ہیں۔
</p>
      </div>
      <div>
      <Link  target='block' href={"https://www.youtube.com/watch?v=cEYxqf0e56o"}><Image src={Q3}alt='Al Shaikh Abdullah Syed Misri'width={200}height={200}></Image></Link>
      <p>لشیخ عبداللہ سید مصری</p>
      <p>الشیخ عبداللہ سید مصری علمِ قرآن میں گہری بصیرت کے حامل ہیں۔
ان کی تلاوت میں روحانیت اور جادوئی روانی محسوس ہوتی ہے۔
وہ اپنی منفرد اندازِ قرآن سے لوگوں کو روحانی روشنی عطا کرتے ہیں۔

</p>
      
      </div>
      






        </div>
    </div>
  )
}

export default Middle
