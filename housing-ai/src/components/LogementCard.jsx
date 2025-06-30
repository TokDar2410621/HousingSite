import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function LogementCard({ titre, prix, image, adresse, description, lien, images = [] }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-200 border border-gray-200 w-[500px]">
      {/* Image principale ou carousel */}
      {images.length > 0 ? (
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop
          autoPlay={false}
          showStatus={false}
          className="relative"
        >
          {images.map((img, i) => (
            <div key={i}>
              <img src={img.image} alt={`photo-${i}`} className="h-36 w-full object-cover" />
            </div>
          ))}
        </Carousel>
      ) : (
        <img
          src={image || "https://via.placeholder.com/300x150"}
          alt={titre}
          className="h-36 w-full object-cover"
        />
      )}

      {/* Contenu */}
      <div className="p-3">
        <h2 className="text-sm font-semibold text-gray-800 truncate">{titre}</h2>
        <p className="text-blue-600 font-bold text-sm mt-1">{prix} $ / mois</p>
        <p className="text-xs text-gray-500">{adresse}</p>
        <p className="text-xs text-gray-600 mt-2 line-clamp-2">{description}</p>

        {lien && (
          <a
            href={lien}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded"
          >
            Voir
          </a>
        )}
      </div>
    </div>
  );
}

export default LogementCard;
