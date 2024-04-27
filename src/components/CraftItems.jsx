import PropTypes from 'prop-types';

const CraftItems = ({userCrafts}) => {
  console.log(userCrafts);

  return (
    <div>
      {
        userCrafts.map(userCraft =>
          <div key={userCraft._id}>
            This is Craft Items
          </div>
        )
      }
    </div>
  );
};

export default CraftItems;

CraftItems.propTypes = {
  userCrafts: PropTypes.array,
}