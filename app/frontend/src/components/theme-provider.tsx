import { ThemeProvider, ThemeProviderProps } from 'next-themes';
import { ReactNode } from 'react';

export function AppThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} {...{ children }} >
    </ThemeProvider>
  );
}

export { ThemeProvider };
