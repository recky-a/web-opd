'use client';

import { siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

// Utility function to check if the office is open
const getOfficeStatus = (): { isOpen: boolean; text: string } => {
  const now = new Date();
  // Get current time in WIB (UTC+7)
  const nowWIB = new Date(
    now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })
  );
  const dayOfWeek = nowWIB.getDay(); // Sunday = 0, Monday = 1, etc.
  const currentTime = nowWIB.getHours() * 60 + nowWIB.getMinutes();

  const todayHours = siteConfig.operationalHours.find(
    (h) => h.dayIndex === dayOfWeek
  );

  if (!todayHours) {
    return { isOpen: false, text: 'Tutup' };
  }

  const [openHour, openMinute] = todayHours.open.split(':').map(Number);
  const [closeHour, closeMinute] = todayHours.close.split(':').map(Number);

  const openTime = openHour * 60 + openMinute;
  const closeTime = closeHour * 60 + closeMinute;

  if (currentTime >= openTime && currentTime < closeTime) {
    return { isOpen: true, text: 'Buka' };
  }

  return { isOpen: false, text: 'Tutup' };
};

export default function OfficeStatus() {
  const [status, setStatus] = useState({ isOpen: false, text: 'Tutup' });

  // useEffect ensures this runs only on the client after hydration
  useEffect(() => {
    setStatus(getOfficeStatus());
  }, []);

  return (
    <span
      className={cn(
        'ml-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold',
        status.isOpen
          ? 'bg-green-500/20 text-green-400'
          : 'bg-red-500/20 text-red-400'
      )}
    >
      {status.text}
    </span>
  );
}
