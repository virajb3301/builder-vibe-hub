// Simple PDF text extraction utility
// For production, you might want to use a more robust PDF.js implementation

export const extractTextFromPDF = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const arrayBuffer = e.target?.result as ArrayBuffer;

        // For now, we'll use a simple approach
        // In production, you'd want to use PDF.js or send to backend for processing
        const text = await extractTextFromArrayBuffer(arrayBuffer);
        resolve(text);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => reject(new Error("Failed to read PDF file"));
    reader.readAsArrayBuffer(file);
  });
};

const extractTextFromArrayBuffer = async (
  arrayBuffer: ArrayBuffer,
): Promise<string> => {
  // This is a placeholder implementation
  // In a real application, you would use PDF.js or send to backend for processing

  // For now, return a message indicating the file was received
  const byteArray = new Uint8Array(arrayBuffer);
  const fileSize = (byteArray.length / 1024).toFixed(2);

  return `[PDF FILE UPLOADED - ${fileSize}KB]
  
Note: This is a placeholder for PDF text extraction. The actual PDF content would be extracted here using PDF.js or server-side processing. For the demo, you can describe your specification requirements in text form, and I'll help you analyze them and create submittal packages.

What type of specification are you working with? (e.g., electrical, HVAC, roofing, structural, etc.)`;
};

export const isValidPDF = (file: File): boolean => {
  return (
    file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")
  );
};
