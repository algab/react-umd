export default function loadScript() {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "http://localhost:3000/component.js";
    script.onload = () => {
      resolve(script);
    };
    script.onerror = () => {
      reject(new Error("Failed to load script"));
    };
    document.body.appendChild(script);
  })  
}