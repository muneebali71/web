import React from 'react';
import { Badge } from '@/components/ui/badge';

const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-500 text-white hover:bg-yellow-600';
      case 'Assigned':
        return 'bg-blue-500 text-white hover:bg-blue-600';
      case 'In Progress':
        return 'bg-orange-500 text-white hover:bg-orange-600';
      case 'Ready':
        return 'bg-green-500 text-white hover:bg-green-600';
      case 'Delivered':
        return 'bg-gray-500 text-white hover:bg-gray-600';
      default:
        return 'bg-gray-500 text-white hover:bg-gray-600';
    }
  };

  return (
    <Badge className={`${getStatusColor(status)} transition-all duration-200`}>
      {status}
    </Badge>
  );
};

export default StatusBadge;