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
  text-transform: uppercase;
  font-size: 1 rem;
  margin-bottom: 2rem;
  h1 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }
  .title {
    color: var(--mainBlack);
    text-shadow: 13px 13px 30px -9px rgba(0, 0, 0, 0.45);
  }
  span {
    display: block;
  }

  @media (min-width: 576px) {
    text-transform: uppercase;
    font-size: 0.5 rem;
    margin-bottom: 5rem;
    span {
      display: inline-block;
      margin: 0 0.35rem;
      text-shadow: var(--lightShadow);
    }
  }
`
