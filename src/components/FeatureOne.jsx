import React from 'react';
import TokenCard from './TokenCard';

const FeatureOne = () => {
  const tokens = ["0x","gosh-realm"]

  return (  
    <div className='feature-container'>
      <div className='swap-token-container'>
        <div className='tokens-container'>
          {
            tokens.map((token, index) => {
              return (
                <TokenCard id={token} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;