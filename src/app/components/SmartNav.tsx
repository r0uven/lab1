import Link from "next/link";

export default function SmartNav() {
  return (
    <nav className="mt-8 mb-5 flex justify-center">
      <ul id="main-menu" className="sm sm-blue">
        <li className="!text-4xl !font-bold !text-gray-800  !pointer-events-none">
          <Link href="/" className="pointer-events-auto">Image processor</Link>
        </li>
        <li><Link href="/about">О программе</Link></li>
        <li><a href="/history">Обработанные</a></li>
        <li><a href="/logging">Войти</a></li>
      </ul>
    </nav>
  );
}
