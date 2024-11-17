"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Feature from "./Feature";
import PlatformFeature from "./PlatformFeature";
import MobileNav from "./MobileNav";

function LandingPageScreen() {
  const features = [
    {
      title: "Blockchain-Powered Security",
      icon: "/images/blockchain.svg",
      description:
        "Built on the Lisk network, GuardZero ensures secure, scalable transactions and smart contracts for document integrity and traceability.",
    },
    {
      title: "Privacy By Design",
      icon: "/images/zap.svg",
      description:
        "ZK-SNARK protocols protect user data with privacy-preserving verification, delivering compliance without compromise.",
    },
    {
      title: "Decentralized Storage with IPFS",
      icon: "/images/chart.svg",
      description:
        "Store documents securely and redundantly across IPFS nodes with end-to-end encryption.",
    },
    {
      title: "Comprehensive Identity Verification",
      icon: "/images/smile.svg",
      description:
        "Multi-factor authentication, biometric checks, and fraud detection algorithms offer advanced identity assurance.",
    },
  ];
  return (
    <section className="bg-[#000] lg:w-auto overflow-x-hidden">
      <div className="px-5 h-auto min-h-screen text-white pt-3">
        <header className="w-[80%] mx-auto p-3 lg:flex items-center justify-between border border-guardText/50 rounded-[20px] hidden bg-[#26252A]">
          <div className="flex items-center gap-8">
            <Image
              src={"/images/logoG.svg"}
              width={110}
              height={110}
              alt={"logo"}
            />
            <nav className="flex items-center gap-4 text-guardText">
              <Link href={"#features"}>Features</Link>
              <Link href={"#how-it-works"}>How it works</Link>
              {/* <Link href={"/dashboard"}>About us</Link> */}
            </nav>
          </div>

          {/* <div className="space-x-4"> */}
          {/* <button className="border border-guardText/50 rounded-full px-4 py-2 bg-[#000]">Login</button> */}
          {/* <button className="bg-primary rounded-full px-4 py-2 border-primary">Sign up</button> */}
          <Link
            href="/login"
            className="bg-primary rounded-full px-4 py-2 border-primary"
          >
            Get Started
          </Link>
          {/* <Link
            href="/waitlist"
            className="bg-primary rounded-full px-4 py-2 border-primary"
          >
            Join Waitlist
          </Link> */}
          {/* </div> */}
        </header>

        <header className="flex lg:hidden justify-between">
          <Image
            src={"/images/logoG.svg"}
            width={150}
            height={150}
            alt={"logo"}
          />

          <div className="lg:hidden">
            <MobileNav />
          </div>
        </header>

        <div className="relative">
          <Image
            src="/images/bg.svg"
            className="absolute top-0 left-[10%] md:left-[8%] lg:left-[5%] z-0 hidden lg:block"
            alt="pattern"
            width={1200}
            height={768}
          />
          <div className="flex flex-col items-center mt-[10%] justify-center gap-y-12 z-50 absolute">
            <h1 className="text-3xl lg:text-6xl font-bold text-center w-[90%] lg:w-[80%] text-[#f5f5f5]">
              Privacy-First Identity Verification and Document Management on the
              Blockchain
            </h1>
            <p className="lg:w-[50%] text-center text-guardText">
              Transform your KYC process with GuardZero’s zero-knowledge proof
              solution, combining unmatched privacy with decentralized security.
            </p>

            <div className="lg:space-x-4 flex flex-col lg:flex-row space-y-5 lg:space-y-0 w-full lg:w-auto items-center">
              <Link
                href={"/demo"}
                className="border border-guardText/50 rounded-full px-4 py-3 flex items-center gap-2 w-full lg:w-auto justify-center text-guardText"
              >
                {" "}
                <Image
                  src="/images/play.svg"
                  alt="heroImage"
                  width={25}
                  height={25}
                />
                Schedule a demo
              </Link>

              <Link
                href="/login"
                className="bg-primary rounded-full px-8 py-3 w-full lg:w-auto border border-primary text-center"
              >
                Get Started
              </Link>
            </div>

            <Image
              src="/images/mockup.png"
              className="hidden lg:block"
              alt="heroImage"
              width={1000}
              height={768}
            />
          </div>
        </div>
      </div>

      {/* features */}
      <section
        className="px-5 lg:min-h-96 lg:pt-72 lg:pb-24 lg:pl-32 space-y-28 relative -mt-[100px] lg:mt-0"
        id="features"
      >
        <div className="space-y-4 max-w-2xl relative">
          <p className="text-primary">Features</p>
          <h2 className="text-guardText text-4xl font-semibold">
            Overflowing with useful features
          </h2>
          <p className="text-guardText">
            GuardZero utilizes blockchain, ZK-SNARK protocols, and IPFS for
            secure, private, and decentralized document storage with robust
            identity verification.
          </p>
          <Image
            src="/images/hand-arrow.svg"
            height={330}
            width={330}
            alt="arrow"
            className="absolute -right-[250px] top-16 hidden lg:block"
          />
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-10 ">
          <div className="grid lg:grid-cols-2 gap-7">
            {features.map((feature, index) => (
              <Feature
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
          <div className="bg-[#26252A] pl-10 pb-10 rounded-3xl -mr-[100px]">
            <Image
              src="/images/macbook.png"
              height={700}
              width={700}
              alt="secure"
              className="mt-[100px]"
            />
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="py-16 space-y-14" id="how-it-works">
        <div className="px-5 flex flex-col justify-center items-center text-center text-guardText gap-5">
          <h2 className="text-4xl font-semibold">How it works</h2>
          <p className="text-lg font-light">
            GuardZero redefines verification, safeguarding your data every step
            of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-14 lg:px-32 items-center relative">
          <div className="px-5 flex flex-col item-center gap-4 text-guardText">
            <Image
              src="/images/uploadpink.svg"
              height={70}
              width={70}
              alt="uploadIcon"
            />
            <h5 className="font-meedium text-3xl">Upload & Encrypt</h5>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <div className="space-x-4 flex ">
              <Link
                href="/demo"
                className="border border-guardText/50 rounded-full px-4 py-2 flex items-center gap-2"
              >
                {" "}
                <Image
                  src="/images/play.svg"
                  alt="heroImage"
                  width={25}
                  height={25}
                />
                Demo
              </Link>
              <Link
                href="/login"
                className="bg-primary rounded-full px-8 py-3 w-full lg:w-auto border border-primary text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="bg-[#26252A] p-[20px] lg:p-[30px] lg:px-0 flex items-center justify-center mt-5">
            <Image
              src={"/images/upload.png"}
              width={450}
              height={450}
              alt={"logo"}
              className="z-50"
            />
          </div>
          <Image
            src="/images/line-pattern.svg"
            height={300}
            width={300}
            alt="arrow"
            className="absolute right-0 top-20 z-0 hidden lg:block"
          />
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-14 lg:px-32 items-center relative lg:py-16">
          <div className="bg-[#26252A] p-[20px] lg:p-[30px] lg:px-0 flex items-center justify-center order-2 lg:order-1 mt-5">
            <Image
              src={"/images/upload.png"}
              width={450}
              height={450}
              alt={"logo"}
              className="z-50"
            />
          </div>
          <Image
            src="/images/line-pattern.svg"
            height={300}
            width={300}
            alt="arrow"
            className="absolute left-0 top-48 z-0 hidden lg:block"
          />
          <div className="flex flex-col item-center gap-4 text-guardText px-5 order-1 lg:order-2">
            <Image
              src="/images/verify.svg"
              height={70}
              width={70}
              alt="chart"
            />
            <h5 className="font-meedium text-3xl">Verify & Validate</h5>
            <p className="">
              ZK-SNARKs allow identity verification without exposing sensitive
              information.
            </p>
            <div className="space-x-4 flex ">
              <Link
                href={"/demo"}
                className="border border-guardText/50 rounded-full px-4 py-2 flex items-center gap-2 text-guardText"
              >
                {" "}
                <Image
                  src="/images/play.svg"
                  alt="heroImage"
                  width={25}
                  height={25}
                />
                Demo
              </Link>
              <Link
                href="/login"
                className="bg-primary rounded-full px-8 py-3 w-full lg:w-auto border border-primary text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-14 lg:px-32 items-center relative lg:py-16">
          <div className="flex flex-col item-center gap-4 text-guardText px-5">
            <Image
              src="/images/access.svg"
              height={70}
              width={70}
              alt="chart"
            />
            <h5 className="font-meedium text-3xl">Access & Control</h5>
            <p className="">
              Role-based permissions ensure data access remains secure and
              private.
            </p>
            <div className="space-x-4 flex ">
              <Link
                href={"/demo"}
                className="border border-guardText/50 rounded-full px-4 py-2 flex items-center gap-2 text-guardText"
              >
                {" "}
                <Image
                  src="/images/play.svg"
                  alt="heroImage"
                  width={25}
                  height={25}
                />
                Demo
              </Link>
              <Link
                href="/login"
                className="bg-primary rounded-full px-8 py-3 w-full lg:w-auto border border-primary text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="bg-[#26252A] p-[20px] lg:p-[30px] lg:px-0 flex items-center justify-center mt-5">
            <Image
              src={"/images/upload.png"}
              width={450}
              height={450}
              alt={"logo"}
              className="z-50"
            />
          </div>
          <Image
            src="/images/line-pattern.svg"
            height={300}
            width={300}
            alt="arrow"
            className="absolute right-0 top-0 z-0 hidden lg:block"
          />
        </div>
      </section>

      {/* why choose guardzero */}
      <section className="bg-[#26252A] text-guardText p-5 lg:px-32 flex justify-center items-center space-y-7 lg:space-y-7 h-96">
        <div>
          <h2 className="text-3xl">Why Choose GuardZero?</h2>
          <p className="text-md font-light pt-5">
            We combine trust and transparency, giving enterprises a secure,
            private way to manage KYC and identity verification. Our platform
            leverages decentralized technology and zero-knowledge proofs,
            bringing you compliance, security, and a new standard of privacy.
          </p>
        </div>
      </section>

      <section className="py-16 space-y-14 lg:-mt-36 -mt-[100px]">
        <div className="flex justify-center">
          <Image
            src={"/images/choose.png"}
            width={1000}
            height={700}
            alt={"choose"}
            // className="absolute"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center text-guardText gap-5">
          <h2 className="text-4xl font-semibold">Platform Features</h2>
          <p className="text-lg font-light">
            Automated verification, enterprise-grade compliance, and a dedicated
            demo portal are available.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 px-5 lg:px-32 items-center">
          <PlatformFeature
            title="Automated Verification"
            icon="/images/blockchain2.svg"
            description="With AI-powered document validation, third-party verifier integration, and real-time status tracking."
          />

          <PlatformFeature
            title="Enterprise-Grade Compliance"
            icon="/images/zap2.svg"
            description="Data minimization, consent management, and GDPR/CCPA compliance built in at every step."
          />
          <PlatformFeature
            title="Dedicated Demo & Sales Portal"
            icon="/images/chart2.svg"
            description="Experience GuardZero's platform with an interactive demo, in-depth documentation, and a tailored ROI calculator"
          />
        </div>
      </section>

      <section className="bg-[#000] p-4 py-10 sm:p-6 md:p-10 flex justify-center">
        <div className="bg-guardText rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pr-8 lg:mt-10">
              <h1 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-bold text-left">
                Experience GuardZero
              </h1>
              <p className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg lg:text-xl text-left">
                The Future of Private, Secure KYC
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-center h-full">
                <Link
                  href={"/demo"}
                  className="border border-guardText/50 rounded-full px-4 py-2 flex items-center gap-2 bg-white"
                >
                  Schedule demo
                </Link>

                <Link
                  href="/waitlist"
                  className="bg-primary rounded-full px-4 py-2 text-white"
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
              <Image
                src="/mock.svg"
                height={600}
                width={600}
                alt="mock"
                className="w-full max-w-[400px] lg:max-w-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default LandingPageScreen;
