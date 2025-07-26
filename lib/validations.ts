import { z } from 'zod';

// Project upload validation schema
export const projectUploadSchema = z.object({
  title: z
    .string()
    .min(1, 'Project title is required')
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be less than 100 characters')
    .trim(),
  
  service: z
    .string()
    .min(1, 'Service selection is required'),
  
  description: z
    .string()
    .min(1, 'Project description is required')
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description must be less than 500 characters')
    .trim(),
  
  images: z
    .array(z.object({
      file: z.any(), // File object
      preview: z.string(), // Preview URL
      isPrimary: z.boolean().default(false),
      order: z.number().default(0),
      imageType: z.enum(['before', 'after', 'during', 'general']).default('general'),
      caption: z.string().optional(),
    }))
    .min(1, 'At least one image is required')
    .max(10, 'Maximum 10 images allowed'),
});

// Service validation schema
export const serviceSchema = z.object({
  name: z
    .string()
    .min(1, 'Service name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .trim(),
  
  slug: z
    .string()
    .min(1, 'Service slug is required')
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens')
    .trim(),
  
  description: z
    .string()
    .max(200, 'Description must be less than 200 characters')
    .optional(),
  
  isActive: z.boolean().default(true),
});

// Image upload validation
export const imageUploadSchema = z.object({
  file: z
    .any()
    .refine((file) => file instanceof File, 'Must be a valid file')
    .refine((file) => file.size <= 5 * 1024 * 1024, 'File size must be less than 5MB')
    .refine(
      (file) => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type),
      'File must be a JPEG, PNG, or WebP image'
    ),
  
  altText: z
    .string()
    .max(100, 'Alt text must be less than 100 characters')
    .optional(),
  
  isPrimary: z.boolean().default(false),
  order: z.number().min(0).default(0),
});

// Form data types
export type ProjectUploadData = z.infer<typeof projectUploadSchema>;
export type ServiceData = z.infer<typeof serviceSchema>;
export type ImageUploadData = z.infer<typeof imageUploadSchema>;

// Validation helper functions
export const validateProjectUpload = (data: unknown) => {
  return projectUploadSchema.safeParse(data);
};

export const validateService = (data: unknown) => {
  return serviceSchema.safeParse(data);
};

export const validateImageUpload = (data: unknown) => {
  return imageUploadSchema.safeParse(data);
};

// Error formatting helper
export const formatValidationErrors = (errors: z.ZodError) => {
  const formatted: Record<string, string> = {};
  
  errors.errors.forEach((error) => {
    const path = error.path.join('.');
    formatted[path] = error.message;
  });
  
  return formatted;
};