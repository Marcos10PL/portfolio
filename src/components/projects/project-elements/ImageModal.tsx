import Image, { StaticImageData } from "next/image";

type ImageModal = {
  image: StaticImageData;
  name: string;
  setIsModalOpen: (isOpen: boolean) => void;
};

export default function ImageModal({
  image,
  name,
  setIsModalOpen,
}: ImageModal) {
  return (
    <div
      className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center "
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="relative w-[90vw] h-[90vh]"
        onClick={() => setIsModalOpen(false)}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain rounded-lg"
          priority
        />
      </div>
    </div>
  );
}
