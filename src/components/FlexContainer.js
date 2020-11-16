import React from 'react';
import PropTypes from 'prop-types';

export default function FlexContainer(props){
  const styles = {
    display: 'flex',
    flexWrap: props.wrap ? 'wrap' : 'nowrap',
    flexDirection: props.flexDirection,
    backgroundColor: props.backgroundColor,
    padding: props.padding,
    margin: props.margin,
    alignSelf: props.alignSelf,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    ...props.styles
  }
  return (
    <div style={styles}>
      {props.children}
    </div>
  )
}

FlexContainer.propTypes = {
  display: PropTypes.string,
  wrap: PropTypes.bool,
  children: PropTypes.node,
  flexDirection: PropTypes.oneOf(['row', 'column']),
  padding: PropTypes.number,
  margin: PropTypes.number,
  alignSelf: PropTypes.oneOf([
    'auto',
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ]),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'baseline',
  ]),
}

FlexContainer.defaultProps = {
  wrap: false,
  flexDirection: 'row',
  alignSelf: 'stretch',
  flex: 1,
  padding: 0,
  margin: 0,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  styles: null,
  children: null,
};

