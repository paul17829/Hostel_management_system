import React from 'react';
import { Search, MoreHorizontal, Mail, Phone, MapPin } from 'lucide-react';

const STUDENTS_DATA = [
    { id: 1, name: 'Alice Johnson', room: 'A-101', course: 'Computer Science', year: '2nd', contact: 'alice@example.com', status: 'Active' },
    { id: 2, name: 'Bob Smith', room: 'A-103', course: 'Engineering', year: '3rd', contact: 'bob@example.com', status: 'Active' },
    { id: 3, name: 'Charlie Brown', room: 'B-104', course: 'Physics', year: '1st', contact: 'charlie@example.com', status: 'Late Payment' },
    { id: 4, name: 'Diana Ross', room: 'C-106', course: 'Arts', year: '4th', contact: 'diana@example.com', status: 'Active' },
    { id: 5, name: 'Edward Norton', room: 'A-103', course: 'Business', year: '2nd', contact: 'edward@example.com', status: 'Inactive' },
];

const Students = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Students</h1>
                    <p className="text-gray-500 mt-1">Directory of all registered students</p>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search students..."
                        className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
                    />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-gray-700 text-sm">Student</th>
                                <th className="px-6 py-4 font-semibold text-gray-700 text-sm">Room</th>
                                <th className="px-6 py-4 font-semibold text-gray-700 text-sm">Course info</th>
                                <th className="px-6 py-4 font-semibold text-gray-700 text-sm">Status</th>
                                <th className="px-6 py-4 font-semibold text-gray-700 text-sm">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {STUDENTS_DATA.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                                                {student.name[0]}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">{student.name}</p>
                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                    <Mail size={12} />
                                                    {student.contact}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-gray-100 px-2 py-1 rounded text-sm font-medium text-gray-700">{student.room}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm text-gray-900">{student.course}</p>
                                        <p className="text-xs text-gray-500">Year {student.year}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${student.status === 'Active' ? 'bg-green-100 text-green-800' :
                                                student.status === 'Inactive' ? 'bg-gray-100 text-gray-800' :
                                                    'bg-red-100 text-red-800'
                                            }`}>
                                            {student.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Students;
