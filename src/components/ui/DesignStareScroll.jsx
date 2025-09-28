import React, { useEffect, useRef, useState } from "react";

const DesignStareScroll = () => {
  const containerRef = useRef(null);
  const ringRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(180);
  const [dragStart, setDragStart] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const velocityRef = useRef(0);
  const inertiaRef = useRef(null);

  const images = [
    "https://picsum.photos/id/32/600/400/",
    "https://picsum.photos/id/33/600/400/",
    "https://picsum.photos/id/34/600/400/",
    "https://picsum.photos/id/35/600/400/",
    "https://picsum.photos/id/36/600/400/",
    "https://picsum.photos/id/37/600/400/",
    "https://picsum.photos/id/38/600/400/",
    "https://picsum.photos/id/39/600/400/",
    "https://picsum.photos/id/40/600/400/",
    "https://picsum.photos/id/41/600/400/",
  ];

  const getBgPosition = (index) => {
    const wrappedRotation = (((rotation - 180 - index * 36) % 360) + 360) % 360;
    return `${100 - (wrappedRotation / 360) * 500}px 0px`;
  };

  const handleMouseDown = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
    setIsDragging(true);

    // stop any running inertia
    if (inertiaRef.current) {
      cancelAnimationFrame(inertiaRef.current);
      inertiaRef.current = null;
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - dragStart;
    // update rotation
    setRotation((prev) => prev - deltaX);
    // store velocity (smoothed)
    velocityRef.current = velocityRef.current * 0.8 + deltaX * 0.2;
    setDragStart(clientX);
  };

  const runInertia = () => {
    // simple exponential decay
    velocityRef.current *= 0.92;
    if (Math.abs(velocityRef.current) < 0.02) {
      velocityRef.current = 0;
      inertiaRef.current = null;
      return;
    }
    setRotation((prev) => prev - velocityRef.current);
    inertiaRef.current = requestAnimationFrame(runInertia);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // start inertia if velocity present
    if (Math.abs(velocityRef.current) > 0.5) {
      if (inertiaRef.current) cancelAnimationFrame(inertiaRef.current);
      inertiaRef.current = requestAnimationFrame(runInertia);
    }
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
      document.addEventListener("touchmove", handleGlobalMouseMove);
      document.addEventListener("touchend", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      document.removeEventListener("touchmove", handleGlobalMouseMove);
      document.removeEventListener("touchend", handleGlobalMouseUp);
      if (inertiaRef.current) {
        cancelAnimationFrame(inertiaRef.current);
        inertiaRef.current = null;
      }
    };
  }, [isDragging, dragStart]);

  return (
    <div className="w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      <div
        ref={containerRef}
        className="relative"
        style={{
          perspective: "2000px",
          width: "min(300px, 80vw)",
          height: "min(400px, 60vh)",
        }}
      >
        <div
          ref={ringRef}
          className={`w-full h-full relative ${isDragging ? "cursor-grabbing" : "cursor-grab"} will-change-transform`}
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotation}deg)`,
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out
                xs:rounded-sm sm:rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl
                ${hoveredIndex !== null ? (hoveredIndex === index ? "opacity-100" : "opacity-50") : "opacity-100"}
              `}
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${index * -36}deg) translateZ(-500px)`,
                transformOrigin: "50% 50% 500px",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: getBgPosition(index),
                backfaceVisibility: "hidden",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-center px-4">
        <p className="text-xs sm:text-sm md:text-base">Drag to rotate • Hover to highlight</p>
      </div>
    </div>
  );
};

export default DesignStareScroll;
