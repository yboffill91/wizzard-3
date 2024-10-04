'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, UserCircle2 } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

type ContactFormProps = {
  onComplete: () => void;
};

export default function ContactForm({ onComplete }: ContactFormProps) {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    if (step === 1) {
      setStep(2);
    } else {
      console.log(data);
      onComplete();
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const validateStep = async () => {
    if (step === 1) {
      const isValid = await trigger('name');
      if (isValid) setStep(2);
    }
  };

  return (
    <motion.div
      className='w-screen h-screen bg-blue-500 flex flex-col items-center justify-center relative p-5'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md'>
        {step === 1 ? (
          <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 0.9 }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <label
              htmlFor='name'
              className='block text-sm font-medium  text-slate-100 mb-2'
            >
              Name
            </label>
            <input
              id='name'
              {...register('name', { required: 'Name is required' })}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
            />
            {errors.name && (
              <p className='mt-2 text-sm text-red-600'>{errors.name.message}</p>
            )}
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className='mb-4'
            >
              <label
                htmlFor='email'
                className='block text-sm font-medium text-slate-100  mb-2'
              >
                E-mail
              </label>
              <input
                id='email'
                type='email'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Looks like an invalid email',
                  },
                })}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              />
              {errors.email && (
                <p className='mt-2 text-sm text-red-600'>
                  {errors.email.message}
                </p>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className='mb-4'
            >
              <label
                htmlFor='password'
                className='block text-sm font-medium  text-slate-100 mb-2'
              >
                Password
              </label>
              <input
                id='password'
                type='password'
                {...register('password', {
                  required: 'Password is required',
                })}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              />
              {errors.password && (
                <p className='mt-2 text-sm text-red-600'>
                  {errors.password.message}
                </p>
              )}
            </motion.div>
          </>
        )}
        <div className='flex justify-around mt-4 '>
          {step === 2 && (
            <motion.button
              type='button'
              onClick={handleBack}
              className='px-4 py-2  text-slate-100 focus:outline focus:ring-2 focus:ring-gray-500 flex'
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <ChevronLeft className='w-5 h-5' />
              Back
            </motion.button>
          )}
          <motion.button
            type='submit'
            onClick={step === 1 ? validateStep : undefined}
            className='px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-blue-500 focus:outline-none w-full'
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            {step === 1 ? (
              <>
                Next
                <ChevronRight className='w-5 h-5 ml-1 inline' />
              </>
            ) : (
              'Continue'
            )}
          </motion.button>
        </div>
      </form>
      <motion.div
        className='absolute bottom-[10%] bg-blue-500 rounded-full p-4'
        initial={{ y: '80vh' }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <UserCircle2 className='text-white w-8 h-8' />
      </motion.div>
      <motion.div
        className='absolute inset-0 bg-slate-900 rounded-full'
        initial={{ scale: 0 }}
        animate={{
          scale: 100,
        }}
        transition={{ delay: 0, duration: 3, ease: 'easeInOut' }}
        style={{ zIndex: -1 }}
      />
    </motion.div>
  );
}
