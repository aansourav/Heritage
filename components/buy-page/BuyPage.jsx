import ListingCard from "./ListingCard";
import NewListedProperties from "./NewListedProperties";
import PopularProperties from "./PopularProperties";
import SearchBox from "./SearchBox";

const BuyPage = () => {
    return (
        <>
            <SearchBox />
            <ListingCard />
            <PopularProperties />
            <NewListedProperties />
        </>
    );
};

export default BuyPage;
