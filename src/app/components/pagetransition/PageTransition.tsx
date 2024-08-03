"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useTransition } from '@/app/context/TransitionContext';
import css from './PageTransition.module.scss';

const PageTransition = () => {
  const pathname = usePathname();
  const { isAnimating, setAnimating } = useTransition();
  const [prevPath, setPrevPath] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== prevPath) {
      setAnimating(true);
      const timer = setTimeout(() => {
        setAnimating(false);
        setPrevPath(pathname);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [pathname, prevPath, setAnimating]);

  return (
    <div className={`${css.transitionOverlay} ${isAnimating ? css.active : ''}`}>
      <div className={css.logo}>
        <Image
          src="/assets/pagetransition/logo.svg"
          alt="Company Logo"
          layout="intrinsic"
          width={1000}
          height={1000}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
    </div>
  );
};

export default PageTransition;
