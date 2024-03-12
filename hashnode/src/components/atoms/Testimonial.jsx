import {
    Card,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import avatarOne from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/avatarone.avif";
import avatarTwo from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/avatartwo.avif";

function Testimonial() {
    return (

        <div className="container mx-auto grid grid-cols-2 text-white px-32 gap-20">

            <div className="text-left grid content-center">
                <h3 className="my-10 font-bold text-5xl">Industry leaders <br />love Hashnode!</h3>
                <a href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                        View more testimonials
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </a>
            </div>
            <div className="grid grid-rows-2 gap-10">


                <Card className="w-full flex-row rounded-2xl overflow-hidden cardGradient border-2 border-slate-700">

                    <img
                        src={avatarOne}
                        alt="card-image"
                        className="h-64 w-64 m-3 rounded-lg"
                    />

                    <CardBody className="text-left grid content-center">

                        <Typography className="font-medium  mb-4">
                            It's amazing to see how fast devs go from 0 to Blog under a domain they own on Hashnode 🤯. It reminds me a lot of what Substack did for journalists.
                        </Typography>
                        <Typography className="font-medium ">
                            Guillermo Rauch
                        </Typography>

                        <Typography className="font-light ">
                            CEO Vercel
                        </Typography>


                    </CardBody>
                </Card>

                <Card className="w-full flex-row rounded-2xl overflow-hidden cardGradient border-2 border-slate-700">

                    <img
                        src={avatarTwo}
                        alt="card-image"
                        className="h-64 w-64 m-3 rounded-lg"
                    />

                    <CardBody className="text-left grid content-center">

                        <Typography className="font-medium text-white mb-4">
                            You can start a dev blog in just a few seconds using Hashnode and then you can move that to your own domain if you get one later. They will even help distribute your articles on their platform. By far the best place to create a blog, imho.
                        </Typography>
                        <Typography className="font-medium text-white">
                            Quincy Larson
                        </Typography>

                        <Typography className="font-light text-white">
                            Founder freeCodeCamp
                        </Typography>


                    </CardBody>
                </Card>
            </div>

        </div>

    )
}
export default Testimonial