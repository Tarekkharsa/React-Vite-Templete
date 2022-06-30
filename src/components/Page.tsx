// material
import { Box } from '@mui/material';
import { forwardRef } from 'react';
import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------------------
type PageProps = {
  children: React.ReactNode;
  title: string;
};

const Page = forwardRef(({ children, title = '', ...other }: PageProps, ref) => (
  <Box ref={ref} {...other}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </Box>
));

export default Page;
