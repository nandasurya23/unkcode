import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Konfigurasi Font Awesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import CSS Font Awesome
config.autoAddCss = false;

export const metadata = {
  title: "UNKCODE",
  description: "Digital Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
