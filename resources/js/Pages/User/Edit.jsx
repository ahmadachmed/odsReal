import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";

function Edit(props) {
    const { data, setData, post, processing, errors } = useForm({
        name: props.data.name ||  "",
        email: props.data.email || "",
        phone: props.data.phone || "",
        role: props.data.role || "",
    });

    function submit(e) {
        e.preventDefault();

        post(route("user.update", props.data.id));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {props.title}
                </h2>
            }
        >
            <div className="max-w-7xl mx-auto px-10 py-5">
                <form
                    onSubmit={submit}
                    className="flex flex-col gap-5 md:w-1/2"
                >
                    <div>
                        <InputLabel forInput="name" value="Name" />

                        <TextInput
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            handleChange={e => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel forInput="email" value="Email" />

                        <TextInput
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete={null}
                            isFocused={true}
                            handleChange={e => setData('email', e.target.value)}
                            disabled
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel forInput="phone" value="Phone" />

                        <TextInput
                            type="tel"
                            name="phone"
                            value={data.phone}
                            className="mt-1 block w-full"
                            autoComplete={null}
                            isFocused={true}
                            handleChange={e => setData('phone', e.target.value)}
                            required
                        />

                        <InputError message={errors.phone} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel forInput="role" value="User Role" />

                        <TextInput
                            placeHolder={"admin/user/superAdmin"}
                            type="text"
                            name="role"
                            value={data.role}
                            className="mt-1 block w-full"
                            isFocused={true}
                            handleChange={e => setData('role', e.target.value)}
                            required
                        />

                        <InputError message={errors.role} className="mt-2" />
                    </div>
                    <PrimaryButton
                        className="flex justify-center"
                        processing={processing}
                    >
                        Save
                    </PrimaryButton>
                </form>
            </div>
        </Authenticated>
    );
}

export default Edit;
