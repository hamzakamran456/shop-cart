import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result);

  return (
    <div>
      <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-col-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}>
                                          {val.text}
                                        </i>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Serenity has taken possession of my entire
                                  soul, like these sweet mornings of spring
                                  which I enjoy with my whole heart. I am alone
                                  and feel the charm of existence in this spot,
                                  which was created for the bliss of souls like
                                  mine. I am so happy, my dear friend, so
                                  absorbed in the exquisite sense of mere
                                  tranquil existence, that I neglect my talents.
                                  I should be incapable of drawing a single
                                  stroke at the present moment; and yet I feel
                                  that I never was a greater artist than now.
                                </p>
                                <blockquote>
                                  <p>
                                    Dynamically recapticalise distributed
                                    technologies is uheresse tursiay channels
                                    and monotonectally provide access to
                                    resource Leveling expertise in worldwide
                                    deliverables welistiely extend aserser are
                                    diverse portals.
                                  </p>
                                  <cite>
                                    <a href="#">...Melissa Hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  whole heart create an almost and feel the
                                  charm of existeneth spot when the biliscosis
                                  like showing me too happy my dearsi freed
                                  absorbed the exquate sense enjoy my whole
                                  hearts alone and fee the charm of existeneths
                                  spetal when was the bills of souls missing
                                  smoking done freed asleep absorbed the exquat
                                  sense tramped existence neglect my salmeter
                                  should recognize wing is drowned singe
                                  wonderful serenity has taken possession of my
                                  entire soaling these sweet present moment and
                                  yet feel that never was greater artist
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  Serenity has taken possession of my entire
                                  soul, like these sweet mornings of spring
                                  which I enjoy with my whole heart. I am alone
                                  and feel the charm of existence in this spot,
                                  which was created for the bliss of souls like
                                  mine. I am so happy, my dear friend, so
                                  absorbed in the exquisite sense of mere
                                  tranquil existence, that I neglect my talents.
                                  I should be incapable of drawing a single
                                  stroke at the present moment; and yet I feel
                                  that I never was a greater artist than now.
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/pjEC9d28SKM?si=Lh-6ruJInD11Xn8w"
                                    className="video-button popup" target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  whole heart create an almost and feel the
                                  charm of existeneth spot when the biliscosis
                                  like showing me too happy my dearsi freed
                                  absorbed the exquate sense enjoy my whole
                                  hearts alone and fee the charm of existeneths
                                  spetal when was the bills of souls missing
                                  smoking done freed asleep absorbed the exquat
                                  sense tramped existence neglect my salmeter
                                  should recognize wing is drowned singe
                                  wonderful serenity has taken possession of my
                                  entire soaling these sweet present moment and
                                  yet feel that never was greater artist
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                          <i className="icofont-double-left"></i> Previous Blog
                        </a>
                        <a href="#" className="title">
                          Evisculate Parallel Processes via Technica Sound
                          Models Authoritative
                        </a>
                      </div>
                      <div className="right">
                        <a href="#" className="next">
                          <i className="icofont-double-right"></i> Next Blog
                        </a>
                        <a href="#" className="title">
                          Evisculate Parallel Processes via Technica Sound
                          Models Authoritative
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
