function ImageWithFallback({ src, alt, fallback, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallback;
      }}
      {...props}
    />
  );
}

export default ImageWithFallback;
