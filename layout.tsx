import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="az"><body className="bg-[#0B0F2A] text-white">{children}</body></html>;
}
