import { Helmet, HelmetProvider } from "react-helmet-async";

const GlassDying = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Craftopia | Glass Dying & Staining</title>
        </Helmet>
        <div>
        <h2>This is Glass Dying</h2>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default GlassDying;