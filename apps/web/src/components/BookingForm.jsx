import React from 'react';
import { useForm } from 'react-hook-form';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useBooking } from '../hooks/useBooking.js';

const BookingForm = ({ onSubmit }) => {
  const { currentStep, bookingData, updateBookingData, nextStep, prevStep, isStepValid } = useBooking();
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    defaultValues: bookingData
  });

  const serviceTypes = [
    'Wedding Dress Alterations',
    'Suit Tailoring',
    'Casual Wear Alterations',
    'Jeans Hemming',
    'Dress Alterations',
    'Leather Jacket Alterations',
    'Evening Gown Alterations',
    'Children\'s Clothing',
    'Other'
  ];

  const handleNext = () => {
    const currentData = watch();
    updateBookingData(currentData);
    if (isStepValid(currentStep)) {
      nextStep();
    }
  };

  const handlePrev = () => {
    const currentData = watch();
    updateBookingData(currentData);
    prevStep();
  };

  const onFormSubmit = (data) => {
    updateBookingData(data);
    onSubmit({ ...bookingData, ...data });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center flex-1">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
                step <= currentStep
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {step < currentStep ? <Check className="h-5 w-5" /> : step}
            </div>
            {step < 3 && (
              <div
                className={`flex-1 h-1 mx-2 transition-all duration-200 ${
                  step < currentStep ? 'bg-primary' : 'bg-muted'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Service Details */}
      {currentStep === 1 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4" style={{letterSpacing: '-0.01em'}}>Service Details</h3>
          
          <div className="space-y-2">
            <Label htmlFor="serviceType">Service Type *</Label>
            <Select
              onValueChange={(value) => {
                setValue('serviceType', value);
                updateBookingData({ serviceType: value });
              }}
              defaultValue={bookingData.serviceType}
            >
              <SelectTrigger className="text-gray-900">
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.serviceType && (
              <p className="text-sm text-destructive">Service type is required</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              placeholder="Describe the alterations you need..."
              {...register('description', { required: true })}
              className="min-h-32 text-gray-900 placeholder:text-gray-500"
            />
            {errors.description && (
              <p className="text-sm text-destructive">Description is required</p>
            )}
          </div>
        </div>
      )}

      {/* Step 2: Budget & Schedule */}
      {currentStep === 2 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4" style={{letterSpacing: '-0.01em'}}>Budget & Schedule</h3>
          
          <div className="space-y-2">
            <Label htmlFor="budget">Budget *</Label>
            <Input
              id="budget"
              type="text"
              placeholder="e.g., $50-100"
              {...register('budget', { required: true })}
              className="text-gray-900 placeholder:text-gray-500"
            />
            {errors.budget && (
              <p className="text-sm text-destructive">Budget is required</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preferredDate">Preferred Date *</Label>
              <Input
                id="preferredDate"
                type="date"
                {...register('preferredDate', { required: true })}
                className="text-gray-900"
              />
              {errors.preferredDate && (
                <p className="text-sm text-destructive">Date is required</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredTime">Preferred Time *</Label>
              <Input
                id="preferredTime"
                type="time"
                {...register('preferredTime', { required: true })}
                className="text-gray-900"
              />
              {errors.preferredTime && (
                <p className="text-sm text-destructive">Time is required</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Addresses */}
      {currentStep === 3 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4" style={{letterSpacing: '-0.01em'}}>Pickup & Delivery</h3>
          
          <div className="space-y-2">
            <Label htmlFor="pickupAddress">Pickup Address *</Label>
            <Textarea
              id="pickupAddress"
              placeholder="Enter your pickup address..."
              {...register('pickupAddress', { required: true })}
              className="text-gray-900 placeholder:text-gray-500"
            />
            {errors.pickupAddress && (
              <p className="text-sm text-destructive">Pickup address is required</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="deliveryAddress">Delivery Address *</Label>
            <Textarea
              id="deliveryAddress"
              placeholder="Enter your delivery address..."
              {...register('deliveryAddress', { required: true })}
              className="text-gray-900 placeholder:text-gray-500"
            />
            {errors.deliveryAddress && (
              <p className="text-sm text-destructive">Delivery address is required</p>
            )}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-3 pt-4">
        {currentStep > 1 && (
          <Button
            type="button"
            variant="outline"
            onClick={handlePrev}
            className="flex-1 transition-all duration-200"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
        )}
        
        {currentStep < 3 ? (
          <Button
            type="button"
            onClick={handleNext}
            className="flex-1 transition-all duration-200 active:scale-[0.98]"
            disabled={!isStepValid(currentStep)}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        ) : (
          <Button
            type="submit"
            className="flex-1 transition-all duration-200 active:scale-[0.98]"
          >
            Submit Request
          </Button>
        )}
      </div>
    </form>
  );
};

export default BookingForm;