import { Box, TextField, Button, Alert, Typography } from '@mui/material';
import { spacing } from '@mui/system';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useChangeUserPasswordMutation } from '../../services/userAuthApi';
import { getToken } from '../../services/LocalStorageService'
const ChangePassword = () => {
  const [server_error, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [changeUserPassword] = useChangeUserPasswordMutation()
  const { access_token } = getToken()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get('password'),
      password2: data.get('password2'),
    }
    const res = await changeUserPassword({ actualData, access_token })
    if (res.error) {
      setServerMsg({})
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(res.data)
      setServerError({})
      setServerMsg(res.data)
      document.getElementById("password-change-form").reset();
    }

  };
  // Getting User Data from Redux Store
  const myData = useSelector(state => state.user)
  // console.log("Change Password", myData)

  return <>
    {/* {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}
    {server_error.password ? console.log(server_error.password[0]) : ""}
    {server_error.password2 ? console.log(server_error.password2[0]) : ""} */}
    <Box sx={{ color: 'white', backgroundColor: '#9575cd', display: 'flex', flexDirection: 'column', flexWrap: 'wrap',width: '100%', maxWidth: '1/2' }}>
      <h1>Change Password</h1>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 , color: 'white',  backgroundColor: '#9575cd'}} id="password-change-form">
        <TextField margin="dense" required fullWidth name="password" label="New Password" type="password" id="password" />
        {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
        <TextField  margin="dense" required fullWidth name="password2" label="Confirm New Password" type="password" id="password2" />
        {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}
        <Box textAlign='center'>
          <Button type="submit" variant="contained" color='warning' sx={{ mt: 0, mb: 2, px: 5 }}> Update </Button>
        </Box>
        {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
        {server_msg.msg ? <Alert severity='success'>{server_msg.msg}</Alert> : ''}
      </Box>
    </Box>
  </>;
};

export default ChangePassword;
