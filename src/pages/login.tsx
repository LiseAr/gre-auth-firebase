import { LockClosedIcon } from '@heroicons/react/solid'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/auth'
import { GetServerSideProps } from 'next'
import Router from 'next/router'
import { useState } from 'react'
import Notification from '../components/Notification'
import { parseCookies } from 'nookies'

export default function Login() {

  // register: para regitrar os inputs
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState(false);

  const { login } = useAuth();

  async function handleLogin(data) {
    console.log('handleLogin');

    setError(false);
    try {
      await login(data)
      setError(false);
    } catch (error) {
      setError(true);
    }
  }

  const handleNewUser = () => {
    Router.push('/register');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-sm w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(handleLogin)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                {...register('email')}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                {...register('password')}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">

          </div>

          <div className="flex justify-between">

            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Login
            </button>

          </div>
        </form>
        <div className="justify-end w-full">
          <button
            type="button"
            onClick={handleNewUser}
            // className="group relative w-40 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
            </button>
        </div>
      </div>
      {error &&
        <Notification
          title='Usuário inexistente!'
          description='Tente um usuário válido.'
          closeDialog={() => setError(false)}
        />
      }
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['gre.token']: token } = parseCookies(ctx)

  if (token) {
    return {
      redirect: {
        destination: 'home',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}