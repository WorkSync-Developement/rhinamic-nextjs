import { createMocks } from 'node-mocks-http';
import imagesHandler from '../../pages/api/gallery/images';
import * as googleDrive from '../../lib/googleDrive';

// Mock the Google Drive module
jest.mock('../../lib/googleDrive', () => ({
  getGalleryImages: jest.fn(),
}));

describe('/api/gallery/images', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('returns 405 for non-GET requests', async () => {
    const { req, res } = createMocks({
      method: 'POST',
    });

    await imagesHandler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(JSON.parse(res._getData())).toEqual({
      message: 'Method not allowed',
    });
  });

  it('returns 500 when folder ID is not configured', async () => {
    // Save original env and temporarily remove folder ID
    const originalEnv = process.env;
    process.env = { ...originalEnv };
    delete process.env.GOOGLE_DRIVE_GALLERY_FOLDER_ID;

    const { req, res } = createMocks({
      method: 'GET',
    });

    await imagesHandler(req, res);

    expect(res._getStatusCode()).toBe(500);
    expect(JSON.parse(res._getData())).toEqual({
      message: 'Error fetching gallery images',
    });

    // Restore original env
    process.env = originalEnv;
  });

  it('returns gallery images successfully', async () => {
    // Mock env variables
    process.env.GOOGLE_DRIVE_GALLERY_FOLDER_ID = 'test-folder-id';

    // Mock Google Drive response
    const mockImages = [
      {
        id: 'image-1',
        name: 'test-image-1.jpg',
        description: 'Test Image 1',
        createdTime: '2023-01-01T00:00:00.000Z',
      },
      {
        id: 'image-2',
        name: 'test-image-2.jpg',
        description: null,
        createdTime: '2023-01-02T00:00:00.000Z',
      },
    ];

    (googleDrive.getGalleryImages as jest.Mock).mockResolvedValue(mockImages);

    const { req, res } = createMocks({
      method: 'GET',
    });

    await imagesHandler(req, res);

    expect(googleDrive.getGalleryImages).toHaveBeenCalledWith('test-folder-id');
    expect(res._getStatusCode()).toBe(200);
    
    const responseData = JSON.parse(res._getData());
    expect(responseData).toHaveLength(2);
    expect(responseData[0]).toEqual({
      id: 'image-1',
      name: 'test-image-1.jpg',
      description: 'Test Image 1',
      url: `https://drive.google.com/uc?id=image-1`,
      createdTime: '2023-01-01T00:00:00.000Z',
    });
    expect(responseData[1].description).toBe('');
  });

  it('handles errors from Google Drive API', async () => {
    process.env.GOOGLE_DRIVE_GALLERY_FOLDER_ID = 'test-folder-id';

    (googleDrive.getGalleryImages as jest.Mock).mockRejectedValue(
      new Error('Google Drive API error')
    );

    const { req, res } = createMocks({
      method: 'GET',
    });

    await imagesHandler(req, res);

    expect(res._getStatusCode()).toBe(500);
    expect(JSON.parse(res._getData())).toEqual({
      message: 'Error fetching gallery images',
    });
  });
});
