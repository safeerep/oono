"use client";

import { useEffect, useState } from "react";
import TableView, { Column } from "@/components/admin/TableView";

interface ISchool {
    _id?: string;
    name: string;
    place: string;
    district?: string;
}

export default function SchoolsPage() {
    const [schools, setSchools] = useState<ISchool[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [formData, setFormData] = useState({ name: "", place: "", district: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleCreateSchool = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            const res = await fetch("/api/school", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const json = await res.json();
            if (json.success) {
                setFormData({ name: "", place: "", district: "" });
                setIsModalOpen(false);
                fetchSchools();
            }
        } catch (error) {
            console.error("Failed to add school:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const columns: Column<ISchool>[] = [
        {
            header: "School Name",
            accessorKey: "name",
            render: (school) => (
                <span className="font-semibold text-gray-900 dark:text-white">
                    {school.name}
                </span>
            ),
        },
        {
            header: "Place / Location",
            accessorKey: "place",
        },
        {
            header: "District",
            render: (school) => school.district || "—",
        },
    ];

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-6">
            <TableView<ISchool>
                title="Partner Schools"
                subtitle="Manage schools registered for OONO home-cooked food delivery."
                addButtonText="Add New School"
                onAddClick={() => setIsModalOpen(true)}
                columns={columns}
                data={schools}
                isLoading={isLoading}
            />

            {/* Add School Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white dark:bg-gray-900 rounded-xl max-w-md w-full p-6 shadow-xl border border-gray-200 dark:border-gray-800 space-y-4">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                            Add Partner School
                        </h2>
                        <form onSubmit={handleCreateSchool} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    School Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Govt Higher Secondary School"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Place
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Masterpadi"
                                    value={formData.place}
                                    onChange={(e) =>
                                        setFormData({ ...formData, place: e.target.value })
                                    }
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    District
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Malappuram"
                                    value={formData.district}
                                    onChange={(e) =>
                                        setFormData({ ...formData, district: e.target.value })
                                    }
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                />
                            </div>
                            <div className="flex justify-end gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg disabled:opacity-50"
                                >
                                    {isSubmitting ? "Saving..." : "Save School"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}