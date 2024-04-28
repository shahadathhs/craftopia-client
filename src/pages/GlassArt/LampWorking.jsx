import { Helmet, HelmetProvider } from "react-helmet-async";

const LampWorking = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Craftopia | Lamp Working</title>
        </Helmet>
        <div>
          <h2>This is Lamp Working</h2>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default LampWorking;