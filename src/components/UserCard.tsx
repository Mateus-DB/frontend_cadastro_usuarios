import type { Users } from "../types/userSchema";
import { User, Trash } from "lucide-react"
import toast from "react-hot-toast";

type UserCardProps = {
    user: Users;
    setUsers: React.Dispatch<React.SetStateAction<Users[]>>;
}

export function UserCard({ user, setUsers }: UserCardProps) {

    const apiUrl = import.meta.env.VITE_API_URL
    const handleDeleteUser = async (id: string) => {
        const response = await fetch(`${apiUrl}/users/${id}`, {
            method: "DELETE",
        })

        if (!response.ok) {
            throw new Error("Erro ao deletar o usuário")
        }

        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

        toast.success("Usuário deletado com sucesso!",{
            duration: 2000,
            position: "top-right"
        })


    }

    return (
        <div className="w-full bg-white shadow-md hover:scale-102 transition-duration-500 ease-in-out cursor-pointer shadow-black flex items-center justify-around p-1.5 rounded-md ">
            <User size={35} />
            <div className="ml-4 text-sm font-medium ">

                <button className="float-end cursor-pointer transition-duration-700 ease-in-out hover:scale-112" onClick={() => { handleDeleteUser(user.id) }}>
                    <Trash size={17} className="fill-red-400" />
                </button>

                <p>Nome: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Idade: {user.age}</p>
            </div>
        </div>
    )
}