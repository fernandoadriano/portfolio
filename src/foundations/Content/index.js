/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContentWrapper = styled.div``;

const Content = ({ children, ...props }) => (
  <ContentWrapper {...props}>{children}</ContentWrapper>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
