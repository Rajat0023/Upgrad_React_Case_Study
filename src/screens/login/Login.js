import React,{Component} from 'react';
import './Login.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

    formControl: {
        margin: theme.spacing.unit,
        minWidth: 330,
        maxWidth: 330
    },
    title: {
        marginTop: '10px',
        fontSize: '1.7rem'
    },

    loginBtn: {
        marginLeft: '8px',
        marginTop: '10px'
    }

})
class Login extends Component{

    constructor() {
        super();
        this.state={
            username: "",
            loginpassword: ""
        }
    }

    inputUserNameChangeHandler =(e) => {
        this.setState({username: e.target.value})
    }

    inputLoginPasswordChangeHandler =(e) => {
        this.setState({loginPassword: e.target.value})
    }

    render() {
        const {classes} = this.props;

        return (
            <div>
            <header className="app-header">
                <span className="header-logo">Image Viewer</span>
            </header>

            <div className="card-container">
                <Card className="login-card">
                    <CardContent>
                        <FormControl className={classes.formControl}>
                        <Typography className={classes.title} color="textPrimary">
                            LOGIN
                        </Typography>
                        </FormControl> <br />
                        <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor='username'>UserName</InputLabel>
                        <Input id='username' type='text' username = {this.state.username} 
                        onChange={this.inputUserNameChangeHandler} />         
                    </FormControl> <br /> <br />

                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor='loginPassword'>Password</InputLabel>
                        <Input id='loginPassword' type='password' loginpassword={this.state.loginPassword}
                         onChange={this.inputLoginPasswordChangeHandler} />               
                    </FormControl><br /> <br />
                    <Button className={classes.loginBtn} variant='contained' color='primary' onClick={this.loginClickHandler}>LOGIN</Button>
                    </CardContent>
                </Card>
            </div>

            </div>
        )
    }
}

export default withStyles(styles) (Login);