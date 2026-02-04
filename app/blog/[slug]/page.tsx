import { getPostBySlug, markdownToHtml, getRelatedPosts } from '@/lib/api';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Metadata } from 'next';
import Link from 'next/link';
import ClientProviders from "@/components/ClientProviders";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug, ['title', 'excerpt', 'coverImage']);

    return {
        title: `${post.title} | Blog Photobooth Pro`,
        description: post.excerpt,
        openGraph: {
            images: [post.coverImage],
        },
    };
}

export default async function Post({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug, [
        'title',
        'date',
        'slug',
        'content',
        'coverImage',
        'category'
    ]);

    const content = await markdownToHtml(post.content || '');
    const relatedPosts = getRelatedPosts(slug, post.category, 2);

    return (
        <main className="min-h-screen bg-background-dark">
            <Navbar />

            {/* Cover Header */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent z-10" />
                <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-2 w-fit">
                                <Tag className="size-3" />
                                {post.category}
                            </span>
                            <span className="text-gray-300 text-sm flex items-center gap-2">
                                <Calendar className="size-4" />
                                {post.date}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black font-display text-white leading-tight mb-4">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-6 py-12">
                <div
                    className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-img:rounded-xl prose-a:text-primary hover:prose-a:text-accent-blue"
                    dangerouslySetInnerHTML={{ __html: content }}
                />

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="mt-20 pt-12 border-t border-white/10">
                        <h3 className="text-2xl font-bold mb-8">Bài viết cùng chủ đề</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedPosts.map((related: any) => (
                                <Link key={related.slug} href={`/blog/${related.slug}`} className="group block">
                                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10">
                                        <img src={related.coverImage} alt={related.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">{related.title}</h4>
                                    <div className="flex items-center gap-2 text-sm text-primary font-bold">
                                        Đọc tiếp <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </article>

            <Footer />
        </main>
    );
}
