"use client";
import { MdOutlineLocationOn } from "react-icons/md";
import Section from "../ui/Section";
import Amenities from "./Amenities ";
import BidRange from "./BidRange";
import NewProperties from "./NewProperties";
import OtherServices from "./OtherServices";

const PropertyDetails = () => {
    return (
        <Section>
            <div className="flex gap-4">
                <div>
                    <h3 className="text-lg max-w-lg font-semibold">
                        3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi
                    </h3>
                    <div className="flex mb-3 justify-start text-sm text-black gap-1 items-center">
                        <span className="text-orange-500">
                            <MdOutlineLocationOn className="text-2xl" />
                        </span>
                        Meadowshire Park, Greenfield, USA
                    </div>
                </div>
                <p className="text-2xl font-bold">$300K</p>
            </div>

            <div className="gap-4 flex">
                {/* Bid */}

                <BidRange />
            </div>
            <div className=" w-11/12  mt-16">
                <Amenities />
            </div>
            <OtherServices />
            <NewProperties />
        </Section>
    );
};

export default PropertyDetails;
