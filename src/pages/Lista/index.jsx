import { useEffect, useState } from "react";
import api from "../../services/api";

function ListarUsuarios() {
  const [allUsers, setAllUsers] = useState();

  useEffect(() => {
    async function loadUsers() {
        
      try {
        const token = localStorage.getItem("token");
        const {
          data: { user },
        } = await api.get("/listar-usuarios", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setAllUsers(user);
      } catch (error) {

        alert("Deu merda");
      }
    }

    loadUsers();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Listar Usuários</h2>
      <ul className="space-y-2">
        {allUsers && allUsers.length > 0 && allUsers.map((user) => (
          <li key={user.id} className="bg-gray-100 p-4 rounded-md">
            <p className="font-semibold">ID: {user.id}</p>
            <p className="font-semibold">Nome: {user.name}</p>
            <p className="font-semibold">Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListarUsuarios;
