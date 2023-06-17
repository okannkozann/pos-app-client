import { Button, Form, Input, Modal, Table, message } from "antd";
import React, { useState } from "react";

const Edit = ({
  isEditModalOpen,
  setIsEditModalOpen,
  categories,
  setCatregories,
}) => {
  const [editingRow, setEditingRow] = useState({});

  const onFinish = (values) => {
    try {
      fetch(" http://localhost:5000/api/categories/update-category", {
        method: "PUT",
        body: JSON.stringify({ ...values, categoryId: editingRow._id }),
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });
      message.success("Kategori başarıyla güncellendi");
      setCatregories(
        categories.map((item) => {
          if (item.id === editingRow.id) {
            return { ...item, title: values.title };
          }
          return item;
        })
      );
    } catch (error) {
      message.error("Birşeyler yanlış gitti...");

      console.log(error);
    }
  };

  const deleteCategory = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      try {
        fetch("  http://localhost:5000/api/categories/delete-category", {
          method: "DELETE",
          body: JSON.stringify({ categoryId: id }),
          headers: { "Content-Type": "application/json; charset=utf-8" },
        });
        message.success("Kategori başarıyla silindi");
        setCatregories(categories.filter((item) => item._id !== id));
      } catch (error) {
        message.error("Birşeyler yanlış gitti...");
        console.log(error);
      }
    }
  };

  const columns = [
    {
      title: "Kategori Adı",
      dataIndex: "title",
      render: (_, record) => {
        if (record._id === editingRow._id) {
          return (
            <Form.Item className="mb-0" name="title">
              <Input defaultValue={record.title} />
            </Form.Item>
          );
        } else {
          return <p>{record.title}</p>;
        }
      },
    },
    {
      title: "İşlem Türü",
      dataIndex: "action",
      render: (_, record) => {
        return (
          <div>
            <Button
              type="text"
              onClick={() => setEditingRow(record)}
              className="text-blue-700"
            >
              Düzenle
            </Button>
            <Button type="text" htmlType="submit" className="text-yellow-900">
              Kaydet
            </Button>
            <Button
              type="text"
              danger
              onClick={() => deleteCategory(record._id)}
            >
              Sil
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Modal
      open={isEditModalOpen}
      title="Kategori İşlemleri"
      footer={false}
      onCancel={() => setIsEditModalOpen(false)}
    >
      <Form onFinish={onFinish}>
        <Table
          bordered
          dataSource={categories}
          columns={columns}
          rowKey={"_id"}
        />
      </Form>
    </Modal>
  );
};

export default Edit;
