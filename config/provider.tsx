"use client";

import { config } from "./rainbowKitConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { Toaster } from "@/src/components/ui/sonner";
import { useRouter } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import * as NProgress from "nprogress";

export const usePRouter = () => {
  const router = useRouter();
  router.prefetch = (href) => {
    NProgress.start();
    router.push(href);
  };

	return router;
};

export default function Provider({ children }: { children: React.ReactNode }) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1_000 * 60 * 60 * 24, // 24 hours
      },
    },
  });

  return (
    <WagmiProvider config={config}>
      <NextTopLoader
        color="#693EFE"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #693EFE,0 0 5px #693EFE"
      />
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          {children}
          <Toaster richColors closeButton position="top-right" />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
