import React, { ReactNode } from "react";
import { clsx } from "clsx";

interface Column<T> {
  key: keyof T;
  label: string;
  render?: (value: any, row: T) => ReactNode;
  width?: string;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  emptyMessage?: string;
  rowKey: keyof T;
  onRowClick?: (row: T) => void;
  striped?: boolean;
}

export function Table<T extends Record<string, any>>({
  columns,
  data,
  isLoading = false,
  emptyMessage = "No data available",
  rowKey,
  onRowClick,
  striped = true,
}: TableProps<T>) {
  return (
    <div className="table-container">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="table-header divide-x divide-slate-200/30">
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={clsx(
                    "table-cell text-left font-semibold text-slate-700",
                    column.width && `w-${column.width}`
                  )}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/30">
            {isLoading ? (
              <tr>
                <td colSpan={columns.length} className="table-cell py-12 text-center">
                  <div className="flex justify-center items-center">
                    <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                  </div>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="table-cell py-12 text-center">
                  <p className="text-slate-500 font-medium">{emptyMessage}</p>
                </td>
              </tr>
            ) : (
              data.map((row, index) => (
                <tr
                  key={String(row[rowKey])}
                  className={clsx(
                    "table-row divide-x divide-slate-200/30 cursor-pointer",
                    striped && index % 2 === 0 && "bg-slate-50/30",
                    onRowClick && "hover:bg-slate-100/50"
                  )}
                  onClick={() => onRowClick?.(row)}
                >
                  {columns.map((column) => (
                    <td
                      key={`${String(row[rowKey])}-${String(column.key)}`}
                      className="table-cell text-slate-700"
                    >
                      {column.render
                        ? column.render(row[column.key], row)
                        : row[column.key]}
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
