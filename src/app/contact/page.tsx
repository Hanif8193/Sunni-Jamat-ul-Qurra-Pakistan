
import React from "react";
import { Noto_Nastaliq_Urdu } from "next/font/google";

const jameelnoori = Noto_Nastaliq_Urdu({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function Contact() {
  return (
    <div className="bg-green-50">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 sm:py-24 mx-auto flex flex-wrap">
          {/* Map Section */}
          <div className="w-full md:w-1/2 lg:w-2/3 bg-gray-300 rounded-lg overflow-hidden p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:items-end justify-center relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.9913632348175!2d67.0562626751532!3d24.89595517790607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f75f6c2d09b%3A0xb55fa3e5c24942ed!2sGhouse%20Azam%20Masjid%20Pib%20Colony%20Karachi!5e1!3m2!1sen!2s!4v1738583621566!5m2!1sen!2s"
              style={{
                filter: "grayscale(1) contrast(1.2) opacity(0.4)",
                border: 0,
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="bg-white relative flex flex-wrap py-6 px-4 sm:px-6 rounded shadow-md w-full">
              <div className="w-full sm:w-1/2 px-2 sm:px-6 mb-4 sm:mb-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  <p className={jameelnoori.className}>پتہ</p>
                </h2>
                <p className={`mt-1 ${jameelnoori.className}`}>
                  دوسری منزل، غوثِ اعظم مسجد، پی آئی بی کالونی، کراچی
                </p>
              </div>
              <div className="w-full sm:w-1/2 px-2 sm:px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  <p className={jameelnoori.className}>ای میل</p>
                </h2>
                <a className="text-indigo-500 leading-relaxed text-sm break-all">
                  sunnijamatulqurrapk@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  <p className={jameelnoori.className}>فون نمبر</p>
                </h2>
                <p className="leading-relaxed text-sm">+92 333 2282850</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white flex flex-col md:ml-auto px-6 sm:px-10 py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              <p className={jameelnoori.className}>بہتری کے لیے تجاویز</p>
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              <p className={jameelnoori.className}>بلا جھجک ہم سے رابطہ کریں</p>
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                <p className={jameelnoori.className}>نام</p>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                <p className={jameelnoori.className}>ای میل</p>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                <p className={jameelnoori.className}>پیغام</p>
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              بھیجیں
            </button>
            <p className="text-xs text-gray-500 mt-3 text-center">
              <p className={jameelnoori.className}>آپ کی رائے کا شکریہ۔</p>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;