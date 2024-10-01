import localFont from 'next/font/local'

export const pangramSans = localFont({
  src: [
    {
      path: './fonts/pangram-sans/woff2/PPPangramSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/pangram-sans/woff2/PPPangramSans-CompactBold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/pangram-sans/woff2/PPPangramSans-CompactBoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/pangram-sans/woff2/PPPangramSans-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/pangram-sans/woff2/PPPangramSans-Medium.woff2',
      weight: '500',
      style: 'normal',      
    }
  ]
})