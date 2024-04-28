import { Helmet, HelmetProvider } from "react-helmet-async";

const ScrapBooking = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Craftopia | Scrap Booking</title>
        </Helmet>
        <div>
        <h2>This is Scrap Booking</h2>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default ScrapBooking;