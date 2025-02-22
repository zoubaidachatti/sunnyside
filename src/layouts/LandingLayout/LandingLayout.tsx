import { ReactNode } from 'react';
import { LandingNavbar, LandingFooter } from '.';
import { RootStyle } from './LandingLayout.style';

export const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <RootStyle>
      <LandingNavbar />
      {children}
      <LandingFooter />
    </RootStyle>
  );
};

export default LandingLayout;
