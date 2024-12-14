// Load scripts dynamically based on screen width
document.addEventListener("DOMContentLoaded", () => {
  const loadScript = (src, callback) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      console.log(`${src} loaded successfully.`);
      if (callback) callback();
    };
    script.onerror = () => console.error(`Failed to load script: ${src}`);
    document.head.appendChild(script);
  };

  // Check screen width and load the appropriate script
  if (window.innerWidth <= 840) {
    loadScript("mobile.js", () => {
      
    });
  } else {
    loadScript("desktop.js", () => {
      
    });
  }
});
