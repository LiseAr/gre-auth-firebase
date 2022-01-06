import 'tailwindcss/tailwind.css'
import ThemeOne from '../components/layouts/ThemeOne'
import { AuthProvider } from '../context/auth'
// import Dashboard from './dashboard'


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeOne>
        <Component {...pageProps} />
      </ThemeOne>
    </AuthProvider>
  )
}

export default MyApp
