import CardSlider from "../ui/CardSlider";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const NewListedProperties = () => {
    const data = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <Section>
                <Heading left={true} link={"See all Property"}>
                    New Listed Properties
                </Heading>
                <CardSlider data={data} />
            </Section>
        </>
    );
};

export default NewListedProperties;
