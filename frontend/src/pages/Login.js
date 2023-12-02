import { useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../contexts/UserContext';

const Login = () => {
    const { login } = useUser();
    const router = useRouter();

    const [loginInfo, setLoginInfo] = useState("")
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginInfo(undefined)
        
        login({username, password}).then((info)=>{
            if(!info){
                console.log("LOGIN")
                // Redirect to the home page
                router.push('/Etapas');
            }else{ 
                setLoginInfo(info);
            }
        })
    };

    return (
        <div className="max-w-sm mx-auto mt-8">
            <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {loginInfo && <h1 className="text-xl font-bold text-red-700 p-2 justify-center items-center text-center">{loginInfo}</h1>}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
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
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Log In
                    </button>
                </div>
            </form>

        </div>
    );
};

export default Login;