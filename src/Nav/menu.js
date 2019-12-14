import React from 'react'
import Menu from 'material-ui-popup-state/HoverMenu'
import {Button, MenuItem, Link, makeStyles} from '@material-ui/core'
import { usePopupState, bindHover, bindMenu } from 'material-ui-popup-state/hooks'

const useStyles = makeStyles(theme => ({
    button: {
        marginLeft: 20,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        borderRadius: 0,
        '&:hover':{
            backgroundColor: '#d5d5d508',
            boxShadow: 'none',
        }
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        '&:hover':{
            textDecoration: 'none',
        }

    }
}));

const TriggerMenu = () => {
    const classes = useStyles();
    const popupProduct = usePopupState({ variant: 'popover', popupId: 'Products' })
    const popupServices = usePopupState({ variant: 'popover', popupId: 'Services' })
    const popupAbout = usePopupState({ variant: 'popover', popupId: 'About' })

    const menuItems = [
        {
            getContentAnchorEl: null, 
            anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
            transformOrigin: { vertical: 'top', horizontal: 'left' },
            subMenu: [
                {
                    label: 'Data Storage',
                },
                {
                    label: 'Compliances',
                },
                {
                    label: 'Cyber Security',
                },
            ],            
        },
    ];


    const productMenu = () => {
        menuItems.map((menuItem) => {
            return(
                <Menu>
                    {menuItem.subMenu.map((submenuItem) => <MenuItem onClick={popupProduct.close}>Data Storage</MenuItem>)}
                </Menu>
            );
        });
    };
    
    


    return (
        <div>
            <Button className={classes.button} variant="contained">
                <Link className={classes.link} href="#" >
                    Home
                </Link>
            </Button>
            <Button className={classes.button} variant="contained" {...bindHover(popupProduct)}>
                <Link className={classes.link} href="#" >
                    Products
                </Link>
            </Button>
            <Button className={classes.button} variant="contained" {...bindHover(popupServices)}>
                <Link className={classes.link} href="#" >
                    Services
                </Link>
            </Button>
            <Button className={classes.button} variant="contained" {...bindHover(popupAbout)}>
                <Link className={classes.link} href="#" >
                    About
                </Link>
            </Button>

            <Menu 
                {...bindMenu(popupProduct)}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                <MenuItem onClick={popupProduct.close}>Data Storage</MenuItem>
                <MenuItem onClick={popupProduct.close}>Cyber Security</MenuItem>
                <MenuItem onClick={popupProduct.close}>Compliances</MenuItem>
            </Menu>
            <Menu
                {...bindMenu(popupServices)}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                <MenuItem onClick={popupServices.close}>Corporate Governance</MenuItem>
                <MenuItem onClick={popupServices.close}>IT</MenuItem>
                <MenuItem onClick={popupServices.close}>Compliances</MenuItem>
                <MenuItem onClick={popupServices.close}>Financing</MenuItem>
            </Menu>
            <Menu
                {...bindMenu(popupAbout)}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                <MenuItem onClick={popupAbout.close}>What we stand for</MenuItem>
                <MenuItem onClick={popupAbout.close}>Field of Expertise</MenuItem>
                <MenuItem onClick={popupAbout.close}>Our Team</MenuItem>
                <MenuItem onClick={popupAbout.close}>Partners</MenuItem>
                <MenuItem onClick={popupAbout.close}>Contact Us</MenuItem>
            </Menu>
        </div>
    )
}

export default TriggerMenu

