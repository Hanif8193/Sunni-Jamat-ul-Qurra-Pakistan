import React from 'react'
import Image from 'next/image' 
import P from "../../../public/qari.png"
import Pic1 from "../../../public/Pic1.png"
import Pic2 from "../../../public/Pic2.png"
import Pic3 from "../../../public/Pic3.png"
import Pic4 from "../../../public/Pic4.png"

function Hero() {
  return (
    <div className='bg-green-200 px-10'>
      
      <section>
        <h2 className=" text-center text-xl sm:text-2xl md:text-3xl py-3">
          {" "}
          <p className='text-2xl font-bold ml-60 sm:text-4xl text-center'> قاری عنایت سیالوی</p>
        </h2>

        <h2 className="w-full px-10 h-auto ml-52">
          {" "}
          <Image src={P} alt="PIC" width={900} height={100}></Image>
        </h2>
      </section>
      <section>
            <p  className='text-2xl font-bold ml-60 sm:text-4xl text-center mt-5 mb-5'>قاری عنایت سیالوی کے فرزند</p>
        <div className="grid grid-cols-1 sm:grid-cols-4 md: lg: gap-5 px-10">
         <div>
           <Image src={Pic1}alt='Bilal'width={200}height={200}></Image>
           <h2 className='text-2xl font-bold'>قاری بلال سیالوی</h2>
             <p>بلال ایک بہترین حافظِ قرآن اور ماہر قاری ہے۔
اس کی تلاوت میں سوز و گداز اور خوبصورت تجوید ہوتی ہے۔
لوگ اس کی پرسوز آواز کو بہت پسند کرتے ہیں۔</p>
         </div>
          <div>
          <Image src={Pic2}alt='Bilal'width={200}height={200}></Image>
          
          <p className='text-2xl font-bold' >قاری اویس سیالوی</p>
          <p>قاری اویس سیالوی ایک بہترین قاری اور عالمِ دین ہیں۔
ان کی تلاوت دلوں کو سکون اور روح کو تازگی بخشتی ہے۔
وہ تجوید و قرآت میں مہارت رکھنے والے باکمال قاری ہیں۔
</p>
          </div>
          <div>
          <Image src={Pic3}alt='Bilal'width={200}height={200}></Image>
          <p className='text-2xl font-bold'>قاری حذیفہ سیالوی</p>
          <p>قاری حذیفہ سیالوی اپنی منفرد اندازِ تلاوت کی وجہ سے جانے جاتے ہیں۔
ان کی خوبصورت قرأت سننے والوں کے دلوں پر گہرا اثر چھوڑتی ہے۔
وہ قرآن کی تعلیمات کو عام کرنے میں بھرپور محنت کرتے ہیں۔
</p>
          </div>
          <div>
          <Image src={Pic4}alt='Bilal'width={200}height={200}></Image>
          <p className='text-2xl font-bold'>قاری حنظلہ سیالوی</p>
          <p>قاری حنظلہ سیالوی منفرد انداز میں تلاوت کرتے ہیں۔
ان کی آواز دل کو چھو لیتی ہے۔
وہ روحانی روشنی کا ذریعہ ہیں۔</p>
          </div>




        </div>
        


      </section>


      </div>
      
  )
}

export default Hero
