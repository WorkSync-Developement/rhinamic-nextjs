# Services Audit - Rhinamic Website

## All Service Pages Found (32 total)

Based on the files in `/pages/services/`, here are all the services that exist on the website:

1. **Artificial Turf Installation** (`artificial-turf-installation.tsx`)
2. **Cactus Services** (`cactus.tsx`) 
3. **Concrete Work** (`concrete-work.tsx`)
4. **Decks** (`decks.tsx`)
5. **Drainage Solutions** (`drainage-solutions.tsx`)
6. **Drip Irrigation Systems** (`drip-irrigation-systems.tsx`)
7. **Fence Installation** (`fence-installation.tsx`)
8. **Fire Pit Installation** (`fire-pit-installation.tsx`)
9. **Garden Maintenance** (`garden-maintenance.tsx`)
10. **Landscape Design** (`landscape-design.tsx`)
11. **Landscape Installation** (`landscape-installation.tsx`)
12. **Landscape Lighting Installation** (`landscape-lighting-installation.tsx`)
13. **Landscape Maintenance** (`landscape-maintenance.tsx`)
14. **Lawn Care Services** (`lawn-care-services.tsx`)
15. **Lawn Fertilization** (`lawn-fertilization.tsx`)
16. **Lawn Installation** (`lawn-installation.tsx`)
17. **Mulching Services** (`mulching-services.tsx`)
18. **Native Plant Landscaping** (`native-plant-landscaping.tsx`)
19. **Outdoor Kitchens** (`outdoor-kitchens.tsx`)
20. **Palm Tree Trimming** (`palm-tree-trimming.tsx`)
21. **Paver Patio Installation** (`paver-patio-installation.tsx`)
22. **Pergolas** (`pergolas.tsx`)
23. **Retaining Wall Construction** (`retaining-wall-construction.tsx`)
24. **Rusted Iron Walls** (`rusted-iron-walls.tsx`)
25. **Shrub Pruning** (`shrub-pruning.tsx`)
26. **Sod Installation** (`sod-installation.tsx`)
27. **Stonework & Rock Features** (`stonework-rock-features.tsx`)
28. **Tree Planting** (`tree-planting.tsx`)
29. **Tree Trimming** (`tree-trimming.tsx`)
30. **Walkways & Pathways** (`walkways-pathways.tsx`)
31. **Weed Control** (`weed-control.tsx`)
32. **Xeriscaping** (`xeriscaping.tsx`)

## Current Admin Form Services (12 total)

What's currently in `EnhancedProjectForm.tsx`:

1. Lawn Maintenance
2. Garden Design
3. Hardscaping
4. Irrigation
5. Landscape Lighting
6. Tree Services
7. Paver Patio Installation
8. Xeriscaping
9. Landscape Design
10. Landscape Installation
11. Concrete Work
12. Artificial Turf Installation

## Current Project Data Services (2 total)

What's currently in `projects.json`:

1. Paver Patio Installation
2. Xeriscaping (drought-tolerant landscaping)

## Issues Found:

1. **Major mismatch**: Admin form only has 12 services, but website has 32 service pages
2. **Missing services**: Many services like "Outdoor Kitchens", "Fire Pit Installation", "Pergolas", etc. are missing from admin form
3. **Inconsistent naming**: Some services have different names between pages and forms
4. **Incomplete coverage**: Admin users can't select most of the actual services offered

## Recommendations:

1. **Update admin form** to include all 32 services
2. **Standardize service naming** across all components
3. **Create service hierarchy** (group related services)
4. **Add service categories** for better organization
5. **Update database schema** with complete services list