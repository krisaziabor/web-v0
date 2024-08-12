import localFont from 'next/font/local'

export const editorialNew = localFont({
    src: [
        {
          path: './fonts/editorial-new/woff2/PPEditorialNew-UltralightItalic.woff2',
          weight: '200',
          style: 'italic',
        },
        {
          path: './fonts/editorial-new/woff2/PPEditorialNew-Ultralight.woff2',
          weight: '200',
          style: 'normal',
        },
        {
            path: './fonts/editorial-new/woff2/PPEditorialNew-Regular.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/editorial-new/woff2/PPEditorialNew-Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: './fonts/editorial-new/woff2/PPEditorialNew-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/editorial-new/woff2/PPEditorialNew-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
    ],
})

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