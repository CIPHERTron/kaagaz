import React from 'react';
import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import { pdfjs } from 'react-pdf';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { PaginationContainer, PageDetail } from '../styles/PdfView.styles';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfView({ src }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const showNext = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };
  const showPrev = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div>
      <div>
        <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <PaginationContainer>
        <button onClick={showPrev}>
          <ArrowLeft>Prev</ArrowLeft>
        </button>

        <PageDetail>
          Page {pageNumber} of {numPages}
        </PageDetail>

        <button onClick={showNext}>
          <ArrowRight>Next</ArrowRight>
        </button>
      </PaginationContainer>
    </div>
  );
}

export default PdfView;
