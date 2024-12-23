import React from 'react';
import PropTypes from 'prop-types';
import './Achievement.css'; // We'll create this CSS file next

const Achievement = ({ 
  title, 
  description, 
  date, 
  icon, 
  color = '#3498db', 
  achieved = true 
}) => {
  return (
    <div 
      className={`achievement ${achieved ? 'achieved' : 'not-achieved'}`} 
      style={{ borderColor: color }}
    >
      <div className="achievement-icon" style={{ backgroundColor: color }}>
        {icon || '🏆'}
      </div>
      <div className="achievement-content">
        <h3 style={{ color }}>{title}</h3>
        <p>{description}</p>
        {date && <span className="achievement-date">{date}</span>}
      </div>
    </div>
  );
};

Achievement.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string,
  icon: PropTypes.node,
  color: PropTypes.string,
  achieved: PropTypes.bool
};

export default Achievement;
