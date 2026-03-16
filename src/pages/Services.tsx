import { Link } from 'react-router-dom';
import {
  Search,
  Share2,
  Target,
  Mail,
  Lightbulb,
  BarChart3,
  CheckCircle,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Search className="w-12 h-12" />,
      title: 'SEO & Content Marketing',
      description:
        'Dominate search rankings and attract qualified traffic with our comprehensive SEO and content strategies.',
      features: [
        'Keyword research and strategy',
        'On-page and technical SEO',
        'Content creation and optimization',
        'Link building campaigns',
        'SEO audits and consulting',
      ],
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: 'Social Media Management',
      description:
        'Build a loyal community and drive engagement across all major social platforms with strategic content.',
      features: [
        'Content planning and creation',
        'Community management',
        'Influencer partnerships',
        'Social media advertising',
        'Performance analytics',
      ],
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Paid Ads (Google & Meta)',
      description:
        'Generate qualified leads and maximize ROI with expertly managed paid advertising campaigns.',
      features: [
        'Google Ads management',
        'Facebook & Instagram ads',
        'Campaign strategy and setup',
        'A/B testing and optimization',
        'Conversion tracking and reporting',
      ],
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: 'Email Marketing',
      description:
        'Nurture relationships and drive conversions with personalized email campaigns that resonate.',
      features: [
        'Email strategy and automation',
        'List segmentation',
        'Newsletter design and copy',
        'A/B testing',
        'Performance tracking',
      ],
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Brand Strategy',
      description:
        'Create a powerful brand identity that stands out in the market and connects with your audience.',
      features: [
        'Brand positioning and messaging',
        'Visual identity development',
        'Brand guidelines',
        'Competitive analysis',
        'Go-to-market strategy',
      ],
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Analytics & Reporting',
      description:
        'Make data-driven decisions with comprehensive analytics and transparent reporting dashboards.',
      features: [
        'Google Analytics setup',
        'Custom dashboard creation',
        'Performance tracking',
        'Monthly reporting',
        'Insights and recommendations',
      ],
    },
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a3a52] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to drive growth and
            deliver measurable results
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="text-[#C9A84C] mb-4">{service.icon}</div>
                    <h2 className="text-3xl font-bold text-[#0A1628] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#C9A84C] mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-[#0A1628] to-[#1a3a52] p-12 rounded-2xl text-white h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-[#C9A84C] mb-4">
                        0{index + 1}
                      </div>
                      <p className="text-xl">Professional Service</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0A1628] to-[#1a3a52] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss which services will help you achieve your business goals
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#C9A84C] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#b89740] transition-all transform hover:scale-105"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
