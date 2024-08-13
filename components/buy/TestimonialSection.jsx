import Image from "next/image";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
// import TestimonialImage_1 from "../../public/assets/images/testimonial_1.jpeg"
// import TestimonialImage_2 from "../../public/assets/images/testimonial_2.jpeg"

const testimonials = [
    {
        id: 1,
        review: `The level of security provided by CypherPlayis 
    unmatched. | feel confident using my card for both
    everyday purchases and travel. Its the peace of mind 
    was looking for.`,
        image: "/assets/images/testimonial_1.jpeg",
        name: "John Doe",
        designation: "CEO at Company",
        location: "New York, USA",
        rating: 5,
    },
    {
        id: 2,
        review: `The level of security provided by CypherPlayis 
    unmatched. | feel confident using my card for both
    everyday purchases and travel. Its the peace of mind 
    was looking for.`,
        image: "/assets/images/testimonial_2.jpeg",
        name: "Jane Smith",
        designation: "Marketing Manager",
        location: "Los Angeles, USA",
        rating: 4,
    },
];

const Testimonial = ({
    id,
    review,
    image,
    name,
    designation,
    location,
    rating,
}) => (
    <div className="bg-blue-50 w-full p-6 rounded-lg shadow-md">
        <div>
            <div className="flex flex-col  items-center">
                <div className="rating gap-4">
                    <input
                        type="radio"
                        name={`rating-${id}`}
                        className="mask mask-star bg-orange-300"
                        disabled
                        defaultChecked={rating == 1}
                        readOnly
                    />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star bg-orange-300"
                        disabled
                        defaultChecked={rating == 2}
                        readOnly
                    />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star bg-orange-300"
                        disabled
                        defaultChecked={rating == 3}
                        readOnly
                    />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star bg-orange-300"
                        disabled
                        defaultChecked={rating == 4}
                        readOnly
                    />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star bg-orange-300"
                        disabled
                        defaultChecked={rating == 5}
                        readOnly
                    />
                </div>
                <p className="max-w-lg mt-8 text-gray-700 text-center">
                    {review}
                </p>
                <Image
                    src={image}
                    alt={name}
                    className="w-16 h-16 mt-8 rounded-full"
                    width={64}
                    height={64}
                />
                <div className="mt-4 text-center text-sm text-gray-600">
                    <div className="font-semibold text-center text-xl">
                        {name}
                    </div>
                    <div>{designation}</div>
                    <div>{location}</div>
                </div>
            </div>
        </div>
    </div>
);

const TestimonialSection = () => (
    <Section className="mx-auto mb-20 p-6">
        <Heading center={true}>Testimonials</Heading>
        <div className="block md:flex justify-center gap-6 items-center">
            {testimonials.map((testimonial, index) => (
                <Testimonial
                    id={testimonial.id}
                    rating={testimonial.rating}
                    key={index}
                    review={testimonial.review}
                    image={testimonial.image}
                    name={testimonial.name}
                    designation={testimonial.designation}
                    location={testimonial.location}
                />
            ))}
        </div>
    </Section>
);

export default TestimonialSection;
