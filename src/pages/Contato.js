import { Form, Input, InputNumber, Button } from "antd";
import { useState } from "react";

import api from "../API/api";

import {
  UserOutlined,
  MailOutlined,
  MessageOutlined,
  SendOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

import { Spin } from "antd";
import { Modal, Space } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} é obrigatório!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

function success(message) {
  Modal.success({
    content: message,
  });
}

function Contato() {
  const [spins, setSpins] = useState(false);

  const onFinish = (values) => {
    setSpins(true);

    const data = {
      name: values.user.name,
      email: values.user.email,
      message: values.user.message,
    };

    api
      .post("/contact", data)
      .then(function (response) {
        setSpins(false);
        console.log(response.data.message);
        success(response.data.message);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
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
        <Input prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email", required: true }]}
      >
        <Input prefix={<MailOutlined />} />
      </Form.Item>
      <Form.Item
        name={["user", "message"]}
        label="Mensagem"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
        <Button type="primary" htmlType="submit" loading={spins}>
          Enviar {<SendOutlined />}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Contato;
