import React from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import Button from './Button';
import Input from './Input';
import Select from './Select';

const UserModal = ({ user, onClose, onSubmit }) => {
  const isEditing = !!user;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: user?.username || '',
      email: user?.email || '',
      role: user?.role || 'user',
      password: '',
      confirmPassword: '',
    },
  });

  const handleFormSubmit = (data) => {
    // Remove password fields if editing and passwords are empty
    if (isEditing) {
      if (!data.password) {
        delete data.password;
        delete data.confirmPassword;
      }
    }
    onSubmit(data);
    reset();
  };

  const roleOptions = [
    { value: 'user', label: 'User' },
    { value: 'admin', label: 'Admin' },
  ];

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            {isEditing ? 'Edit User' : 'Create User'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <Input
            label="Username"
            error={errors.username?.message}
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters',
              },
              maxLength: {
                value: 50,
                message: 'Username must be less than 50 characters',
              },
            })}
          />

          <Input
            label="Email"
            type="email"
            error={errors.email?.message}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />

          <Select
            label="Role"
            options={roleOptions}
            error={errors.role?.message}
            {...register('role', {
              required: 'Role is required',
            })}
          />

          {!isEditing && (
            <>
              <Input
                label="Password"
                type="password"
                error={errors.password?.message}
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
              />

              <Input
                label="Confirm Password"
                type="password"
                error={errors.confirmPassword?.message}
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) => {
                    const password = document.querySelector('input[name="password"]')?.value;
                    return value === password || 'Passwords do not match';
                  },
                })}
              />
            </>
          )}

          {isEditing && (
            <>
              <Input
                label="New Password (optional)"
                type="password"
                error={errors.password?.message}
                {...register('password', {
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
              />

              <Input
                label="Confirm New Password"
                type="password"
                error={errors.confirmPassword?.message}
                {...register('confirmPassword', {
                  validate: (value) => {
                    const password = document.querySelector('input[name="password"]')?.value;
                    if (password && value !== password) {
                      return 'Passwords do not match';
                    }
                    return true;
                  },
                })}
              />
            </>
          )}

          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button type="submit">
              {isEditing ? 'Update User' : 'Create User'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal; 