import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../../services/api.js'

function Cadastro() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault()

        try {
          await api.post('/cadastro', {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        })  
        alert("Usuário Cadastrado")
        navigate("/login");
        } catch (error) {
            alert("Erro ao cadastrar usuário")
        }
        

    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" placeholder="Nome" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <input ref={emailRef} type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <input ref={passwordRef} type="password" placeholder="Senha" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400">Cadastrar-se</button>
            </form>
            <Link to="/login" className="text-blue-700 hover:underline text-center mt-4 block text-center">já tem uma conta? Faça login</Link>
        </div>
    );
}

export default Cadastro;
