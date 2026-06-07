import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import BookingForm from '../components/BookingForm.jsx';
import { useOrders } from '../hooks/useOrders.js';

const BookServicePage = () => {
  const navigate = useNavigate();
  const { addOrder } = useOrders();

  const handleSubmit = (bookingData) => {
    const newOrder = addOrder(bookingData);
    toast.success('Service request submitted successfully');
    setTimeout(() => {
      navigate('/my-orders');
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Book Service - StitchGo Tailoring</title>
        <meta name="description" content="Request professional tailoring services. Describe your alterations, set your budget, and schedule pickup. Get started with StitchGo today." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{letterSpacing: '-0.02em', textWrap: 'balance'}}>
                Book your alteration service
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tell us about your alteration needs and we'll connect you with the perfect tailor
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 flex-1">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <BookingForm onSubmit={handleSubmit} />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    title: 'Quick Response',
                    description: 'Get tailor responses within 24 hours'
                  },
                  {
                    title: 'Flexible Scheduling',
                    description: 'Choose pickup times that work for you'
                  },
                  {
                    title: 'Secure Payment',
                    description: 'Pay only when work is completed'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="bg-muted">
                      <CardContent className="p-6 text-center">
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
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

export default BookServicePage;