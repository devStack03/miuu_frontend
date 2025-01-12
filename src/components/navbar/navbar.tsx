import { ThemeProvider } from '@/components/theme-provider'
import '../../app/globals.css'

import ModeToggle from '@/components/ui/mode-toggle'

export default function Navbar() {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <a className="mr-6 flex items-center space-x-2" href="/">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="30pt" height="30pt" viewBox="0 0 250.000000 251.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,251.000000) scale(0.100000,-0.100000)"
                                fill="#FFFFFF" stroke="none">
                                <path d="M555 1860 c-22 -11 -49 -33 -60 -48 -19 -26 -20 -45 -23 -500 -3
-472 -3 -473 20 -513 33 -60 89 -83 187 -77 83 5 127 26 154 71 8 16 13 107
17 312 4 252 7 294 23 322 22 41 64 63 117 63 32 0 48 -7 78 -34 l37 -34 5
-301 c5 -283 6 -301 26 -327 44 -59 68 -69 169 -69 109 0 136 13 173 85 21 43
22 54 22 323 l0 279 40 40 c38 39 42 40 91 36 40 -4 58 -12 82 -37 l32 -31 5
-299 c5 -283 6 -301 26 -327 44 -59 68 -69 169 -69 101 0 125 10 169 69 20 26
21 43 24 299 3 266 2 273 -20 316 -31 60 -73 81 -163 81 -54 0 -82 5 -115 23
-63 31 -83 71 -88 176 -7 142 -45 182 -177 189 -69 3 -86 0 -124 -20 -63 -33
-81 -72 -81 -179 0 -101 -20 -141 -84 -173 -48 -23 -97 -11 -141 34 -28 29
-30 37 -35 133 -6 120 -23 157 -85 187 -37 18 -62 20 -236 20 -175 0 -198 -2
-234 -20z"/>
                            </g>
                        </svg>
                        <span className="hidden font-bold sm:inline-block">Miuu</span>
                    </a>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/docs">Documentation</a><a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/docs/components">Components</a>
                        <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/examples">Examples</a>
                        <a className="hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block" href="https://github.com/shadcn/ui">GitHub</a>
                    </nav>
                </div>
                <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R15hja:" data-state="closed">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8 2H13.5C13.7761 2 14 2.22386 14 2.5V12.5C14 12.7761 13.7761 13 13.5 13H8V2ZM7 2H1.5C1.22386 2 1 2.22386 1 2.5V12.5C1 12.7761 1.22386 13 1.5 13H7V2ZM0 2.5C0 1.67157 0.671573 1 1.5 1H13.5C14.3284 1 15 1.67157 15 2.5V12.5C15 13.3284 14.3284 14 13.5 14H1.5C0.671573 14 0 13.3284 0 12.5V2.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Toggle Menu</span>
                </button>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <button className="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64">
                            <span className="hidden lg:inline-flex">Search documentation...</span>
                            <span className="inline-flex lg:hidden">Search...</span>
                            <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                                <span className="text-xs">⌘</span>K</kbd>
                        </button>
                    </div>
                    <nav className="flex items-center"><a target="_blank" rel="noreferrer" href="https://github.com/shadcn/ui">
                        <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                            <svg viewBox="0 0 438.549 438.549" className="h-4 w-4"><path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path></svg>
                            <span className="sr-only">GitHub</span></div></a><a target="_blank" rel="noreferrer" href="https://twitter.com/shadcn"><div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"></path></svg>
                                <span className="sr-only">Twitter</span></div></a>
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </ThemeProvider>
    )
}