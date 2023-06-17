import React from 'react';

const FeatureOne = () => {
  const tokens = ['0px','gosh-realm']

  return (
    <div className='feature-container'>
      <div className='swap-token-container'>
        <div className='tokens-container'>
          {
            tokens.map((token, index) => {
              <>{token}</>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;