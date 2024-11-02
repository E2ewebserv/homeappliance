import React from 'react';
import { useParams } from 'react-router-dom';

const Appliance = () => {
  const { applianceType } = useParams();
  
  const getApplianceContent = (type) => {
    switch(type) {
      case 'washing-machine':
        return 'We offer expert washing machine repair services.';
      case 'ac':
        return 'AC servicing and repairs are available here.';
      case 'tv':
        return 'TV maintenance and repair services provided.';
      case 'fridge':
        return 'Fridge repair and maintenance services.';
      case 'microwave':
        return 'We offer microwave oven repair services.';
      default:
        return 'Service not found.';
    }
  };

  return (
    <div>
      <h1>{applianceType.replace('-', ' ')} Service</h1>
      <p>{getApplianceContent(applianceType)}</p>
    </div>
  );
};

export default Appliance;
