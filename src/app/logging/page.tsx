"use client";

import { useCallback, useState } from "react";
import LoginPassword from "../components/LoginPassword";

interface AuthData {
    login: string;
    password: string;
    loginError: string | null;
    passwordError: string | null;
}


export default function Logging() {
    const [authData, setAuthData] = useState<AuthData>({ login: "", password: "", loginError: null, passwordError: null });

    const handleDataFromChild = useCallback((authData: AuthData) => {
        setAuthData(authData); // Получение данных от дочернего компонента
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь добавьте свою логику логина (запрос к API и т.д.)
        if (!authData.loginError && !authData.passwordError) {
            console.log('Login:', authData.login, 'Password:', authData.password);
        }
    };

    return (
        // <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        //     <h2 className="text-2xl font-bold mb-6 text-center">Вход</h2>

        //     <form onSubmit={handleLogin}>

        //         <LoginPassword sendDataToParent={handleDataFromChild}/>
        //         <button
        //             type="submit"
        //             className="
        //             w-full 
        //             py-2
        //             px-4 
        //             bg-indigo-600
        //             text-white 
        //             font-semibold 
        //             rounded-lg 
        //             shadow-md 
        //             hover:bg-indigo-700 
        //             focus:outline-none
        //             "
        //         >
        //             Войти
        //         </button>
        //     </form>

        //     <div className="mt-4 text-center">
        //         <span className="text-sm text-gray-600 mr-4">Еще не зарегистрированы?</span>
        //         <a href="/register" className="text-indigo-600 hover:underline">
        //             Зарегистрироваться
        //         </a>
        //     </div>
        // </div>
        <div className="flex justify-center p-6">
            <iframe
                src="https://r0uven.github.io/test3/index.html"
                width="600"
                height="600"
                style={{ border: 'none' }}
            />
        </div>
    );
}
