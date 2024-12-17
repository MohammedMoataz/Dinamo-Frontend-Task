import React, { useEffect, useState } from "react";
// import { get } from "../../services/apiClient";
import { useApi } from "../../hooks/useApi";
import { Table } from "antd";

interface Post {
  title: string;
  body: string;
}

export const PostList: React.FC = () => {
  //   const [posts, setPosts] = useState<Post[]>([]);
  //   const [error, setError] = useState<string | null>(null);
  const { data: posts, error, loading, fetchData } = useApi<Post[]>("/posts");

  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //       try {
  //         const data = await get<Post[]>("/posts");
  //         setPosts(data);
  //       } catch (err) {
  //         setError("Failed to load posts. Please try again.");
  //       }
  //     };

  //     fetchPosts();
  //   }, []);
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Table
      dataSource={posts!}
      columns={[
        {
          title: "Title",
          dataIndex: "title",
          key: "title",
        },
        {
          title: "Body",
          dataIndex: "body",
          key: "body",
        },
      ]}
    />
  );
};

export default PostList;
