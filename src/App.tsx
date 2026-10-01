import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import LegalDoc from "./pages/LegalDoc";
import NotFound from "./pages/NotFound";
import HomeV2 from "./pages/HomeV2";
import VenuePage from "./pages/VenuePage";
import SportPage from "./pages/SportPage";
import Venues from "./pages/Venues";
import Support from "./pages/Support";
import DeleteAccount from "./pages/DeleteAccount";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeV2 />} />
          <Route path="/classic" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<LegalDoc slug="terms" />} />
          <Route path="/privacy" element={<LegalDoc slug="privacy" />} />
          <Route path="/legal/:doc" element={<LegalDoc />} />
          <Route path="/new" element={<HomeV2 />} />
          <Route path="/new/:theme" element={<HomeV2 />} />
          <Route path="/sports/:sport" element={<SportPage />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/venues/:slug" element={<VenuePage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
