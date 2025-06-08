import { ReactNode } from 'react';

export default function AdministrationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      AdministrationLayout
      {children}
    </div>
  );
}
