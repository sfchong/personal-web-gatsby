---
title: "Chad"
slug: "chad"
date: "2021-04-08"
tags: ["c#", "rest", "api"]
---

# Chad post
this is chad stuff

## note
some note

## content
What have we changed?

We updated the query to also pull all of the Markdown posts we have, sort them based on the date metadata in each post, and filter out the posts that aren't "published" yet. If we don't sort them, they'll come back in no particular order. Besides the post metadata, we're also pulling the ID for each post and an excerpt that is limited to the first 250 characters.

We also updated the page's html code to display the list of posts. If you aren't familiar with the map function, it's a type of for-each loop that will execute the defined function for each node or post in our site. Each post will get a listing with the title of the post, the date, and a plain text excerpt of the post.

What have we changed?

We updated the query to also pull all of the Markdown posts we have, sort them based on the date metadata in each post, and filter out the posts that aren't "published" yet. If we don't sort them, they'll come back in no particular order. Besides the post metadata, we're also pulling the ID for each post and an excerpt that is limited to the first 250 characters.

We also updated the page's html code to display the list of posts. If you aren't familiar with the map function, it's a type of for-each loop that will execute the defined function for each node or post in our site. Each post will get a listing with the title of the post, the date, and a plain text excerpt of the post.

What have we changed?

We updated the query to also pull all of the Markdown posts we have, sort them based on the date metadata in each post, and filter out the posts that aren't "published" yet. If we don't sort them, they'll come back in no particular order. Besides the post metadata, we're also pulling the ID for each post and an excerpt that is limited to the first 250 characters.

We also updated the page's html code to display the list of posts. If you aren't familiar with the map function, it's a type of for-each loop that will execute the defined function for each node or post in our site. Each post will get a listing with the title of the post, the date, and a plain text excerpt of the post.

## Code
```js
export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="site-wrapper">
      <title>{frontmatter.title}</title>
      <Header />
      <div className="content-wrapper">
        <h1>{frontmatter.title}</h1>
        <h2>
          {frontmatter.date} ({frontmatter.fromNow})
        </h2>
        <p>{frontmatter.tags.join()}</p>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <Footer />
    </div>
  )
}
```

```html
<div>
    <p>lel</p>
</div>
```

```sql
SELECT * FROM User WHERE Id=@id
```

## BlockQuote
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 

This is blockquote.