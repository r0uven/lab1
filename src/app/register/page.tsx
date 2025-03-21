"use client";

import { useCallback, useState } from "react";
import LoginPassword from "../components/LoginPassword";

interface AuthData {
    login: string;
    password: string;
}

export default function Register() {
    const [authData, setAuthData] = useState<AuthData>({ login: "", password: "" });
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleDataFromChild = useCallback((authData: AuthData ) => {
            setAuthData(authData); // Получение данных от дочернего компонента
        }, []);
    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (authData.password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Здесь добавьте свою логику регистрации (запрос к API и т.д.)
        console.log('Логин:', authData.login, 'Password:', authData.password);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Регистрация</h2>

            <form onSubmit={handleRegister}>
                <LoginPassword sendDataToParent={handleDataFromChild}/>

                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                        Подтвердите пароль
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none"
                >
                    Зарегистрироваться
                </button>
            </form>

            <div className="mt-4 text-center">
                <span className="text-sm text-gray-600 mr-4">Уже зарегистрированы?</span>
                <a href="/logging" className="text-indigo-600 hover:underline">
                    Войти
                </a>
            </div>
        </div>
    );
}
