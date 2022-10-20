import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

function Add(props) {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("user.store"));
    };

    console.log(props);

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
            <div className="max-w-7xl flex flex-col md:flex-row md:mx-auto py-6 px-4 sm:px-5 lg:px-8">
                <div className="mb-10 md:w-1/2 md:pr-10">
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
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
                            handleChange={onHandleChange}
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
                            handleChange={onHandleChange}
                            required
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
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.phone} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel forInput="password" value="Password" />

                        <TextInput
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <InputLabel
                            forInput="password_confirmation"
                            value="Password Confirmation"
                        />

                        <TextInput
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel
                            forInput="role"
                            value="User Role"
                        />

                        <TextInput
                            placeHolder={"admin/user/superAdmin"}
                            type="text"
                            name="role"
                            value={data.role}
                            className="mt-1 block w-full"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError
                            message={errors.role}
                            className="mt-2"
                        />
                    </div>
                    <PrimaryButton className="flex justify-center" processing={processing}>
                        Create User
                    </PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

export default Add;
