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
    if (file && file.type.startsWith('image/')) {
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
    <div className="tool-container">
      <div className="tool-header animate-fade-in">
        <h1 className="tool-title">Signature to <span className="text-gradient">Transparent PNG</span></h1>
        <p className="tool-sub">Upload your signature and remove the background with surgical precision.</p>
      </div>

      <div className="glass tool-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {!image ? (
          <div 
            className={`upload-zone ${isDragging ? 'dragging' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleUpload(e); }}
          >
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleUpload} 
              id="file-upload" 
              style={{ display: "none" }} 
            />
            <label htmlFor="file-upload" className="upload-label">
              <div className="upload-icon">📤</div>
              <h2>Drop your signature here</h2>
              <p>or click to browse from your device</p>
              <div className="glow-btn" style={{ marginTop: "32px" }}>Select Image</div>
              <span className="file-info">Supports JPG, PNG, WEBP • Max 10MB</span>
            </label>
          </div>
        ) : (
          <div className="editor-layout">
            <div className="previews-container">
              <div className="preview-group">
                <span className="preview-label">Original Image</span>
                <div className="preview-box">
                  <img src={image.src} alt="Original" />
                </div>
              </div>
              <div className="preview-group">
                <span className="preview-label">Transparent Result</span>
                <div className="preview-box checkerboard">
                  {resultUrl && <img src={resultUrl} alt="Result" />}
                </div>
              </div>
            </div>

            <div className="controls-panel">
              <div className="glass control-card">
                <div className="control-header">
                  <label>Background Removal Sensitivity</label>
                  <span className="threshold-value">{threshold}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="255" 
                  value={threshold} 
                  onChange={(e) => setThreshold(parseInt(e.target.value))}
                  className="threshold-slider"
                />
                <div className="slider-hints">
                  <span>Keep Details</span>
                  <span>Clean Background</span>
                </div>
                <p className="help-text">
                  Adjust if the signature looks too thin or if white spots remain.
                </p>
              </div>

              <div className="action-buttons">
                <button className="glow-btn download-btn" onClick={handleDownload}>
                  <span>Download PNG</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </button>
                <button 
                  className="reset-btn"
                  onClick={() => { setImage(null); setResultUrl(null); }}
                >
                  Upload a different image
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }} />

      <style dangerouslySetInnerHTML={{ __html: `
        .tool-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px 120px;
        }
        .tool-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .tool-title {
          font-family: 'Outfit', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 16px;
        }
        .text-gradient {
          background: linear-gradient(to right, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .tool-sub {
          font-size: 1.1rem;
          color: var(--text-dim);
          max-width: 600px;
          margin: 0 auto;
        }
        .tool-card {
          padding: 32px;
          min-height: 500px;
          display: flex;
          flex-direction: column;
        }
        .upload-zone {
          flex: 1;
          border: 2px dashed rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
          background: rgba(255, 255, 255, 0.01);
        }
        .upload-zone.dragging {
          border-color: var(--primary);
          background: rgba(34, 211, 238, 0.05);
          transform: scale(1.02);
        }
        .upload-label {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 60px 40px;
        }
        .upload-icon {
          font-size: 4rem;
          margin-bottom: 24px;
          filter: drop-shadow(0 0 20px var(--primary-glow));
        }
        .upload-label h2 {
          color: white;
          font-size: 1.75rem;
          margin-bottom: 8px;
          font-family: 'Outfit', sans-serif;
        }
        .upload-label p {
          color: var(--text-dim);
          font-size: 1.1rem;
        }
        .file-info {
          margin-top: 24px;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .editor-layout {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }
        .previews-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .preview-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .preview-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        .preview-box {
          aspect-ratio: 16/9;
          background: #0f172a;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--glass-border);
        }
        .preview-box img {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
        }
        .checkerboard {
          background-image: 
            linear-gradient(45deg, #1e293b 25%, transparent 25%), 
            linear-gradient(-45deg, #1e293b 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, #1e293b 75%), 
            linear-gradient(-45deg, transparent 75%, #1e293b 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
          background-color: #0f172a;
        }

        .controls-panel {
          max-width: 800px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .control-card {
          padding: 32px;
        }
        .control-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          color: white;
          font-weight: 600;
        }
        .threshold-value {
          background: var(--primary);
          padding: 4px 12px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 800;
        }
        .threshold-slider {
          width: 100%;
          height: 8px;
          -webkit-appearance: none;
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
          outline: none;
          margin-bottom: 12px;
        }
        .threshold-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 0 15px var(--primary-glow);
          border: 4px solid var(--primary);
          transition: var(--transition);
        }
        .threshold-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        .slider-hints {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-dim);
          font-weight: 600;
          margin-bottom: 24px;
        }
        .help-text {
          font-size: 0.9rem;
          color: var(--text-dim);
          line-height: 1.6;
        }

        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .download-btn {
          width: 100%;
          padding: 20px;
          font-size: 1.2rem;
        }
        .reset-btn {
          background: transparent;
          border: none;
          color: var(--text-dim);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .reset-btn:hover {
          color: white;
        }

        @media (max-width: 768px) {
          .previews-container { grid-template-columns: 1fr; }
          .tool-title { font-size: 2.5rem; }
          .control-card { padding: 24px; }
        }
      `}} />
    </div>
  );
}
