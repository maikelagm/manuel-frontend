import { Outlet } from 'react-router-dom'
import ThemeSwitcher from '../components/ThemeSwitcher'
import Logo from '../components/Logo'

function SignLayout() {
  return (
    <div className='flex w-screen h-screen'>
      <ThemeSwitcher />
      <div className='flex-1 flex justify-center items-center bg-primary-100 dark:bg-neutral-950'>
        <Logo
          height={200}
          width={200}
          typography={{
            primary: {
              variant: "h1",
              text: "SQLSecureEval",
            },
            secondary: {
              variant: "h3",
              text: "UCI",
            },
          }}
        />

      </div>
      <main className='flex-1 flex justify-center items-center h-screen bg-white dark:bg-neutral-900 dark:text-neutral-50 shadow-blue-gray-900/5'>
        <Outlet />
      </main>
    </div>
  )
}

export default SignLayout
