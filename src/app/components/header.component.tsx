import Link from "next/link";

export function Header() {
	return (
		<>
		   <div className="relative bg-secondary">
            <div className="flex-col justify-between p-6 text-dark">
                  <div className="float-left"><h2 className="roboto-regular ">Reflex Agro Logo</h2></div>      
                  <div className="flex flex-col-3 justify-center gap-12">
                 
                     <Link href="/">
                      <div className="roboto-bold  outline outline-none rounded-md px-4 py-1.5 primary active:bg-primary cursor-pointer">
                        <span>Home</span>
                      </div>
                    </Link>
                    <Link href="/features">
                      <div className="roboto-bold  outline outline-none rounded-md px-4 py-1.5 hover:bg-primary active:bg-primary cursor-pointer">
                        <span>Features</span>
                      </div>
                    </Link>
                    <Link href="/about">
                      <div className="roboto-bold  outline outline-none rounded-md px-4 py-1.5 hover:bg-primary active:bg-primary cursor-pointer">
                        <span>About</span>
                      </div>
                    </Link>
                    <Link href="/services">
                      <div className="roboto-bold  outline outline-none rounded-md px-4 py-1.5 hover:bg-primary active:bg-primary cursor-pointer">
                        <span>Services</span>
                      </div>
                    </Link>
                    <Link href="/membership">
                      <div className="roboto-bold  outline outline-none rounded-md px-4 py-1.5 hover:bg-primary active:bg-primary cursor-pointer">
                        <span>Membership</span>
                      </div>
                    </Link>
                  </div>                
            </div>                         
        </div>   
		</>
	);
}
