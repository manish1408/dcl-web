import Link from "next/link";
import { getBlogPostsAPI } from "../api";
import PageTitle from "../components/PageTitle";
// We create this in just a tick
import { linkResolver } from "../helpers";
import Header from "../components/Header";
import Footer from "../components/Footer";
/**
 * As you can see we are importing our layout here,
 * and below we wrap all of the page in it.
 */
import DefaultLayout from "../layouts";

const Index = ({ posts = [] }) => (
  <>
    <Header />
    <PageTitle title="Our Blog" />
    {/* <p>{JSON.stringify(posts)}</p> */}
    <section className="blog-area ptb-80">
      <div className="container">
        <DefaultLayout>
          <div className="row">
            {posts.map((post, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="single-blog-post-item">
                  <div className="post-image">
                    <Link
                      as={linkResolver(post)}
                      href={`/blogPost?slug=${post.uid}`}
                      passHref
                    >
                      <a>
                        <img
                          src={post.data.featured_image.url}
                          alt="Featured Image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>{new Date(post.data.time).toLocaleDateString()}</li>
                    </ul>
                    <h3>
                      <Link
                        as={linkResolver(post)}
                        href={`/blogPost?slug=${post.uid}`}
                        passHref
                      >
                        <a>{post.data.title[0].text}</a>
                      </Link>
                    </h3>
                    <Link
                      as={linkResolver(post)}
                      href={`/blogPost?slug=${post.uid}`}
                      passHref
                    >
                      <a className="read-more-btn">
                        Read More <i data-feather="plus-circle" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {/* <p>
              <Link href="/blogSingle">
                <a>Detail Page</a>
              </Link>
            </p> */}
            {/* <div className="col-lg-12 col-md-12">
        <div className="pagination-area">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <Link href="/blog">
                  <a className="page-link">Prev</a>
                </Link>
              </li>
              <li className="page-item active">
                <Link href="/blog">
                  <a className="page-link">1</a>
                </Link>
              </li>
              <li className="page-item">
                <Link href="/blog">
                  <a className="page-link">2</a>
                </Link>
              </li>
              <li className="page-item">
                <Link href="/blog">
                  <a className="page-link">3</a>
                </Link>
              </li>
              <li className="page-item">
                <Link href="/blog">
                  <a className="page-link">Next</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div> */}
          </div>
        </DefaultLayout>
      </div>
    </section>
    <Footer />
  </>
);

Index.getInitialProps = async () => {
  // Here we call the API and request 5 documents
  const response = await getBlogPostsAPI();
  return {
    posts: response.results,
  };
};

export default Index;
