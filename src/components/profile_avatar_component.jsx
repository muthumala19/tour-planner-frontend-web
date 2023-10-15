import React from 'react';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import {ListItemIcon, ListItemText,} from "@mui/material";
import {BiUserCircle} from "react-icons/bi";
import {MdManageAccounts} from "react-icons/md";
import {AiFillSetting, AiOutlineLogout} from "react-icons/ai";
import {Divider} from "@mui/joy";
import {useNavigate} from "react-router-dom";
import {auth} from "../configurations/firebase_configurations";
import {signOut} from "firebase/auth";

export default function AvatarMenu({email}) {
    const navigate = useNavigate();
    return (
        <Dropdown>
            <MenuButton variant={'plain'}>{email}</MenuButton>
            <Menu>
                <MenuItem onClick={() => {
                    navigate('/user/profile')
                }}>
                    <ListItemIcon>
                        <BiUserCircle size={'3vh'}/>
                    </ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => {
                    navigate('/user/account')
                }}>
                    <ListItemIcon>
                        <MdManageAccounts size={'3vh'}/>
                    </ListItemIcon>
                    <ListItemText>Account</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => {
                    navigate('user/settings')
                }}>
                    <ListItemIcon>
                        <AiFillSetting size={'3vh'}/>
                    </ListItemIcon>
                    <ListItemText>Settings</ListItemText>
                </MenuItem>
                <Divider/>
                <MenuItem onClick={
                    () => {
                        signOut(auth).then(() => {
                            window.location.href = ('/');
                        }).catch((error) => {
                            console.log(error)
                        });
                        console.log('logout')
                    }
                }>
                    <ListItemIcon>
                        <AiOutlineLogout size={'3vh'}/>
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                </MenuItem>

            </Menu>
        </Dropdown>
    );
}
