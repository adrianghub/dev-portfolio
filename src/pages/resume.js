import React, { Component } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import Navbar from "../components/Navbar/Navbar"
import NavItems from "../components/Navbar/NavItems/NavItems"
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import "../scss/main.scss"

import pdfFile from "../sample.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
}

export default class Resume extends Component {
  state = {
    file: pdfFile,
    numPages: null,
  }

  onFileChange = event => {
    this.setState({
      file: event.target.files[0],
    })
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  render() {
    const { file, numPages } = this.state

    return (
      <>
        <Navbar>
          <NavItems icon="🌛" />
        </Navbar>
        <div className="Example">
          <div className="Example__container">
            <div className="Example__container__load">
              <a href="http://www.pdf995.com/samples/pdf.pdf" target="_blank"> <CloudDownloadIcon/></a>
            </div>
            <div className="Example__container__document">
              <Document
                file={file}
                onLoadSuccess={this.onDocumentLoadSuccess}
                options={options}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>
            </div>
          </div>
        </div>
      </>
    )
  }
}
