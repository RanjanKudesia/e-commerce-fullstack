"use client";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import blogsData from "../data/articles.json";
import { useSearchParams } from 'next/navigation';

// Define the interface for a blog item
interface Blog {
    title: string;
    category: string;
    content: string;
    image: string;
}

export default function SingleBlog() {
    // let indexValue = params.title.length;  // { params }: { params: { title: string } }
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const indexParam = params.get('index');
    const indexValue = indexParam ? parseInt(indexParam, 10) : 0;  // Default to 0 if no valid index found

    const blogs: Blog[] = blogsData.blogs;

    // Only proceed if indexValue is a valid number
    if (isNaN(indexValue)) return <p>Invalid index provided.</p>;

    const featuredImage = {
        backgroundImage: `url(${blogs[indexValue]?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
    };

    function createMarkup(c: any) {
        return { __html: c };
    }

    const truncateTitle = (title: string) => {
        if (title.length > 30) {
            return title.slice(0, 30) + '...';
        }
        return title;
    };

    function generatetitle(title: string) {
        return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }


    return (
        <div className="xl:px-40 md:py-12 px-5 py-5 bg-[#F7F7F7]">
            <ul className="flex justify-start items-center text-xs md:text-base overflow-x-scroll md:overflow-auto">
                <li className="px-3 text-[#1D9E34] font-medium min-w-fit">
                    <Link href="/">Home</Link>
                </li>
                <FaAngleRight className="min-w-fit" />
                <li className="px-3 text-[#1D9E34] font-medium min-w-fit">
                    <Link href="/articles/">Article</Link>
                </li>
                <FaAngleRight className="min-w-fit" />
                <li className="px-3 text-[#1D9E34] font-medium min-w-fit">
                    <Link href="/">{blogs[indexValue]?.category}</Link>
                </li>
                <FaAngleRight className="min-w-fit" />
                <li className="px-3 text-black font-medium min-w-fit">
                    <Link href="">Detail Article</Link>
                </li>
            </ul>

            <div className="w-full my-5 rounded-lg h-[200px] md:h-[550px]" style={featuredImage}></div>

            <div className="flex justify-between flex-col md:flex-row">
                <div className="w-1/4 border rounded-md p-5 hidden md:block">
                    <h3 className="text-lg font-semibold mb-5">Related Article</h3>

                    {blogs.map((blog, index) => {
                        // Check if the current index matches the indexValue to skip rendering
                        if ((index) === indexValue) {
                            return null; // Skip rendering this blog item
                        }

                        // Truncate the blog title if needed
                        const truncatedTitle = truncateTitle(blog.title);

                        // Construct the href dynamically
                        const href = `/articles/${generatetitle(blog.title)}?index=${index}`;
                        // console.log("related post current path", href, index);



                        return (
                            <Link href={href} key={index}>
                                <div className="flex justify-between items-center mb-5 cursor-pointer" key={index}>
                                    <div className="w-[40%] mr-4">
                                        <Image src={blog.image} alt="featured_image" width={100} height={150} className="rounded-lg w-full" />
                                    </div>
                                    <div className="w-[60%]">
                                        <div className="hover:underline hover:text-[#1d9e34]">
                                            <h4 className="font-semibold">{truncatedTitle}</h4>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}

                    <hr className="my-5" />
                    <div className="flex justify-between w-full items-center">
                        <div>
                            <p>Share to :</p>
                        </div>

                        <div className="flex">
                            <Image src="/assets/svgs/FACEBOOK.svg" alt="FACEBOOK" width={30} height={30} className="m-1 cursor-pointer" />
                            <Image src="/assets/svgs/TWITTER.svg" alt="IWITTER" width={30} height={30} className="m-1 cursor-pointer" />
                            <Image src="/assets/svgs/INSTAGRAM.svg" alt="INSTAGRAM" width={30} height={30} className="m-1 cursor-pointer" />
                            <Image src="/assets/svgs/WHATSAPP.svg" alt="WHATSAPP" width={30} height={30} className="m-1 cursor-pointer" />

                        </div>
                    </div>
                </div>

                <div className="w-full md:w-9/12 p-0 md:p-5">
                    <h3 className="font-semibold text-xl md:text-3xl mb-3">{blogs[indexValue]?.title}</h3>
                    {blogs[indexValue] && <div className="text-[#818B9C] mt-3 text-sm md:text-base" dangerouslySetInnerHTML={createMarkup(blogs[indexValue]?.content)}>
                    </div>}
                </div>
            </div>
        </div>
    )
}
