"use client";
import { useEffect, useState } from 'react';
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import blogsData from "./data/articles.json";
import Link from 'next/link';


// Define the interface for a blog item
interface Blog {
    title: string;
    category: string;
    content: string;
    image: string;
}

export default function Articles() {

    const blogs: Blog[] = blogsData.blogs;
    const [truncatedContent, setTruncatedContent] = useState<string>('');

    function generateSlug(title: string) {
        return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }

    {/* Use dangerouslySetInnerHTML to render html from json */ }
    function createMarkup(c: any) {
        return { __html: c };
    }

    // Function to truncate content to 30 words followed by ...
    const truncateContent = (content: string, wordsCount: number): string => {
        const words = content.split(' ');
        const truncatedWords = words.slice(0, wordsCount);
        return truncatedWords.join(' ') + (words.length > wordsCount ? '...' : '');
    };

    useEffect(() => {
        if (blogs.length > 0) {
            // Truncate the content of the first blog to 30 words
            const truncated = truncateContent(blogs[0].content, 30);
            setTruncatedContent(truncated);
        }
    }, [blogs]);

    return (
        <div className="xl:px-40 md:py-12 px-5 py-5 bg-[#F7F7F7]">
            <div className="min-h-[50px] md:min-h-[100px] flex justify-center items-center flex-col">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold md:leading-[44px]">The Lenny's Article</h2>
                <p className="text-[#818B9C] leading-6">All things recruiting: real stories, best practices</p>
            </div>

            <div className="my-10 bg-white rounded-lg border p-2 flex items-center flex-col md:flex-row">
                <div className="w-full md:w-1/2 mr-0 md:mr-10">
                    <Image src={blogs[0].image} alt="" width={500} height={600} className="w-full min-h-[300px] md:min-h-full object-cover" />
                </div>

                <div className="w-full md:w-1/2 p-4 md:p-0 pr-0 md:pr-5 lg:pr-24">
                    <h3 className="font-semibold text-xl lg:text-2xl">{blogs[0].title}</h3>
                    {/* Use dangerouslySetInnerHTML to render html from json */}
                    {blogs && <div className="text-[#818B9C] mt-3 text-sm md:text-base" dangerouslySetInnerHTML={createMarkup(truncatedContent)}>
                    </div>}

                    <Link href={{
                        pathname: `/articles/${generateSlug(blogs[0].title)}`,
                        query: { index: 0 }
                    }} className="flex items-center mt-5 font-semibold cursor-pointer"><span className="mr-1">Read More </span><FaAngleRight /></Link>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 justify-items-center">
                {/* Use `blogs?.map()` to render each blog item */}
                {blogs.map((blog, index) => (
                    // Skip rendering the first blog (index === 0)
                    index > 0 && (
                        <div key={index}>
                            <Image src={blog.image} alt="featured_image" width={300} height={300} className="w-full" />
                            <p className="bg-[#1d9e3524] text-[#1D9E34] p-2 rounded-md font-semibold mr-2 text-xs md:text-base w-fit mt-4">{blog.category}</p>
                            <h4 className="font-semibold text-base md:text-lg mt-2">{blog.title}</h4>
                            <Link href={{
                                pathname: `/articles/${generateSlug(blog.title)}`,
                                query: { index }
                            }} className="flex items-center mt-2 font-medium">
                                <span className="mr-1">Read More </span>
                                <FaAngleRight />
                            </Link>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}