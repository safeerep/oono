"use client";

import React, { ReactNode } from "react";

export interface Column<T> {
    header: string;
    accessorKey?: keyof T;
    render?: (row: T) => ReactNode;
}

interface TableViewProps<T> {
    title: string;
    subtitle?: string;
    addButtonText?: string;
    onAddClick?: () => void;
    columns: Column<T>[];
    data: T[];
    isLoading?: boolean;
}

export default function TableView<T extends { _id?: string }>({
    title,
    subtitle,
    addButtonText,
    onAddClick,
    columns,
    data,
    isLoading = false,
}: TableViewProps<T>) {
    return (
        <div className="w-full space-y-6">
            {/* Header & Action Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {subtitle}
                        </p>
                    )}
                </div>
                {addButtonText && onAddClick && (
                    <button
                        onClick={onAddClick}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm transition-colors duration-200"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                        {addButtonText}
                    </button>
                )}
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
                    <thead className="bg-gray-50 dark:bg-gray-800/60 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800">
                        <tr>
                            {columns.map((col, idx) => (
                                <th key={idx} scope="col" className="px-6 py-3.5 font-semibold">
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                        {isLoading ? (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="px-6 py-12 text-center text-gray-500 dark:text-gray-400"
                                >
                                    <div className="inline-flex items-center gap-2">
                                        <svg
                                            className="animate-spin h-5 w-5 text-emerald-600"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                            ></path>
                                        </svg>
                                        <span>Fetching data...</span>
                                    </div>
                                </td>
                            </tr>
                        ) : data.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="px-6 py-12 text-center text-gray-500 dark:text-gray-400"
                                >
                                    No records found.
                                </td>
                            </tr>
                        ) : (
                            data.map((row, rowIdx) => (
                                <tr
                                    key={row._id || rowIdx}
                                    className="hover:bg-gray-50/60 dark:hover:bg-gray-800/40 transition-colors"
                                >
                                    {columns.map((col, colIdx) => (
                                        <td key={colIdx} className="px-6 py-4 whitespace-nowrap">
                                            {col.render
                                                ? col.render(row)
                                                : col.accessorKey
                                                    ? (row[col.accessorKey] as ReactNode)
                                                    : null}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}