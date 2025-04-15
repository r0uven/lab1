import ImageLoader from "./components/ImageLoader";
import {PreloadIframe} from "./components/PreloadIframe";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center mb-5">
        <p className="font-medium text-xl">Загрузите изображение для обработки</p>
      </div>
      <PreloadIframe/>
      <ImageLoader />
    </div>
  );
}