import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css';

const ProgressBar = ({ level, totalLevels }) => {
    const progress = (level / totalLevels) * 100;

    return (
        <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }} />
        </div>
    );
};

ProgressBar.propTypes = {
    level: PropTypes.number.isRequired,
    totalLevels: PropTypes.number.isRequired,
};

export default ProgressBar;