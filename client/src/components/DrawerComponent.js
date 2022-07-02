import React, { useState } from 'react';
import {
    Drawer, List, ListItem, ListItemText,
    IconButton, makeStyles, Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { ShoppingBasketOutlined} from '@material-ui/icons';


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
                <List component='nav'  style={{ alignContent: 'center', padding: '5px'}}>
                    <ListItem divider button >
                        <ListItemText inset>
                            <Typography >
                                <Link to='/' style={{ color: '#D231EB', fontSize: '30px', textDecoration: 'none' }}>
                                    Home</Link>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem divider button >
                        <ListItemText inset >
                            <Typography>
                                <Link to='/products' style={{ color: '#D231EB', fontSize: '30px', textDecoration: 'none'  }}>
                                    Shop
                                </Link>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem divider button >
                        <ListItemText inset>
                            <Typography>
                                <Link to='/learnmore' style={{ color: '#D231EB', fontSize: '30px', textDecoration: 'none'  }}>
                                    Learn More
                                </Link>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem divider button >
                        <ListItemText inset>
                            <Typography>
                                <Link to='/login' style={{ color: '#D231EB', fontSize: '30px', textDecoration: 'none'  }}>
                                    Login
                                </Link>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </List>
                <Link to ='/cart'>
                        <Badge badgeContent={4} className='shopping-basket'>
                            <ShoppingBasketOutlined />
                        </Badge>
                        </Link>

            </Drawer>
            <IconButton className={classes.menuIcon} style={{ color: 'black'}} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>

        </>

    );
};

export default DrawerComponent;
