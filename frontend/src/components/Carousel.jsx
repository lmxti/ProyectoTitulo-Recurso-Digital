import { Carousel as MyCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel = ({images}) => {
    const handleDownload = (imageUrl) => {
        // Crear un enlace temporal
        const downloadLink = document.createElement("a");
    
        // Configurar la URL del enlace con la imagen
        downloadLink.href = imageUrl;
    
        // Obtener el nombre del archivo de la URL
        const fileName = imageUrl.split("/").pop();
    
        // Asignar el nombre del archivo al enlace de descarga
        downloadLink.download = fileName;
    
        // Simular un clic en el enlace para iniciar la descarga
        downloadLink.click();
      };

    return (
            <div className='flex justify-center items-center p-4'>
            
                <div className='bg-[#323639] container'>
                    <MyCarousel>
                        {images.map((image, index) => (
                            <div className='bg-[#242424]' key={index} >
                                    <button className='p-2' onClick={() => handleDownload(image)}>
                                            Descargar imagen
                                    </button>
                                <img src={image} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </MyCarousel>
                </div>
            </div>
    
      );
}

export default Carousel;