import React from "react";
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginPending } from "../../actions/login";

function SignIn() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
    dispatch(loginPending(values));
  };

  if (login.isLogin) {
    //console.log("Login Success", login.isLogin);
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="center-f-c">
        <span className="font-xl">Sign In</span>
        <Link to="/signup" className="font-sm">
          Need a account ?
        </Link>
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {login.error ? (
          <div className="error">
            <Alert
              message="Login Error"
              description={login.error}
              type="error"
              showIcon
            />
          </div>
        ) : (
          ""
        )}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={login.isLoading}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default SignIn;
