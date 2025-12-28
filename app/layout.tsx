import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer'; 


const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manoel MUN",
  description: "Site oficial do International Manoel Model United Nations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${ubuntu.variable} main-wrapper`}>

      <Header />

        <main className="content-grow">
          {children}
        </main>

        <Footer />
        
      </body>
    </html>
  );
}