import React from "react";
import { Data } from "../data.jsx"; 
import ThBeauty from "./thBeauty.jsx";
import TdBeauty from "./tdBeauty.jsx";


export default function TableScheduler(){
    return(
        <div className="m-10">
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-200">
                    <tr>
                        <ThBeauty header="Day"/>
                        <ThBeauty header="Breakfast"/>
                        <ThBeauty header="Lunch"/>
                        <ThBeauty header="Appetizer"/>
                        <ThBeauty header="Dinner"/>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {Object.entries(Data).map(([day, meals], index) => (
                        <tr key={day} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                            <TdBeauty content={day}/>
                            <TdBeauty content={meals.breakfast}/>
                            <TdBeauty content={meals.lunch}/>
                            <TdBeauty content={meals.appetizer}/>
                            <TdBeauty content={meals.dinner}/>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
