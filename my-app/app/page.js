import PDFViewer from "./components/PDFViewer";

const YourPage = () => {
  const pdfUrl = "https://xiohoo-com.vercel.app/XIOHOO-TECH-CLASS-SENIORS-SINGAPORE.pdf"; // Replace with your PDF URL

  return (
    <div className="mx-auto">
      <PDFViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default YourPage;
