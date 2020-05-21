import styled, { css } from "styled-components";
import { Base } from "../../themes/index";

const innerDivCss = css`
  position: absolute;
  border-radius: 1px;
  z-index: 2;
`;

const rectangleCss = css`
  width: 16px;
  height: 2px;

  background: ${props => 
    props.disabled
      ? props.theme.switchButton.disabledDiv
      : props.checked  
        ? props.theme.switchButton.checkedRectangleDivColor
        : props.theme.switchButton.rectangleDivColor
  } ;
`;

const squareCss = css`
  width: 7px;
  height: 7px;

  background: ${props => 
    props.disabled
      ? props.theme.switchButton.disabledDiv
      : props.checked  
        ? props.theme.switchButton.checkedSquareDivColor
        : props.theme.switchButton.squareDivColor
  } ;
`;

const StyledChecked = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  top: -1px;
  bottom: 0px;
  border-radius: 3px 0px 0px 3px;
  z-index: 1;
  
  right: ${props => 
    props.checked
      ? '-50%'
      : '50%'
  };
  left: ${props => 
    props.checked
      ? '50%'
      : '-1px'
  };
  transform: ${props => 
    props.checked
      ? 'matrix(-1, 0, 0, 1, 0, 0);'
      : 'none'
  };
  background: ${props => 
    props.disabled
      ? props.theme.switchButton.disabledSwitchColor
      : props.theme.switchButton.switchColor
  };
`;

const StyledSwitchButton = styled.div`
  width: 64px;
  height: 32px;
  position: relative;
  background: ${props => 
    props.disabled
      ? props.theme.switchButton.disabledFillColor
      : props.theme.switchButton.fillColor
      
  };
  box-sizing: border-box;

  border-radius: 3px;
  border: ${props => 
    props.disabled
      ? props.theme.switchButton.disabledBorder
      : props.theme.switchButton.border  
  };

  &:hover {
    border-color: ${props => 
      props.disabled
      ? 'none'
      : props.theme.switchButton.hoverBorderColor 
    };
    cursor: ${props =>
      props.disabled
      ? 'default'
      : 'pointer'
    };
  };

  & .inner-div {
    top: 7px;
    right: 7px;
    bottom: 22px;
    left: 7px;
    ${rectangleCss};
    ${innerDivCss};
  }

  & div:nth-child(1) {
    
  }

  & div:nth-child(2) {
    top: 14px;
    right: 8px;
    bottom: 15px;
    left: 7px;
    ${rectangleCss};
    ${innerDivCss};
  }

  & div:nth-child(3) {
    top: 21px;
    right: 8px;
    bottom: 8px;
    left: 7px;
    ${rectangleCss};
    ${innerDivCss};
  }

  & div:nth-child(4) {
    top: 7px;
    right: 16px;
    bottom: 16px;
    left: 39px;
    ${squareCss};
    ${innerDivCss};
  }

  & div:nth-child(5) {
    top: 7px;
    right: 7px;
    bottom: 16px;
    left: 48px;
    ${squareCss};
    ${innerDivCss};
  }

  & div:nth-child(6) {
    top: 16px;
    right: 16px;
    bottom: 7px;
    left: 39px;
    ${squareCss};
    ${innerDivCss};
  }
  
  & div:nth-child(7) {
    top: 16px;
    right: 7px;
    bottom: 7px;
    left: 48px;
    ${squareCss};
    ${innerDivCss};
  }
`;

const StyledHiddenInput = styled.input`
  opacity: 0.0001;
  position: absolute;
  right: 0;
  z-index: 1  ;
`;

StyledSwitchButton.defaultProps = { theme: Base };

export {
  StyledChecked,
  StyledSwitchButton,  
  StyledHiddenInput
};