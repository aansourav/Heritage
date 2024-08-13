/* eslint-disable react/prop-types */
import GoogleMapReact from "google-map-react";
import Image from "next/image";
import { useState } from "react";
import { GiFinishLine } from "react-icons/gi";
import { LiaBedSolid } from "react-icons/lia";
import { MdBalcony, MdBathtub } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const DetailsCard = () => {
    // Mock Data
    const detail = {
        images: [
            {
                image1: "https://via.placeholder.com/800x400?text=Main+Image",
                image2: "https://via.placeholder.com/400x200?text=Image+2",
                image3: "https://via.placeholder.com/400x200?text=Image+3",
            },
        ],
        price: 300,
        location: "123 Main St, Springfield",
        property_name: "Beautiful Family Home",
        details: {
            bedrooms: 3,
            bathrooms: 2,
            carpet_area: 1500,
            facing: "North",
            floor: "2nd",
            additional_rooms: "Study Room",
            transaction_type: "Resale",
            age_of_construction: 5,
        },
    };

    const user = {
        email: "user@example.com",
    };

    const [value, setValue] = useState([280, 305]);

    const { images, price, location, property_name, details } = detail;
    const different = price + 10;

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };

    // Bid property
    const handelBid = async () => {
        try {
            const currentDate = new Date().toISOString();
            const email = user?.email;
            const bidsData = { value, details, currentDate, email };
            console.log("Bid Data: ", bidsData);
            // Mocking API response
            const res = { data: { acknowledged: true } };
            if (res.data.acknowledged === true) {
                alert("Your bid placed successfully");
            } else {
                alert("Bid placement failed!");
            }
        } catch (error) {
            console.log("Bid placement failed!", error);
            alert("Bid placement failed!");
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-5 mt-5">
                <div className="md:col-span-5 col-span-full">
                    <div className="flex items-center justify-between w-full border-b-2 pb-2">
                        <div>
                            <h3 className="text-xl font-semibold">
                                {property_name}
                            </h3>
                            <div className="flex items-center gap-2 font-medium mt-2">
                                <TfiLocationPin className="text-[#EE6612]" />
                                <p className="text-sm text-slate-400">
                                    {location}
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-center text-2xl font-extrabold">
                                ${price}K
                            </p>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="mt-5">
                        <div>
                            {images?.map((img, index) => (
                                <div key={index}>
                                    <Image
                                        className="w-full rounded-md"
                                        src={img?.image1}
                                        alt=""
                                        width={800}
                                        height={400}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {images?.map((img, idx) => (
                                <div key={idx} className="mt-4 space-y-2">
                                    <Image
                                        className="rounded-md"
                                        src={img.image1}
                                        alt=""
                                        width={200}
                                        height={200}
                                    />
                                    <Image
                                        className="rounded-md"
                                        src={img.image2}
                                        alt=""
                                        width={200}
                                        height={200}
                                    />
                                    <Image
                                        className="rounded-md"
                                        src={img.image3}
                                        alt=""
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Overview */}
                    <div className="bg-[#F9FAFB] mt-8 p-8 border rounded-md shadow-md">
                        <h2 className="text-2xl font-medium">Overview</h2>
                        <div className="bg-[#FFFFFF] rounded-md shadow-md p-5 md:flex space-y-3 md:space-y-0 items-center justify-evenly mt-5">
                            <div className="flex items-center justify-center gap-2">
                                <LiaBedSolid className="text-xl" />
                                <p className="flex items-center gap-1">
                                    {details?.bedrooms}
                                    <span className="text-gray-800 font-thin">
                                        Beds
                                    </span>
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <MdBathtub className="text-xl" />
                                <p className="flex items-center gap-1">
                                    {details?.bathrooms}
                                    <span className="text-gray-800 font-thin">
                                        Bath
                                    </span>
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <MdBalcony className="text-xl" />
                                <p className="flex items-center gap-1">
                                    {details?.bedrooms}
                                    <span className="text-gray-800 font-thin">
                                        Balcony
                                    </span>
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <GiFinishLine className="text-xl" />
                                <p className="flex items-center gap-1">
                                    <span className="text-gray-800 font-thin">
                                        Fully Furnished
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 grid grid-cols-7">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 col-span-6">
                                <div>
                                    <div className="space-y-1">
                                        <p className="font-medium text-gray-500">
                                            Carpet Area
                                        </p>
                                        <p className="font-bold">
                                            {details?.carpet_area} sqft
                                        </p>
                                        <p className="font-medium text-gray-500">
                                            $225/sqft
                                        </p>
                                    </div>
                                    <div className="mt-5">
                                        <p className="font-medium text-gray-500">
                                            Facing
                                        </p>
                                        <p className="font-bold">
                                            {details?.facing}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="space-y-1">
                                        <p className="font-medium text-gray-500">
                                            Floor
                                        </p>
                                        <p className="font-bold">
                                            {details?.floor} (Out of 6th floor)
                                        </p>
                                    </div>
                                    <div className="mt-12">
                                        <p className="font-medium text-gray-500">
                                            Additional Rooms
                                        </p>
                                        <p className="font-medium">
                                            {details?.additional_rooms}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="space-y-1">
                                        <p className="font-medium text-gray-500">
                                            Transaction Type
                                        </p>
                                        <p className="font-bold">
                                            {details?.transaction_type}
                                        </p>
                                    </div>
                                    <div className="mt-12">
                                        <p className="font-medium text-gray-500">
                                            Age of Construction
                                        </p>
                                        <p className="font-bold">
                                            {details?.age_of_construction} Year
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>Lift 1</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side column */}
                <div className="md:col-span-2">
                    
                    {/* Google Map */}
                    <div>
                        <section className="mt-12">
                            <div
                                style={{
                                    height: "70vh",
                                    width: "100%",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                }}
                            >
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "" }}
                                    defaultCenter={defaultProps.center}
                                    defaultZoom={defaultProps.zoom}
                                >
                                    <AnyReactComponent
                                        lat={10.99835602}
                                        lng={77.01502627}
                                        text="Property Location"
                                    />
                                </GoogleMapReact>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsCard;
