import StoryTeamSection from "@/components/about/StoryTeamSection";
import ListingCard from "@/components/buy/ListingCard";
import TestimonialSection from "@/components/buy/TestimonialSection";
import Image from "next/image";
import AboutBannerImage from "../../public/assets/images/about banner.jpeg";
const AboutPage = () => {
    return (
        <>
            <Image
                className="w-full h-[320px] opacity-95 object-cover object-center"
                src={AboutBannerImage}
                alt="about banner image"
            />
            <ListingCard />
            <StoryTeamSection />
            <TestimonialSection />
        </>
    );
};

export default AboutPage;
