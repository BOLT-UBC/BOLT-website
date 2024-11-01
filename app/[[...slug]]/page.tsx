import '../../src/pages/first-byte-page/styles.css'
import { ClientOnly } from './client'

 
export function generateStaticParams() {
    return [
      { slug: [''] },
      { slug: ['aboutus'] },
      { slug: ['home'] },
      { slug: ['events'] },
      { slug: ['firstbyte'] },
      { slug: ['judges'] },
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

    if (slug[0] === 'judges') {
      return <ClientOnly page="judges" />;
    }

    return <h1>404: Page Not Found</h1>;
  }