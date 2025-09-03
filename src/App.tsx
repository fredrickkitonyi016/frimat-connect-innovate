import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import NTSAServices from "./pages/NTSAServices";
import KRAServices from "./pages/KRAServices";
import NetworkSecurity from "./pages/NetworkSecurity";
import DataRecovery from "./pages/DataRecovery";
import CybersecurityTraining from "./pages/CybersecurityTraining";
import WebsiteHosting from "./pages/WebsiteHosting";
import DomainRegistration from "./pages/DomainRegistration";
import DigitalMarketing from "./pages/DigitalMarketing";
import ComputerRepair from "./pages/ComputerRepair";
import SoftwareInstallation from "./pages/SoftwareInstallation";
import ITSupport from "./pages/ITSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/ntsa-services" element={<NTSAServices />} />
          <Route path="/kra-services" element={<KRAServices />} />
          <Route path="/network-security" element={<NetworkSecurity />} />
          <Route path="/data-recovery" element={<DataRecovery />} />
          <Route path="/cybersecurity-training" element={<CybersecurityTraining />} />
          <Route path="/website-hosting" element={<WebsiteHosting />} />
          <Route path="/domain-registration" element={<DomainRegistration />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/computer-repair" element={<ComputerRepair />} />
          <Route path="/software-installation" element={<SoftwareInstallation />} />
          <Route path="/it-support" element={<ITSupport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;