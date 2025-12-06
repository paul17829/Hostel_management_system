import React, { useState } from 'react';
import { BedDouble, Users, Search, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

const ROOMS_DATA = [
    { id: 101, block: 'A', type: 'Single', capacity: 1, occupants: 1, price: 500, status: 'Occupied' },
    { id: 102, block: 'A', type: 'Double', capacity: 2, occupants: 1, price: 350, status: 'Available' },
    { id: 103, block: 'A', type: 'Double', capacity: 2, occupants: 2, price: 350, status: 'Occupied' },
    { id: 104, block: 'B', type: 'Triple', capacity: 3, occupants: 0, price: 250, status: 'Available' },
    { id: 105, block: 'B', type: 'Single', capacity: 1, occupants: 0, price: 450, status: 'Available' },
    { id: 106, block: 'C', type: 'Double', capacity: 2, occupants: 2, price: 300, status: 'Occupied' },
];

const Rooms = () => {
    const [filter, setFilter] = useState('All');

    const filteredRooms = filter === 'All'
        ? ROOMS_DATA
        : ROOMS_DATA.filter(r => r.status === filter);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Rooms</h1>
                    <p className="text-gray-500 mt-1">Manage hostel rooms and occupancy</p>
                </div>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors">
                    <Plus size={20} />
                    Add Room
                </button>
            </div>

            <div className="flex gap-2 border-b border-gray-200 pb-1 overflow-x-auto">
                {['All', 'Available', 'Occupied'].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={cn(
                            "px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap",
                            filter === f
                                ? "bg-gray-900 text-white"
                                : "text-gray-600 hover:bg-gray-100"
                        )}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredRooms.map((room) => (
                    <div key={room.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden group">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-primary-50 text-primary-700 font-bold px-3 py-1 rounded-lg">
                                    {room.block}-{room.id}
                                </div>
                                <div className={cn(
                                    "px-2 py-1 rounded-full text-xs font-semibold",
                                    room.status === 'Available' ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                )}>
                                    {room.status}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <BedDouble size={18} />
                                    <span className="text-sm">{room.type} Room</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Users size={18} />
                                    <span className="text-sm">{room.occupants} / {room.capacity} Occupants</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                                <span className="text-lg font-bold text-gray-900">${room.price}<span className="text-sm font-normal text-gray-500">/mo</span></span>
                                <button className="opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium text-primary-600 hover:text-primary-700">
                                    Edit Details
                                </button>
                            </div>
                        </div>
                        <div className={cn(
                            "h-1.5 w-full",
                            room.status === 'Available' ? "bg-green-500" : "bg-red-500"
                        )} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rooms;
