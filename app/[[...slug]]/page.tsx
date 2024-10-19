import '../../src/app.css'
import { ClientOnly } from './client'

 
export function generateStaticParams() {
    return [
      { slug: [''] }, // This will handle the base URL (e.g., "/")
      { slug: ['about'] }, // Static export for "/about"
      { slug: ['home'] }, // Static export for "/contact"
    ];
  }
  
 
  export default function Page({ params }: { params: { slug?: string[] } }) {
    const { slug } = params;
  
    // Determine which page to render based on the slug
    if (!slug || slug.length === 0) {
      return <ClientOnly page="home" />; // Render Home page on base URL
    }
  
    if (slug[0] === 'about') {
      return <ClientOnly page="about" />; // Render About page
    }
  
    if (slug[0] === 'home') {
      return <ClientOnly page="home" />; // Render Home page
    }
  
    // If no matching slug, return 404 or fallback
    return <h1>404: Page Not Found</h1>;
  }