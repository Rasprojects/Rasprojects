import Link from "next/link";
import { MdErrorOutline } from 'react-icons/md';


export default function NotFound() {
  return (

    <main className="min-h-screen">     
      <div className="container justify-center mt-64  rounded-md mx-auto w-full h-full text-gray-700 flex items-center space-x-4">
      <MdErrorOutline size={32} className="text-gray-700" />
      <div>
        <h2 className="text-xl font-bold mb-2">Not Found</h2>
        <p className="mb-4 roboto-large">Could not find the requested resource</p>
        <Link href="/">
          <div className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Return Home
          </div>
        </Link>
      </div>
    </div>
  </main>
  );
}
