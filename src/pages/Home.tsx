import { Link } from 'react-router-dom';
import {
  Search,
  Share2,
  Target,
  Mail,
  Lightbulb,
  BarChart3,
  TrendingUp,
  Users,
  Award,
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO & Content Marketing',
      description:
        'Boost your organic visibility with strategic SEO and high-quality content that converts.',
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Social Media Management',
      description:
        'Build a strong social presence across all platforms with engaging content and community management.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Paid Ads (Google & Meta)',
      description:
        'Maximize ROI with data-driven paid advertising campaigns on Google, Facebook, and Instagram.',
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Marketing',
      description:
        'Nurture leads and drive conversions with personalized email campaigns that deliver results.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Brand Strategy',
      description:
        'Develop a compelling brand identity and positioning that resonates with your target audience.',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics & Reporting',
      description:
        'Make informed decisions with comprehensive analytics and transparent reporting dashboards.',
    },
  ];

  const whyChooseUs = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Proven Results',
      description:
        'Our strategies have helped hundreds of businesses achieve measurable growth and exceed their goals.',
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Data-Driven Approach',
      description:
        'Every decision is backed by data and analytics, ensuring your marketing budget delivers maximum ROI.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Dedicated Team',
      description:
        'Work with experienced marketing professionals who are committed to your success every step of the way.',
    },
  ];

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-[#0A1628] via-[#0f1f3a] to-[#0A1628] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A84C] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            We Help Brands
            <br />
            <span className="text-[#C9A84C]">Grow to Millions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Data-driven digital marketing strategies that scale your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#C9A84C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b89740] transition-all transform hover:scale-105"
            >
              Start Growing
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0A1628] transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C9A84C] mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C9A84C] mb-2">
                10M+
              </div>
              <div className="text-gray-600 font-medium">Reach Generated</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C9A84C] mb-2">
                98%
              </div>
              <div className="text-gray-600 font-medium">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-[#C9A84C] mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-[#C9A84C] font-semibold hover:underline inline-flex items-center"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partner with a team that's committed to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-[#C9A84C] mb-6 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0A1628] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0A1628] to-[#1a3a52] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow to Millions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help scale your business with proven digital
            marketing strategies
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#C9A84C] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#b89740] transition-all transform hover:scale-105"
          >
            Book a Free Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}
