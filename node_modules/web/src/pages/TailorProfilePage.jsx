import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Award, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ReviewCard from '../components/ReviewCard.jsx';
import { useTailors } from '../hooks/useTailors.js';

const TailorProfilePage = () => {
  const { id } = useParams();
  const { getTailorById } = useTailors();
  const tailor = getTailorById(id);

  if (!tailor) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Tailor not found</h2>
            <Link to="/find-tailors">
              <Button>Back to Tailors</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${tailor.name} - ${tailor.specialty} | StitchGo`}</title>
        <meta name="description" content={`${tailor.name} specializes in ${tailor.specialty}. ${tailor.rating} star rating with ${tailor.reviewCount} reviews. ${tailor.bio}`} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Back Button */}
        <section className="py-6 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/find-tailors">
              <Button variant="ghost" className="transition-all duration-200">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Tailors
              </Button>
            </Link>
          </div>
        </section>

        {/* Profile Header */}
        <section className="py-12 bg-gradient-to-b from-muted to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <img
                    src={tailor.image}
                    alt={tailor.name}
                    className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                  />
                </div>

                <div className="md:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-4xl font-bold mb-2" style={{letterSpacing: '-0.02em'}}>
                        {tailor.name}
                      </h1>
                      <p className="text-xl text-muted-foreground mb-4">{tailor.specialty}</p>
                    </div>
                    {tailor.availability && (
                      <Badge className="bg-success text-white">Available</Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-lg font-semibold">{tailor.rating}</span>
                      <span className="text-muted-foreground">({tailor.reviewCount} reviews)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Response Time</p>
                        <p className="font-medium">{tailor.responseTime}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">{tailor.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Experience</p>
                        <p className="font-medium">{tailor.experience}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 flex items-center justify-center text-muted-foreground font-bold">$</div>
                      <div>
                        <p className="text-sm text-muted-foreground">Price Range</p>
                        <p className="font-medium">{tailor.priceRange}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/90 leading-relaxed mb-6">
                    {tailor.bio}
                  </p>

                  <Link to="/book-service">
                    <Button size="lg" className="w-full sm:w-auto transition-all duration-200 active:scale-[0.98]">
                      Book This Tailor
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-6" style={{letterSpacing: '-0.01em'}}>
                Services Offered
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tailor.services.map((service) => (
                  <Card key={service}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <p className="font-medium">{service}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-6" style={{letterSpacing: '-0.01em'}}>
                Customer Reviews
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tailor.reviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ReviewCard review={review} />
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

export default TailorProfilePage;