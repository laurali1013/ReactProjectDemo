import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";

import "./login.less";

import logo from "../static/imgs/logo.png";

const { Item } = Form;

class Login extends Component {
  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //密码校验：自定义校验
  pwdValidator = (rule, value) => {
    if (!value) {
      return Promise.reject("密码必须输入");
    } else if (value.length > 12) {
      return Promise.reject("密码必须小于12位");
    } else if (value.length < 4) {
      return Promise.reject("密码必须大于等于4位");
    } else if (!/^\w+$/.test(value)) {
      return Promise.reject("密码必须是字母、数字、下划线组成");
    } else {
      return Promise.resolve();
    }
  };

  render() {
    return (
      <div className="login">
        <header>
          <img src={logo} alt="logo" />
          <h1>兆科分布式管理平台</h1>
        </header>
        <section>
          <h1>用户登录</h1>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Item
              className="username"
              name="username"
              rules={[
                { required: true, message: "请输入用户名!" },
                { max: 12, message: "用户名必须小于12位!" },
                { min: 4, message: "用户名必须大于4位!" },
                { pattern: /^\w+$/, message: "必须是字母下划线数字组成!" },
              ]}
            >
              <Input prefix={<UserOutlined />} />
            </Item>

            <Item name="password" rules={[{ validator: this.pwdValidator }]}>
              <Input.Password prefix={<KeyOutlined />} />
            </Item>

            <Item>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Item>
          </Form>
        </section>
      </div>
    );
  }
}

export default Login;
