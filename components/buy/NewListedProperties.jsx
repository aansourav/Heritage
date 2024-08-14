import { getProperties } from "@/utils/property";
import CardSlider from "../ui/CardSlider";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const NewListedProperties = async () => {
    const properties = await getProperties();
    return (
        <>
            <Section>
                <Heading left={true} link={"See all Property"}>
                    New Listed Properties
                </Heading>
                <CardSlider properties={properties} />
            </Section>
        </>
    );
};

export default NewListedProperties;
