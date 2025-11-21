"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // 주소창의 id 가져오기
import { getPostById } from '@/lib/api';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) getPostById(id).then(setPost);
  }, [id]);

  if (!post) return <p>로딩중...</p>;

  return (
    <article>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>{post.title}</h1>
      <p style={{ color: '#888', marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <MarkdownRenderer content={post.content} />
    </article>
  );
}