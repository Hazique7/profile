import Image from 'next/image';
import './image.css';
export default function ImageComponent() {
  return (
    <div className="image-wrapper">
      <Image
        className="custom-image"
        src="/h.jpg"
        alt="Profile image"
        width={400}
        height={600}
      />
    </div>
  );
}
