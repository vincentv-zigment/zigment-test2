import { classNames } from "@/lib/common";
import {
    ChevronLeftIcon,
    ChevronRightIcon
} from "@heroicons/react/24/solid";
import React, { useCallback, useEffect } from "react";
import Spinner from "../common/Spinner";
import DropDown from "./DropDown";
import { DropDownProvider } from "./DropDownContainer";


export interface SelectionOption {
    button_name: string;
    action: (selectedItems: string[]) => void;
}

interface valuesOptionsI {
    key: string,
    checked: boolean
}

export interface checkboxFilterValuesI {
    options: valuesOptionsI[];
    key: string;
    label: string;
}

export interface searchFilterValuesI {
    value: string;
    key: string;
    label: string;
}

export interface sortI {
    key: string;
    type: "asc" | "desc";
}

export interface RowActions {
    div_component: React.ReactNode;
}

export enum HeaderItemForTableTypes {
    TEXT = "text",
    CUSTOM_COMPONENT = "custom_component",
}
export interface HeaderItemForTable {
    key: string;
    label: string;
    type: HeaderItemForTableTypes;
}
export interface CommonTablData {

    [key: string]: any;

}
export interface CommonTableProps {
    selectionOptions: SelectionOption[];
    header_items: HeaderItemForTable[];
    data: CommonTablData[];
    selectedItems: string[];
    setSelectedItems: (selectedItems: string[]) => void;
    handleCheckboxChange: (item: any) => void;
    onRowClick?: (item: any) => void;
    onRowDoubleClick?: (item: any) => void;
    rowActions?: (item: any) => React.ReactNode[];
    renderCustomComponent?: (item: any, key: string) => React.ReactNode;
    pagination: {
        totalItems: number;
        itemsPerPage: number;
        onPageChange: (page: number) => void;
    };
    isLoading: boolean;
    currentPage: number;
}

function CommonTable(props: CommonTableProps) {
    const {
        selectionOptions,
        header_items,
        data,
        onRowClick,
        rowActions,
        selectedItems,
        setSelectedItems,
        onRowDoubleClick,
        handleCheckboxChange,
        renderCustomComponent,
        pagination,
        isLoading,
        currentPage
    } = props;

    const handleRowClick = useCallback(
        (item: any) => {
            if (onRowClick) {
                onRowClick(item);
            }
        },
        [onRowClick]
    );

    const showCheckboxes =
        selectionOptions && selectionOptions.length > 0 ? true : false;

    const handleRowDoubleClick = useCallback(
        (item: any) => {
            if (onRowDoubleClick) {
                onRowDoubleClick(item);
            }
        },
        [onRowDoubleClick]
    );

    useEffect(() => {
        setSelectedItems([])
    }, [data])

    return (
        <>
            <DropDownProvider>
                <div className="w-full py-2 font-outfit  ">
                    <div className="relative    md:rounded-b-lg   ">
                        {selectedItems.length > 0 && (
                            <div className="  -top-10 left-12 flex h-12 items-center space-x-3  sm:left-16">
                                {selectionOptions &&
                                    selectionOptions.length > 0 &&
                                    selectionOptions.map((option, index) => (
                                        <button
                                            key={option.button_name}
                                            type="button"
                                            className="inline-flex items-center rounded 
                            px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm text-white
                            hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-green-500 
                            focus:ring-offset-1 disabled:cursor-not-allowed bg-red-400 hover:bg-red-500 disabled:opacity-30"
                                            onClick={() => {
                                                option.action(selectedItems);
                                            }}
                                        >
                                            {option.button_name}
                                        </button>
                                    ))}
                            </div>
                        )}
                        <div className="overflow-x-auto custom-scroll border-2 border-[#848484]/30   rounded-lg">
                            {
                                isLoading ?
                                    (<div className="flex justify-center items-center">
                                        <Spinner color='text-green-500' />
                                    </div>)
                                    :
                                    <table className="min-w-full table-fixed    customscroll  rounded-lg   ">
                                        <thead className="bg-[#eef3f9] text-[#0c4a25] customscroll  rounded-lg border-b-2 border-[#848484]/30   ">
                                            <tr>
                                                {showCheckboxes && (
                                                    <th
                                                        scope="col"
                                                        className="relative w-12 px-6 sm:w-16 sm:px-8 cursor-default"
                                                    >
                                                        <input
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-brand-orange-deski focus:ring-brand-orange-deski sm:left-6 cursor-default"
                            type="checkbox"
                            checked={
                              selectedItems.length === data.length &&
                              data.length > 0
                            }
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedItems(
                                  data.map((item) => item._id as string)
                                );
                              } else {
                                setSelectedItems([]);
                              }
                            }}
                          />
                                                    </th>
                                                )}

                                                {header_items &&
                                                    header_items.length > 0 &&
                                                    header_items.map((item) => (
                                                        <th
                                                            scope="col"
                                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900   "
                                                            key={item.key}
                                                        >
                                                            <span
                                                                className="w-full text-left cursor-default flex gap-4 items-center"
                                                            >
                                                                {item.label}

                                                            </span>
                                                        </th>
                                                    ))}
                                                {rowActions && (
                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    >
                                                        Actions
                                                    </th>
                                                )}
                                            </tr>
                                        </thead>
                                        <tbody className="  bg-white ">
                                            {data
                                                .map((data_item: any, table_index_) => {
                                                    const is_selected = selectedItems.includes(data_item[`_id`] as string);
                                                    const item_id = data_item._id;
                                                    return (
                                                        <tr
                                                            key={`${item_id}_${table_index_}`}
                                                            className={`${classNames(
                                                                is_selected ? "bg-gray-50" : "",
                                                                "font-semibold relative"
                                                            )} ${table_index_ % 2 === 0 ? 'bg-white' : 'bg-gray-100'} `}
                                                            onClick={() => {
                                                                handleRowClick(data_item);
                                                            }}
                                                            onDoubleClick={() => {
                                                                handleRowDoubleClick(data_item);
                                                            }}
                                                        >
                                                            {showCheckboxes && (
                                                                <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                                                                    {is_selected && (
                                                                        <div className="absolute inset-y-0 left-0 w-0.5 bg-brand-orange-deski" />
                                                                    )}
                                                                    <input
                                                                        type="checkbox"
                                                                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-brand-orange-deski focus:ring-brand-orange-deski sm:left-6"
                                                                        checked={selectedItems.includes(item_id as string)}
                                                                        onChange={(e) => {
                                                                            handleCheckboxChange(item_id as string);
                                                                        }}
                                                                    />
                                                                </td>
                                                            )}
                                                            {header_items &&
                                                                header_items.length > 0 &&
                                                                header_items.map((item) => {
                                                                    if (
                                                                        item.type ===
                                                                        HeaderItemForTableTypes.CUSTOM_COMPONENT
                                                                    ) {
                                                                        return (
                                                                            <td
                                                                                className="px-3 py-4 text-left text-sm font-medium text-gray-900"
                                                                                key={item.key}
                                                                            >
                                                                                {renderCustomComponent &&
                                                                                    renderCustomComponent(data_item, item.key)}
                                                                            </td>
                                                                        );
                                                                    } else if (
                                                                        item.type === HeaderItemForTableTypes.TEXT
                                                                    ) {
                                                                        return (
                                                                            <td
                                                                                className={"px-3 py-4 text-sm text-black font-medium "}
                                                                                key={item.key}
                                                                            >
                                                                                {data_item && data_item[item.key]
                                                                                    ? `${data_item[item.key].length > 75
                                                                                        ? data_item[item.key].slice(0, 75) +
                                                                                        "..."
                                                                                        : data_item[item.key]
                                                                                    }`
                                                                                    : ``}
                                                                            </td>
                                                                        );
                                                                    }
                                                                })}
                                                                {rowActions && 
                                                                
                                                            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm   relative sm:pr-6">
                                                                <div className="flex gap-1 ">
                                                                    
                                                                        {rowActions(data_item).map((action) => action)}
                                                                </div>
                                                            </td>}
                                                        </tr>
                                                    );
                                                })}
                                        </tbody>
                                    </table>
                            }
                        </div>

                        <div className="flex items-center justify-between    bg-white px-4 py-3 sm:px-6 rounded-b-lg ">
                            <div className="flex flex-1 justify-between sm:hidden">
                                <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    Previous
                                </a>
                                <a
                                    href="#"
                                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    Next
                                </a>
                            </div>
                            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-700">
                                        Showing
                                        <span className="font-medium">
                                            {" "}
                                            {Math.min(
                                                currentPage * pagination.itemsPerPage,
                                                pagination.totalItems
                                            ) === 0
                                                ? 0
                                                : (currentPage - 1) * pagination.itemsPerPage + 1}{" "}
                                        </span>
                                        to
                                        <span className="font-medium">
                                            {" "}
                                            {Math.min(
                                                currentPage * pagination.itemsPerPage,
                                                pagination.totalItems
                                            )}{" "}
                                        </span>
                                        of
                                        <span className="font-medium"> {pagination.totalItems} </span>{" "}
                                        results
                                    </p>
                                </div>

                                <div className="overflow-x-auto whitespace-nowrap">
                                    <nav
                                        className="isolate inline-flex -space-x-px rounded-md  "
                                        aria-label="Pagination"
                                    >
                                        <a
                                            onClick={() => pagination.onPageChange(currentPage - 1)}
                                            className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${currentPage === 1
                                                ? "cursor-not-allowed"
                                                : "hover:bg-gray-50"
                                                } focus:z-20 focus:outline-offset-0`}
                                        >
                                            <span className="sr-only">Previous</span>
                                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                        </a>
                                        {
                                            [...Array(Math.ceil(pagination.totalItems / pagination.itemsPerPage))].map((_, i) => {
                                                // Show the first 3 pages
                                                if (i < 3) {
                                                    return <a
                                                        key={`pagination-${i}`}
                                                        onClick={() => pagination.onPageChange(i + 1)}
                                                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === i + 1
                                                            ? "bg-brand-orange-deski text-white"
                                                            : "text-brand-orange-deski ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                            } focus:z-20 focus:outline-offset-0 cursor-default`}
                                                    >
                                                        {i + 1}
                                                    </a>;
                                                }

                                                // Show the current page and adjacent 3 pages
                                                if (i >= currentPage - 4 && i <= currentPage) {
                                                    return <a
                                                        key={`pagination-${i}`}
                                                        onClick={() => pagination.onPageChange(i + 1)}
                                                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === i + 1
                                                            ? "bg-brand-orange-deski text-white"
                                                            : "text-brand-orange-deski ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                            } focus:z-20 focus:outline-offset-0`}
                                                    >
                                                        {i + 1}
                                                    </a>;
                                                }
                                                if (currentPage > 15 && i === Math.ceil(pagination.totalItems / pagination.itemsPerPage) / 2) {
                                                    return (
                                                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                                            ...
                                                        </span>
                                                    )
                                                }

                                                // Show the last 3 pages
                                                if (i >= Math.ceil(pagination.totalItems / pagination.itemsPerPage) - 3) {

                                                    return <a
                                                        key={`pagination-${i}`}
                                                        onClick={() => pagination.onPageChange(i + 1)}
                                                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === i + 1
                                                            ? "bg-brand-orange-deski text-white"
                                                            : "text-brand-orange-deski ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                            } focus:z-20 focus:outline-offset-0`}
                                                    >
                                                        {i + 1}
                                                    </a>;
                                                }
                                                // inline-flex items-center justify-center rounded-md  bg-brand-orange-deski px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-brand-darkGreen focus:ring-offset-2 sm:w-auto mt-2


                                                return null;
                                            })
                                        }




                                        <a
                                            onClick={() => pagination.onPageChange(currentPage + 1)}
                                            className={`  inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${currentPage === Math.ceil(pagination.totalItems / pagination.itemsPerPage)
                                                ? "cursor-not-allowed"
                                                : "hover:bg-gray-50"
                                                } focus:z-20 focus:outline-offset-0`}
                                        >
                                            <span className="sr-only">Next</span>
                                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DropDown />
            </DropDownProvider>

        </>
    );
}

export default CommonTable;

