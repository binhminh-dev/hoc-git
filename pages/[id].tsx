/* eslint-disable @next/next/link-passhref */
import { useRouter } from 'next/router'
import Link from 'next/link'

// Demo Client Side Rendering
export default function AdminUser() {
      const router = useRouter();
      
      console.log("router", router);

      function handleOnClick() {
        router.push('/login');
      }

    return (
        <>
            <h1>Admin - User Page (router.query.id)</h1>
            <Link href="/login">
                <button className="active"> Go to homepage by a tag </button>
            </Link>
            <button onClick={handleOnClick}>Go to homepage</button>
        </>     
    )
}



// Hoc code -> Server Side Rendering