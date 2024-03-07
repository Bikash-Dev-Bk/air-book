import "./styles/TravelBlog.css";
import "./styles/Container.css";
import author1 from "../assets/images/testimonial/author1.jpg";
import author2 from "../assets/images/testimonial/author2.jpg";
import author3 from "../assets/images/testimonial/author3.jpg";

import img1 from "../assets/images/Thumbnail/Rectangle 18-1.png";
import img2 from "../assets/images/Thumbnail/Rectangle 18-2.png";
import img3 from "../assets/images/Thumbnail/Rectangle 18.png";

const TravelBlog = () => {
  const blogs = [
    {
      image: img1,
      title: "Embracing the Digital Nomad Lifestyle the Digital Nomad thr...",
      tag: "Work and Travel",
      date: "16 September 23",
      author: "Ys Stafen",
      author_image: author1,
    },
    {
      image: img2,
      title: "Historical Journeys: Stepping Back in Time Through Travel",
      tag: "Historical",
      date: "14 September 23",
      author: "Aria Montague",
      author_image: author3,
    },
    {
      image: img3,
      title: "Sustainable Tourism: Preserving the Planet While Seeing It All",
      tag: "Sustainable Tourism",
      date: "10 September 23",
      author: "Elara Thorne",
      author_image: author2,
    },
  ];

  return (
    <div className="container">
      <h1 className="section_title">Travel Blog</h1>
      <div className="blogs_container">
        {blogs.map((blog, index) => (
          <div key={index} className="blogs_items">
            <img src={blog.image} alt="" className="blogs_image" />
            <div className="blogs_items_info">
              <div className="blog_top_info">
                <p className="blog_tag">{blog.tag}</p>
                <p>{blog.date}</p>
              </div>
              <h2 className="blogs_title">{blog.title}</h2>
              <hr className="blogs_hr" />
              <div className="blogs_bottom">
                <div className="blogs_author">
                  <img
                    src={blog.author_image}
                    alt=""
                    className="author_image"
                  />
                  <p>{blog.author}</p>
                </div>
                <p className="reed_btn">Read More &gt;&gt;</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelBlog;
