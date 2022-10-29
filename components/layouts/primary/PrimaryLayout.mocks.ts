/** Ini file untuk menyimpan data tiruan komponen dari */
import { IPrimaryLayout } from './PrimaryLayout';

const base: IPrimaryLayout = {
  children: '{{component}}',
};

export const mockPrimaryLayoutProps = {
  base,
};
