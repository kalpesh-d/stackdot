function truncate(text, length = 100) {
  return text.length > length ? text.slice(0, length) + "..." : text;
}

const BlogPost = ({ filteredData, expanded, setExpanded }) => {
  return (
    <section className="container">
      {filteredData.map(blog => (
        <article key={blog.id} className="blog-body">
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-description">
            {expanded[blog.id] ? blog.body : truncate(blog.body, 100)}
          </p>
          {!expanded[blog.id] && (
            <button className="blog-expand" onClick={() => setExpanded({ ...expanded, [blog.id]: true })}>
              View More
            </button>
          )}
        </article>
      ))}
    </section>
  )
}

export default BlogPost