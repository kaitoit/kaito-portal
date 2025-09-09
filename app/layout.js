// app/layout.js
import './globals.css'; // <-- this is required

export const metadata = {
  title: 'Managed IT Solutions',
  description: 'Corporate IT compliance portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
