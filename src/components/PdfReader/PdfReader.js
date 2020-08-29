import React, { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import "../../scss/main.scss"

import pdfFile from "../../sample.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


const PdfReader = () => {
  const[file] = useState(pdfFile);
  const[numPages, setNumPages] = useState([]);

  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
  }

  const onDocumentLoadSuccess = ({numPages}) => (
    setNumPages(numPages)
  );

  return (
    <div className="PdfReader">
        <div className="PdfReader__container">
          <div className="PdfReader__container__load">
            <a href="http://www.pdf995.com/samples/pdf.pdf" target="_blank" rel="noreferrer"> <CloudDownloadIcon/></a>
          </div>
          <div className="PdfReader__container__document">
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
    </div>
  )
}

export default PdfReader;