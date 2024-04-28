import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContest } from "../Providers/AuthProviders";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MyArtCraft = () => {
  const userCrafts = useLoaderData();
  console.log(userCrafts)
  const { user } = useContext(AuthContest);
  const userEmail = user.email;
  console.log(userEmail)
  
  const result = userCrafts.filter(myCraft => {
    return userEmail === myCraft.craftOwnerEmail
  });
  console.log(result)

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Craftopia | All Users Art & Craft</title>
        </Helmet>
        <div>
          My art and craft
        </div>
      </div>
    </HelmetProvider>
  );
};

export default MyArtCraft;