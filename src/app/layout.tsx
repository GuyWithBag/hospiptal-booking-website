import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@radix-ui/themes/styles.css';
import "./globals.css";
// import "./responsive.css"
import { Theme, ThemePanel } from '@radix-ui/themes';
import Navbar from "@/components/navbar";
import '@radix-ui/themes/layout/tokens.css';
import '@radix-ui/themes/layout/components.css';
import '@radix-ui/themes/layout/utilities.css';
import '@radix-ui/themes/layout.css';
import bg from '../../public/hospital_building.jpg'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guinmapang-Neri Medical Clinic and Laboratory",
  description: "Your 1# trusted Medical Clinic. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      /> */}
      <body className={inter.className}>
        <Theme accentColor="crimson">
          {/* <Box style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(8px)',
            WebkitFilter: 'blur(8px)'
          }}> */}
          <Navbar />
          {children}
          <ThemePanel />
          {/* </Box> */}
        </Theme>
      </body>
    </html>
  );
}
