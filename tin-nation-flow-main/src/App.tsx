import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Socials from "./pages/Socials";
import Workspace from "./pages/Workspace";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Journey from "./pages/Journey";
import MyProfile from "./pages/MyProfile";
import NextMove from "./pages/Nextmove";
import Visaready from "./pages/Visaready";
import MovingChecklist from "./pages/MovingChecklist";
import MySoP from "./pages/MySop";
import BusinessListing from "./pages/BusinessListing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/services" element={<Services />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/MyProfile" element={<MyProfile/>}/>
          <Route path="/Nextmove" element={<NextMove/>}/>
          <Route path="/Visaready" element={<Visaready/>}/>
          <Route path="/MovingChecklist" element={<MovingChecklist/>}/>
          <Route path="/MySop" element={<MySoP/>}/>
          <Route path ="/BusinessListing" element={<BusinessListing/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
