import React from 'react';
import { Bed, Calendar, CreditCard, Bell, Wifi, Coffee, Clock } from 'lucide-react';

const StudentDashboard = () => {
    return (
        <div className="space-y-8">
            <header className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">My Overview</h1>
                    <p className="text-gray-500 mt-1">Welcome back, John!</p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-gray-500">Current Session</p>
                    <p className="font-semibold text-gray-900">Fall 2025</p>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Room Card */}
                <div className="md:col-span-2 bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg shadow-primary-900/20">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Bed size={120} />
                    </div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium mb-6">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            Occupied
                        </div>
                        <h2 className="text-4xl font-bold mb-1">Room A-105</h2>
                        <p className="text-primary-100 text-lg mb-8">Block A • Second Floor</p>

                        <div className="grid grid-cols-2 gap-4 max-w-md">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <p className="text-primary-200 text-sm mb-1">Roommate</p>
                                <p className="font-semibold">Searching...</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <p className="text-primary-200 text-sm mb-1">Monthly Rent</p>
                                <p className="font-semibold">$450.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Status</h3>
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                <CreditCard size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Next Payment</p>
                                <p className="font-bold text-gray-900">Due in 5 days</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                            Pay Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Amenities Status */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Hostel Amenities</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-gray-50 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                <Wifi size={20} />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Wi-Fi</p>
                                <p className="text-xs text-green-600 font-medium">Online (52 Mbps)</p>
                            </div>
                        </div>
                        <div className="p-4 rounded-2xl bg-gray-50 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                                <Coffee size={20} />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Cafeteria</p>
                                <p className="text-xs text-gray-500 font-medium">Open until 9 PM</p>
                            </div>
                        </div>
                        <div className="p-4 rounded-2xl bg-gray-50 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                <Clock size={20} />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Curfew</p>
                                <p className="text-xs text-gray-500 font-medium">10:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notices */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Notice Board</h3>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex flex-col items-center justify-center shrink-0">
                                <span className="text-xs font-bold">DEC</span>
                                <span className="text-lg font-bold leading-none">06</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">Maintenance Work</h4>
                                <p className="text-sm text-gray-500 line-clamp-2">The water supply in Block A will be interrupted tomorrow from 10 AM to 2 PM for maintenance.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex flex-col items-center justify-center shrink-0">
                                <span className="text-xs font-bold">DEC</span>
                                <span className="text-lg font-bold leading-none">12</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">Holiday Dinner</h4>
                                <p className="text-sm text-gray-500 line-clamp-2">Join us for a special dinner event in the main hall.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
