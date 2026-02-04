import { Metadata } from 'next';
import BlogContent from "@/components/BlogContent";
import { getAllPosts } from "@/lib/api";

export const metadata: Metadata = {
    title: "Blog Kiến thức Photobooth | Hướng dẫn Kỹ thuật & Kinh doanh",
    description: "Chia sẻ kinh nghiệm kinh doanh photobooth, hướng dẫn setup máy in DNP, kết nối Canon Camera và các thủ thuật tối ưu lợi nhuận.",
};

export default function BlogPage() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
        'category'
    ]);

    return <BlogContent posts={allPosts} />;
}
