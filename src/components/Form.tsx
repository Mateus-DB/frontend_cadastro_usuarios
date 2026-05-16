import { useForm } from "react-hook-form"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { userSchema } from "../types/userSchema";
import toast from "react-hot-toast";

export default function Form() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<userSchema>({ resolver: zodResolver(userSchema) });

    const [loading, setLoading] = useState(false);

    const apiUrl = import.meta.env.VITE_API_URL

    async function onSubmit(data: userSchema) {

        const userData = {
            name: data.name,
            email: data.email,
            age: Number(data.age),
            id: String(Date.now())

        }

        setLoading(true);

        try {

            const response = await fetch(`${apiUrl}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            })

            await response.json();

            reset()

            toast.success("Cadastro realizado com sucesso!", {
                position: "top-right",
                duration: 1600
            });


            setTimeout(() => {
                window.location.reload();

            }, 1600);

        } catch (error) {
            console.log("Erro ao enviar o formulário: ", error);

        } finally {
            setLoading(false);
        }

    }

    const handleEnter = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSubmit(onSubmit);
        }

        return handleEnter;
    }



    return (

        <div className="max-w-lg w-full p-10 bg-white rounded-lg ">

            <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} placeholder='Digite seu nome' className='outline-none border-2 border-gray-300 rounded-md p-2 ' />
                {errors.name && <span className="text-red-500 text-sm ">{errors.name.message}</span>}

                <input type="email" {...register("email")} placeholder='Digite seu email' className=' outline-none border-2 border-gray-300 rounded-md p-2 ' />
                {errors.email && <span className="text-red-500 text-sm ">{errors.email.message}</span>}

                <input type="number" {...register("age")} placeholder='Digite sua idade' className='outline-none border-2 border-gray-300 rounded-md p-2 ' />
                {errors.age && <span className="text-red-500 text-sm ">{errors.age.message}</span>}

                <button disabled={loading} className="p-3 mt-4 rounded-md bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white font-bold cursor-pointer text-lg hover:opacity-[0.9] transition-opacity-500" type="submit">{loading ? "Cadastrando..." : "Cadastrar"}</button>
            </form>

        </div>



    )
} 