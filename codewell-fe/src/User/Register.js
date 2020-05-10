import React from 'react';

import { useTranslation } from 'react-i18next';
import { Button, Form, Input, Row } from 'antd';

function Register() {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onFinish = values => {
    delete values.confirm;
    fetch('http://localhost:3000/api/register',
      {
        method: 'POST',
        body: JSON.stringify(values)
      }
    ).then(response => response.json())
    .then(data => {
        console.log(data);
    });
  };

  return (
    <>
      <Row>
        <h1>{t('Register your account')}</h1>
      </Row>
      <Row>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
        >
          <Form.Item label={t('Username')} name="id"
            rules={[
              {
                required: true,
                message: t('Please input your username!'),
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label={t('First name')} name="first_name"
            rules={[
              {
                required: true,
                message: t('Please input your first name!'),
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label={t('Last name')} name="last_name"
            rules={[
              {
                required: true,
                message: t('Please input your last name!'),
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label={t('Password')}
            rules={[
              {
                min: 10,
                required: true,
                message: t('Password must be at least 10 characters!'),
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label={t('Confirm password')}
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: t('Please confirm your password!'),
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    t('The two passwords that you entered do not match!')
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="mail"
            label={t('email')}
            rules={[
              {
                type: 'email',
                message: t('Invalid email address!'),
              },
              {
                required: true,
                message: t('Please input your email!'),
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit">{t('Register')}</Button>
        </Form>
      </Row>
    </>
  );
}

export default Register;
