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

export default function AvatarMenu() {
    return (
        <Dropdown>
            <MenuButton variant={'plain'} fullWidth={false}>User</MenuButton>
            <Menu>
                <MenuItem>
                    <ListItemIcon>
                        <BiUserCircle size={'3vh'}/>
                    </ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <MdManageAccounts size={'3vh'}/>
                    </ListItemIcon>
                    <ListItemText>Account</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <AiFillSetting size={'3vh'}/>
                    </ListItemIcon>
                    <ListItemText>Settings</ListItemText>
                </MenuItem>
                <Divider/>
                <MenuItem>
                    <ListItemIcon>
                        <AiOutlineLogout size={'3vh'}/>
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                </MenuItem>

            </Menu>
        </Dropdown>
    );
}
