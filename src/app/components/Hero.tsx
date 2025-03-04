
import React from "react";
import Image from "next/image";
import P from "../../../public/qari.png";
import Pic1 from "../../../public/Pic1.png";
import Pic2 from "../../../public/Pic2.png";
import Pic3 from "../../../public/Pic3.png";
import Pic4 from "../../../public/Pic4.png";
import { Noto_Nastaliq_Urdu } from "next/font/google"

const jameelnoori = Noto_Nastaliq_Urdu({
  weight: "400",
  subsets: ['latin'],
  display: 'swap'
})


function Hero() {
  return (
    <div className="bg-pink-50 px-5 sm:px-10">
      <section>
      <span  className={jameelnoori.className} >  <h2 className="text-center text-xl sm:text-2xl md:text-3xl py-3 font-bold">
        قاری عنایت اللہ سیالوی
        </h2></span>
        <div className="flex justify-center">
          <Image src={P} alt="PIC" width={1400} height={100} className="max-w-full h-auto" />
        </div>
      </section>

      <section>
      <h2  className='text-2xl font-bold ml-5 text-center py-5'>  <span  className={jameelnoori.className} > قاری عنایت اللہ سیالوی صاحب کے صاحبزادگان </span></h2>
       
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-5 sm:px-10">
          <div className="text-center"> 
            <Image src={Pic1} alt="Bilal" width={200} height={200} className="mx-auto" />
            <h2 className="text-2xl font-bold"> <span className={jameelnoori.className} >قاری بلال سیالوی </span></h2>
            <p  className={jameelnoori.className}>قاری بلال سیالوی کی پرسوز تلاوت دلوں کو موم کر دیتی ہے۔
ان کی خوش الحانی سننے والوں کے دلوں میں روحانی کیف پیدا کرتی ہے۔
قاری بلال سیالوی کی آواز میں ایسا سحر ہے جو سننے والوں کو مسحور کر دیتا ہے۔</p>
          </div>
          <div className="text-center">
            <Image src={Pic2} alt="Owais" width={200} height={200} className="mx-auto" />
         <h2 className="text-2xl font-bold"><span className={jameelnoori.className}> قاری اویس سیالوی </span></h2>
            <p  className={jameelnoori.className}>قاری اویس سیالوی کی تلاوت سن کر دل سکون اور روح تازگی محسوس کرتی ہے۔
ان کی آواز میں وہ تاثیر ہے جو سننے والوں کو رب کے قریب کر دیتی ہے۔
قاری اویس سیالوی کی نعت خوانی محبتِ رسول ﷺ کا حقیقی اظہار ہے۔</p>
          </div>
          <div className="text-center">
            <Image src={Pic3} alt="Huzaifa" width={200} height={200} className="mx-auto" />
            <h2 className="text-2xl font-bold" > <span className={jameelnoori.className}>  قاری حذیفہ سیالوی </span>  </h2>
            <p  className={jameelnoori.className}>قاری حذیفہ سیالوی کی دلنشین تلاوت سننے والوں کے دلوں میں ایمان کی روشنی بھر دیتی ہے۔
ان کی پرسوز آواز سن کر روحانی سکون اور قلبی راحت محسوس ہوتی ہے۔
قاری حذیفہ سیالوی کی تلاوت میں ایک ایسا اثر ہے جو دلوں کو جھنجھوڑ دیتا ہے۔</p>
          </div>
          <div className="text-center">
            <Image src={Pic4} alt="Hanzala" width={200} height={200} className="mx-auto" />
            <h2 className="text-2xl font-bold">  <span className={jameelnoori.className}>  قاری حنظلہ سیالوی  </span> </h2>
            <p  className={jameelnoori.className}>قاری حنظلہ سیالوی کی تلاوت سن کر دل پر نور اور روح کو سکون ملتا ہے۔
ان کی خوش الحان آواز سننے والوں کے دلوں میں محبتِ قرآن جگا دیتی ہے۔
قاری حنظلہ سیالوی کی تلاوت میں وہ سوز و گداز ہے جو سننے والوں کو محو کر دیتا ہے۔
</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
