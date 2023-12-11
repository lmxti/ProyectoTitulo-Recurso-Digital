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
        <div className='min-h-screen flex justify-center items-center text-black'>
            <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div className='mb-4'>
                    <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                        Inicia sesión
                    </h1>
                    <p className="w-80 text-center text-sm font-semibold text-gray-700 tracking-wide cursor-pointer">
                        Inicia sesión con tu cuenta para acceder a todo el contenido de la plataforma.
                    </p>
                </div>

                {loginInfo && <h1 className="text-sm font-bold bg-orange-100 rounded-lg text-red-700 p-2 mb-4  justify-center items-center text-center">{loginInfo}</h1>}

                <form onSubmit={handleLogin}>
                    <div className="space-y-4 pb-3">
                        <input placeholder="Correo electrónico" type="text" required id="username" value={username} onChange={(e) => setUsername(e.target.value)}
                            className="bg-white block text-sm py-3 px-4 rounded-lg w-full border border-orange-300 outline-none" />
                        <input placeholder="Contraseña" type="password" required id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                            className="bg-white block text-sm py-3 px-4 rounded-lg w-full border border-orange-300 outline-none" />
                    </div>
                    

                    <div className="text-center pt-3">
                        <button type="submit" className="py-3 w-64 text-xl text-orange-950 bg-orange-400 transition ease-in-out hover:bg-orange-300 rounded-2xl">
                            Iniciar sesión
                        </button>
                    </div>
                </form>

                <div className='mt-2 text-sm'>
                    <a href='/Register'>
                        ¿No tienes una cuenta? 
                        <span className="underline cursor-pointer">
                            Registrate
                        </span>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Login;