import { useRef, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import Button from "../actions/Button";

const BidRange = () => {
    const [values, setValues] = useState([20, 50]);
    const trackRef = useRef(null);
    return (
        <div className="bg-blue-100 p-6 h-full w-full max-w-sm">
            <p className="text-gray-500">Property Value</p>
            <h3 className="font-bold text-2xl mb-4">300k - 310k</h3>
            <p className="font-medium text-gray-500">
                Your bid cannot be more than 10% of the property minimum value.
            </p>
            <div className="mt-5 relative">
                <label htmlFor="min" className="block font-semibold">
                    Min
                </label>
                <span className="absolute text-lg font-semibold left-3 top-[47.5%]">
                    $
                </span>
                <input
                    id="min"
                    name="min"
                    autoComplete="none"
                    placeholder="Min"
                    type="text"
                    className="bg-white rounded-md pl-8 py-3 px-4 w-full"
                />
            </div>
            <div className="mt-5 relative">
                <label htmlFor="max" className="block font-semibold">
                    Max
                </label>
                <span className="absolute text-lg font-semibold left-3 top-[47.5%]">
                    $
                </span>
                <input
                    id="max"
                    name="max"
                    autoComplete="none"
                    placeholder="Max"
                    type="text"
                    className="bg-white rounded-md pl-8 py-3 px-4 w-full"
                />
            </div>
            <div className="p-4">
                <Range
                    step={1}
                    min={20}
                    max={100}
                    values={values}
                    onChange={(values) => setValues(values)}
                    renderTrack={({ props, children }) => {
                        const { key, ...restProps } = props;
                        return (
                            <div
                                key={key}
                                ref={trackRef}
                                {...restProps}
                                style={{
                                    ...restProps.style,
                                    height: "6px",
                                    width: "100%",
                                    background: getTrackBackground({
                                        values,
                                        colors: ["#3498db", "#dfe6e9"],
                                        min: 0,
                                        max: 100,
                                    }),
                                }}
                                className="rounded-full p-3 bg-orange-100  w-full"
                            >
                                {children}
                            </div>
                        );
                    }}
                    renderThumb={({ props }) => {
                        // Destructure key out of props
                        const { key, ...restProps } = props;
                        return (
                            <div
                                key={key}
                                {...restProps}
                                style={{
                                    ...restProps.style,
                                    height: "24px",
                                    width: "24px",
                                    borderRadius: "50%",
                                    backgroundColor: "rgb(234, 88, 12)",
                                }}
                                className="flex items-center outline-none justify-center"
                            />
                        );
                    }}
                />
                <div className="flex justify-between mt-4">
                    <span className="font-semibold">$: {values[0] * 10}k</span>
                    <span className="font-semibold">$: {values[1] * 10}k</span>
                </div>
            </div>
            <div>
                <Button type={"secondary"} center={true}>
                    Bid Property
                </Button>
            </div>
        </div>
    );
};

export default BidRange;
