import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Scissors, Truck, Star, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ReviewCard from '../components/ReviewCard.jsx';
import { testimonials } from '../data/testimonials';

const HomePage = () => {
  const benefits = [
    {
      icon: Users,
      title: 'For Customers',
      description: 'Find skilled tailors near you, request alterations online, and get your clothes picked up and delivered to your door.',
      features: ['Convenient pickup & delivery', 'Transparent pricing', 'Quality guaranteed']
    },
    {
      icon: Scissors,
      title: 'For Tailors',
      description: 'Expand your customer base, manage orders efficiently, and focus on what you do best - creating perfect fits.',
      features: ['More customers', 'Flexible schedule', 'Fair commission']
    },
    {
      icon: Truck,
      title: 'For Couriers',
      description: 'Earn money on your schedule by picking up and delivering garments between customers and tailors.',
      features: ['Flexible hours', 'Easy pickups', 'Reliable income']
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'All tailors are verified and rated by real customers'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most alterations completed within 3-7 days'
    },
    {
      icon: Star,
      title: 'Satisfaction Guaranteed',
      description: 'Not happy? We\'ll make it right or refund your money'
    }
  ];

  return (
    <>
      <Helmet>
        <title>StitchGo - Professional Tailoring Services Delivered to Your Door</title>
        <meta name="description" content="Connect with skilled tailors for professional alterations. Request service online, get pickup and delivery, and enjoy perfect-fitting clothes without leaving home." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1445960169705-e0fb7b5c7f39"
              alt="Professional tailor working on alterations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{letterSpacing: '-0.02em', textWrap: 'balance'}}>
                Professional tailoring services, delivered to your door
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-[65ch]">
                Connect with skilled tailors in your area. Request alterations online, schedule pickup, and get perfect-fitting clothes without leaving home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-service">
                  <Button size="lg" className="text-lg px-8 py-6 transition-all duration-200 active:scale-[0.98]">
                    Book Service
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/find-tailors">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20 transition-all duration-200">
                    Find Tailors
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{letterSpacing: '-0.02em', textWrap: 'balance'}}>
                StitchGo works for everyone
              </h2>
              <p className="text-lg text-muted-foreground max-w-[65ch] mx-auto leading-relaxed">
                Whether you need alterations, want to grow your tailoring business, or earn extra income as a courier
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3" style={{letterSpacing: '-0.01em'}}>
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {benefit.description}
                      </p>
                      <ul className="space-y-2">
                        {benefit.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{letterSpacing: '-0.02em', textWrap: 'balance'}}>
                  Why choose StitchGo?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We connect you with verified, skilled tailors and make the entire process seamless with our courier service.
                </p>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea1c8e5d?w=800&h=600&fit=crop"
                  alt="Tailor measuring fabric for alterations"
                  className="rounded-2xl shadow-lg w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{letterSpacing: '-0.02em', textWrap: 'balance'}}>
                What our customers say
              </h2>
              <p className="text-lg text-muted-foreground max-w-[65ch] mx-auto leading-relaxed">
                Real experiences from people who trust StitchGo for their tailoring needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm leading-relaxed text-foreground/90">
                        {testimonial.comment}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{letterSpacing: '-0.02em', textWrap: 'balance'}}>
                Transparent pricing
              </h2>
              <p className="text-lg text-secondary-foreground/80 max-w-[65ch] mx-auto leading-relaxed">
                No hidden fees. You pay the tailor directly for their work, plus a small service fee.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4" style={{letterSpacing: '-0.01em'}}>
                    Service Fee
                  </h3>
                  <div className="text-4xl font-bold mb-2">12%</div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Small commission on each completed order
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-sm">Covers courier pickup and delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-sm">Platform maintenance and support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-sm">Quality assurance and dispute resolution</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4" style={{letterSpacing: '-0.01em'}}>
                    Tailor Pricing
                  </h3>
                  <div className="text-4xl font-bold mb-2">$25-200</div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Typical range for most alterations
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-sm">Simple hemming: $25-45</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-sm">Suit alterations: $60-120</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-sm">Wedding dress: $100-200</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{letterSpacing: '-0.02em', textWrap: 'balance'}}>
                Ready to get started?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-[65ch] mx-auto leading-relaxed">
                Book your first alteration today and experience the convenience of StitchGo
              </p>
              <Link to="/book-service">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 transition-all duration-200 active:scale-[0.98]">
                  Book Service Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;