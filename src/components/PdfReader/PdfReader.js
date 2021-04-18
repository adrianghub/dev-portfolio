import React, { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import "../../scss/main.scss"

import pdfFile from "../../AdrianZinko-Resume2021.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `https://es.scribd.com/document/503387916/AdrianZinko-Resume2021`


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
            <a href="https://drive.google.com/file/d/1TKwlFvbzweOfJQoFkcLDzjVtUFsVUvOq/view?usp=sharing" target="_blank" rel="noreferrer"> <CloudDownloadIcon/></a>
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