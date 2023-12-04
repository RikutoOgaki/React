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
      <img src="/img/404be.jpg" alt="Custom 404 Image" style={{ width: '100%', height: '100vh' }} />
      {/* <Link href="/" style={{ textDecoration: 'underline' }}>Go back to the home page</Link> */}
    </div>
  )
}

export default Custom404