import { useEffect } from "react"
import { Loading } from "../components/elements/Loading";
import { useAuth } from "../context/auth"

export default function Logout() {

  const { logout } = useAuth()
  useEffect(() => {
    logout()
  }, []);

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Loading />
    </div>
  )
}