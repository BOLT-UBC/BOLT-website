import '../../src/app.css'
import { ClientOnly } from './client'

 
export function generateStaticParams() {
    return [
      { slug: [''] },
      { slug: ['aboutus'] },
      { slug: ['home'] },
      { slug: ['events'] },
      { slug: ['firstbyte'] },
    ];
  }
 
  export default function Page({ params }: { params: { slug?: string[] } }) {
    const { slug } = params;

    if (!slug || slug.length === 0) {
      return <ClientOnly page='' />;
    }
  
    if (slug[0] === 'aboutus') {
      return <ClientOnly page="aboutus" />;
    }
  
    if (slug[0] === 'home') {
      return <ClientOnly page="home" />;
    }

    if (slug[0] === 'events') {
        return <ClientOnly page="events" />;
      }

    if (slug[0] === 'first-byte') {
      return <ClientOnly page="first-byte" />;
    }

    return <h1>404: Page Not Found</h1>;
  }