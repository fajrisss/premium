// import React from 'react'
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-800 text-slate-100 flex flex-col justify-center gap-9 items-center sm:px-8 lg:px-[130px] px-4 py-5 md:flex-row md:justify-between">
        <div className="flex flex-col gap-3 items-center md:flex-1">
          <h1 className="text-2xl font-semibold">EXOTIX APPAREL</h1>
          <div className="flex gap-3 text-2xl">
            <a href="https://www.instagram.com/exoticapparel_id/">
              <BsInstagram />
            </a>
            <a href="http://wa.me/6281311118809">
              <BsWhatsapp />
            </a>
            <a href="https://www.facebook.com/3xoticapparel">
              <FiFacebook />
            </a>
          </div>
        </div>
        <div className="md:flex-1 text-center">
          <h3 className="text-xl">Jam Buka</h3>
          <div className="pt-2">
            <p>senin - jum&apos;at</p>
            <p>09.00 - 17.00</p>
            <p className="pt-1.5">Sabtu</p>
            <p>08.30 - 13.00</p>
          </div>
        </div>

        <div className="md:flex-1">
          <p className="text-center">
            Alamat: <br />
            Pecatu E8 / 18, Purimas, Kec. Gn. Anyar, Surabaya, Jawa Timur 60294
          </p>
        </div>
      </div>
      <p className="text-center text-white bg bg-slate-800 py-1">© 2023 EXOTIC APPAREL. All rights reserved.</p>
    </>
  );
};

export default Footer;
