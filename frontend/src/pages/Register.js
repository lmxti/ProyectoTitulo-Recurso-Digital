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
        <div className="max-w-sm mx-auto mt-8">
            <form onSubmit={handleRegister} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;