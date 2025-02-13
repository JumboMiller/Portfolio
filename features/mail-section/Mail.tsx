"use client"
import Form from "next/form";
import { useFormStatus } from "react-dom";

import Button from "@/shared/components/Button/Button";
import { ButtonTypes } from "@/shared/components/Button/ButtonEnum";

import styles from "./Mail.module.scss";

const Mail = () => {

    const { pending } = useFormStatus();

    const handleSubmit = async (formData: FormData) => {
        console.log(formData)
    };

    return (
        <section className={styles.mail}>
            <div className={styles.mail__inner}>
                <div className={styles.mail__body}>
                    <Form action={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow rounded-2xl">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Имя
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-indigo-200"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Почта
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-indigo-200"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Текст письма
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-indigo-200"
                            />
                        </div>

                        <Button type="submit" disabled={pending} variant={ButtonTypes.TEXT}>
                            {pending ? "Sending..." : "Send"}
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default Mail