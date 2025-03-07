import { ReactNode } from 'react';

// #14181B
// #FAFBFB

export default function RootLayout({ children }: { children: ReactNode}) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, backgroundColor: '#14181B' }}>
        {children}
      </body>
    </html>
  )
}