'use client';
import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

const sampleSizes = [40, 20, 10, 5];

const createPixelatedImage = (container, originalImageSrc) => {
  let c = document.createElement('canvas');
  let ctx = c.getContext('2d', { willReadFrequently: true });
  let imagem = new Image();

  // Fix Cross-Origin Error
  imagem.crossOrigin = 'Anonymous';
  imagem.setAttribute('crossOrigin', '');

  imagem.onload = function () {
    const w = imagem.width;
    const h = imagem.height;

    c.width = w;
    c.height = h;
    ctx.drawImage(imagem, 0, 0);

    const pixelArr = ctx.getImageData(0, 0, w, h).data;

    // Remove existing pixelated images
    const existingPixelatedImages = container.querySelectorAll('.pixelated');
    existingPixelatedImages.forEach((image) => image.remove());

    // Generate 4 sizes
    let i = 1;
    sampleSizes.forEach((sampleSize) => {
      const init = Math.floor(sampleSize / 2);

      for (let y = 0; y < h; y += sampleSize) {
        for (let x = 0; x < w; x += sampleSize) {
          // samplex and sampley centralized
          const samplex = x + init >= w ? x : x + init;
          const sampley = y + init >= h ? y : y + init;

          const p = (samplex + sampley * w) * 4;
          ctx.fillStyle = `rgba(${pixelArr[p]}, ${pixelArr[p + 1]}, ${pixelArr[p + 2]}, ${pixelArr[p + 3]})`;
          ctx.fillRect(x, y, sampleSize, sampleSize);
        }
      }

      const pixelated = new Image();
      pixelated.src = c.toDataURL('image/jpeg');
      pixelated.width = w;
      pixelated.classList.add('pixelated');
      pixelated.classList.add('img' + i);

      container.appendChild(pixelated);

      i++;
    });
  };

  imagem.src = originalImageSrc;
};

const PixelatedImage = ({ src, alt, ratio }) => {
  const containerRef = useRef(null);

  const aspect = {
    aspectRatio: ratio,
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      createPixelatedImage(container, src);
    }
  }, [src]);

  return (
    <figure ref={containerRef} className={`${styles.pixels} pixelated-img`} style={aspect}>
      <img src={src} alt={alt} className={`${styles.original} original`} />
    </figure>
  );
};

export default PixelatedImage;
