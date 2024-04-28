import { Helmet, HelmetProvider } from "react-helmet-async";

const PaperQuilling = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Craftopia | Paper Quilling & Origami</title>
        </Helmet>
        <div>
        <h2>This is Paper Quilling</h2>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default PaperQuilling;