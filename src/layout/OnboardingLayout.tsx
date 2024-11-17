import Nav from "../components/reuseables/Nav";
import Image from "next/image";
import { GuardZeroLogoBlue, loginImage, logo2 } from "../lib/types/constant";

function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 h-screen w-screen">
      <div className="hidden lg:block lg:col-span-2 relative">
        <Image
          src={loginImage}
          fill
          className="absolute left-0 top-0 object-cover"
          alt="pattern"
        />
      </div>
      <div className="col-span-1 lg:col-span-3 h-full overflow-y-scroll flex items-center justify-center relative">
        <div className="absolute left-8 top-8 h-12 w-[150px] md:w-[197px]">
          <Image
            src={GuardZeroLogoBlue}
            fill
            alt="logo"
            className="object-contain"
          />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={logo2}
            fill
            className="absolute left-0 top-0 object-cover"
            alt="pattern"
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export default OnboardingLayout;
