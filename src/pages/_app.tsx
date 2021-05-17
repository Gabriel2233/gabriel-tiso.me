import GlobalStyle from '../styles/global'
import { MDXProvider } from '@mdx-js/react'
import components from '../styles/components/MDXComponents'

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <GlobalStyle />
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
