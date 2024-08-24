import { ThemeProvider } from "next-themes"
import RefProvider from "./refProvider"


export function Providers({children}: { children: React.ReactNode}) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dTheme" themes={['dTheme', 'lTheme']}>
          <RefProvider>
          {children}
          </RefProvider>
        </ThemeProvider>
    )
}