import Image from 'next/image';
import Link from 'next/link';

function Custom404() {
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      backgroundColor: '#f8f8a6',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image src="/img/404be.jpg" alt="Custom 404 Image" width={600} height={500} />
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for does not exist.</p>
      <Link href="/" style={{ textDecoration: 'underline' }}>Go back to the home page</Link>
    </div>
  )
}

export default Custom404