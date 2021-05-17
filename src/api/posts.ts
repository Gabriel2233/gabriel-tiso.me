import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

import { Post } from '../types'

import { format } from 'date-fns'

const postsDirectory = path.join(process.cwd(), "/src/_posts")

function readFileFromPath(path: string): Post {
  const file = fs.readFileSync(path)
  const { data, content } = matter(file)

  const post = {
    data: {
      title: data.title,
      slug: data.slug,
      createdAt: format(new Date(data.createdAt), "MMM d"),
      short: data.short,
      image: data.image,
    },
    content
  }

  return post
}

export function getPosts(): Post[] {
  let posts = []
  const files = fs.readdirSync(postsDirectory)

  for (const f of files) {
    const filePath = path.join(postsDirectory, f)
    const post = readFileFromPath(filePath)

    posts.push(post)
  }

  return posts;
}

export function getPost(slug: string): Post {
  const filePath = path.join(postsDirectory, `${slug}.md`)
  const post = readFileFromPath(filePath)

  return post
}
