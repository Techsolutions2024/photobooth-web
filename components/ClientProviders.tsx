'use client';

import { ContactProvider } from '@/context/ContactContext';
import ContactModal from '@/components/ContactModal';
import { ReactNode } from 'react';

export default function ClientProviders({ children }: { children: ReactNode }) {
    return (
        <ContactProvider>
            {children}
            <ContactModal />
        </ContactProvider>
    );
}
