// import { useEffect, useState } from "react";
// import $ from "jquery";

// interface AuthData {
//     login: string;
//     password: string;
//     loginError: string | null;
//     passwordError: string | null;
// }

// interface LoginPasswordProps {
//     sendDataToParent: (data: AuthData) => void;
// }

// export default function LoginPasswordJQuery({ sendDataToParent }: LoginPasswordProps) {
//     const [login, setLogin] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     // // Состояния для ошибок
//     const [loginError, setLoginError] = useState<string | null>(null);
//     const [passwordError, setPasswordError] = useState<string | null>(null);
//     // // Отслеживаем, взаимодействовал ли пользователь с полем
//     const [loginTouched, setLoginTouched] = useState<boolean>(false);
//     const [passwordTouched, setPasswordTouched] = useState<boolean>(false);

//     $("#form.id").validationEngine();

//     // Проверка длины логина и пароля
//     useEffect(() => {
//         const isLatin = /^[A-Za-z]+$/.test(login);
//         if (!isLatin) {
//             setLoginError("Только латинские символы");
//         } else {
//             setLoginError(null);
//         }

//         if (password.length > 10 || password.length < 3) {
//             setPasswordError("Длина пароля пользователя не должна быть меньше 3 символов и длиннее 10");
//         } else {
//             setPasswordError(null);
//         }

//         sendDataToParent({ login, password, loginError, passwordError });

//     }, [login, password, loginError, passwordError, sendDataToParent]);

//     return (
//         <div>
//             <div className="mb-4">
//                 <label htmlFor="login" className="block text-sm font-medium text-gray-700">
//                     Логин
//                 </label>
//                 <input

//                     data-validation-engine="validate[required,custom[onlyLetterSp]]"
//                     data-errormessage-value-missing="Введите логин"
//                     data-errormessage-custom-error="Только латинские буквы"

//                     type="login"
//                     id="login"
//                     value={login}
//                     onChange={(e) => setLogin(e.target.value)}
//                     required
//                     onFocus={() => setLoginTouched(true)}
//                     className={`
//                     mt-1 
//                     w-full 
//                     px-3 
//                     py-2 
//                     border
//                     border-gray-300
//                     rounded-lg shadow-sm 
//                     focus:outline-none 
//                     focus:ring-indigo-500 
//                     focus:border-indigo-500
//                     ${loginError && loginTouched ? 'focus:border-red-500 border-red-500' : 'border-gray-300'}
//                     `}
//                 />
//                 {passwordError && loginTouched && <p className="text-red-500 text-sm mt-1">{loginError}</p>}
//             </div>
//             <input type="email" name="email" id="email" data-validation-engine="validate[required,custom[email]]"
// 	data-errormessage-value-missing="Email is required!" 
// 	data-errormessage-custom-error="Let me give you a hint: someone@nowhere.com" 
// 	data-errormessage="This is the fall-back error message."/>
//             <div className="mb-6">
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                     Пароль
//                 </label>
//                 <input

//                     data-validation-engine="validate[required,minSize[3],maxSize[10]]"
//                     data-errormessage-value-missing="Введите пароль"
//                     data-errormessage-range-underflow="Пароль должен быть минимум 3 символа"
//                     data-errormessage-range-overflow="Пароль не должен превышать 10 символов"

//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     onFocus={() => setPasswordTouched(true)}
//                     className={`
//                     mt-1 
//                     w-full 
//                     px-3 
//                     py-2 
//                     border 
//                     border-gray-300 
//                     rounded-lg 
//                     shadow-sm 
//                     focus:outline-none 
//                     focus:ring-indigo-500 
//                     focus:border-indigo-500
//                     ${passwordError && passwordTouched ? 'focus:border-red-500 border-red-500' : 'border-gray-300'}
//                     `}
//                 />
//                 {passwordError && passwordTouched && <p className="text-gray-500 text-sm mt-1">{passwordError}</p>}
//             </div>


//             <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" type="text/javascript"></script>
//             <script src="/vendor/validate-engine/js/jquery.validationEngine.js" type="text/javascript" charSet="utf-8"></script>
//             <script src="/vendor/validate-engine/js/languages/jquery.validationEngine-ru.js" type="text/javascript" charSet="utf-8"></script>
//             <link rel="stylesheet" href="/vendor/validate-engine/css/validationEngine.jquery.css" type="text/css"/>
//         </div>

//     );
// }

