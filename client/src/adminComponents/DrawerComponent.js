import React, { useState } from 'react';
import {
    Drawer, List, ListItem, ListItemText,
    IconButton, makeStyles, Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { ShoppingBasketOutlined, People, Store } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    menuIcon: {
        marginLeft: 'auto',
    },
    paper: {
        background: 'black'
    }

}));

const DrawerComponent = () => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState();


    return (
        <>
            <Drawer classes={{ paper: classes.paper }}
                anchor='left' onClose={() => setOpenDrawer(false)}
                open={openDrawer}
            >
                <List component='nav' style={{ alignContent: 'center', padding: '5px' }}>
                    <ListItem divider button >
                        <ListItemText inset>
                            <Typography className="sidebar-list-item" >
                                <Link to='/' style={{ color: '#D231EB', fontSize: '30px', textDecoration: 'none' }}>
                                    Home</Link>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem divider button >
                        <ListItemText inset >
                            <Typography className="sidebar-list-item">
                                <Link to="/users" style={{ color: '#D231EB', fontSize: '30px', textDecoration: 'none' }}>
                                    <People className="sidebar-icon" />
                                    Users
                                </Link>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem divider button >
                        <ListItemText inset>
                            <Typography className="sidebar-list-item">
                                <Link to="/products" style={{ color: '#D231EB', fontSize: '30px', textDecoration: 'none' }}>
                                    <Store className="sidebar-icon" />
                                    Products
                                </Link>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem divider button >
                        <ListItemText inset>
                            <Typography>
                                <Link to='/login' style={{ color: '#D231EB', fontSize: '30px', textDecoration: 'none' }}>
                                    Login
                                </Link>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </List>

            </Drawer>
            <IconButton className={classes.menuIcon} style={{ color: 'black' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>

        </>

    );
};

export default DrawerComponent;