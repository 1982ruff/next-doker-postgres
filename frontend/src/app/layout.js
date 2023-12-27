import Footer from "@/components/Footer/Footer";
import { nunito_sans } from "../../font";
import "./globals.css";
import Header from "@/components/Header/Header";

import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/components/Providers/AuthProvider";

export const metadata = {
  title: "Furnitura | Creative Home Simplicify",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={` max-w-[1920px] mx-auto ${nunito_sans.className}`}>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
