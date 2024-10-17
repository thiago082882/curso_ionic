import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Coupons app',
  webDir: 'www',
  server:{
    androidScheme:'https'
  }
};

export default config;
