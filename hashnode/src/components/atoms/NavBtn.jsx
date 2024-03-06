import { Button } from "@material-tailwind/react";

function NavBtn() {
  return (
    <>
      <div className="flex justify-end gap-4">
        <Button className="py-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#4C5A6D" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        </Button>
        <Button className="text-slate-600 text-sm font-medium p-0">Log In</Button>
        <Button variant="filled" className="  text-white text-sm font-medium bg-blue-500 rounded-full py-2 px-4">Sign Up</Button>
      </div>

    </>
  );
}

export default NavBtn
