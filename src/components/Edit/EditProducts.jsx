import React, { useContext, useEffect } from "react";
import { Button, Form, Select, InputNumber, Input } from "antd";
import { brands } from "../../helpers/brands";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

const EditProducts = () => {
  const params = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  console.log(oneProduct);

  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>EDIT PRODUCT</h2>
      <Form
        layout="vertical"
        name="basic"
        onFinish={(values) => {
          console.log(values);
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
          rules={[{ required: true, message: "Please select a description!" }]}
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
          rules={[{ required: true, message: "Please input URL of a image!" }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label="Image 2"
          name="image2"
          rules={[{ required: true, message: "Please input URL of a image!" }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label="Video"
          name="video"
          rules={[{ required: true, message: "Please input URL of a video!" }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" s>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProducts;
