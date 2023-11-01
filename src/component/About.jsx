// import React from 'react'
// import KAOS from './../assets/hero1.webp'
import './../index.css'

const About = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center font-poppins sm:px-8 lg:px-[130px] px-4 about"
      id="about"
    >
      <div className="container mx-auto text-justify bg-slate-100 py-10 px-6 rounded-sm bg-opacity-80 backdrop-blur-sm" >
        <h1 className="text-3xl font-bold mb-4 text-center">
          Selamat Datang di Exotic Apparel!
        </h1>
        <p className="text-slate-950">
          Exotic Apparel adalah destinasi fashion premium yang menawarkan
          koleksi terbaik dari <span className="transition-all duration-500 underline font-semibold text-black">
            <a href="#product">kaos, kemeja, hoodie, hingga celana.</a>
          </span> Kami
          memahami bahwa gaya Anda adalah ekspresi dari kepribadian anda, itulah
          mengapa kami menawarkan produk-produk kami untuk memenuhi berbagai
          gaya mulai dari modern minimalis, profesional, hingga santai.
          Dengan{" "}
          <span className="transition-all duration-500 underline font-semibold text-black">
            <a href="#product">Produk Kami</a>
          </span>
          , Anda tidak hanya mendapatkan gaya yang luar biasa, tetapi juga
          kenyamanan dan keawetan. Kami bangga menyediakan pilihan terbaik
          dengan harga yang sangat terjangkau, menjadikan gaya dan kelas premium
          dapat diakses oleh semua kalangan. <span className="italic font-medium text-black">Exotic Apparel bukan hanya sekadar
          brand, tetapi gaya hidup.</span>
        </p>

        <div className="mt-8 ">
          <h2 className="text-xl text-center font-bold mb-2">
            Temukan Gaya Anda dengan Produk Berkualitas Kami
          </h2>
          <p  className="text-slate-950">
            Dari kaos yang nyaman hingga kemeja yang elegan, produk kami terbuat
            dari bahan premium untuk memastikan Anda merasa percaya diri setiap
            saat. Tersedia dalam berbagai pilihan warna dan desain, kami
            menjamin Anda akan menemukan sesuatu yang sesuai dengan preferensi
            Anda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
