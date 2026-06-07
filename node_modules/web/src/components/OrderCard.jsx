import React from 'react';
import { Calendar, User, Package } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StatusBadge from './StatusBadge.jsx';

const OrderCard = ({ order, onViewDetails, onCancel }) => {
  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Order ID</p>
            <p className="text-lg font-semibold" style={{letterSpacing: '-0.01em'}}>{order.id}</p>
          </div>
          <StatusBadge status={order.status} />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <User className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">{order.tailorName}</p>
              <p className="text-xs text-muted-foreground">Tailor</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Package className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">{order.serviceType}</p>
              <p className="text-xs text-muted-foreground">Service</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">
                {order.status === 'Delivered' ? order.completedDate : order.estimatedCompletion}
              </p>
              <p className="text-xs text-muted-foreground">
                {order.status === 'Delivered' ? 'Completed' : 'Estimated Completion'}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t">
            <p className="text-sm text-muted-foreground">Budget</p>
            <p className="text-lg font-semibold">{order.budget}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button 
          variant="outline" 
          className="flex-1 transition-all duration-200"
          onClick={() => onViewDetails(order)}
        >
          View Details
        </Button>
        {order.status !== 'Delivered' && order.status !== 'Ready' && (
          <Button 
            variant="destructive" 
            className="flex-1 transition-all duration-200 active:scale-[0.98]"
            onClick={() => onCancel(order.id)}
          >
            Cancel
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default OrderCard;