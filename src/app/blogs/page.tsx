import Banner from '@/src/components/Banner'
import BlogsSection from '@/src/components/Blogs/BlogsSection'
import FAQSection from '@/src/components/Home/FAQSection'
import React from 'react'

const BlogsPage = () => {
  return (
    <>
    <Banner title='News & Blog'/>
    <BlogsSection/>
    <FAQSection id='faq'/>
    </>
    
  )
}

export default BlogsPage