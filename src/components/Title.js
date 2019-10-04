import React from 'react'
import styled from 'styled-components'

const Title = ({title, subtitle, className}) => {
    return (
      <div className={className}>
          <h1>
            <span className="title">{title}</span>
            <span>{subtitle}</span>
          </h1>
      </div>
    )
}

export default styled(Title)`
text-transform:uppercase;
font-size: 1 rem;
margin-bottom: 2rem;
h1{
    text-align:center;
    letter-spacing: 7px;
    color:var(--primaryColor);
}
.title{
    color:var(--mainBlack);
}
span{
    display:block;
}

@media (min-width:576px){
    span{
        display: inline-block;
        margin:  0 0.35rem;
        text-shadow:var(--lightShadow);
    }
}
`
