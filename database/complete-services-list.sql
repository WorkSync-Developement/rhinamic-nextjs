-- Complete Services List for Rhinamic Database
-- Based on actual service pages found in /pages/services/
-- This replaces the incomplete 12-service list with all 32 actual services

-- All 32 services that exist on the website:
INSERT INTO services (name, slug, description, display_order, is_active) VALUES

-- Core Landscaping Services
('Landscape Design', 'landscape-design', 'Professional landscape design and planning services', 1, true),
('Landscape Installation', 'landscape-installation', 'Complete landscape installation and construction', 2, true),
('Landscape Maintenance', 'landscape-maintenance', 'Ongoing landscape care and maintenance', 3, true),
('Native Plant Landscaping', 'native-plant-landscaping', 'Native Texas plant installation and design', 4, true),

-- Lawn Services
('Lawn Care Services', 'lawn-care-services', 'Comprehensive lawn care and maintenance', 5, true),
('Lawn Installation', 'lawn-installation', 'New lawn installation and establishment', 6, true),
('Lawn Fertilization', 'lawn-fertilization', 'Professional lawn fertilization programs', 7, true),
('Sod Installation', 'sod-installation', 'Professional sod installation services', 8, true),
('Artificial Turf Installation', 'artificial-turf-installation', 'Synthetic grass installation and setup', 9, true),
('Weed Control', 'weed-control', 'Professional weed prevention and removal', 10, true),

-- Tree and Plant Services
('Tree Planting', 'tree-planting', 'Professional tree selection and planting', 11, true),
('Tree Trimming', 'tree-trimming', 'Expert tree pruning and maintenance', 12, true),
('Palm Tree Trimming', 'palm-tree-trimming', 'Specialized palm tree care and trimming', 13, true),
('Shrub Pruning', 'shrub-pruning', 'Professional shrub trimming and shaping', 14, true),
('Cactus Services', 'cactus', 'Cactus installation, maintenance, and removal', 15, true),

-- Garden Services
('Garden Maintenance', 'garden-maintenance', 'Complete garden care and upkeep', 16, true),
('Mulching Services', 'mulching-services', 'Professional mulch installation and maintenance', 17, true),

-- Hardscaping and Structures
('Paver Patio Installation', 'paver-patio-installation', 'Custom paver patio design and installation', 18, true),
('Concrete Work', 'concrete-work', 'Concrete walkways, patios, and structures', 19, true),
('Stonework & Rock Features', 'stonework-rock-features', 'Natural stone installation and rock gardens', 20, true),
('Walkways & Pathways', 'walkways-pathways', 'Custom walkway and pathway construction', 21, true),
('Retaining Wall Construction', 'retaining-wall-construction', 'Professional retaining wall design and build', 22, true),
('Rusted Iron Walls', 'rusted-iron-walls', 'Decorative rusted iron wall installation', 23, true),

-- Outdoor Living Spaces
('Outdoor Kitchens', 'outdoor-kitchens', 'Custom outdoor kitchen design and construction', 24, true),
('Fire Pit Installation', 'fire-pit-installation', 'Custom fire pit design and installation', 25, true),
('Pergolas', 'pergolas', 'Custom pergola design and construction', 26, true),
('Decks', 'decks', 'Professional deck construction and design', 27, true),
('Fence Installation', 'fence-installation', 'Residential and commercial fence installation', 28, true),

-- Water and Lighting Systems
('Drip Irrigation Systems', 'drip-irrigation-systems', 'Efficient drip irrigation installation', 29, true),
('Drainage Solutions', 'drainage-solutions', 'Professional drainage system installation', 30, true),
('Landscape Lighting Installation', 'landscape-lighting-installation', 'Outdoor lighting design and installation', 31, true),

-- Specialized Services
('Xeriscaping', 'xeriscaping', 'Drought-tolerant landscape design and installation', 32, true)

ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active,
  updated_at = timezone('utc'::text, now());

-- Verify all services were inserted
SELECT 
  COUNT(*) as total_services,
  COUNT(*) FILTER (WHERE is_active = true) as active_services
FROM services;

-- Show all services ordered by display_order
SELECT display_order, name, slug, is_active 
FROM services 
ORDER BY display_order;