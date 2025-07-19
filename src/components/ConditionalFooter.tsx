'use client';

import { usePathname } from 'next/navigation';
import { Footer } from './Footer';

export const ConditionalFooter = () => {
    const pathname = usePathname();

    // Don't render footer on form pages
    const isFormPage = pathname.includes('/form');

    if (isFormPage) {
        return null;
    }

    return <Footer />;
}; 