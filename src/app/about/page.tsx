
import React from 'react';
import Image from 'next/image';
import P from '../../../public/qari.png';
import { Noto_Nastaliq_Urdu } from "next/font/google";

const jameelnoori = Noto_Nastaliq_Urdu({
  weight: "400",
  subsets: ['latin'],
  display: 'swap'
});

function About() {
  return (
    <div className="bg-pink-100">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 flex-col-reverse md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-right">
            <h1 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${jameelnoori.className}`}>
              ہمارے بارے میں
            </h1>
            <p className="text-lg leading-relaxed text-end">
              <h2 className="text-2xl font-bold">
                <span className={jameelnoori.className}>قاری عنایت — قرآن کی خدمت کا روشن ستارہ</span>
              </h2>
              <br />
              <h2 className="text-2xl font-bold">
                <span className={jameelnoori.className}>ابتدائی زندگی اور تعلیم</span>
              </h2>  
              <p className={jameelnoori.className}>
                قاری عنایت صاحب کا تعلق ضلع لِلہ، پنجاب سے ہے، جہاں ان کی ابتدائی زندگی گزری۔ دین سے لگاؤ بچپن سے ہی تھا، جس کی بدولت انہوں نے قرآن سے محبت کو اپنی زندگی کا محور بنا لیا۔ انہوں نے کراچی کا رخ کیا اور وہاں درسِ نظامی کی تعلیم حاصل کی، جس کے بعد حفظِ قرآن مکمل کیا۔
              </p> 
              <br />
              <h2 className="text-2xl font-bold">
                <span className={jameelnoori.className}>تدریسی سفر</span>
              </h2>
              <p className={jameelnoori.className}>
                قاری عنایت صاحب نے اپنی عملی زندگی کا آغاز حکومتِ سندھ کے ایک سرکاری اسکول میں عربی کے استاد کی حیثیت سے کیا۔ ان کی تدریس کا انداز انتہائی پُرتاثیر اور مخلصانہ تھا، جس کی بدولت طلبہ کو قرآن اور عربی زبان میں گہری دلچسپی پیدا ہوئی۔
              </p>
              <br />
              <h2 className="text-2xl font-bold">
                <span className={jameelnoori.className}>ریٹائرمنٹ کے بعد کا سفر</span>
              </h2>
              <p className={jameelnoori.className}>
                ریٹائرمنٹ کے بعد بھی قاری صاحب نے تدریس کا سلسلہ جاری رکھا۔ انہوں نے دارالعلوم امجدیہ میں شمولیت اختیار کی، جہاں آج بھی وہ اپنے علم اور تجربے سے طلبہ کو فیضیاب کر رہے ہیں۔
              </p>
              <br />
              <h2 className="text-2xl font-bold">
                <span className={jameelnoori.className}>خاندانی پس منظر</span>
              </h2>
              <p className={jameelnoori.className}>
                قاری صاحب کے چار بیٹے ہیں، اور سب کے سب حافظِ قرآن ہیں۔ ان کی بہترین تربیت کا یہ نتیجہ ہے کہ ان کے بیٹے بھی قرآن کی تعلیمات کو پھیلانے میں مصروف ہیں۔
              </p>
              <br />
              <h2 className="text-2xl font-bold">
                <span className={jameelnoori.className}>قرآن کی خدمت</span>
              </h2>
              <p className={jameelnoori.className}>
                اپنی زندگی میں قاری عنایت صاحب نے سینکڑوں طلبہ کو حافظِ قرآن بنایا۔ ان کی محنت اور لگن سے بے شمار شاگردوں نے قرآن حفظ کیا اور آج دنیا بھر میں دین کی خدمت کر رہے ہیں۔
              </p>
              <br />
              <h2 className="text-2xl font-bold">
                <span className={jameelnoori.className}>بین الاقوامی محافل</span>
              </h2>
              <p className={jameelnoori.className}>
                قاری صاحب کی کاوشوں سے مختلف ممالک جیسے تنزانیہ، مصر، اور انڈونیشیا کے قراء پاکستان تشریف لاتے ہیں، اور مختلف شہروں میں محافلِ قرآن منعقد کی جاتی ہیں۔ یہ محافل قرآن کی محبت کو فروغ دینے کا ایک بہترین ذریعہ ہیں۔
              </p>
              <br />
              <h2 className="text-2xl font-bold">
                <span className={jameelnoori.className}>زندگی کا مشن</span>
              </h2>
              <p className={jameelnoori.className}>
                قاری عنایت صاحب کا مقصد ہے کہ قرآن کی روشنی ہر دل تک پہنچے۔ وہ آج بھی اسی مشن میں مصروف ہیں اور لوگوں کے دلوں میں قرآن کی محبت بیدار کر رہے ہیں۔
              </p>
              <br />
              <h2 className="text-2xl font-bold">
                <span className={jameelnoori.className}>نتیجہ</span>
              </h2>
              <p className={jameelnoori.className}>
                قاری عنایت صاحب کی زندگی قرآن کی خدمت کا حسین نمونہ ہے۔ ان کی کاوشوں اور محنت کی بدولت آج بے شمار لوگ قرآن کی روشنی سے منور ہو رہے ہیں۔ اللہ تعالیٰ ان کی خدمات کو قبول فرمائے اور ان کے مشن کو کامیاب کرے۔ آمین۔
              </p>
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center">
            <Image src={P} alt="PIC" width={400} height={400} className="w-full max-w-sm mx-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;