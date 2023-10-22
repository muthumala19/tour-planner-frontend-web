import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Image} from "react-bootstrap";
import ProfileScreen from "./profile_screen";
import {AiFillSetting} from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import SettingsScreen from "./settings_screen";
import BillingScreen from "./billing_screen";
import PricingPlansScreen from "./pricing_plans_screen";
import JourneysScreen from "./journeysScreen";
import HistoryScreen from "./history_screen";

const drawerWidth = 240;

interface Props {
    window?: () => Window;
    activeScreen: string;
}

export default function User(props: Props) {

    const {window, activeScreen} = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(activeScreen);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMenuItemClick = (item) => {
        setSelectedItem(item.text);
        navigate(item.href);
    };

    const drawerItems = [
        {
            text: 'Profile',
            icon: <BiUserCircle size={30}/>,
            href: 'profile'
        },
        {
            text: 'Journeys',
            icon: <AiFillSetting size={30}/>,
            href: 'journeys'
        },
        {
            text: 'History',
            icon: <AiFillSetting size={30}/>,
            href: 'history'
        },
        {
            text: 'Pricing Plans',
            icon: <AiFillSetting size={30}/>,
            href: 'pricing_plans'
        },
        {
            text: 'Billing',
            icon: <AiFillSetting size={30}/>,
            href: 'billing'
        },
        {
            text: 'Settings',
            icon: <AiFillSetting size={30}/>,
            href: 'settings'
        },
    ];

    const drawer = (
        <div>
            <Toolbar/>
            <Divider/>
            <List>
                {drawerItems.map((item) => (

                    <ListItem key={item.text} disablePadding>
                        <ListItemButton
                            selected={selectedItem === item.text}
                            onClick={() => handleMenuItemClick(item)}
                            sx={{
                                '&.Mui-selected': {
                                    backgroundColor: '#0C356A', // Set the background color for selected items
                                },
                                '&:hover.Mui-selected': {
                                    backgroundColor: '#0C356A', // Set the background color for selected items on hover
                                },
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    color: selectedItem === item.text ? 'white' : 'inherit', // Set icon color to white for selected item
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                sx={{
                                    color: selectedItem === item.text ? 'white' : 'inherit', // Set font color to white for selected item
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const user = {
        profileDetails: {
            address: "Lake area,Matara Sri Lanka.",
            fullName: 'Pasindu Muthumala',
            email: "muthumala@gmail.com",
            mobile: '0771234567',
            phone: '0778921895',
            introduction: "Solo Traveller",
        },
        socialLinks: {
            website: 'www.muthumala.com',
            facebook: 'www.facebook.com/muthumala',
            twitter: 'www.twitter.com/muthumala',
            instagram: 'www.instagram.com/muthumala',
            github: 'www.github.com/muthumala',
        },

    }
    let screen;
    switch (selectedItem) {
        case 'Profile':
            screen = <ProfileScreen user={user}/>;
            break;
        case 'Billing':
            screen = <BillingScreen/>;
            break;
        case 'Settings':
            screen = <SettingsScreen/>;
            break;
        case 'Pricing Plans':
            screen = <PricingPlansScreen/>;
            break;
        case 'Journeys':
            screen = <JourneysScreen/>;
            break;
        case 'History':
            screen = <HistoryScreen/>;
            break;
        default:
            screen = <ProfileScreen/>;
            break
    }
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar
                style={{backgroundColor: '#0C356A'}}
                position="fixed"
                sx={{
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                    height: 'auto'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <Image width={240}
                               src={require('../images/journeysync-high-resolution-logo-white-on-transparent-background.png')}
                               onClick={() => {
                                   navigate('/')
                               }}></Image>
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,

                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                }}
            >
                <Toolbar/>
                <Typography paragraph>
                    {screen}

                </Typography>
            </Box>
        </Box>
    );
}
