import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

const FilterSidebar = ({ filters, updateFilters, resetFilters, onClose }) => {
  const specialties = [
    'Wedding & Formal Wear',
    'Men\'s Suits & Shirts',
    'Casual & Denim',
    'Traditional & Cultural',
    'Leather & Outerwear',
    'Children\'s Clothing',
    'Evening & Cocktail',
    'Plus Size',
    'Bridal & Special Occasions'
  ];

  const handleSpecialtyToggle = (specialty) => {
    const currentSpecialties = filters.specialties || [];
    const newSpecialties = currentSpecialties.includes(specialty)
      ? currentSpecialties.filter(s => s !== specialty)
      : [...currentSpecialties, specialty];
    updateFilters({ specialties: newSpecialties });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold" style={{letterSpacing: '-0.01em'}}>Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={resetFilters}
          className="text-sm transition-all duration-200"
        >
          Reset All
        </Button>
      </div>

      {/* Location Filter */}
      <div className="space-y-2">
        <Label htmlFor="location" className="text-sm font-medium">Location</Label>
        <Input
          id="location"
          placeholder="Enter city or area"
          value={filters.location || ''}
          onChange={(e) => updateFilters({ location: e.target.value })}
          className="text-gray-900 placeholder:text-gray-500"
        />
      </div>

      {/* Specialty Filter */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Specialty</Label>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {specialties.map((specialty) => (
            <div key={specialty} className="flex items-center space-x-2">
              <Checkbox
                id={specialty}
                checked={filters.specialties?.includes(specialty) || false}
                onCheckedChange={() => handleSpecialtyToggle(specialty)}
              />
              <label
                htmlFor={specialty}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {specialty}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Minimum Rating</Label>
          <span className="text-sm font-semibold">{filters.minRating || 0} stars</span>
        </div>
        <Slider
          value={[filters.minRating || 0]}
          onValueChange={(value) => updateFilters({ minRating: value[0] })}
          max={5}
          step={0.5}
          className="w-full"
        />
      </div>

      {/* Availability Filter */}
      <div className="flex items-center justify-between">
        <Label htmlFor="availability" className="text-sm font-medium">Available Now</Label>
        <Switch
          id="availability"
          checked={filters.availableOnly || false}
          onCheckedChange={(checked) => updateFilters({ availableOnly: checked })}
        />
      </div>
    </div>
  );
};

export default FilterSidebar;