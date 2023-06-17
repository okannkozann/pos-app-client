import { Button, Form, Input, Modal, message } from "antd";
import React from "react";

const Add = ({
  isAddModalOpen,
  setIsAddModalOpen,
  categories,
  setCatregories,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch(" http://localhost:5000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });
      message.success("Kategori başarıyla eklendi");
      form.resetFields();
      setCatregories([
        ...categories,
        {
          _id: Math.random(),
          title: values.title,
        },
      ]); //yeni eklenen kategori anında listeye eklensin diye
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      title="Yeni Kategori Ekle"
      open={isAddModalOpen}
      onCancel={() => setIsAddModalOpen(false)}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          name="title"
          label="Kategori Ekle"
          rules={[
            {
              required: true,
              message: "Kategori Ekle alanı boş geçilemez!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="flex justify-end mb-0">
          <Button type="primary" htmlType="submit">
            Oluştur
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Add;
