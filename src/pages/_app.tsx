import 'tailwindcss/tailwind.css'
import { AuthProvider } from '../context/auth'
import Dashboard from './dashboard'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Dashboard>
        <Component {...pageProps} />
      </Dashboard>
    </AuthProvider>
  )
}

export default MyApp
