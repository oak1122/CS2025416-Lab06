'use client'
import React, {useState, useEffect} from "react";
import Link from "next/link";

export default function page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/employee/')
      .then(res => res.json())
      .then(result => {
        //console.log(result);
        setUsers(result);
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Users</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <div key={user.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold px-2.5 py-1 bg-blue-100 text-blue-800 rounded-full">
                ID: {user.id}
              </span>
            </div>
            <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500 mt-1">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}