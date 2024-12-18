import React from "react";
import { Table, Button } from "antd";
import { Post } from "../../types/types";

type PostsTableProps = {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (id: number) => void;
};

const PostsTable: React.FC<PostsTableProps> = ({ posts, onEdit, onDelete }) => {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Body", dataIndex: "body", key: "body" },
    {
      title: "Actions",
      key: "actions",
      render: (text: any, record: Post) => (
        <div>
          <Button type="link" onClick={() => onEdit(record)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => onDelete(record.id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return <Table dataSource={posts} columns={columns} rowKey="id" />;
};

export default PostsTable;
