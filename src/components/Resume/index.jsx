import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import PDF from "./PDF";

function Resume() {
  return (
    <PDFViewer style={{ height: "100vh", width: "100%" }}>
      <PDF />
    </PDFViewer>
  );
}

export default Resume;
