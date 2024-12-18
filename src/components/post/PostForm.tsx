import React from "react";
import { Form, Input, Modal } from "antd";

type PostFormProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: { title: string; body: string }) => void;
  initialValues?: { title: string; body: string };
};

const PostForm: React.FC<PostFormProps> = ({
  open,
  onClose,
  onSubmit,
  initialValues,
}) => {
  const [form] = Form.useForm();

  return (
    <Modal
      title={initialValues ? "Edit Post" : "Add New Post"}
      open={open}
      onOk={() => form.submit()}
      onCancel={onClose}
      okText="Save"
      cancelText="Cancel"
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues || { title: "", body: "" }}
        onFinish={onSubmit}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter the title" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="body"
          label="Body"
          rules={[{ required: true, message: "Please enter the body" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PostForm;
