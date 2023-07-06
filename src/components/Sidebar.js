import { NavLink } from 'react-router-dom'
import Avatar from './Avatar'
import { useAuthContext } from '../hooks/useAuthContext'
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'

export default function Sidebar(){
    const { user } = useAuthContext();

    const DisplayName = (str)=>{
        let arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str2 = arr.join(" ");
        return str2;
    }

    return(
        <div className='sidebar'>
            <div className='sidebar-content'>
                <div className='user'>
                    <Avatar src={user.photoURL} />
                    <p><span className='welcome-text'>Welcome,</span> <span className='user-display-name'>{DisplayName(user.displayName)}</span></p> 
                </div>
                <nav className='links'>
                    <ul>
                        <li>
                            <NavLink exact to="/">
                                <img src={DashboardIcon} alt='dashboard icon' />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/create">
                                <img src={AddIcon} alt='add project icon' />
                                <span>New Project</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}