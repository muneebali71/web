import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ContactForm from '../components/ContactForm.jsx';

const ContactPage = () => {
  const handleSubmit = (data) => {
    // Store in localStorage
    const submissions = JSON.parse(localStorage.getItem('stitchgo_contact_submissions') || '[]');
    submissions.push({
      ...data,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('stitchgo_contact_submissions', JSON.stringify(submissions));
    
    toast.success('Message sent successfully');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'support@stitchgo.com',
      link: 'mailto:support@stitchgo.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '742 Market Street, San Francisco, CA 94103',
      link: null
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Fri: 9am - 6pm EST',
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - StitchGo Support</title>
        <meta name="description" content="Get in touch with StitchGo. Contact our support team for questions about tailoring services, orders, or general inquiries. We're here to help." />
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
                Get in touch
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-[65ch] mx-auto">
                Have questions about our services? We're here to help. Send us a message and we'll respond as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6" style={{letterSpacing: '-0.01em'}}>
                      Send us a message
                    </h2>
                    <ContactForm onSubmit={handleSubmit} />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-6" style={{letterSpacing: '-0.01em'}}>
                    Contact information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Reach out to us through any of these channels. Our support team is ready to assist you with any questions or concerns.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <Card className="transition-all duration-200 hover:shadow-md">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0">
                              <info.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground mb-1">
                                {info.title}
                              </p>
                              {info.link ? (
                                <a
                                  href={info.link}
                                  className="font-semibold hover:text-primary transition-all duration-200"
                                >
                                  {info.content}
                                </a>
                              ) : (
                                <p className="font-semibold">{info.content}</p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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
                Common questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-[65ch] mx-auto leading-relaxed">
                Quick answers to questions you might have
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  question: 'How long does the alteration process take?',
                  answer: 'Most alterations are completed within 3-7 days from pickup to delivery, depending on the complexity of the work.'
                },
                {
                  question: 'What if I\'m not satisfied with the alterations?',
                  answer: 'We offer a satisfaction guarantee. If you\'re not happy with the work, we\'ll arrange for revisions or provide a full refund.'
                },
                {
                  question: 'How much does the courier service cost?',
                  answer: 'Courier pickup and delivery are included in our 12% service fee. There are no additional charges for the courier service.'
                },
                {
                  question: 'Can I communicate directly with my tailor?',
                  answer: 'Yes, once your order is assigned, you can message your tailor directly through the platform to discuss details.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
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

export default ContactPage;