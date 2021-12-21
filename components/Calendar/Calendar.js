import React, { useEffect } from "react";
import {calendarImage} from '../../assets/calendar.png'
export default function Calendar() {
    return (
        <>
            <div>
            
                <div className="flex items-center justify-between pt-5 mt-10 overflow-x-auto border-solid border-2 border-indigo-600">
                    <table className="w-full">
                        <thead className="border-b-[3px] border-gray-400">
                            <tr>
                                <th>
                                    <div className="w-full flex justify-center">
                                        <p className="text-tiny font-medium text-center text-gray-800 dark:text-gray-100">Mo</p>
                                    </div>
                                </th>
                                <th>
                                    <div className="w-full flex justify-center">
                                        <p className="text-tiny font-medium text-center text-gray-800 dark:text-gray-100">Tu</p>
                                    </div>
                                </th>
                                <th>
                                    <div className="w-full flex justify-center">
                                        <p className="text-tiny font-medium text-center text-gray-800 dark:text-gray-100">We</p>
                                    </div>
                                </th>
                                <th>
                                    <div className="w-full flex justify-center">
                                        <p className="text-tiny font-medium text-center text-gray-800 dark:text-gray-100">Th</p>
                                    </div>
                                </th>
                                <th>
                                    <div className="w-full flex justify-center">
                                        <p className="text-tiny font-medium text-center text-gray-800 dark:text-gray-100">Fr</p>
                                    </div>
                                </th>
                                <th>
                                    <div className="w-full flex justify-center">
                                        <p className="text-tiny font-medium text-center text-gray-800 dark:text-gray-100">Sa</p>
                                    </div>
                                </th>
                                <th>
                                    <div className="w-full flex justify-center">
                                        <p className="text-tiny font-medium text-center text-gray-800 dark:text-gray-100  text-red-600">Su</p>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="pt-6">
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                                </td>
                                <td className="pt-6">
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center" />
                                </td>
                                <td className="pt-6">
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">1</p>
                                    </div>
                                </td>
                                <td className="pt-6">
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">2</p>
                                    </div>
                                </td>
                                <td className="pt-6">
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100">3</p>
                                    </div>
                                </td>
                                <td className="pt-6">
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100">4</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">5</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">6</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">7</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="w-full h-full">
                                        <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                            <p className="text-tiny w-14 h-14 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full">8</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">9</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100">10</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100">11</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">12</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">13</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">14</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">15</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">16</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100">17</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100">18</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">19</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">20</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">21</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">22</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">23</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100">24</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100">25</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">26</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">27</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">28</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">29</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="px-4 py-4 cursor-pointer flex w-full justify-center">
                                        <p className="text-tiny text-gray-500 dark:text-gray-100 font-medium">30</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}