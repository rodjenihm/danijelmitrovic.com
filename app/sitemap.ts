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

    return {
      url: `https://www.danijelmitrovic.com/blog/${filename.replace(
        /\.mdx$/,
        ""
      )}`,
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
      url: "https://www.danijelmitrovic.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.danijelmitrovic.com/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPostEntries,
  ];
}
