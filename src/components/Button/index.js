import React, { Component } from 'react';

import * as S from './styled'

class Button extends Component {
    render() {
        const { children, ...props } = this.props;
        return (
            <S.ButtonContainer
                onClick={this.props.onClick}
                {...props}>
                {this.props.children}
            </S.ButtonContainer>
        );
    }
}

export default Button;