import { useEffect, useState, ReactNode } from 'react';

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * ClientOnly component that renders its children only on the client side
 * This helps avoid hydration errors caused by browser extensions or other client-side modifications
 */
export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render children on the client side
  return isClient ? <>{children}</> : <>{fallback}</>;
}
