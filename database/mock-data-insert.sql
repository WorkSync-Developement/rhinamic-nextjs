-- Mock Data for Testing Rhinamic Projects
-- This inserts sample projects with Unsplash images for testing the gallery

-- =============================================================================
-- STEP 1: INSERT SAMPLE PROJECTS
-- =============================================================================

INSERT INTO projects (
  title,
  slug,
  description,
  service_id,
  service_name,
  location,
  status,
  is_featured,
  display_order
) VALUES 
-- Landscape Design Projects
(
  'Modern Backyard Transformation',
  'modern-backyard-transformation',
  'Complete landscape redesign featuring native Texas plants, stone pathways, and drought-resistant gardens. This project transformed an unused backyard into a stunning outdoor living space.',
  (SELECT id FROM services WHERE slug = 'landscape-design' LIMIT 1),
  'Landscape Design',
  'San Antonio, TX',
  'published',
  true,
  1
),

-- Paver Patio Project
(
  'Elegant Paver Patio with Fire Feature',
  'elegant-paver-patio-fire-feature',
  'Custom paver patio installation with integrated fire pit and outdoor seating area. Premium materials and expert craftsmanship create the perfect entertaining space.',
  (SELECT id FROM services WHERE slug = 'paver-patio-installation' LIMIT 1),
  'Paver Patio Installation',
  'New Braunfels, TX',
  'published',
  true,
  2
),

-- Xeriscaping Project
(
  'Drought-Tolerant Desert Garden',
  'drought-tolerant-desert-garden',
  'Water-wise landscape design featuring native cacti, succulents, and decorative rock features. Beautiful and sustainable solution for Texas climate.',
  (SELECT id FROM services WHERE slug = 'xeriscaping' LIMIT 1),
  'Xeriscaping',
  'Austin, TX',
  'published',
  false,
  3
);

-- =============================================================================
-- STEP 2: INSERT PROJECT IMAGES (AFTER PROJECTS ARE CREATED)
-- =============================================================================

-- Insert images for Project 1: Modern Backyard Transformation
WITH project_1 AS (
  SELECT id FROM projects WHERE slug = 'modern-backyard-transformation'
)
INSERT INTO project_images (
  project_id,
  storage_path,
  public_url,
  alt_text,
  caption,
  image_type,
  is_primary,
  display_order
)
SELECT 
  project_1.id,
  storage_path,
  public_url,
  alt_text,
  caption,
  image_type,
  is_primary,
  display_order
FROM project_1,
(VALUES
  ('mock-data/backyard-before-1.jpg', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop', 'Overgrown backyard before renovation', 'The backyard was completely overgrown with weeds and had no usable outdoor space.', 'before', false, 1),
  ('mock-data/backyard-after-1.jpg', 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=800&h=600&fit=crop', 'Beautiful transformed backyard with native plants', 'The completed landscape design featuring drought-tolerant native plants and stone pathways.', 'after', true, 2),
  ('mock-data/backyard-after-2.jpg', 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop', 'Stone pathway through landscaped garden', 'Custom stone pathways wind through carefully planned native plant gardens.', 'after', false, 3)
) AS images(storage_path, public_url, alt_text, caption, image_type, is_primary, display_order);

-- Insert images for Project 2: Elegant Paver Patio
WITH project_2 AS (
  SELECT id FROM projects WHERE slug = 'elegant-paver-patio-fire-feature'
)
INSERT INTO project_images (
  project_id,
  storage_path,
  public_url,
  alt_text,
  caption,
  image_type,
  is_primary,
  display_order
)
SELECT 
  project_2.id,
  storage_path,
  public_url,
  alt_text,
  caption,
  image_type,
  is_primary,
  display_order
FROM project_2,
(VALUES
  ('mock-data/patio-before-1.jpg', 'https://images.unsplash.com/photo-1571069089275-8eccd2b7817f?w=800&h=600&fit=crop', 'Empty dirt area before patio installation', 'The area was just bare dirt with no outdoor living space.', 'before', false, 1),
  ('mock-data/patio-during-1.jpg', 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop', 'Paver installation in progress', 'Professional installation of premium pavers with precise leveling and spacing.', 'during', false, 2),
  ('mock-data/patio-after-1.jpg', 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&h=600&fit=crop', 'Completed paver patio with fire pit', 'Elegant paver patio featuring integrated fire pit and comfortable seating area.', 'after', true, 3),
  ('mock-data/patio-after-2.jpg', 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=800&h=600&fit=crop', 'Evening view of patio with lighting', 'The patio comes alive in the evening with integrated lighting and fire feature.', 'after', false, 4)
) AS images(storage_path, public_url, alt_text, caption, image_type, is_primary, display_order);

-- Insert images for Project 3: Drought-Tolerant Desert Garden
WITH project_3 AS (
  SELECT id FROM projects WHERE slug = 'drought-tolerant-desert-garden'
)
INSERT INTO project_images (
  project_id,
  storage_path,
  public_url,
  alt_text,
  caption,
  image_type,
  is_primary,
  display_order
)
SELECT 
  project_3.id,
  storage_path,
  public_url,
  alt_text,
  caption,
  image_type,
  is_primary,
  display_order
FROM project_3,
(VALUES
  ('mock-data/xeriscape-before-1.jpg', 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop', 'Plain grass area before xeriscape transformation', 'Traditional grass lawn requiring excessive water in Texas climate.', 'before', false, 1),
  ('mock-data/xeriscape-after-1.jpg', 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=800&h=600&fit=crop', 'Beautiful desert garden with cacti and succulents', 'Stunning xeriscape design featuring native Texas cacti and colorful succulents.', 'after', true, 2),
  ('mock-data/xeriscape-after-2.jpg', 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop', 'Desert landscaping with decorative rocks', 'Decorative rock features complement the drought-tolerant plant selection.', 'after', false, 3)
) AS images(storage_path, public_url, alt_text, caption, image_type, is_primary, display_order);

-- =============================================================================
-- VERIFICATION QUERIES
-- =============================================================================

-- Check projects were created
SELECT 
  id,
  title,
  service_name,
  status,
  is_featured
FROM projects 
WHERE slug IN ('modern-backyard-transformation', 'elegant-paver-patio-fire-feature', 'drought-tolerant-desert-garden')
ORDER BY display_order;

-- Check images were created with proper types
SELECT 
  p.title,
  pi.image_type,
  pi.is_primary,
  pi.caption,
  COUNT(*) OVER (PARTITION BY p.id) as total_images_for_project
FROM projects p
JOIN project_images pi ON p.id = pi.project_id
WHERE p.slug IN ('modern-backyard-transformation', 'elegant-paver-patio-fire-feature', 'drought-tolerant-desert-garden')
ORDER BY p.display_order, pi.display_order;

-- Check before/after distribution
SELECT 
  image_type,
  COUNT(*) as count
FROM project_images 
GROUP BY image_type;

-- =============================================================================
-- COMPLETION MESSAGE
-- =============================================================================

DO $$
BEGIN
    RAISE NOTICE '============================================================================';
    RAISE NOTICE 'MOCK DATA INSERTED SUCCESSFULLY!';
    RAISE NOTICE '============================================================================';
    RAISE NOTICE 'Created:';
    RAISE NOTICE '- 3 sample projects across different services';
    RAISE NOTICE '- 10 project images with before/after/during types';
    RAISE NOTICE '- Mix of featured and regular projects';
    RAISE NOTICE '- All images use high-quality Unsplash photos';
    RAISE NOTICE '============================================================================';
    RAISE NOTICE 'You can now test the admin dashboard and gallery features!';
    RAISE NOTICE '- Before images: Red badges';
    RAISE NOTICE '- After images: Green badges';  
    RAISE NOTICE '- During images: Yellow badges';
    RAISE NOTICE '============================================================================';
END
$$;