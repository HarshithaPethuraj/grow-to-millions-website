import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const blogPosts = [
    {
      title: '10 SEO Strategies That Actually Work in 2025',
      excerpt:
        'Discover the latest SEO tactics that are driving real results for businesses across industries. From technical optimization to content strategy.',
      date: 'March 15, 2025',
      author: 'Sarah Johnson',
      tags: ['SEO', 'Content Marketing', 'Strategy'],
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'How to Build a High-Converting Social Media Funnel',
      excerpt:
        'Learn how to turn social media followers into paying customers with a strategic funnel approach that maximizes conversions at every stage.',
      date: 'March 10, 2025',
      author: 'Michael Chen',
      tags: ['Social Media', 'Conversion', 'Strategy'],
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'The Ultimate Guide to Email Marketing Automation',
      excerpt:
        'Automate your email marketing campaigns to save time while increasing engagement and revenue. Complete guide with templates and best practices.',
      date: 'March 5, 2025',
      author: 'Emily Rodriguez',
      tags: ['Email Marketing', 'Automation', 'Guide'],
      image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Paid Ads vs Organic Growth: Finding the Right Balance',
      excerpt:
        'Understand when to invest in paid advertising and when to focus on organic growth strategies for optimal ROI and sustainable business growth.',
      date: 'February 28, 2025',
      author: 'David Park',
      tags: ['Paid Ads', 'Strategy', 'ROI'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Brand Strategy Essentials for Scaling Startups',
      excerpt:
        'Building a strong brand is crucial for startup success. Learn the essential elements of brand strategy that help startups stand out and scale.',
      date: 'February 20, 2025',
      author: 'Jennifer Liu',
      tags: ['Branding', 'Startups', 'Growth'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Analytics Dashboard Setup: Measuring What Matters',
      excerpt:
        'Set up comprehensive analytics dashboards that track the metrics that truly matter for your business growth and marketing performance.',
      date: 'February 15, 2025',
      author: 'Alex Thompson',
      tags: ['Analytics', 'Data', 'Reporting'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a3a52] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, strategies, and tips to help you grow your business through
            digital marketing
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-[#0A1628] mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <button className="text-green-500 font-semibold hover:underline inline-flex items-center gap-2 group">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-4">
            Want More Marketing Insights?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for weekly tips and strategies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0A1628] to-[#1a3a52] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Implement These Strategies?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you achieve your marketing goals
          </p>
          <Link
            to="/contact"
            className="inline-block bg-green-500 text-white px-10 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
