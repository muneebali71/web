import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            {...register('name', { required: true })}
            className="text-gray-900 placeholder:text-gray-500"
          />
          {errors.name && (
            <p className="text-sm text-destructive">Name is required</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            {...register('email', { 
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}
            className="text-gray-900 placeholder:text-gray-500"
          />
          {errors.email && (
            <p className="text-sm text-destructive">
              {errors.email.type === 'required' ? 'Email is required' : 'Invalid email format'}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject *</Label>
        <Input
          id="subject"
          type="text"
          placeholder="What is this about?"
          {...register('subject', { required: true })}
          className="text-gray-900 placeholder:text-gray-500"
        />
        {errors.subject && (
          <p className="text-sm text-destructive">Subject is required</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          placeholder="Tell us more..."
          {...register('message', { required: true })}
          className="min-h-40 text-gray-900 placeholder:text-gray-500"
        />
        {errors.message && (
          <p className="text-sm text-destructive">Message is required</p>
        )}
      </div>

      <Button type="submit" className="w-full transition-all duration-200 active:scale-[0.98]">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;