import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
    Drawer,
    AppBar,
    Toolbar,
    List,
    CssBaseline,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import RestaurantOutlinedIcon from "@material-ui/icons/RestaurantOutlined";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ReplyIcon from "@material-ui/icons/Reply";
import Main from "../Pages/Main";
import Coupon from "../Pages/Coupon";
import Product from "../Pages/Product";
import Store from "../Pages/Store";
import Shipper from "../Pages/Shipper";
import Notification from "../Pages/Notification";
import History from "../../routes/History";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    row: {
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
    },
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [checkComponent, setCheckComponent] = useState(0);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleLogin = () => {
        History.push("/login");
    };
    const RenderComponent = ({ index }) => {
        switch (index) {
            case 0:
                return <Main />;
            case 1:
                return <Notification />;
            case 2:
                return <Shipper />;
            case 3:
                return <Store />;
            case 4:
                return <Product />;
            case 5:
                return <Coupon />;
            default:
                break;
        }
    };
    const RenderIcon = (index) => {
        switch (index) {
            case 0:
                return <InboxIcon />;
            case 1:
                return <HomeOutlinedIcon />;
            case 2:
                return <RestaurantOutlinedIcon />;
            case 3:
                return <PermContactCalendarIcon />;
            case 4:
                return <StorefrontIcon />;
            case 5:
                return <StorefrontIcon />;
            default:
                break;
        }
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.row}>
                        <Typography variant="h6" noWrap>
                            Web Admin Food Delivery
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {[
                        { title: "Thống kê", content: InboxIcon },
                        { title: "Thông báo", content: InboxIcon },
                        { title: "Shipper", content: InboxIcon },
                        { title: "Cửa hàng", content: InboxIcon },
                        { title: "Sản phẩm", content: InboxIcon },
                        { title: "Khuyến mãi", content: InboxIcon },
                    ].map((text, index) => (
                        <ListItem
                            button
                            key={text}
                            onClick={() => {
                                setCheckComponent(index);
                            }}
                        >
                            <ListItemIcon>{RenderIcon(index)}</ListItemIcon>
                            <ListItemText primary={text.title} />
                        </ListItem>
                    ))}
                    <Button
                        onClick={handleLogin}
                        fullWidth
                        variant="contained"
                        color="green"
                        align="right"
                    >
                        <ReplyIcon />
                    </Button>
                    <ListItemText primary="Đăng xuất" />
                </List>
            </Drawer>

            <main className={classes.content}>
                <div className={classes.toolbar} />
                <RenderComponent index={checkComponent} />
            </main>
        </div>
    );
}
