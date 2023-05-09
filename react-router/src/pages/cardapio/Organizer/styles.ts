import styled from 'styled-components';
import {black, blue, grey, lightGrey} from '../../../styles/variables';

type active = {
    active: boolean;
};

export const StyledOrganizer = styled.button<active>`
  align-items: center;
  background-color: ${active => active.active ? blue : grey};
  color: ${buttonProps => buttonProps.active ? '#ffffff' : '#000000'};
  border: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  height: 40px;
  justify-content: space-between;
  min-width: 240px;
  padding: 0 40px;
  position: relative;
  &--ativo {
    background-color: ${blue};
    color: white;
  }
`;

export const Options = styled.div<active>`
  display: ${active => active.active ? 'flex' : 'none'};
  position: absolute;
  left: 0;
  flex-direction: column;
  top: 100%;
  width: 100%;
`;

export const Option = styled.div`

  align-items: center;
  background-color: ${grey};
  border-top: 2px solid ${lightGrey};
  box-sizing: border-box;
  color: ${black};
  display: flex;
  height: 40px;
  justify-content: center;
  width: inherit;

  &:hover,
  &--ativo {
    background-color: ${blue};
    cursor: pointer;
    color: white;
  }
  
`;