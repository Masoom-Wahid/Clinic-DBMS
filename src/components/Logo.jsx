import PropTypes from 'prop-types';

export default function Logo({ height = 90, width = 90, className = '' }) {
  return (
    <div className={`${className}`}>
      <img src="/logo.png" height={height} width={width} />
    </div>
  );
}

Logo.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
};
