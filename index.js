import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Image, Dimensions} from 'react-native';

class FullRatioImage extends Component {

  constructor(props) {
    super(props);
    const responsiveSize = getResponsiveSize(this.props.originalWidth, this.props.originalHeight, {marginX: this.props.marginX});
    this.state = {
      width: responsiveSize.width,
      height: responsiveSize.height,
    };
    console.log(this.state);
  }

  _onLayout = () => {
    const responsiveSize = getResponsiveSize(this.props.originalWidth, this.props.originalHeight, {marginX: this.props.marginX});
    this.setState({
      width: responsiveSize.width,
      height: responsiveSize.height,
    })
  };

  render() {
    return (
      <View onLayout={this._onLayout}>
        <Image {...this.props} style={[this.props.style, {width: this.state.width, height: this.state.height}]}/>
      </View>
    );
  }
}

const getResponsiveSize = (originWidth, originHeight, options = {marginX: 0}) => {
  let width;
  if (typeof options.marginX === 'string' &&
    options.marginX.indexOf('%') === (options.marginX.length - 1) &&
    !isNaN(options.marginX.replace('%', '')) &&
    parseInt(options.marginX.replace('%', '')) <= 100) { // 出字串的百分比
    width = Math.floor(Dimensions.get('window').width * (1.00 - (options.marginX.replace('%', '') * 0.01)));
  } else if (!isNaN(options.marginX)) {
    width = Dimensions.get('window').width - parseInt(options.marginX);
  } else {
    width = Dimensions.get('window').width;
  }
  const height = Math.floor((originHeight * width) / originWidth);
  return {
    width,
    height
  }
};

FullRatioImage.propTypes = {
  originalWidth: PropTypes.number.isRequired,
  originalHeight: PropTypes.number.isRequired,
  marginX: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};
FullRatioImage.defaultProps = {
  marginX: 0
};

export default FullRatioImage;
