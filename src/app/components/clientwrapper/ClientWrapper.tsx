"use client";

import React, { useEffect, useState } from 'react';
import { TransitionProvider, useTransition } from '@/app/context/TransitionContext';
import PageTransition from '../pagetransition/PageTransition';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { EdgeStoreProvider } from '@/lib/edgestore';

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isAnimating } = useTransition();
  const [shouldRender, setShouldRender] = useState(!isAnimating);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => setShouldRender(true), 10); // Match this duration with your animation
      return () => clearTimeout(timer);
    } else {
      setShouldRender(false);
    }
  }, [isAnimating]);

  return shouldRender ? <>{children}</> : null;
};

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransitionProvider>
      <PageTransition />
      <Header />
      <EdgeStoreProvider>
        <ContentWrapper>
          {children}
          <Footer />
        </ContentWrapper>
      </EdgeStoreProvider>
    </TransitionProvider>
  );
};

export default ClientWrapper;
