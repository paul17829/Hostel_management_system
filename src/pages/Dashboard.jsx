import React from 'react';
import { BedDouble, Users, AlertCircle, TrendingUp, DollarSign } from 'lucide-react';

const StatCard = ({ label, value, icon: Icon, color, trend }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-gray-500 text-sm font-medium mb-1">{label}</p>
                <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
            </div>
            <div className={`p-3 rounded-xl ${color}`}>
                <Icon size={24} />
            </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 font-medium flex items-center gap-1">
                <TrendingUp size={16} />
                {trend}
            </span>
            <span className="text-gray-400 ml-2">vs last month</span>
        </div>
    </div>
);

const Dashboard = () => {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-500 mt-1">Overview of your hostel's performance</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    label="Total Students"
                    value="124"
                    icon={Users}
                    color="bg-blue-100 text-blue-600"
                    trend="+12%"
                />
                <StatCard
                    label="Occupancy Rate"
                    value="85%"
                    icon={BedDouble}
                    color="bg-purple-100 text-purple-600"
                    trend="+5%"
                />
                <StatCard
                    label="Revenue (Month)"
                    value="$12,450"
                    icon={DollarSign}
                    color="bg-green-100 text-green-600"
                    trend="+8.2%"
                />
                <StatCard
                    label="Pending Requests"
                    value="3"
                    icon={AlertCircle}
                    color="bg-orange-100 text-orange-600"
                    trend="-2"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h3>
                    <div className="space-y-6">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                    <span className="font-bold text-gray-600">JD</span>
                                </div>
                                <div>
                                    <p className="text-gray-900 font-medium">John Doe paid room fee</p>
                                    <p className="text-sm text-gray-500">2 hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Occupancy Status</h3>
                    {/* Simple visual mock */}
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm font-medium mb-2">
                                <span>Block A</span>
                                <span className="text-gray-500">45/50</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-primary-500 w-[90%] rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm font-medium mb-2">
                                <span>Block B</span>
                                <span className="text-gray-500">28/40</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 w-[70%] rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm font-medium mb-2">
                                <span>Block C</span>
                                <span className="text-gray-500">12/30</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-[40%] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
