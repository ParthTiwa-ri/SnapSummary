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
- **Node.js**: Backend server for handling file uploads and processing.
- **Express.js**: Framework for building the backend server and handling requests.
- **CSS Modules**: For scoped and modular styling.
- **Bootstrap/TailwindCSS**: For responsive, mobile-first design.

### Shields

![React](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)
![Node.js](https://img.shields.io/badge/-Node.js-8CC84B?style=for-the-badge&labelColor=black&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?style=for-the-badge&labelColor=black&logo=express&logoColor=white)
![Tesseract](https://img.shields.io/badge/-Tesseract-1C6AA0?style=for-the-badge&labelColor=black&logo=tesseract&logoColor=white)
![PDF.js](https://img.shields.io/badge/-PDF.js-000000?style=for-the-badge&labelColor=black&logo=pdf&logoColor=red)

## 🛡️ Non-functional Features

- **Responsive Design**: Ensures the application adapts to various screen sizes, providing a consistent user experience across devices.
- **Error Handling**: Implements robust error handling for invalid file uploads, parsing errors, and failed OCR.
- **Security**: Safeguards user data and uploaded files with secure file handling techniques.
- **Performance**: Optimized for fast document uploads, processing, and summary generation.
- **Accessibility**: Focused on providing an accessible experience for users with disabilities.

## 🚀 Usage

- Visit the [Document Summary Assistant Portal](https://your-website-link.com) to explore the features.
- **Upload Document**: Drag and drop your PDF or image file to the upload area or use the file picker. Scanned images are processed with OCR.
- **Generate Summary**: After the document is uploaded, the app will process it and generate a summary. Choose between short, medium, or long summary options.

- **View and Download**: After the summary is generated, you can view it and download it for your records.

## 🛠️ Installation

To run the application locally:

1. **Clone this repository:**

   ```bash
   git clone https://github.com/your-username/document-summary-assistant.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd document-summary-assistant
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

![Document Upload](https://your-image-link.com/upload-screenshot.png)
![Summary Page](https://your-image-link.com/summary-screenshot.png)

---

Feel free to adjust the URLs and any additional details as needed. This README covers your app's core features, usage instructions, and installation steps, giving users a comprehensive guide.
