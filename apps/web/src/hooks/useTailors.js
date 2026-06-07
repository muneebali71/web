import { useState, useEffect } from 'react';
import { tailors } from '../data/tailors';

export const useTailors = () => {
  const [allTailors, setAllTailors] = useState(tailors);
  const [filteredTailors, setFilteredTailors] = useState(tailors);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    specialties: [],
    minRating: 0,
    availableOnly: false,
    location: ''
  });

  useEffect(() => {
    let result = [...allTailors];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(tailor => 
        tailor.name.toLowerCase().includes(query) ||
        tailor.location.toLowerCase().includes(query) ||
        tailor.specialty.toLowerCase().includes(query)
      );
    }

    // Specialty filter
    if (filters.specialties.length > 0) {
      result = result.filter(tailor =>
        filters.specialties.some(specialty =>
          tailor.specialty.toLowerCase().includes(specialty.toLowerCase())
        )
      );
    }

    // Rating filter
    if (filters.minRating > 0) {
      result = result.filter(tailor => tailor.rating >= filters.minRating);
    }

    // Availability filter
    if (filters.availableOnly) {
      result = result.filter(tailor => tailor.availability === true);
    }

    // Location filter
    if (filters.location.trim()) {
      const locationQuery = filters.location.toLowerCase();
      result = result.filter(tailor =>
        tailor.location.toLowerCase().includes(locationQuery)
      );
    }

    setFilteredTailors(result);
  }, [searchQuery, filters, allTailors]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters({
      specialties: [],
      minRating: 0,
      availableOnly: false,
      location: ''
    });
    setSearchQuery('');
  };

  const getTailorById = (id) => {
    return allTailors.find(tailor => tailor.id === parseInt(id));
  };

  return {
    tailors: filteredTailors,
    allTailors,
    searchQuery,
    setSearchQuery,
    filters,
    updateFilters,
    resetFilters,
    getTailorById
  };
};