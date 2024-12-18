import React, { useEffect, useState } from "react";
import { FloatButton, message, Spin } from "antd";

import { Post } from "../../types/types";
import { get, patch, post, remove } from "../../services/apiClient";
import PostsTable from "../../components/post/PostTable";
import PostForm from "../../components/post/PostForm";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const data = await get<Post>("/posts");
      setPosts([...data]);
    } catch (error) {
      message.error("Failed to fetch posts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleAdd = async (value: Post) => {
    try {
      const data = await post<Post>("/posts", value);
      setPosts((prev) => [data, ...prev]);
      message.success("Post added successfully!");
    } catch (error) {
      message.error("Failed to add post.");
    } finally {
      setFormVisible(false);
    }
  };

  const handleEdit = async (value: Post) => {
    if (!editingPost) return;
    try {
      const data = await patch("/posts/" + editingPost.id, value);
      setPosts((prev) =>
        prev.map((post) => (post.id === editingPost.id ? data : post))
      );
      message.success("Post updated successfully!");
    } catch (error) {
      message.error("Failed to update post.");
    } finally {
      setFormVisible(false);
      setEditingPost(null);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await remove<Post>("/posts/" + id);
      setPosts((prev) => prev.filter((post) => post.id !== id));
      message.success("Post deleted successfully!");
    } catch (error) {
      message.error("Failed to delete post.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {loading ? (
        <Spin size="large" />
      ) : (
        <PostsTable
          posts={posts!}
          onEdit={(post) => {
            setEditingPost(post);
            setFormVisible(true);
          }}
          onDelete={handleDelete}
        />
      )}

      <FloatButton
        type="primary"
        onClick={() => {
          setEditingPost(null);
          setFormVisible(true);
        }}
        style={{ right: 30, bottom: 30 }}
        icon={"+"}
      />

      <PostForm
        open={formVisible}
        onClose={() => setFormVisible(false)}
        onSubmit={editingPost ? handleEdit : handleAdd}
        initialValues={editingPost || undefined}
      />
    </div>
  );
};

export default PostsPage;
