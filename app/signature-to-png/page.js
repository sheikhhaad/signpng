"use strict";
"use client";

import { useState, useRef, useEffect } from "react";

export default function ToolPage() {
  const [image, setImage] = useState(null);
  const [threshold, setThreshold] = useState(240);
  const [processing, setProcessing] = useState(false);
  const canvasRef = useRef(null);
  const [resultUrl, setResultUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files?.[0] || e.dataTransfer?.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          setImage(img);
          setResultUrl(null);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = () => {
    if (!image || !canvasRef.current) return;
    setProcessing(true);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const brightness = (r + g + b) / 3;

      if (brightness > threshold) {
        data[i + 3] = 0;
      }
    }

    ctx.putImageData(imageData, 0, 0);
    setResultUrl(canvas.toDataURL("image/png"));
    setProcessing(false);
  };

  useEffect(() => {
    if (image) {
      processImage();
    }
  }, [image, threshold]);

  const handleDownload = () => {
    if (!resultUrl) return;
    const link = document.createElement("a");
    link.download = "signature-transparent.png";
    link.href = resultUrl;
    link.click();
  };

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="font-outfit text-5xl md:text-6xl font-extrabold text-white mb-4">
          Signature to <span className="text-gradient">Transparent PNG</span>
        </h1>
        <p className="text-xl text-text-dim max-w-2xl mx-auto">
          Upload your signature and remove the background with surgical
          precision.
        </p>
      </div>

      <div
        className="glass p-8 md:p-10 min-h-[500px] flex flex-col animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        {!image ? (
          <div
            className={`flex-1 border-2 border-dashed rounded-3xl flex items-center justify-center transition-all duration-400 bg-white/2 ${isDragging ? "border-primary bg-primary/5 scale-[1.02]" : "border-white/10"}`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              handleUpload(e);
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              id="file-upload"
              className="hidden"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center text-center p-10 md:p-16"
            >
              <div className="text-6xl mb-6 drop-shadow-[0_0_20px_var(--primary-glow)]">
                📤
              </div>
              <h2 className="text-white text-3xl font-outfit font-bold mb-2">
                Drop your signature here
              </h2>
              <p className="text-text-dim text-lg">
                or click to browse from your device
              </p>
              <div className="glow-btn mt-8">Select Image</div>
              <span className="mt-8 text-xs text-white/30 uppercase tracking-widest font-bold">
                Supports JPG, PNG, WEBP • Max 10MB
              </span>
            </label>
          </div>
        ) : (
          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-text-dim uppercase tracking-[2px]">
                  Original Image
                </span>
                <div className="aspect-video bg-slate-950 rounded-2xl overflow-hidden flex items-center justify-center border border-white/5">
                  <img
                    src={image.src}
                    alt="Original"
                    className="max-w-[90%] max-h-[90%] object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-text-dim uppercase tracking-[2px]">
                  Transparent Result
                </span>
                <div
                  className="aspect-video rounded-2xl overflow-hidden flex items-center justify-center border border-white/5 relative bg-[#0f172a]
                  before:content-[''] before:absolute before:inset-0 before:bg-[url('/checkerboard.png')] before:bg-[length:20px_20px] before:opacity-10
                  [background-image:linear-gradient(45deg,#1e293b_25%,transparent_25%),linear-gradient(-45deg,#1e293b_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#1e293b_75%),linear-gradient(-45deg,transparent_75%,#1e293b_75%)]
                  [background-size:20px_20px] [background-position:0_0,0_10px,10px_-10px,-10px_0px]"
                >
                  {resultUrl && (
                    <img
                      src={resultUrl}
                      alt="Result"
                      className="max-w-[90%] max-h-[90%] object-contain relative z-10"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto w-full flex flex-col gap-10">
              <div className="glass p-8">
                <div className="flex justify-between items-center mb-6">
                  <label className="text-white font-bold text-sm uppercase tracking-wider">
                    Background Removal Sensitivity
                  </label>
                  <span className="bg-primary px-3 py-1 rounded-lg text-bg-dark font-extrabold text-sm">
                    {threshold}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="255"
                  value={threshold}
                  onChange={(e) => setThreshold(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-full appearance-none outline-none mb-4
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
                    [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer 
                    [&::-webkit-slider-thumb]:shadow-[0_0_15px_var(--primary-glow)] [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-primary"
                />
                <div className="flex justify-between text-xs text-text-dim font-bold uppercase tracking-wider mb-6">
                  <span>Keep Details</span>
                  <span>Clean Background</span>
                </div>
                <p className="text-sm text-text-dim leading-relaxed m-0 italic">
                  Adjust if the signature looks too thin or if white spots
                  remain.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  className="glow-btn py-5 text-xl"
                  onClick={handleDownload}
                >
                  <span>Download PNG</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </button>
                <button
                  className="bg-transparent border-none text-text-dim font-bold cursor-pointer transition-all hover:text-white underline underline-offset-4 text-sm"
                  onClick={() => {
                    setImage(null);
                    setResultUrl(null);
                  }}
                >
                  Upload a different image
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
