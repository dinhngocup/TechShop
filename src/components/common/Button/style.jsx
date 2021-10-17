import Button from "react-bootstrap/Button";
import styled from "styled-components";

export const ButtonStyle = styled(Button)`
  border-radius: 50px;
  padding: 10px 20px 10px 20px;
  border: none;
  transition: 0.5s;
  min-width: 135px;
  min-height: 46px;
  &:hover {
    background-color: var(--foreground) !important;
    color: black !important;
  }
  position: relative;
  .icon {
    transition: 0.2s;
    position: absolute;
    left: -30px;
    opacity: 0;
  }
  .name {
    transition: 0.3s;
  }
`;
