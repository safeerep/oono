"use client"

import { useState, useEffect } from "react";
import { ISchool } from "@/types/school";

const ListOfSchools = () => {
    const [schools, setSchools] = useState<ISchool[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchSchools = async () => {
        try {
            setIsLoading(true);
            const res = await fetch("/api/school");
            const json = await res.json();
            if (json.success) {
                setSchools(json.data);
            }
        } catch (error) {
            console.error("Failed to fetch schools:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSchools();
    }, []);

    return (
        <div className="grid gap-4 sm:grid-cols-3">
            {schools.map((school) => (
                <div key={school.name} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                    <span className="rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700">
                        Active
                    </span>
                    <h3 className="mt-3 font-black">{school.name}</h3>
                    <p className="mt-1 text-xs text-black/45">📍 {school.place}, {school.district}</p>
                </div>
            ))}
        </div>
    )
}

export default ListOfSchools;