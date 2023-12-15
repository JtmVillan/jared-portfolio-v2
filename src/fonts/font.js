import localFont from 'next/font/local'

export const clash = localFont({ 
    src: [
        {
        path: "../../public/fonts/ClashGrotesk-Variable.ttf",
        }
    ], 
    display: "swap",
    variable: '--clash-font'
})
  
export const satoshi = localFont({ 
    src: [
        {
        path: "../../public/fonts/Satoshi-Variable.ttf",
        }
    ],
    display: "swap",
    variable: '--satoshi-font'
})