import Banner from '@/src/components/Banner'
import BlogsSection from '@/src/components/Blogs/BlogsSection'
import FAQSection from '@/src/components/Home/FAQSection'
import React from 'react'

const BlogsPage = () => {
  return (
    <>
    <Banner title='News & Blog' video="./videos/About Banner.mp4"/>
    <BlogsSection/>
    <FAQSection id='faq'/>
    </>
    
  )
}

export default BlogsPage