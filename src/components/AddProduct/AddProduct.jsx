import React, { useContext, useState } from "react";
import { Modal, Button, Form, Select, InputNumber, Input } from "antd";
import { brands } from "../../helpers/brands";
import { productsContext } from "../../contexts/productsContext";

const AddProduct = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { createProduct } = useContext(productsContext);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function save(newProduct) {
    createProduct(newProduct);
    setIsModalVisible(false);
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add product
      </Button>
      <Modal
        footer={null}
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          name="basic"
          onFinish={(values) => {
            save(values);
          }}
        >
          <Form.Item
            label="Brand"
            name="Brand"
            rules={[{ required: true, message: "Please select a brand!" }]}
          >
            <Select>
              {brands.map((item) => (
                <Select.Option key={item.id} value={item.brand}>
                  {item.brand}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Model"
            name="model"
            rules={[{ required: true, message: "Please select a model!" }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please select a description!" },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please select a price!" }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Image 1"
            name="image1"
            rules={[
              { required: true, message: "Please input URL of a image!" },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Image 2"
            name="image2"
            rules={[
              { required: true, message: "Please input URL of a image!" },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Video"
            name="video"
            rules={[
              { required: true, message: "Please input URL of a video!" },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" s>
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddProduct;
