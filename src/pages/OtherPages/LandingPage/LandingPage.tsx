import { CardsSection, HeroSection, ImagesSection } from '@/features';
import Testimonials from '@/features/Landing/Testimonials/Testimonials';
import { Stack } from '@mui/material';

export const LandingPage = () => {
  return (
    <Stack width={'100%'}>
      <HeroSection />
      <CardsSection />
      <Testimonials />
      <ImagesSection />
    </Stack>
  );
};

export default LandingPage;
