---
title: Welcome to my blog!
slug: welcome-to-the-blog
createdAt: 10-25-2020
short: This is my first post, more will come soon :)
image: /static/welcome-to-the-blog.jpg
---

For the better part of the last year, I've been investing heavily in front-end development and design. When I started my new role, I identified a need for a component library and created it. Since then, I've learned a lot about style guides, design systems, component libraries, and their best practices. This post will be a deep-dive on everything I've learned in the past year.

I joined Facebook in May 2007. Over the past 10+ years, my activity has ranged from being heavily involved to barely using it for over a year. In the wake of the [#DeleteFacebook](https://twitter.com/hashtag/deletefacebook) uproar, I started to think about my social media footprint. I’m not naive to the amount of data Facebook and other social media platforms have on me, but it’s easy to forget things you said 10 years ago.

Facebook has an option to export a data dump of “everything” they have stored for your profile. I decided to download this and see what juicy details I could find. As it turns out, there wasn’t a lot of juicy information - just some really old, embarrassing stuff and a few trips down memory lane. I thought I’d summarize some interesting numbers and elaborate on some of the more unexpected finds.

### Overview 📝

My data dump was surprisingly only **500mb**. All of the pictures and videos were heavily compressed, so if you were wanting to keep higher quality copies of these, I’d recommend downloading them separately. In total, I had:

- 292 photos
- 245 videos
- 5,917 posts & comments
- 43,511 songs streamed

The main file, `timeline.html`, is a massive clobber of information. Individual entries are generally structured like this:

```html
<div class="meta">Friday, March 9, 2018 at 11:53pm UTC+11</div>
<div class="comment">Some post, comment, song, or link shared</div>
```

I was able to parse through the contents of this file to create a chart of my facebook activity over time.

> Hello Qoute

1. React
2. Vue
3. Angular
4. Svelte
