import React from 'react'
import Image from 'next/image'
import P from '../../../public/qari.png'
import { Noto_Nastaliq_Urdu } from "next/font/google"

const jameelnoori = Noto_Nastaliq_Urdu({
  weight: "400",
  subsets: ['latin'],
  display: 'swap'
})
function About() {
  return (
    <div className='bg-pink-100'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
     <span className={jameelnoori.className}><p className='text-4xl  font-bold px-60'> ہــمارے بــارے مــیں</p></span>
        <br className="hidden lg:inline-block" />
      
      </h1>
      <p className="mb-8 leading-relaxed text-2xl">
     <h2 className='text-2xl font-bold text-end'><span className={jameelnoori.className}>قاری عنایت — قرآن کی خدمت کا روشن ستارہ </span></h2>
      <br />
      <h2 className='text-2xl font-bold text-end '><span className={jameelnoori.className}>ابتدائی زندگی اور تعلیم</span></h2>  
      <br />
      <p className={jameelnoori.className}>قاری عنایت صاحب کا تعلق ضلع لِلہ، پنجاب سے ہے، جہاں ان کی ابتدائی زندگی گزری۔ دین سے لگاؤ بچپن سے ہی تھا، جس کی بدولت انہوں نے قرآن سے محبت کو اپنی زندگی کا محور بنا لیا۔ انہوں نے کراچی کا رخ کیا اور وہاں درسِ نظامی کی تعلیم حاصل کی، جس کے بعد حفظِ قرآن مکمل کیا۔
        </p> 
        <br />
        <h2 className='text-2xl font-bold text-end '><span className={jameelnoori.className}>تدریسی سفر </span></h2>
        <br />
        <p className={jameelnoori.className}>قاری عنایت صاحب نے اپنی عملی زندگی کا آغاز حکومتِ سندھ کے ایک سرکاری اسکول میں عربی کے استاد کی حیثیت سے کیا۔ ان کی تدریس کا انداز انتہائی پُرتاثیر اور مخلصانہ تھا، جس کی بدولت طلبہ کو قرآن اور عربی زبان میں گہری دلچسپی پیدا ہوئی۔

        </p>
        <br />
        <h2 className='text-2xl font-bold text-end '><span className={jameelnoori.className}>ریٹائرمنٹ کے بعد کا سفر</span></h2>
        <br />
        <p className={jameelnoori.className}>ریٹائرمنٹ کے بعد بھی قاری صاحب نے تدریس کا سلسلہ جاری رکھا۔ انہوں نے دارالعلوم امجدیہ میں شمولیت اختیار کی، جہاں آج بھی وہ اپنے علم اور تجربے سے طلبہ کو فیضیاب کر رہے ہیں۔</p>
        <br />
        <h2 className='text-2xl font-bold text-end'><span className={jameelnoori.className}>خاندانی پس منظر</span></h2>
        <br />
        <p className={jameelnoori.className}>قاری صاحب کے چار بیٹے ہیں، اور سب کے سب حافظِ قرآن ہیں۔ ان کی بہترین تربیت کا یہ نتیجہ ہے کہ ان کے بیٹے بھی قرآن کی تعلیمات کو پھیلانے میں مصروف ہیں۔</p>
        <br />
        <h2 className='text-2xl font-bold text-end'><span className={jameelnoori.className}>قرآن کی خدمت</span></h2>
        <br />
        <p className={jameelnoori.className}>اپنی زندگی میں قاری عنایت صاحب نے سینکڑوں طلبہ کو حافظِ قرآن بنایا۔ ان کی محنت اور لگن سے بے شمار شاگردوں نے قرآن حفظ کیا اور آج دنیا بھر میں دین کی خدمت کر رہے ہیں۔</p>
         <br />
         <h2 className='text-2xl font-bold text-end'><span className={jameelnoori.className}>بین الاقوامی محافل</span></h2>
         <br />
         <p className={jameelnoori.className}>قاری صاحب کی کاوشوں سے مختلف ممالک جیسے تنزانیہ، مصر، اور انڈونیشیا کے قراء پاکستان تشریف لاتے ہیں، اور مختلف شہروں میں محافلِ قرآن منعقد کی جاتی ہیں۔ یہ محافل قرآن کی محبت کو فروغ دینے کا ایک بہترین ذریعہ ہیں۔</p>
         <br />
         <h2 className='text-2xl font-bold text-end'><span className={jameelnoori.className}>زندگی کا مشن</span></h2>
         <br />
         <p className={jameelnoori.className}>قاری عنایت صاحب کا مقصد ہے کہ قرآن کی روشنی ہر دل تک پہنچے۔ وہ آج بھی اسی مشن میں مصروف ہیں اور لوگوں کے دلوں میں قرآن کی محبت بیدار کر رہے ہیں۔</p>
         <br />
         <h2 className='text-2xl font-bold text-end text-end'><span className={jameelnoori.className}>نتیجہ </span></h2>
         <br />
         <p className={jameelnoori.className}>قاری عنایت صاحب کی زندگی قرآن کی خدمت کا حسین نمونہ ہے۔ ان کی کاوشوں اور محنت کی بدولت آج بے شمار لوگ قرآن کی روشنی سے منور ہو رہے ہیں۔ اللہ تعالیٰ ان کی خدمات کو قبول فرمائے اور ان کے مشن کو کامیاب کرے۔ آمین۔</p>


     </p>
     
     
          </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <Image src={P} alt='PIC' width={1000} height={1000} />
      
    </div>
  </div>
</section>

    </div>
  )
}

export default About
