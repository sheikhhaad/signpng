"use strict";
"use client";

import { useState, useRef, useEffect } from "react";

export default function ToolPage() {
  const [image, setImage] = useState(null);
  const [threshold, setThreshold] = useState(240);
  const [processing, setProcessing] = useState(false);
  const canvasRef = useRef(null);
  const [resultUrl, setResultUrl] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
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
      
      // Calculate brightness
      const brightness = (r + g + b) / 3;

      if (brightness > threshold) {
        data[i + 3] = 0; // Set alpha to 0 (transparent)
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
    link.download = "signpng-transparent.png";
    link.href = resultUrl;
    link.click();
  };

  return (
    <div style={containerStyle}>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .glass {
          background: rgba(20, 20, 30, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        .glow-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 99px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
          text-align: center;
        }
        .glow-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.4);
        }
        button.glow-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
        }
        input[type="range"] {
          -webkit-appearance: none;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
        }
        h3, p {
          color: white;
        }
      `}</style>

      <div className="animate-fade-in" style={headerStyle}>
        <h1 style={titleStyle}>Signature to <span style={highlight}>Transparent PNG</span></h1>
        <p style={subStyle}>Upload your signature and remove the white background instantly.</p>
      </div>

      <div className="glass" style={toolCard}>
        {!image ? (
          <div style={uploadZone}>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleUpload} 
              id="file-upload" 
              style={{ display: "none" }} 
            />
            <label htmlFor="file-upload" style={uploadLabel}>
              <div style={iconBox}>📤</div>
              <h3>Choose Signature Image</h3>
              <p style={{ color: "#9ca3af" }}>Supports JPG, PNG (Max 5MB)</p>
              <div className="glow-btn" style={{ marginTop: "20px" }}>Select File</div>
            </label>
          </div>
        ) : (
          <div style={editorLayout}>
            <div style={previewSection}>
              <div style={previewBox}>
                <span style={label}>Original Preview</span>
                <img src={image.src} alt="Original" style={previewImg} />
              </div>
              <div style={previewBox}>
                <span style={label}>Transparent Result</span>
                <div style={checkerboardBg}>
                  {resultUrl && <img src={resultUrl} alt="Result" style={previewImg} />}
                </div>
              </div>
            </div>

            <div style={controlsSection}>
              <div className="glass" style={controlItem}>
                <div style={controlHeader}>
                  <label style={{ color: "white" }}>Transparency Sensitivity</label>
                  <span style={{ color: "white" }}>{threshold}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="255" 
                  value={threshold} 
                  onChange={(e) => setThreshold(parseInt(e.target.value))}
                  style={slider}
                />
                <p style={helpText}>Decrease to keep more light gray details. Increase to remove more background.</p>
              </div>

              <div style={actionButtons}>
                <button className="glow-btn" onClick={handleDownload} style={{ width: "100%" }}>
                  Download Transparent PNG
                </button>
                <button 
                  onClick={() => { setImage(null); setResultUrl(null); }} 
                  style={resetBtn}
                >
                  Upload New Image
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}

const containerStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "40px 20px 100px",
  minHeight: "100vh",
  background: "radial-gradient(circle at 20% 50%, #1a1a2e, #0a0a15)",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "50px",
};

const titleStyle = {
  fontSize: "3rem",
  fontWeight: "800",
  marginBottom: "15px",
  color: "white"
};

const highlight = {
  background: "linear-gradient(to right, #6366f1, #8b5cf6)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const subStyle = {
  fontSize: "1.1rem",
  color: "#9ca3af",
};

const toolCard = {
  padding: "40px",
  minHeight: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const uploadZone = {
  border: "2px dashed rgba(255, 255, 255, 0.1)",
  borderRadius: "20px",
  padding: "60px 20px",
  textAlign: "center",
  transition: "all 0.3s ease",
  cursor: "pointer",
};

const uploadLabel = {
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const iconBox = {
  fontSize: "3rem",
  marginBottom: "20px",
};

const editorLayout = {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  animation: "slideIn 0.5s ease-out",
};

const previewSection = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
};

const previewBox = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const label = {
  fontSize: "0.9rem",
  fontWeight: "600",
  color: "#9ca3af",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const previewImg = {
  width: "100%",
  maxHeight: "350px",
  objectFit: "contain",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};

const checkerboardBg = {
  backgroundImage: "conic-gradient(#1e1e2e 90deg, #2a2a3a 90deg 180deg, #1e1e2e 180deg 270deg, #2a2a3a 270deg)",
  backgroundSize: "20px 20px",
  borderRadius: "12px",
  minHeight: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const controlsSection = {
  maxWidth: "600px",
  margin: "0 auto",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
};

const controlItem = {
  padding: "24px",
};

const controlHeader = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "15px",
  fontWeight: "600",
};

const slider = {
  width: "100%",
  height: "6px",
  WebkitAppearance: "none",
  appearance: "none",
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "10px",
  outline: "none",
  marginBottom: "12px",
};

const helpText = {
  fontSize: "0.85rem",
  color: "#9ca3af",
};

const actionButtons = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const resetBtn = {
  background: "transparent",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  color: "#9ca3af",
  padding: "12px",
  borderRadius: "99px",
  cursor: "pointer",
  fontWeight: "500",
  transition: "all 0.3s ease",
};