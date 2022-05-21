import React, { useState } from "react";
import 'antd/dist/antd.css';
import '../static/css/Login.css';
import { Card, Input, Icon, Button, Spin } from 'antd';
function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState('')

  const checkLogin =()=>{
    setIsLoading(true)
    setTimeOut(()=>{
      setIsLoading(false)
    },1000)
  }
  
  return <div className="login-div">lijing Login Page
    <Spin tip="Loading" spinning={isLoading}>
      <Card title="lijing blog system" bordered={true} style={{ width: 400 }}>
        <Input
          id="useName"
          size="large"
          placeholder="Enter your userName"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)}' }}/>}
onChange={(e)=>{setUserName(e.target.value)}}
        />
        <br></br>
        <Input.Password
          id="password"
          size="large"
          placeholder="Enter your password"
          prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)}' }}/>}
onChange={(e)=>{setPassword(e.target.value)}}
        />
        <br></br>
        <Button type="primary" size="large" block onClick={checkLogin}></Button>
        </Card>
  </Spin>
  </div>;
}
export default Login;
