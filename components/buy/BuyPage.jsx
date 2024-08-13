import ListingCard from "./ListingCard";
import NewListedProperties from "./NewListedProperties";
import PopularProperties from "./PopularProperties";
import SearchBox from "./SearchBox";
import TestimonialSection from "./TestimonialSection";

const BuyPage = () => {
    return (
        <>
            <SearchBox />
            <ListingCard />
            <PopularProperties />
            <NewListedProperties />
            <TestimonialSection />
        </>
    );
};

export default BuyPage;
