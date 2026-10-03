"use client";

import { useEffect, useState } from "react";
import TableView, { Column } from "@/components/admin/TableView";

interface ISchoolRef {
    _id: string;
    name: string;
    district?: string;
}

interface IStudent {
    _id?: string;
    name: string;
    grade?: string;
    schoolId?: ISchoolRef | string;
    parentName?: string;
    parentContact: string;
}

export default function StudentsPage() {
    const [students, setStudents] = useState<IStudent[]>([]);
    const [schools, setSchools] = useState<ISchoolRef[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        name: "",
        grade: "",
        schoolId: "",
        parentName: "",
        parentContact: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchStudents = async () => {
        try {
            setIsLoading(true);
            const res = await fetch("/api/students");
            const json = await res.json();
            if (json.success) {
                setStudents(json.data);
            }
        } catch (error) {
            console.error("Failed to fetch students:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchSchoolsOptions = async () => {
        try {
            const res = await fetch("/api/school");
            const json = await res.json();
            if (json.success) {
                setSchools(json.data);
            }
        } catch (error) {
            console.error("Failed to fetch schools list:", error);
        }
    };

    useEffect(() => {
        fetchStudents();
        fetchSchoolsOptions();
    }, []);

    const handleCreateStudent = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            const res = await fetch("/api/students", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const json = await res.json();
            if (json.success) {
                setFormData({ name: "", grade: "", schoolId: "", parentName: "", parentContact: "" });
                setIsModalOpen(false);
                fetchStudents();
            }
        } catch (error) {
            console.error("Failed to add student:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const columns: Column<IStudent>[] = [
        {
            header: "Student Name",
            accessorKey: "name",
            render: (student) => (
                <span className="font-semibold text-gray-900 dark:text-white">
                    {student.name}
                </span>
            ),
        },
        {
            header: "Grade",
            accessorKey: "grade",
            render: (student) => (
                <span className="font-semibold text-gray-900 dark:text-white">
                    {student.grade}
                </span>
            ),
        },
        {
            header: "School",
            render: (student) => {
                if (!student.schoolId) return "—";
                if (typeof student.schoolId === "object") {
                    return student.schoolId.name;
                }
                return student.schoolId;
            },
        },
        {
            header: "Parent Contact",
            render: (student) => (
                <div>
                    <div className="text-gray-900 dark:text-white font-medium">
                        {student.parentContact}
                    </div>
                    {student.parentName && (
                        <div className="text-xs text-gray-500">{student.parentName}</div>
                    )}
                </div>
            ),
        },
    ];

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-6">
            <TableView<IStudent>
                title="Registered Students"
                subtitle="Manage enrolled students receiving home food deliveries."
                addButtonText="Add New Student"
                onAddClick={() => setIsModalOpen(true)}
                columns={columns}
                data={students}
                isLoading={isLoading}
            />

            {/* Add Student Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white dark:bg-gray-900 rounded-xl max-w-md w-full p-6 shadow-xl border border-gray-200 dark:border-gray-800 space-y-4">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                            Add Registered Student
                        </h2>
                        <form onSubmit={handleCreateStudent} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Student Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Rahul K"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Grade
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. 8A"
                                    value={formData.grade}
                                    onChange={(e) =>
                                        setFormData({ ...formData, grade: e.target.value })
                                    }
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    School
                                </label>
                                <select
                                    required
                                    value={formData.schoolId}
                                    onChange={(e) =>
                                        setFormData({ ...formData, schoolId: e.target.value })
                                    }
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                >
                                    <option value="">Select a School</option>
                                    {schools.map((school) => (
                                        <option key={school._id} value={school._id}>
                                            {school.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Parent Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Suresh K"
                                    value={formData.parentName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, parentName: e.target.value })
                                    }
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Parent Contact Number
                                </label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="e.g. +91 9876543210"
                                    value={formData.parentContact}
                                    onChange={(e) =>
                                        setFormData({ ...formData, parentContact: e.target.value })
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
                                    {isSubmitting ? "Saving..." : "Save Student"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}