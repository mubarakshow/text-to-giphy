import React from 'react';
import SystemMessage from '../../components/SytemMessage';
import './style.scss'

const CSS_PAGE = props => {
  return (
    <div className="Csspage">
      <div className="Csspage__container">
        {[0,1,2,3].map(elem => (
          <SystemMessage
            key={elem}
            title="Warning"
            emoji="⚠"
            description="Lorem ipusmdfsdf sdfmsdFM, DSFMO0WEC WEDFMWIEFP WEDF WEFD WEF WIOEF"
            cta="Try again"
          />
        ))}

      </div>
    </div>
  )
}

export default CSS_PAGE;