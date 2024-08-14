import AuthProvider from "@/Auth/AuthProvider";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Heritage",
    description: "Your Portal to India's Exquisite Real Estate",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <Navbar />
                    {children}
                </AuthProvider>
                <Footer />
            </body>
        </html>
    );
}
