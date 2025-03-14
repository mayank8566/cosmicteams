'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Header component with no SSR to avoid hydration issues
const Header = dynamic(() => import('./Header'), { ssr: false });

export default function HeaderWrapper() {
  return <Header />;
} 