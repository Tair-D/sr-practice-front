import React from 'react';
import Carousel from '../Carousel/Carousel';
import PropTypes from 'prop-types';

function Building(building) {
  return (
    <div>
      <Carousel links={building.building.links} />
      {/* {console.log(building.building.links)} */}
      <div className="flex">
      <svg
        className="relative mt-4 mr-3"
        width="13"
        height="13"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 100" />
        <circle cx="10" cy="10" r="2" fill="red" />;
      </svg>

      <h3 className="text-blue-900 font-bold py-4">
        {building.building.title} -
        <span className="text-gray-500 font-semibold pl-1">
          {building.building.address}
        </span>
      </h3>
      </div>
      <p className="text-gray-700 xl:pr-20">{building.building.description}</p>
    </div>
  );
}
Building.propTypes = {
  building: PropTypes.object.isRequired,
  index: PropTypes.number,
};
export default Building;
