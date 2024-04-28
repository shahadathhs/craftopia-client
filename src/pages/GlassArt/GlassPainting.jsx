import { Helmet, HelmetProvider } from "react-helmet-async";

const GlassPainting = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Craftopia | Glass Painting</title>
        </Helmet>
        <div>
          <h2>This is Glass Painting</h2>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default GlassPainting;