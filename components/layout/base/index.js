import Script from "next/script";
import { Footer, LeftsideBar, Navbar } from "../../shared";

export default function BaseLayout({ children }) {
  return (
    <>
      <Navbar />
      <LeftsideBar />
      {children}
      <Footer />

    </>
  );
}
