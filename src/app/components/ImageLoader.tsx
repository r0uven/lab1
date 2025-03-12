"use client";

import Image from 'next/image'
import React, { useState } from 'react';


export default function UploadImage() {
    const [image, setImage] = useState<File | null>(null);
    const [processedImage, setProcessedImage] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };
    const handleSubmit = async () => {
        if (!image) return;

        const formData = new FormData();
        formData.append('file', image);

        // Пример запроса на сервер
        const response = await fetch('/api/process-image', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        setProcessedImage(data.processedImageUrl);
    }

    return (
        <div>


            <hr className="mb-2" />

            <div className="flex flex-row space-x-4 items-center justify-center">
                {/* Кнопка для загрузки изображения */}
                <div className="flex justify-center items-center">
                    {/* Скрываем input для файлов */}
                    <input type="file" onChange={handleFileChange} id="file-upload" className="hidden" />

                    {/* Кастомная кнопка, связанная с input */}
                    <label
                        htmlFor="file-upload"
                        aria-label="Загрузить файл"
                        className="
                        w-38
                        bg-blue-500
                        hover:bg-blue-600
                        text-white
                        font-semibold
                        py-2 px-4
                        text-center 
                        rounded
                        shadow-lg
                        cursor-pointer
                        transition
                        duration-300
                        ease-in-out
                        "
                    >
                        Выбрать файл
                    </label>
                </div>

                <select name="asd" id="select">
                    <option value="default"> Выберите метод обработки</option>
                </select>

                {/* Кнопка для обработки */}
                <button
                    className="
                w-38
                bg-green-500
                hover:bg-green-600
                text-white
                font-semibold
                py-2 px-4
                rounded
                shadow-lg
                transition
                duration-300
                ease-in-out
                "
                onClick={handleSubmit}
                >
                    Обработать
                </button>

            </div>

            <hr className="mt-2" />

            <div className='flex items-center mt-5 h-[calc(100vh-18.05vh)]'>

                <div className="w-1/2 h-full flex flex-col items-center">
                    <h3 className="text-lg text-center">Загруженное изображение:</h3>
                    {image && (
                        <Image src={URL.createObjectURL(image)} alt="Загруженное" className="w-xl h-xl" />
                    )}
                </div>

                <div className="w-1/2 h-full">
                    <h3 className="text-lg text-center">Обработанное изображение:</h3>
                    {processedImage && (
                        <Image src={processedImage} alt="Обработанное" className="max-w-full max-h-full" />
                    )}
                </div>
            </div>

        </div>
    );
}
