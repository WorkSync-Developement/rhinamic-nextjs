import fs from 'fs';
import path from 'path';

export interface ServicePage {
  slug: string;
  title: string;
}

export const getServicePages = (): ServicePage[] => {
  try {
    const servicesDir = path.join(process.cwd(), 'pages/services');
    const files = fs.readdirSync(servicesDir);
    
    return files
      .filter(file => file.endsWith('.tsx') && file !== 'index.tsx')
      .map(file => {
        const slug = file.replace(/\.tsx$/, '');
        // Convert kebab-case to Title Case with spaces
        const title = slug
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        return { slug, title };
      })
      .sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error('Error loading service pages:', error);
    return [];
  }
};
