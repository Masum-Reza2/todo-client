import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './dashboard.css'

// icons
import AddTaskIcon from '@mui/icons-material/AddTask';
import HomeIcon from '@mui/icons-material/Home';
import TaskIcon from '@mui/icons-material/Task';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import ListIcon from '@mui/icons-material/List';
import ProfileMenu from '../../Components/ProfileMenu';
import useTodos from '../../Hooks/useTodos';

export default function Dashboard() {

    const { myTodos, ongoingTask, completedTask } = useTodos();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>

                <NavLink className='bg-red-500' to={'/dashboard/addTask'}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AddTaskIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Add Task'} />
                        </ListItemButton>
                    </ListItem>
                </NavLink>

                <NavLink to={'/dashboard/previousTask'}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TaskIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Previous Task'} />
                        </ListItemButton>
                    </ListItem>
                </NavLink>

                <NavLink to={'/dashboard/todoList'}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListAltIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Todo List (${myTodos?.length})`} />
                        </ListItemButton>
                    </ListItem>
                </NavLink>

                <NavLink to={'/dashboard/ongoingTask'}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DirectionsRunIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Ongoing Task (${ongoingTask?.length})`} />
                        </ListItemButton>
                    </ListItem>
                </NavLink>

                <NavLink to={'/dashboard/completedTask'}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CloudDoneIcon />
                            </ListItemIcon>
                            <ListItemText primary={`Completed Task (${completedTask?.length})`} />
                        </ListItemButton>
                    </ListItem>
                </NavLink>

            </List>

            <Divider />

            <Link to={'/'}>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Home'} />
                </ListItemButton>
            </Link>
        </Box>
    );

    return (
        <div>
            <div className='h-14 bg-[#1976d2] text-white fixed w-full max-w-7xl mx-auto flex items-center justify-between z-50'>
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button variant='white' onClick={toggleDrawer(anchor, true)}>
                            <ListIcon fontSize="large" />
                        </Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
                <div className='mr-2'>
                    <ProfileMenu />
                </div>
            </div>
            <div className='pt-14'>
                <Outlet />
            </div>
        </div >
    );
}