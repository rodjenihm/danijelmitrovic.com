import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function sitemap(): MetadataRoute.Sitemap {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const blogPostEntries = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    const lastModified = data.date ? new Date(data.date) : new Date();
    const slug = filename.replace(/\.mdx$/, "");

    return {
      url: `https://www.danijelmitrovic.com/blog/${slug}`,
      lastModified: lastModified,
      changeFrequency: "weekly" as const, // Use 'as const' for type safety
      priority: 0.7,
    };
  });

  return [
    {
      url: "https://www.danijelmitrovic.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.danijelmitrovic.com/portfolio",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.danijelmitrovic.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPostEntries,
  ];
}
