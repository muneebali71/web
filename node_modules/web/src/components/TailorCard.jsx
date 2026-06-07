import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const TailorCard = ({ tailor }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={tailor.image}
          alt={tailor.name}
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
        />
        {tailor.availability && (
          <Badge className="absolute top-3 right-3 bg-success text-white">
            Available
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold mb-1" style={{letterSpacing: '-0.01em'}}>
              {tailor.name}
            </h3>
            <p className="text-sm text-muted-foreground">{tailor.specialty}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-3">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{tailor.rating}</span>
          <span className="text-sm text-muted-foreground">({tailor.reviewCount} reviews)</span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Responds in {tailor.responseTime}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{tailor.location}</span>
          </div>
        </div>

        <div className="mt-auto">
          <p className="text-sm font-medium text-muted-foreground mb-1">Price Range</p>
          <p className="text-base font-semibold">{tailor.priceRange}</p>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 mt-auto">
        <Link to={`/tailor/${tailor.id}`} className="w-full">
          <Button className="w-full transition-all duration-200 active:scale-[0.98]">
            View Profile
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TailorCard;