import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import History from "../../routes/History";
import { useDispatch, useSelector } from "react-redux";
import {
    changeSuccess,
    loginRequest,
    loginSuccess,
} from "../../containers/Login/action";
import { ToastError, ToastSuccess } from "../Pages/TostMessenger";
import Loader from "../Loader/Loader";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();
    const { success, requesting, data } = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pass =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //  . Các số 0-9. Ví dụ: 2, 6, 7
    // . Các chữ cái thường (nhỏ) a-z. Ví dụ: a, e, r
    // . Chữ cái viết hoa (in hoa) A-Z. Ví dụ: A, E, R
    // . Các ký tự không phải chữ và số (ký tự đặc biệt) như !@#

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState("");
    const [checkSuccess, setCheckSuccess] = useState(false);
    const saveStorage = (remember) => {
        if (remember) {
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("email");
            localStorage.removeItem("password");
        }
    };

    const handleLogin = () => {
        saveStorage(remember);
        console.log({ data, success });
        if (password && email) {
            dispatch(loginRequest(email, password));
        } else {
            return ToastError("Không được bỏ trống");
        }
    };

    const handleChangeRemember = (event) => {
        const { checked } = event.target;
        setRemember(checked);
    };
    const handleChangeEmail = (event) => {
        const { value } = event.target;
        setEmail(value);
    };
    const handleChangePassword = (event) => {
        const { value } = event.target;
        setPassword(value);
    };
    useEffect(() => {
        if (success) {
            if (data) {
                localStorage.setItem("isLogin", true);
                dispatch(loginSuccess(false));
                dispatch(changeSuccess());
                History.push("/dashboard");
                return ToastSuccess("Đăng nhập thành công");
            } else {
                return ToastError("Kiểm tra lại Email Mật Khẩu");
            }
        }
    }, [data, success]);
    useEffect(() => {
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");
        const remember = localStorage.getItem("isRemember");
        setEmail(email);
        setPassword(password);
        setRemember(remember);
    }, []);
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Đăng nhập
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={handleChangeEmail}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handleChangePassword}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                value={remember}
                                onChange={handleChangeRemember}
                                color="primary"
                            />
                        }
                        label="Nhớ mật khẩu"
                    />
                    <Button
                        //type="submit"
                        onClick={handleLogin}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Đăng nhập
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            {requesting && <Loader />}
        </Container>
    );
}
