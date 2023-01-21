import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./Live.css";
import poster from "./GB-LIVE-2023.pdf";
const url = poster;
export default function Live() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  return (
    <section className="live-container">
      <div className="poster-container">
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </section>
  );
}
