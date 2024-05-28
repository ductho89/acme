import { sans } from '../ui/fonts';
import Header from '../components/header';
import HeroSection from './herosection';
import ProgramTabs from './programs-tabs';
import InquiryForm from './inquiry-form';

import VguPartners from '../components/vgupartners';
import Footer from '../components/footer';

export default function Page() {
  return (
    <main>
      {/* <Header /> */}
      <HeroSection />
      <ProgramTabs />
      <InquiryForm />
      <VguPartners />
      {/* <Footer /> */}
    </main>
  );
}
