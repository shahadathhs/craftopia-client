import { Helmet, HelmetProvider } from "react-helmet-async";

const CardMaking = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Craftopia | Card Making</title>
        </Helmet>
        <div>
        <h2>This is Card making</h2>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default CardMaking;