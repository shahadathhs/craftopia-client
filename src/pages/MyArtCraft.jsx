import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContest } from "../Providers/AuthProviders";

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
    <div>
      <h2>This is my art craft</h2>
    </div>
  );
};

export default MyArtCraft;