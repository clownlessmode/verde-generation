"use client";

import React from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './CustomToast.scss';  

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    toast.success("Скопировано в буфер обмена!", {
      position: "top-center",
      autoClose: 1000, 
      className: 'custom-toast',  
      icon: ({ theme, type }) => <span className="custom-icon">✔</span> 
    });
  }).catch(err => {
    toast.error("Ошибка копирования текста.", {
      position: "top-center",
      autoClose: 1000, 
      className: 'custom-toast',  
      icon: ({ theme, type }) => <span className="custom-icon">✖</span>  
    });
    console.error("Ошибка копирования текста: ", err);
  });
};

interface ContactsLinkProps {
  text: string;
  scheme: string;
  children: React.ReactNode;
}

const ContactsLink: React.FC<ContactsLinkProps> = ({ text, scheme, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `${scheme}:${text}`;
    } else {
      copyToClipboard(text);
    }
  };

  return (
    <a href="#" onClick={handleClick}>
      {children}
    </a>
  );
};

export default ContactsLink;
