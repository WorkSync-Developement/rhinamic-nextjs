-- =============================================================================
-- HOMEPAGE SERVICES TABLE
-- =============================================================================
-- This table stores the services displayed in the Professional Services section
-- on the homepage, allowing admins to control order and visibility

CREATE TABLE IF NOT EXISTS homepage_services (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  details JSONB NOT NULL,
  display_order INTEGER NOT NULL,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Insert default services data
INSERT INTO homepage_services (id, title, slug, description, icon, details, display_order, is_visible) VALUES
(
  'lawn-care',
  'Lawn Care Services',
  'lawn-care-services',
  'Comprehensive lawn care including soil analysis, aeration, precision mowing, and seasonal fertilization programs for sustainable, drought-resistant turf systems.',
  'tractor',
  '["Seasonal soil analysis and pH balancing", "Core aeration and thatch management", "Custom fertilization programs (typically 4-6 annual visits)", "Drought-resistant grass varieties suited to Texas climate"]',
  1,
  true
),
(
  'landscape-design',
  'Landscape Design',
  'landscape-design',
  'Expert landscape design featuring native plant selection, seasonal color planning, and sustainable perennial gardens tailored to your property''s microclimate.',
  'flower',
  '["Custom 3D landscape renderings and planning", "Native and adaptive plant selection for sustainability", "Phased implementation plans for large projects", "Seasonal color rotation management"]',
  2,
  true
),
(
  'paver-patio',
  'Paver Patio Installation',
  'paver-patio-installation',
  'Premium hardscape elements including permeable pavers, natural stone installations, retaining walls, and custom outdoor living structures with drainage integration.',
  'grid',
  '["Natural stone and premium paver installations", "Custom outdoor kitchens and living spaces", "Retaining walls and terraced landscapes", "Drainage solutions for water management"]',
  3,
  true
),
(
  'drip-irrigation',
  'Drip Irrigation Systems',
  'drip-irrigation-systems',
  'Water-efficient drip irrigation, smart controller technology, and zoned sprinkler systems designed for conservation and optimal plant health maintenance.',
  'sprout',
  '["Smart controller systems with weather adaptation", "Water-saving drip irrigation installation", "Seasonal system audits and maintenance", "Rain/moisture sensor integration"]',
  4,
  true
),
(
  'landscape-lighting',
  'Landscape Lighting Installation',
  'landscape-lighting-installation',
  'Energy-efficient LED landscape lighting with layered illumination techniques for security, accent features, and enhanced outdoor aesthetics.',
  'droplets',
  '["Energy-efficient LED lighting systems", "Security and pathway illumination", "Accent lighting for landscape features", "Holiday lighting setup and removal"]',
  5,
  true
),
(
  'tree-trimming',
  'Tree Trimming',
  'tree-trimming',
  'Certified arborist-led tree care including structural pruning, disease management, and preservation techniques for mature tree specimens.',
  'trees',
  '["ISA Certified arborist consultations", "Structural pruning and crown maintenance", "Disease treatment and prevention protocols", "Root system management and protection"]',
  6,
  true
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_homepage_services_display_order ON homepage_services(display_order);
CREATE INDEX IF NOT EXISTS idx_homepage_services_visible ON homepage_services(is_visible);
CREATE INDEX IF NOT EXISTS idx_homepage_services_slug ON homepage_services(slug);

-- Add Row Level Security (RLS) policies
ALTER TABLE homepage_services ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access for visible services
CREATE POLICY "Public can view visible services" ON homepage_services
  FOR SELECT USING (is_visible = true);

-- Policy: Allow authenticated users to manage all services
CREATE POLICY "Authenticated users can manage services" ON homepage_services
  FOR ALL USING (auth.role() = 'authenticated');

-- Policy: Allow service workers to read all services
CREATE POLICY "Service role can read all services" ON homepage_services
  FOR SELECT USING (auth.role() = 'service_role');

-- Add trigger to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_homepage_services_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_homepage_services_updated_at
  BEFORE UPDATE ON homepage_services
  FOR EACH ROW
  EXECUTE FUNCTION update_homepage_services_updated_at();

-- Grant permissions
GRANT SELECT ON homepage_services TO anon;
GRANT ALL ON homepage_services TO authenticated;
GRANT ALL ON homepage_services TO service_role;