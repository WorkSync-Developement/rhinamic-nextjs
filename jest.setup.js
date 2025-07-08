// Import Jest DOM extensions
import '@testing-library/jest-dom';

// Set up any global mocks or configurations needed for all tests
jest.setTimeout(10000); // 10 second timeout for tests

// Mock the NextAuth session
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => ({
    data: { 
      user: { email: 'test@example.com' }, 
      expires: new Date(Date.now() + 2 * 86400).toISOString() 
    },
    status: 'authenticated'
  })),
  getSession: jest.fn(() => Promise.resolve({
    user: { email: 'test@example.com' }, 
    expires: new Date(Date.now() + 2 * 86400).toISOString()
  })),
}));

// Mock env variables that tests will need
process.env.GOOGLE_DRIVE_GALLERY_FOLDER_ID = 'test-folder-id';
process.env.ADMIN_EMAIL = 'test@example.com';
process.env.ADMIN_PASSWORD = 'test-password';
