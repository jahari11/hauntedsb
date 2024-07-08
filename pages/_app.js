import "@/styles/globals.css";

import { Bodoni_Moda } from "next/font/google";

const Moda = Bodoni_Moda({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${Moda.className}`}>
      <Component {...pageProps} />
  </main>
  );
  
}
