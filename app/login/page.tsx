"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

// ✅ Zod Schema
const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginSchema) => {
        console.log("Submitted Data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="mx-auto h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <div className="h-6 w-6 bg-white rounded-sm"></div>
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                        Welcome back to SMToolify
                    </h1>
                    <p className="text-gray-600">Please sign in to your account</p>
                </div>

                {/* Login Card */}
                <Card className="shadow-sm border border-gray-200 bg-white">
                    <CardContent className="p-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {/* Email Field */}
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    {...register("email")}
                                    className="h-11 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-400"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                    Password
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        {...register("password")}
                                        className="h-11 pr-10 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-400"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                                )}
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                                    />
                                    <label htmlFor="remember" className="text-sm text-gray-600">
                                        Remember me
                                    </label>
                                </div>
                                <Link
                                    href="/forgot-password"
                                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2.5 px-4 rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed h-11"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                        <span>Signing in...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center space-x-2">
                                        <span>Sign in</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                )}
                            </Button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-3 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        {/* Social Login */}
                        <div className="grid grid-cols-2 gap-3">
                            <Button
                                variant="outline"
                                className="h-11 cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 flex items-center justify-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" id="google">
                                    <path fill="#00ac47" d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16"></path>
                                    <path fill="#4285f4" d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16"></path>
                                    <path fill="#ffba00" d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z"></path>
                                    <polygon fill="#2ab2db" points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374"></polygon>
                                    <path fill="#ea4435" d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z"></path>
                                    <polygon fill="#2ab2db" points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626"></polygon>
                                    <path fill="#4285f4" d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z"></path>
                                </svg>
                                Google
                            </Button>
                            <Button
                                variant="outline"
                                className="h-11 cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 flex items-center justify-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="facebook">
                                    <path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"></path>
                                    <path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"></path>
                                </svg>
                                Facebook
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Footer */}
                <div className="text-center mt-6">
                    <p className="text-gray-600 text-sm">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-blue-600 font-medium hover:text-blue-700">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
