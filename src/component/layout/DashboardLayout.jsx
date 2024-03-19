import { Outlet } from 'react-router-dom'
import SideBar from '../Shared/SideBar'


const DashboardLayout = () => {
    

    return (
        <div className='relative min-h-screen md:flex'>
            <SideBar />
            <div className=' flex-1'>
                <div className=''>
                    <Outlet />
                    



                </div>
            </div>
        </div>
    )
}

export default DashboardLayout