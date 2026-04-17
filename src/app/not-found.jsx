import Link from "next/link";


const NotFound = () => {
    return (
       
    
               <div className="h-[85vh] flex flex-col items-center justify-center bg-gray-950 text-white">
      <div className="text-center">
        <h1 className="text-[120px] font-bold text-red-500 leading-none">404</h1>
        
        <h2 className="text-4xl font-semibold mt-4 mb-2">Page Not Found</h2>
        
        <p className="text-gray-400 text-lg mb-8">
         
         Sorry, the page you are looking for does not exist or has been moved.
        
        </p>
              
              <Link href={'/'} 
              className="bg-green-500 hover:bg-green-600 text-black font-medium px-8 py-3 rounded-lg transition-all"> 
              Go Back To Home </Link>

       
      </div>
    </div>
               

       
    );
};

export default NotFound;   