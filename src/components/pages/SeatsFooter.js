import styled from "styled-components";

export default function SeatsFooter({img, title, session}) {
  return (
    <Footer>
      <div data-identifier="movie-img-preview"><img src={img} alt="" /></div>
      <h3 data-identifier="movie-and-session-infos-preview">
        <p>{title}</p>
        <p>{session}</p>
      </h3>
    </Footer>
  );
}

const Footer = styled.footer`
  display: flex;
  align-items: center;
  position: fixed;
  height: 117px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #DFE6ED;
  border: 1px solid #9EADBA;
  font-size: 26px;
  padding: 0 10px;
  gap: 15px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 89px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    img {
      width: 48px;
      height: 72px;
    }
  }

  h3 {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;