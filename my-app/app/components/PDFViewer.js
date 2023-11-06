'use client'
import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"

// Set the workerSrc for the PDF viewer
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pdfWrapperRef = useRef(null);
  const [scale, setScale] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    // Update the wrapper height to the PDF height
    if (pdfWrapperRef.current) {
      pdfWrapperRef.current.style.height = "auto";
      
    }
  }, [numPages]);



  return (
    <div className="mx-auto px-20" ref={pdfWrapperRef}>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}

      >
        <Page width={1300} pageNumber={pageNumber} renderTextLayer={false}/>
      </Document>
    </div>
  );
};

export default PDFViewer;
