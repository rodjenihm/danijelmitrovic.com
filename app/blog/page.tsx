// app/blog/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface Post {
  slug: string;
  meta: {
    title: string;
    date: string;
    excerpt: string;
  };
}

async function getPosts() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    // Extract first paragraph as excerpt
    const excerpt = content.trim().split("\n")[0];

    return {
      slug: filename.replace(/\.mdx$/, ""),
      meta: {
        title: data.title,
        date: data.date,
        excerpt: data.excerpt || excerpt,
      },
    };
  });

  posts.sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );

  return posts;
}

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug} className="mb-4">
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-500 hover:underline"
              >
                {post.meta.title}
              </Link>
              <span className="text-gray-500 ml-2">
                ({new Date(post.meta.date).toLocaleDateString()})
              </span>
              <p className="text-gray-600">{post.meta.excerpt}</p>{" "}
              {/* Display excerpt */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
