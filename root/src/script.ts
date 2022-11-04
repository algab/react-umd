export default function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.onload = () => {
      resolve(script);
    };
    script.onerror = () => {
      reject(new Error("Failed to load script"));
    };
    document.body.appendChild(script);
  })  
}