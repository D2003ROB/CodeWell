import React from 'react';

import { useTranslation } from 'react-i18next';
import { Button, Form, Input, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function Login() {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onFinish = values => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/api/login');
    xhr.withCredentials = true;
    xhr.send(JSON.stringify(values));
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        console.log('Response: ' + xhr.response);
      }
    }
  };
  return (
    <>
      <Row>
      <Form
        name="login"
        className="login-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="id"
          rules={[{ required: true,
            message: t('Please input your username!') }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={t('Username')} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true,
            message: t('Please input your password!') }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder={t('Password')}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            {t('Log in')}
          </Button>
          {t('or')} <a href="/register">{t('register now')}!</a>
        </Form.Item>
      </Form>
      </Row>
    </>
  );
}

export default Login;
