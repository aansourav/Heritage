"use client";
import SocialLogIn from "@/Auth/SocialLogIn/SocialLogIn";
import Link from "next/link";
import { useForm } from "react-hook-form";

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className="max-w-7xl md:w-7/12 mx-auto px-4 md:px-6 lg:px-10 mt-8">
            <h1 className="text-2xl md:text-4xl font-bold mt-8 md:mt-14">
                Sign In to Your Account
            </h1>

            <section className="mt-8">
                <form className="space-y-6">
                    <div>
                        <label>Email</label>
                        <input
                            className="mt-2 focus:border bg-[#F6F6F9] focus:bg-inherit w-full mx-auto rounded-md py-3 px-3 focus:outline-none"
                            {...register("email", {
                                required: "This field is required",
                            })}
                            placeholder="Enter email"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            className="mt-2 focus:border bg-[#F6F6F9] focus:bg-inherit w-full mx-auto rounded-md py-3 px-3 focus:outline-none"
                            {...register("password", {
                                required: "This field is required",
                            })}
                            placeholder="Enter Password"
                        />
                        {errors.password && (
                            <span className="text-red-500 text-sm">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded w-full"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </section>

            <section>
                <div className="flex items-center text-center justify-center gap-3 my-8">
                    <div className="border-b w-2/12"></div>
                    <p className="font-medium text-gray-600">
                        Or, Sign in with your email
                    </p>
                    <div className="border-b w-2/12"></div>
                </div>
                <SocialLogIn />
                <div>
                    <p className="font-medium text-gray-600 text-center my-11">
                        Do not have an account?
                        <span className="text-red-600 px-1">
                            <Link href="/signup">Sign Up</Link>
                        </span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default SignIn;
