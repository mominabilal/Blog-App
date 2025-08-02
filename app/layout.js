import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight:['400','500','600','700'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog App",
  description: "Veiw and enjoy blogs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        {children}
      </body>
    </html>
  );
}
