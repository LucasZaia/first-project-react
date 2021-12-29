import { Form, Input, InputNumber, Button } from 'antd';

import api from '../API/api';
import axios from 'axios';

import {
     UserOutlined,
     MailOutlined,
     MessageOutlined,
     SendOutlined
 } from '@ant-design/icons';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} é obrigatório!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const onFinish = (values) => {
    axios.post('http://localhost:5000/contact',{name: values.user.name, email: values.user.email, message: values.user.message});
  };

function Contato() {

  return (
    <div>
      <h1>Contato</h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Nome"
          rules={[{ required: true }]}
        >
          <Input prefix={<UserOutlined/>}/>
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email", required: true }]}
        >
          <Input prefix={<MailOutlined/>} />
        </Form.Item>
        <Form.Item name={["user", "message"]} label="Mensagem"
        rules={[{required:true}]}>
          <Input.TextArea/>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
             Enviar {<SendOutlined />}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Contato;
