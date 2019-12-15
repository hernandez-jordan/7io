import React from 'react';
import {Button, MenuItem, Link, makeStyles, IconButton } from '@material-ui/core';
import { usePopupState, bindHover, bindMenu } from 'material-ui-popup-state/hooks';
import Menu from 'material-ui-popup-state/HoverMenu';
import MoreIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles(theme => ({
    button: {
        marginLeft: 20,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        borderRadius: 5,
        color: 'white',
        '&:hover':{
            backgroundColor: '#d5d5d508',
            boxShadow: 'none',
        }
    },
    buttonContact: {
      marginLeft: 20,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        borderRadius: 25,
        border:'1px solid #a765e6',
        '&:hover':{
            backgroundColor: '#a765e6',
            boxShadow: 'none',
        }
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        '&:hover':{
            textDecoration: 'none',
        },
    },
    sectionDesktop: {
        width: 'auto',
        margin : 0,
        [theme.breakpoints.down('sm')]: {
          display: 'none', 
        },
      },
      sectionMobile: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
        },
      },
      test: {

      }
}));

const TriggerMenu = props => {
    const classes = useStyles();
    const popupProduct = usePopupState({ variant: 'popover', popupId: 'Products', })
    const popupServices = usePopupState({ variant: 'popover', popupId: 'Services', })
    const popupMobile = usePopupState({ variant: 'popover', popupId: 'Mobile', })

    
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
                    {/* {menuItem.subMenu.map((submenuItem) => <MenuItem onClick={popupProduct.close}>{menuItem.subMenu.label}</MenuItem>)} */}
                    <div> hi</div>
                </Menu>
            );
        });
    };
    


    return (
        <div>
          {console.log(productMenu)}
            <div className={classes.sectionDesktop}>
                <Button className={classes.button} variant="contained">
                    <Link className={classes.link} href="#" >
                        Home
                    </Link>
                </Button>
                <Button className={classes.button} variant="contained" endIcon={<ArrowDropDownIcon />} {...bindHover(popupProduct)}>
                    <Link className={classes.link} href="#" >
                        Products
                    </Link>
                    
                </Button>
                <Button className={classes.button} variant="contained" endIcon={<ArrowDropDownIcon />} {...bindHover(popupServices)}>
                    <Link className={classes.link} href="#" >
                        Services
                    </Link>
                </Button>
                <Button className={classes.button} variant="contained">
                    <Link className={classes.link} href="#" >
                        About
                    </Link>
                </Button><Button className={classes.buttonContact} variant="contained">
                    <Link className={classes.link} href="#" >
                        Contact Us
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
            </div>
            
            <div className={classes.sectionMobile}>
                <IconButton
                    aria-label="show more"
                    //aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    color="inherit"
                    variant="contained" 
                    {...bindHover(popupMobile)}
                >
                <MoreIcon />
                </IconButton>
                <Menu
                    {...bindMenu(popupMobile)}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    className={classes.test}
                >
                    <MenuItem onClick={popupMobile.close}>Product</MenuItem>
                    <MenuItem onClick={popupMobile.close}>Services</MenuItem>
                    <MenuItem onClick={popupMobile.close}>About</MenuItem>
                    <MenuItem onClick={popupMobile.close}>Contact</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default TriggerMenu

// import * as React from 'react'
// import Menu from 'material-ui-popup-state/HoverMenu'
// import MenuItem from '@material-ui/core/MenuItem'
// import Button from '@material-ui/core/Button'
// import {
//   usePopupState,
//   bindHover,
//   bindMenu,
// } from 'material-ui-popup-state/hooks'

// const TriggerMenu = () => {
//   const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
//   return (
//     <React.Fragment>
//       <Button variant="contained" {...bindHover(popupState)}>
//         Hover to open Menu
//       </Button>
//       <Menu
//         {...bindMenu(popupState)}
//         getContentAnchorEl={null}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//         transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//       >
//         <MenuItem onClick={popupState.close}>Cake</MenuItem>
//         <MenuItem onClick={popupState.close}>Death</MenuItem>
//       </Menu>
//     </React.Fragment>
//   )
// }

// export default TriggerMenu