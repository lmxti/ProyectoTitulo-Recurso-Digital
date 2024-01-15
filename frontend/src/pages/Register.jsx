import { useState } from 'react';
import { useRouter } from 'next/router';

const Register = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginInfo, setLoginInfo] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault();
        // Call your registration API here and pass the credentials
        try {
            setLoginInfo(undefined)

            const headers = { 'Content-Type': 'application/json'  }
            // Assuming you have a registration API endpoint
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers : headers,
                body : JSON.stringify({data : { username, password }, headers}),
            });

            const data = await response.json();

            if (response.ok) {

                console.log(data);
                router.push('/Etapa/1/0');
            } else {
                // Handle registration failure
                console.error(data.error);
                setLoginInfo(data.error)
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className='min-h-screen flex justify-center items-center text-black'>
            <div className='py-12 px-12 bg-white rounded-2xl shadow-xl z-20'>
                <div className='mb-4'>
                    <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                        Registrate
                    </h1>
                    <p className="w-80 text-center text-sm font-semibold text-gray-700 tracking-wide cursor-pointer">
                        Registrate para acceder a todo el contenido de la plataforma
                    </p>
                </div>
                {loginInfo && <h1 className="text-xl font-bold text-red-700 p-2 justify-center items-center text-center">{loginInfo}</h1>}

                <form onSubmit={handleRegister}>
                    <div className="space-y-4 pb-3">
                        <input placeholder="Correo electrónico" required type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}
                                className="bg-white block text-sm py-3 px-4 rounded-lg w-full border border-orange-300 outline-none"/>

                        <input placeholder="Contraseña" required type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} 
                            className="bg-white block text-sm py-3 px-4 rounded-lg w-full border border-orange-300 outline-none"/>
                    </div>

                    <div className="text-center pt-3">
                        <button type="submit"
                                className="py-3 w-64 text-xl text-orange-950 bg-orange-400 transition ease-in-out hover:bg-orange-300 rounded-2xl">
                            Registrarte
                        </button>
                    </div>
                </form>

                <div className='mt-2 text-sm'>
                    <a href='/Login'>
                        ¿Ya tienes una cuenta? 
                        <span className="underline cursor-pointer">
                            Inicia sesión
                        </span>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Register;