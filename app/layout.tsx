import "./globals.css";
import ClientOnly from "./components/client-only";
import Navbar from "./components/navbar";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/toaster-provider";
import RegisterModal from "./components/modals/register-modal";
import LoginModal from "./components/modals/login-modal";
import RentModal from "./components/modals/rent-modal";
import getCurrentUser from "./actions/get-current-user";
import SearchModal from "./components/modals/search-modal";

const font = Nunito({
  subsets: ["latin"],
});
export const metadata = {
  title: "Airbnb",
  description: "Airbnb Next App",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SearchModal />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        <div className="pt-28 pb-20">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
