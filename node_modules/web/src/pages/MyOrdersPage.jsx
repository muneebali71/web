import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Package, History } from 'lucide-react';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import OrderCard from '../components/OrderCard.jsx';
import { useOrders } from '../hooks/useOrders.js';

const MyOrdersPage = () => {
  const { currentOrders, pastOrders, cancelOrder } = useOrders();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setIsDialogOpen(true);
  };

  const handleCancel = (orderId) => {
    cancelOrder(orderId);
    toast.success('Order cancelled successfully');
  };

  return (
    <>
      <Helmet>
        <title>My Orders - StitchGo</title>
        <meta name="description" content="Track your alteration orders. View current orders, order history, and manage your tailoring requests with StitchGo." />
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
                My orders
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Track your current alterations and view your order history
              </p>
            </motion.div>
          </div>
        </section>

        {/* Orders Section */}
        <section className="py-12 flex-1">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="current" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="current" className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Current Orders ({currentOrders.length})
                </TabsTrigger>
                <TabsTrigger value="history" className="flex items-center gap-2">
                  <History className="h-4 w-4" />
                  Order History ({pastOrders.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="current">
                {currentOrders.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {currentOrders.map((order, index) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <OrderCard
                          order={order}
                          onViewDetails={handleViewDetails}
                          onCancel={handleCancel}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <div className="text-center py-20">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-muted mx-auto mb-4">
                      <Package className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No current orders</h3>
                    <p className="text-muted-foreground mb-6">
                      You don't have any active orders at the moment
                    </p>
                    <Button onClick={() => window.location.href = '/book-service'} className="transition-all duration-200 active:scale-[0.98]">
                      Book a Service
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="history">
                {pastOrders.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {pastOrders.map((order, index) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <OrderCard
                          order={order}
                          onViewDetails={handleViewDetails}
                          onCancel={handleCancel}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <div className="text-center py-20">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-muted mx-auto mb-4">
                      <History className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No order history</h3>
                    <p className="text-muted-foreground">
                      Your completed orders will appear here
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Order Details Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Order Details</DialogTitle>
              <DialogDescription>
                Complete information about your order
              </DialogDescription>
            </DialogHeader>
            {selectedOrder && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Order ID</p>
                    <p className="font-semibold">{selectedOrder.id}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Status</p>
                    <p className="font-semibold">{selectedOrder.status}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Tailor</p>
                    <p className="font-semibold">{selectedOrder.tailorName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Budget</p>
                    <p className="font-semibold">{selectedOrder.budget}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Service Type</p>
                  <p className="font-semibold">{selectedOrder.serviceType}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Description</p>
                  <p className="text-foreground/90 leading-relaxed">{selectedOrder.description}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Pickup Address</p>
                  <p className="text-foreground/90">{selectedOrder.address}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Request Date</p>
                    <p className="font-semibold">{selectedOrder.requestDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {selectedOrder.status === 'Delivered' ? 'Completed' : 'Estimated Completion'}
                    </p>
                    <p className="font-semibold">
                      {selectedOrder.status === 'Delivered' ? selectedOrder.completedDate : selectedOrder.estimatedCompletion}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <Footer />
      </div>
    </>
  );
};

export default MyOrdersPage;