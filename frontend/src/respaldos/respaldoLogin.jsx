import { useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../contexts/UserContext';

const Login = () => {

    const router = useRouter();

    const { login } = useUser();

    // Datos del formulario
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Datos de la respuesta
    const [loginInfo, setLoginInfo] = useState("")


    
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginInfo(undefined)

        login({username, password}).then((info)=>{
            // Inicio de sesión correcto
            if(!info){
                console.log("Inicio de sesion correcto!")
                // Redirect to the home page
                router.push('/Etapas');
            }
            // Mensaje de error
            else{ 
                setLoginInfo(info);
            }
        })
    };

    return (
        <div className="max-w-sm mx-auto mt-8 text-black">

            <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div>
                <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                    Inicia sesión
                </h1>
                <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                    Inicia sesión con tu cuenta para acceder a todo el contenido de la plataforma.
                </p>
            </div>
    
                {loginInfo && <h1 className="text-xl font-bold text-red-700 p-2 justify-center items-center text-center">{loginInfo}</h1>}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Usuario
                    </label>
                    <input placeholder="Username" type="text" required id="username" value={username} onChange={(e) => setUsername(e.target.value)}
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"    
                    >
                        Log In
                    </button>
                </div>
            </form>

        </div>
    );
};

export default Login;