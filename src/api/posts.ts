import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

import { format } from 'date-fns'

const postsDirectory = path.join(process.cwd(), "/src/_posts")

function readFileFromPath(path: string) {
  const file = fs.readFileSync(path)
  const { data, content } = matter(file)

  const post = {
    data: {
      title: data.title,
      slug: data.slug,
      createdAt: format(new Date(data.createdAt), "MMM d"),
      short: data.short
    },
    content
  }

  return post
}

export function getPosts() {
  let posts = []
  const files = fs.readdirSync(postsDirectory)

  for (const f of files) {
    const filePath = path.join(postsDirectory, f)
    const post = readFileFromPath(filePath)

    posts.push(post)
  }

  return posts;
}

export function getPost(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`)
  const post = readFileFromPath(filePath)

  return post
}
