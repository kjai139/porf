import { ThemeProvider } from "next-themes"


export function Providers({children}: { children: React.ReactNode}) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dTheme" themes={['dTheme', 'lTheme']}>
          {children}
        </ThemeProvider>
    )
}