import Link from "next/link";

export default function MyNav(){
    return(
        <div>
            <h1
            className="
            text-4xl
            font-bold
            text-center
            text-gray-800
          "
          >
            <Link href="/">Image processor</Link>
          </h1>
          <nav className="
          flex 
          space-x-10  
          items-center 
          justify-around
          mt-8
          mb-5
          w-1/3
        ">
            <Link
              className="
              text-blue-600
              font-semibold
              underline 
              underline-offset-4
              hover:text-blue-800
              hover:underline-offset-8
              transition-all
              duration-300
              ease-in-out
              hover:shadow-lg
            "
              href="/about"
            >
              О программе
            </Link>
            <Link
              className="
              text-blue-600
              font-semibold
              underline 
              underline-offset-4
              hover:text-blue-800
              hover:underline-offset-8
              transition-all
              duration-300
              ease-in-out
              hover:shadow-lg
            "
              href="/history"
            >
              Обработанные
            </Link>
            <Link
              href="/logging"
              className="
            text-blue-600
            font-semibold
            underline 
            underline-offset-4
            hover:text-blue-800
            hover:underline-offset-8
            transition-all
            duration-300
            ease-in-out
            hover:shadow-lg
          "
            >Войти</Link>
          </nav>
        </div>
    )
}