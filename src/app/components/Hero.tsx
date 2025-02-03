
import React from "react";
import Image from "next/image";
import P from "../../../public/qari.png";
import Pic1 from "../../../public/Pic1.png";
import Pic2 from "../../../public/Pic2.png";
import Pic3 from "../../../public/Pic3.png";
import Pic4 from "../../../public/Pic4.png";

function Hero() {
  return (
    <div className="bg-green-200 px-5 sm:px-10">
      <section>
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl py-3 font-bold">
          قاری عنایت سیالوی
        </h2>
        <div className="flex justify-center">
          <Image src={P} alt="PIC" width={900} height={100} className="max-w-full h-auto" />
        </div>
      </section>

      <section>
        <p className="text-2xl font-bold text-center mt-5 mb-5 sm:text-4xl">
          قاری عنایت سیالوی کے فرزند
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-5 sm:px-10">
          <div className="text-center">
            <Image src={Pic1} alt="Bilal" width={200} height={200} className="mx-auto" />
            <h2 className="text-2xl font-bold">قاری بلال سیالوی</h2>
            <p>بلال ایک بہترین حافظِ قرآن اور ماہر قاری ہے۔...</p>
          </div>
          <div className="text-center">
            <Image src={Pic2} alt="Owais" width={200} height={200} className="mx-auto" />
            <h2 className="text-2xl font-bold">قاری اویس سیالوی</h2>
            <p>قاری اویس سیالوی ایک بہترین قاری اور عالمِ دین ہیں۔...</p>
          </div>
          <div className="text-center">
            <Image src={Pic3} alt="Huzaifa" width={200} height={200} className="mx-auto" />
            <h2 className="text-2xl font-bold">قاری حذیفہ سیالوی</h2>
            <p>قاری حذیفہ سیالوی اپنی منفرد اندازِ تلاوت کی وجہ سے جانے جاتے ہیں۔...</p>
          </div>
          <div className="text-center">
            <Image src={Pic4} alt="Hanzala" width={200} height={200} className="mx-auto" />
            <h2 className="text-2xl font-bold">قاری حنظلہ سیالوی</h2>
            <p>قاری حنظلہ سیالوی منفرد انداز میں تلاوت کرتے ہیں۔...</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
