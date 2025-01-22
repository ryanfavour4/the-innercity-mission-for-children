import React from 'react'
import Image from 'next/image'
import blogBanner from '@/public/assets/images/blog-banner-autism.jpg'

export default function TopBlogSection() {
  const blogs = [
    {
      id: 1,
      image: 'http://dummyimage.com/211x100.png/cc0000/ffffff',
      title: 'Soldier of Fortune',
      body: 'nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea',
    },
    {
      id: 2,
      image: 'http://dummyimage.com/120x100.png/cc0000/ffffff',
      title: 'The Feminine Touch',
      body: 'massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum',
    },
    {
      id: 3,
      image: 'http://dummyimage.com/135x100.png/ff4444/ffffff',
      title: 'Bears',
      body: 'ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat',
    },
  ]

  return (
    <div className="bg-secondary pb-10 text-textcolor">
      <div className="wrapper px-3">
        {/* TWIN COL */}
        <div className="grid h-full grid-cols-1 justify-center gap-x-10 gap-y-10 pt-10 md:min-h-96 md:grid-cols-2">
          <div>
            <h3 className="sub-header max-w-md text-2xl font-semibold before:top-4 md:text-3xl">
              See recent blogs and stories
            </h3>
            <p className="mt-2 text-base font-semibold">Today: 26th April 2025</p>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl bg-light px-4 py-4">
            {/* Blog */}
            {blogs.map((blog, idx) => (
              <div
                key={idx}
                className="flex w-full cursor-pointer flex-col items-center gap-3 rounded-xl border border-transparent px-2 py-2 hover:border-textcolor/20 hover:bg-secondary/50 hover:shadow md:flex-row md:gap-6"
              >
                <Image
                  alt={blog.title + ' - ' + blog.body}
                  className="h-[7rem] w-full rounded-lg object-cover md:w-40"
                  src={blogBanner}
                />
                <div className="flex w-full flex-col gap-2 truncate overflow-ellipsis capitalize">
                  <h4 className="ellipsis-2 text-balance text-lg font-semibold">{blog.title}</h4>
                  <p className="ellipsis-2 text-sm">{blog.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
