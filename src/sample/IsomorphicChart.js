import React from 'react';

export default ({ type, data, options }) => {
  if (typeof window !== 'undefined') {
    return React.createElement(
      require('react-chartjs-2')[type],
      { data, options },
      null
    )
  }

  return <div />
};
