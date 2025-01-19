# Document Summary Assistant

This application allows users to upload PDF and image files, extract text from them, and generate smart summaries of the content. It features an intuitive interface for seamless document handling, including text extraction, OCR for image files, and summary generation with customizable lengths.

## 🚀 Features

- **Document Upload**:
  - Users can upload PDF and image files easily through drag-and-drop or file picker.
  - Supports uploading scanned documents via image files for OCR-based text extraction.
- **Text Extraction**:

  - **PDF Parsing**: Extracts text from PDF files while maintaining the original formatting.
  - **OCR (Optical Character Recognition)**: Uses Tesseract or similar OCR tools to extract text from image files (scanned documents).

- **Summary Generation**:

  - Automatically generates smart summaries of uploaded documents.
  - Provides options for summary lengths (short, medium, long).
  - Highlights key points and main ideas, ensuring the summary captures essential information.

- **User Interface**:
  - Simple, intuitive interface for document uploads and viewing generated summaries.
  - Mobile-responsive design, ensuring a seamless experience on all devices.

## 🛠️ Technologies Used

- **React**: For building the user interface and managing component-based architecture.
- **Tesseract.js**: For OCR text extraction from image files (scanned documents).
- **PDF.js**: For parsing and extracting text from PDF files.
- **NextJS**: For server-side rendering and API integration.

- **TailwindCSS**: For responsive, mobile-first design.

### Shields

![React](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)
![Next.js](https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&labelColor=black&logo=next.js&logoColor=white)  
![Tesseract](https://img.shields.io/badge/-Tesseract-1C6AA0?style=for-the-badge&labelColor=black&logo=tesseract&logoColor=white)
![PDF.js](https://img.shields.io/badge/-PDF.js-000000?style=for-the-badge&labelColor=black&logo=pdf&logoColor=red)

## 🛡️ Non-functional Features

- **Responsive Design**: Ensures the application adapts to various screen sizes, providing a consistent user experience across devices.
- **Error Handling**: Implements robust error handling for invalid file uploads, parsing errors, and failed OCR.
- **Security**: Safeguards user data and uploaded files with secure file handling techniques.
- **Performance**: Optimized for fast document uploads, processing, and summary generation.
- **Accessibility**: Focused on providing an accessible experience for users with disabilities.

## 🚀 Usage

- **Upload Document**: Drag and drop your PDF or image file to the upload area or use the file picker. Scanned images are processed with OCR.
- **Generate Summary**: After the document is uploaded, the app will process it and generate a summary. Choose between short, medium, or long summary options.

- **View Summary**: After the summary is generated, you can view it.

- **View Extracted Text**: After the processing is completed, you can view extracted Text.

## 🛠️ Installation

To run the application locally:

1. **Clone this repository:**

   ```bash
   git clone https://github.com/ParthTiwa-ri/SnapSummary.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd SnapSummary
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser and visit the development server link to view the application.**

## 🖼️ Screenshots
<img width="1440" alt="Screenshot 2025-01-19 at 4 33 48 PM" src="https://github.com/user-attachments/assets/ad0bf9d2-1e5e-41eb-8369-87ac732c2ec9" />
<img width="1440" alt="Screenshot 2025-01-19 at 4 33 55 PM" src="https://github.com/user-attachments/assets/93fca737-d4a0-49aa-8996-19cd1997baab" />
<img width="1440" alt="Screenshot 2025-01-19 at 4 34 45 PM" src="https://github.com/user-attachments/assets/7c26cbe0-ba30-4f0d-9e34-a3608d62c83b" />
<img width="1440" alt="Screenshot 2025-01-19 at 4 34 58 PM" src="https://github.com/user-attachments/assets/7a9ce4bf-ad4e-4869-a735-cd9c2772ecd8" />
<img width="1440" alt="Screenshot 2025-01-19 at 4 35 04 PM" src="https://github.com/user-attachments/assets/7938f4b1-aa51-4920-bbdf-61515a819f42" />



---
