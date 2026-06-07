import { useState } from 'react';

export const useBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    serviceType: '',
    description: '',
    budget: '',
    preferredDate: '',
    preferredTime: '',
    pickupAddress: '',
    deliveryAddress: '',
    tailorId: null,
    tailorName: ''
  });

  const updateBookingData = (data) => {
    setBookingData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const resetBooking = () => {
    setCurrentStep(1);
    setBookingData({
      serviceType: '',
      description: '',
      budget: '',
      preferredDate: '',
      preferredTime: '',
      pickupAddress: '',
      deliveryAddress: '',
      tailorId: null,
      tailorName: ''
    });
  };

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return bookingData.serviceType && bookingData.description;
      case 2:
        return bookingData.budget && bookingData.preferredDate && bookingData.preferredTime;
      case 3:
        return bookingData.pickupAddress && bookingData.deliveryAddress;
      default:
        return false;
    }
  };

  return {
    currentStep,
    bookingData,
    updateBookingData,
    nextStep,
    prevStep,
    resetBooking,
    isStepValid,
    setCurrentStep
  };
};