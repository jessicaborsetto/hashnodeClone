import { Button } from "@material-tailwind/react";
function Header() {
    return (
        <>
            <div className="py-20">

                <h1 className="font-bold text-6xl text-slate-900">Where developer blogs <br />meet community power!</h1>
                <h3 className="leading-6 text-l py-5">Create and grow your developer blog, newsletter, or team engineering blog <br />effortlessly with Hashnode. Level up your writing using powerful <b>AI features!</b></h3>

                <div className="flex justify-center">

                <Button variant="filled" className="  text-white text-sm font-medium bg-blue-500 rounded-full flex gap-2 py-3  px-5 ">
                    <svg viewBox="0 0 337 337" fill="none" className='menuIcon'>
                        <rect x="113" y="113" width="111" height="111" rx="55.5" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z" fill="white" />
                    </svg>
                    Join the community</Button>
                </div>

            </div>
        </>
    )
}
export default Header