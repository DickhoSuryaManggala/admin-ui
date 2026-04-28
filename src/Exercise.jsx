import React from "react";
import PostCard from "./PostCard";
import postsData from "../postsData";

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold mb-2" style={{ color: '#b83016' }}>
          Post Cards
        </h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {postsData.map((post) => (
          <PostCard 
            key={post.id} 
            id={post.id} 
            userId={post.userId} 
            title={post.title} 
            body={post.body} 
          />
        ))}
      </main>

      <footer className="mt-16 text-center text-gray-400 text-sm pb-8">
        &copy; 2026 - Pemrograman Sisi Klien - A11.4602 - A11.2023.15323 - Dickho Surya Manggala
      </footer>
    </div>
  );
}

export default Exercise;
