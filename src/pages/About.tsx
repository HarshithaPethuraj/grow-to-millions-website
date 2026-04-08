import { Link } from 'react-router-dom';
import { Target, Users, Award, TrendingUp, Zap, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Results-Focused',
      description:
        'We measure success by your growth. Every strategy is designed to deliver tangible results.',
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Innovation-First',
      description:
        'We stay ahead of digital marketing trends to give you a competitive advantage.',
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Client-Centric',
      description:
        'Your success is our success. We build lasting partnerships based on trust and results.',
    },
  ];

  const team = [
    {
      role: 'Strategy',
      description: 'Expert strategists who craft data-driven marketing roadmaps',
    },
    {
      role: 'Creative',
      description: 'Talented designers and copywriters who bring brands to life',
    },
    {
      role: 'Analytics',
      description: 'Data specialists who optimize campaigns for maximum ROI',
    },
    {
      role: 'Support',
      description: 'Dedicated account managers who ensure your success',
    },
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1a3a52] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of digital marketing experts dedicated to helping businesses
            achieve exponential growth
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Grow to Millions, we believe every business has the potential to
                achieve remarkable growth. Our mission is to empower brands with
                cutting-edge digital marketing strategies that drive real, measurable
                results.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since our founding, we've helped over 500 businesses scale their
                operations, increase their revenue, and build lasting relationships with
                their customers. We don't just run campaigns—we build growth engines.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our data-driven approach combines creative excellence with analytical
                rigor, ensuring every dollar you invest delivers maximum return.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0A1628] to-[#1a3a52] p-12 rounded-2xl text-white">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold text-green-500 mb-2">500+</div>
                  <p className="text-gray-300">Successful Client Partnerships</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-green-500 mb-2">10M+</div>
                  <p className="text-gray-300">Total Reach Generated</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-green-500 mb-2">98%</div>
                  <p className="text-gray-300">Client Retention Rate</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-green-500 mb-2">5+</div>
                  <p className="text-gray-300">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="text-green-500 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0A1628] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse group of experts working together to drive your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0A1628] to-[#1a3a52] p-8 rounded-xl text-white text-center transform hover:scale-105 transition-all"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{member.role}</h3>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0A1628] to-[#1a3a52] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Grow Together
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Partner with a team that's committed to your success
          </p>
          <Link
            to="/contact"
            className="inline-block bg-green-500 text-white px-10 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
