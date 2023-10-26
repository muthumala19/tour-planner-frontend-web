import * as React from 'react';
import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../configurations/firebase_configurations";

const drawerWidth = 240;

interface Props {
    window?: () => Window;
    activeScreen: string;
}

export default function User(props: Props) {

    const {window, activeScreen} = props;
    const [uid, setUid] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(activeScreen);
    const [data, setData] = useState({
            profileDetails: {
                address: "",
                fullName: '',
                email: "",
                mobile: '',
                phone: '',
                introduction: "",
            },
            socialLinks: {
                website: '',
                facebook: '',
                twitter: '',
                instagram: '',
            },
        }
    ); // data is null at first, then it will be an array [
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

    let screen;
    switch (selectedItem) {
        case 'Profile':
            screen = <ProfileScreen user={data}/>;
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
            screen = <JourneysScreen journeys={[]}/>;
            break;
        case 'History':
            screen = <HistoryScreen history={[]}/>;
            break;
        default:
            screen = <ProfileScreen/>;
            break
    }

    const fetchData = async () => {
        try {
            const docRef = doc(db, "userData", uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const documentRef = docSnap.data();
                setData(
                    {
                        profileDetails: {
                            address: documentRef.address,
                            fullName: documentRef.fullname,
                            email: documentRef.email,
                            mobile: documentRef.mobile,
                            phone: documentRef.phone,
                            introduction: documentRef.introduction,
                        },
                        socialLinks: {
                            website: documentRef.website,
                            facebook: documentRef.facebook,
                            twitter: documentRef.twitter,
                            instagram: documentRef.instagram,
                        },
                    }
                );

            }
        } catch (e) {
            console.error("Error fetching document: ", e);
        }
    };

    useEffect(() => {
        // Use an effect to retrieve the user's UID when the component mounts
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid);
            }
        });
    }, []);

    useEffect(() => {
        // Use another effect to fetch user data when the UID changes
        if (uid) {
            fetchData().then(r => console.log("Data fetched"));
        }
    }, [uid]);// The empty dependency array ensures this effect runs once when the component mounts
    return (
        <Box sx={{display: 'flex'}}>
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
