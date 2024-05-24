"use client";
import { useEffect, useState } from 'react';
import Image from "next/image";
import blogsData from "@/app/articles/data/articles.json";
import { FaAngleRight } from "react-icons/fa";
import Link from 'next/link';
export default function BlogCards() {
    // Define the interface for a blog item
    interface Blog {
        title: string;
        category: string;
        content: string;
        image: string;
    }

    const blogs: Blog[] = blogsData.blogs;
    const [truncatedContent, setTruncatedContent] = useState<string>('');

    function generateSlug(title) {
        return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }

    {/* Use dangerouslySetInnerHTML to render html from json */ }
    function createMarkup(c) {
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
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 justify-items-center">
                {/* Use `blogs?.map()` to render each blog item */}
                {blogs.slice(1, 5).map((blog, index) => (
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
    )
}
