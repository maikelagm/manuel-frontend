import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import ThemeSwitcher from '../components/ThemeSwitcher'

function DashboardLayout() {
  return (
    <div className='flex w-screen h-screen self-center'>
      <SideBar />
      <ThemeSwitcher />
      <main className='relative flex-1 h-[calc(100vh-2rem)]m-4 ml-0 p-4 shadow-xl bg-white dark:bg-neutral-900 dark:text-neutral-50 shadow-blue-gray-900/5 rounded-xl'>
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
