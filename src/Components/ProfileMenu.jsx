/* eslint-disable react/prop-types */
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import useGlobal from "../Hooks/useGlobal"
import defaultProfile from '../assets/logos/defPro2.webp'
import React from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
    const { user, logOutUser } = useGlobal();
    const navigate = useNavigate();
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogOut = () => {
        handleCloseUserMenu()
        Swal.fire({
            title: "Confirm Logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await logOutUser();
                    toast.success('Logout successfull!');
                    navigate('/');
                } catch (error) {
                    toast.error(error?.message)
                }
            }
        });
    }

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="User profile" src={user?.photoURL || defaultProfile} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {/* 1 */}
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{user?.displayName}</Typography>
                </MenuItem>
                <MenuItem onClick={handleLogOut}>
                    <Typography textAlign="center">Log-out</Typography>
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default ProfileMenu