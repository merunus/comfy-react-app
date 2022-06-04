import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title = "about" />
    <Wrapper className='page section section-center'>
      <img src = {aboutImg} alt = "nice desk" ></img>
      <article>
        <div className="title">
          <h2>Our story</h2>
          <div className="underline"></div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quaerat, numquam accusamus vitae tenetur possimus labore earum illum at, rem nemo architecto, quod facilis repellendus voluptatem amet aspernatur id sint.
        Autem vero alias temporibus ratione repellendus assumenda unde saepe, delectus voluptates consequatur obcaecati culpa illo, architecto esse, placeat vel eum ipsa cum repudiandae voluptatibus eaque? Tempora molestiae vel maxime voluptates?
        Dolores exercitationem facilis accusantium commodi quis. Et, tenetur! Provident, eveniet dolorem! Qui voluptate commodi consequatur sapiente cumque explicabo corporis. Impedit voluptates incidunt vel repudiandae modi itaque debitis non aperiam dicta?</p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
