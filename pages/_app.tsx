import DashboardLayout from "@/components/Layout/DashboardLayout";
import { AuthProvider } from "@/components/contexts/AuthContext";
import ToastContainer from "@/components/hooks/ToastContainer";
import { ToastProvider } from "@/components/hooks/useToast";
import { useRouter } from "next/router";
import AllScripts from "@/components/Scripts/AllScripts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ErrorBoundary from "@/components/common/ErrorBoundary";

declare global {
  interface Window {
    dataLayer: any;
    gtag: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const noAuthRoutes = [
    "/terms-of-service",
    "/privacy-policy",
    "/refund-policy",
  ];



  if (
    router.pathname === "/" ||
    router.pathname.startsWith("/blog") ||
    router.pathname.startsWith("/ebook") ||
    router.pathname.startsWith("/resources") ||
    router.pathname.startsWith("/resources/blog") ||
    router.pathname.startsWith("/resources/apps") ||
    router.pathname.startsWith("/solutions") ||
    router.pathname.startsWith("/window-splash") ||
    noAuthRoutes.includes(router.pathname)
  ) {
    return (
      <ToastProvider>
          {
            process.env.NEXT_PUBLIC_APP_ENV === "PROD" &&
            <AllScripts />
          }
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        <ToastContainer />
      </ToastProvider>
    );
  }

  return (
    <AuthProvider>
      {
        process.env.NEXT_PUBLIC_APP_ENV === "PROD" &&
        <AllScripts />
      }
      <ToastProvider>
        <DashboardLayout>
          <Component {...pageProps} />
          <ToastContainer />
        </DashboardLayout>
      </ToastProvider>
    </AuthProvider>
  );
}
