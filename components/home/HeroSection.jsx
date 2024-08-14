import Link from "next/link";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "../actions/Button";

const HeroSection = () => {
    return (
        <div className="relative h-screen shadow-lg drop-shadow-lg lg:max-h-[500px]">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
            >
                <source src="/assets/hero_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 10%, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.8) 100%)",
                }}
            ></div>

            <div className="relative flex items-center justify-center h-screen lg:max-h-[500px] text-white text-center">
                <div className="max-w-2xl text-center">
                    <h1 className="text-6xl font-bold">
                        Your Portal to India&apos;s Exquisite Real Estate
                    </h1>
                    <p className="my-10">
                        Seamlessly connecting you to the heartbeat of India’s
                        prime properties.
                    </p>
                    <Link href="/buy">
                        <Button
                            type={"secondary"}
                            center={true}
                            className={"gap-2 "}
                        >
                            <HiMagnifyingGlass />
                            Find Property
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
