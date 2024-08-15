// next components
import Link from "next/link";
import Image from "next/image";
// nuka carousel
// react
import React, { FC, ChangeEventHandler, useState, useEffect } from "react";
// next intl
import { useTranslations } from "next-intl";
// router
import { useRouter } from "next/router";
// styles
import { Footer } from "../Footer";
import  {Navbar}  from "../Navbar";

export const Layout: FC<any> = ({children}) => {

  return (
    <div>
        <Navbar/> 
        {children} 
        <Footer/>
    </div>
  );
};