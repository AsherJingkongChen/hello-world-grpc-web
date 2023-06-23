import React from 'react';

export const metadata = {
  title: 'Hello World! gRPC-Web',
  description: 'Description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <style>
{`@keyframes blinking {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}`}
        </style>
      </head>
      <body>{children}</body>
    </html>
  );
}
