import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";

function Invitation(props) {
    console.log(props);
    const { data, setData, post, processing, errors, reset } = useForm({
        couple_name : '',
        location : '',
        invitation_url : '',
        status : '',
        chat : '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('addInvitation'));
    };
    console.log(data)
    
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {props.header}
                </h2>
            }
        >
            <div className="max-w-7xl md:mx-auto py-6 px-4 sm:px-5 lg:px-8">
                <div className="mt-5 bg-white rounded-md mx-5 md:mx-0 overflow-x-auto">
                    {props.data.length < 1 ? (
                        <p>Data Tidak ditemukan</p>
                    ) : (
                        <table className="table w-[800px] md:w-full">
                            <thead className="table-header-group text-right pr-2 border-b-2">
                                <tr className="table-row">
                                    <th className="table-cell"></th>
                                    <th className="table-cell">User Name</th>
                                    <th className="table-cell">Couple Name</th>
                                    <th className="table-cell">Location</th>
                                    <th className="table-cell">Url</th>
                                    <th className="table-cell">Status</th>
                                </tr>
                            </thead>
                            <tbody className="table-row-group text-right">
                                {props.data.map((props, index) => (
                                    <tr
                                        className="table-row border-b-2"
                                        key={index}
                                    >
                                        <td className="table-cell">
                                            {index + 1}
                                        </td>
                                        <td className="table-cell mr-9">
                                            {props.name || "-"}
                                        </td>
                                        <td className="table-cell">
                                            {props.email}
                                        </td>
                                        <td className="table-cell">
                                            {props.phone || "-"}
                                        </td>
                                        <td className="table-cell">
                                            {props.role || "-"}
                                        </td>
                                        <td className="table-cell space-x-1 py-2 pr-2">
                                            <PrimaryButton children={"Edit"} />
                                            <PrimaryButton
                                                children={"Delete"}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </Authenticated>
    );
}

export default Invitation;
