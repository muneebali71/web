import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, UserCheck, Package, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const HowItWorksPage = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Request Service',
      description: 'Browse tailors in your area, describe your alteration needs, and set your budget. Our platform helps you find the perfect match for your requirements.',
      details: ['Search by location and specialty', 'View tailor ratings and reviews', 'Submit detailed service request']
    },
    {
      number: 2,
      icon: UserCheck,
      title: 'Find Your Tailor',
      description: 'Receive responses from qualified tailors interested in your project. Review their profiles, compare quotes, and select the best fit.',
      details: ['Get multiple quotes', 'Compare tailor experience', 'Choose your preferred professional']
    },
    {
      number: 3,
      icon: Package,
      title: 'Pickup & Work',
      description: 'Our courier picks up your garments from your location and delivers them to the tailor. The tailor works their magic while you track progress.',
      details: ['Convenient pickup scheduling', 'Real-time order tracking', 'Direct communication with tailor']
    },
    {
      number: 4,
      icon: Truck,
      title: 'Delivery',
      description: 'Once complete, our courier delivers your perfectly altered garments back to you. Review the work and rate your experience.',
      details: ['Doorstep delivery', 'Quality inspection', 'Leave feedback and ratings']
    }
  ];

  return (
    <>
      <Helmet>
        <title>How It Works - StitchGo Tailoring Service</title>
        <meta name="description" content="Learn how StitchGo connects you with professional tailors. Simple 4-step process: Request, Find, Pickup, Delivery. Get perfect alterations without leaving home." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{letterSpacing: '-0.02em', textWrap: 'balance'}}>
                How StitchGo works
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-[65ch] mx-auto">
                Getting professional alterations has never been easier. Our simple 4-step process connects you with skilled tailors and handles all the logistics.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground text-2xl font-bold">
                        {step.number}
                      </div>
                      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4" style={{letterSpacing: '-0.02em'}}>
                      {step.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-foreground/90">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Card className="overflow-hidden shadow-lg">
                      <CardContent className="p-0">
                        <img
                          src={`https://images.unsplash.com/photo-${
                            index === 0 ? '1556742049-0cfed4f6a45d' :
                            index === 1 ? '1556742111-a301076d9d18' :
                            index === 2 ? '1558769132-cb1aea1c8e5d' :
                            '1566576721346-d48a52f61a2a'
                          }?w=800&h=600&fit=crop`}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Visualization */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{letterSpacing: '-0.02em', textWrap: 'balance'}}>
                Typical timeline
              </h2>
              <p className="text-lg text-muted-foreground max-w-[65ch] mx-auto leading-relaxed">
                Most alterations are completed within a week from request to delivery
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { day: 'Day 1', event: 'Submit request & choose tailor' },
                  { day: 'Day 2', event: 'Courier picks up garments' },
                  { day: 'Day 3-6', event: 'Tailor works on alterations' },
                  { day: 'Day 7', event: 'Delivery to your door' }
                ].map((item, index) => (
                  <motion.div
                    key={item.day}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-primary mb-2">
                          {item.day}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.event}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HowItWorksPage;