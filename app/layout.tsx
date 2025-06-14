import "./globals.css";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AnimationPage from "@/components/Animation/AnimationPage";




const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: {
      template: '%s | Orange forge',
      default: 'Home Page / Orange forge',
   },
   description: 'Your digital success is our destination. At Desite Software, we empower companies worldwide to build cutting-edge digital products, enhance existing solutions, and drive innovation across industries.'
};



export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className="scroll-smooth">
         <body
            className={`${geistMono.variable} antialiased`}>
            <AnimationPage>
               <Header />
               <main>
                  {children}
                  <Toaster />
               </main>
               <Footer />
            </AnimationPage>
         </body>
      </html>
   );
}
