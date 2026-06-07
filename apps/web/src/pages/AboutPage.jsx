import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To make professional tailoring services accessible to everyone by connecting skilled tailors with customers through seamless technology and reliable courier services.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'A world where perfect-fitting clothes are just a click away, supporting local tailors and creating sustainable fashion through alterations and repairs.'
    },
    {
      icon: Users,
      title: 'Our Community',
      description: 'Building a thriving ecosystem of customers, tailors, and couriers who trust and support each other in creating better-fitting, longer-lasting wardrobes.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Quality craftsmanship, transparent pricing, reliable service, and respect for the skilled artisans who make our clothes fit perfectly.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About StitchGo - Our Mission & Vision</title>
        <meta name="description" content="Learn about StitchGo's mission to connect customers with skilled tailors. Discover our vision for accessible, sustainable fashion through professional alterations." />
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
                About StitchGo
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-[65ch] mx-auto">
                We're on a mission to make professional tailoring accessible to everyone while supporting skilled artisans in our communities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{letterSpacing: '-0.02em', textWrap: 'balance'}}>
                  Why StitchGo exists
                </h2>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    We noticed a problem: finding a reliable tailor was difficult, and getting clothes to and from them was even harder. Meanwhile, talented tailors struggled to reach new customers beyond their immediate neighborhood.
                  </p>
                  <p>
                    StitchGo was born from the idea that technology could solve both problems. By creating a platform that connects customers with verified tailors and handling the logistics through our courier network, we make professional alterations convenient for everyone.
                  </p>
                  <p>
                    But we're about more than convenience. We believe in sustainable fashion through repairs and alterations, supporting local artisans, and helping people feel confident in clothes that fit perfectly.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea1c8e5d?w=800&h=600&fit=crop"
                  alt="Tailor working on alterations"
                  className="rounded-2xl shadow-lg w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                What drives us
              </h2>
              <p className="text-lg text-muted-foreground max-w-[65ch] mx-auto leading-relaxed">
                Our core values guide everything we do at StitchGo
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3" style={{letterSpacing: '-0.01em'}}>
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { number: '2,847', label: 'Happy Customers' },
                { number: '156', label: 'Verified Tailors' },
                { number: '8,432', label: 'Completed Orders' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-primary mb-2" style={{fontVariantNumeric: 'tabular-nums'}}>
                    {stat.number}
                  </div>
                  <p className="text-lg text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;