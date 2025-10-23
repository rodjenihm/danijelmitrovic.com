// app/blog/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";
import Tag from "@/components/tag";
import { formatBlogDate } from "@/lib/utils";

interface Post {
  slug: string;
  meta: {
    title: string;
    date: string;
    excerpt: string;
    tags?: string[];
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
        tags: data.tags || [],
      },
    };
  });

  posts.sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );

  return posts;
}

export const metadata: Metadata = {
  title: "Blog | Danijel Mitrović",
  description:
    "Explore blog posts on Java, Spring, cloud technologies, and more.",
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-(--breakpoint-lg) mx-auto">
        <h1 className="text-3xl font-bold mb-8">Tech Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug} className="mb-6">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-500 hover:underline text-xl font-semibold"
                >
                  {post.meta.title}
                </Link>
                <span className="text-gray-500 ml-2 text-sm">
                  ({formatBlogDate(post.meta.date)})
                </span>
                <p className="text-gray-400 mt-2">{post.meta.excerpt}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.meta.tags &&
                    post.meta.tags.length > 0 &&
                    post.meta.tags.map((tag) => <Tag key={tag} name={tag} />)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
