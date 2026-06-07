import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import TailorCard from '../components/TailorCard.jsx';
import FilterSidebar from '../components/FilterSidebar.jsx';
import { useTailors } from '../hooks/useTailors.js';

const FindTailorsPage = () => {
  const { tailors, searchQuery, setSearchQuery, filters, updateFilters, resetFilters } = useTailors();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Helmet>
        <title>Find Tailors - StitchGo Professional Alterations</title>
        <meta name="description" content="Browse verified tailors in your area. Filter by specialty, rating, and availability. Read reviews and find the perfect tailor for your alterations." />
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
              className="text-center max-w-3xl mx-auto mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{letterSpacing: '-0.02em', textWrap: 'balance'}}>
                Find your perfect tailor
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Browse verified professionals in your area. Filter by specialty, rating, and availability.
              </p>
            </motion.div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name, location, or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg text-gray-900 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 flex-1">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Desktop Sidebar */}
              <aside className="hidden lg:block w-80 flex-shrink-0">
                <div className="sticky top-24">
                  <FilterSidebar
                    filters={filters}
                    updateFilters={updateFilters}
                    resetFilters={resetFilters}
                  />
                </div>
              </aside>

              {/* Mobile Filter Button */}
              <div className="lg:hidden fixed bottom-6 right-6 z-40">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button size="lg" className="rounded-full shadow-lg transition-all duration-200 active:scale-[0.98]">
                      <SlidersHorizontal className="h-5 w-5 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                    <FilterSidebar
                      filters={filters}
                      updateFilters={updateFilters}
                      resetFilters={resetFilters}
                    />
                  </SheetContent>
                </Sheet>
              </div>

              {/* Tailors Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-muted-foreground">
                    {tailors.length} {tailors.length === 1 ? 'tailor' : 'tailors'} found
                  </p>
                </div>

                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="space-y-4">
                        <Skeleton className="h-48 w-full rounded-lg" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    ))}
                  </div>
                ) : tailors.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  >
                    {tailors.map((tailor, index) => (
                      <motion.div
                        key={tailor.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <TailorCard tailor={tailor} />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <div className="text-center py-20">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-muted mx-auto mb-4">
                      <Search className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No tailors found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your filters or search query
                    </p>
                    <Button onClick={resetFilters} variant="outline" className="transition-all duration-200">
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FindTailorsPage;