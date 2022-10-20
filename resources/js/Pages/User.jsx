import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";

function User(props) {
    const user = usePage().props;
    console.log(user.data);

    function handleDelete() {
        if (confirm('Are you sure you want to delete this user?')) {
            Inertia.delete(route("user.destroy"))
        }
      }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {props.title}
                </h2>
            }
        >
            <div className="max-w-7xl md:mx-auto py-6 px-4 sm:px-5 lg:px-8">
                <Link href={route("user.create")} className="btn btn-primary" as="button">
                    Add User
                </Link>

                <div className=" mt-10 bg-white rounded-md overflow-x-auto">
                    <table className="table w-[800px] md:w-full">
                        <thead className="table-header-group text-right pr-2 border-b-2">
                            <tr className="table-row">
                                <th className="table-cell"></th>
                                <th className="table-cell">Name</th>
                                <th className="table-cell">Email</th>
                                <th className="table-cell">Phone</th>
                                <th className="table-cell">Role</th>
                                <th className="table-cell">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-row-group text-right">
                            {props.data.map((props, index) => (
                                <tr
                                    className="table-row border-b-2"
                                    key={index}
                                >
                                    <td className="table-cell">{index + 1}</td>
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
                                        <Link
                                            href={route("user.show", props.id)} as="button" className="btn btn-outline" 
                                        >
                                            Edit
                                            {/* <PrimaryButton
                                                children={"Edit"}
                                            /> */}
                                        </Link>
                                        <Link
                                             method="delete" as="button" className="btn btn-outline" onClick={handleDelete} data={{id: props.id}}
                                        >
                                            Delete
                                            {/* <PrimaryButton
                                                children={"Delete"} onClick={handleDelete}
                                            /> */}
                                        </Link>
                                                
                                                
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default User;
