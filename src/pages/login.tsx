import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { useForm } from 'react-hook-form'
// import Router from 'next/router'

import { LockClosedIcon } from '@heroicons/react/solid'

import { useAuth } from '../context/auth'
import { Classes } from '../components/layouts/ThemeOne/classes'
import Notification from '../components/elements/Notification'
import { Loading } from '../components/elements/Loading'

export default function Login() {

  const classes = Classes.LoginPage;

  const { register, handleSubmit } = useForm()
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  async function handleLogin(data) {

    setLoading(true);
    setError(false);
    try {
      await login(data)
      setError(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }

  }

  // const handleNewUser = () => {
  //   Router.push('/register');
  // }

  return (
    <div className={classes.mainContainer}>
      {loading
        ? <Loading />
        :
        <div className="max-w-sm w-full space-y-9">
          <div>
            <h2 className={classes.title}>Bem vindo de volta! </h2>
            <h2 className={classes.subTitle}>Faça o login para começar.</h2>
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
                  className={`${classes.input} ${classes.inputEmail}`}
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
                  className={`${classes.input} ${classes.inputPassword}`}
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className={classes.buttonLogin}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className={classes.lockIcon} aria-hidden="true" />
                </span>
              Login
            </button>
            </div>

          </form>
          {/* <div className="justify-end w-full">
          <button
            type="button"
            onClick={handleNewUser}
            className={Classes.buttonRegister}
          >
            Register
            </button>
        </div> */}
        </div>}
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