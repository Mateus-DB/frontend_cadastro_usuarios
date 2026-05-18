import { useState } from "react"
import { useEffect } from "react";
import { type Users } from "../types/userSchema";
import { UserCard } from "./UserCard";

export default function Users() {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<Users[]>([]);

    const apiUrl = import.meta.env.VITE_API_URL;

    const fetchUsers = async () => {
        setLoading(true);


        try {

            const response = await fetch(`${apiUrl}/users`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await response.json();
            setUsers(data);

        } catch (error) {
            console.log("Erro ao fazer a requisição: ", error);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {

        fetchUsers();

    }, []);


    return (

        <div>
            {loading ? (
                <p className="mt-8 text-2xl text-white">Carregando usuários...</p>
            ) : users.length === 0 ? (<p className="mt-8 text-2xl text-white">Nenhum usuário cadastrado</p>) : (
                <div>
                    {users.length !== 0 && (
                        <div className="w-full max-w-lg grid grid-cols-2  gap-8 mt-10">
                            {users.map((user) => (
                                <UserCard key={user.id} user={user} setUsers={setUsers} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}