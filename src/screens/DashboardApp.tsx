// material
import { Box, Container, Grid, Typography } from '@mui/material';

// components
import Page from '@/components/Page';
import {
  AppConversionRates,
  AppCurrentSubject,
  AppCurrentVisits,
  AppWebsiteVisits,
} from '@/sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
