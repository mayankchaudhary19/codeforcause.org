import { Box, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import Countdown from 'react-countdown';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(180deg, #2A185A 0%, #000000 100%)',
    padding: theme.spacing(3, 10, 3),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3, 10, 3)
    },
    color: '#000000'
  }
}));

function Header({ course, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" maxWidth="lg" justifyContent="center">
        <Typography style={{ color: '#ffffff' }} variant="h3" align="center">
          {`Offering ${course.discount} On this Batch.`}
        </Typography>
        <Countdown date={Date.parse(course.discountEnds)} renderer={renderer} />
      </Box>
    </div>
  );
}

const Completionist = () => (
  <Typography
    style={{ color: '#ffffff', paddingLeft: '10px' }}
    variant="h3"
  >
    Offer Expired
  </Typography>
);

const timeString = (days, hours, minutes, seconds) => {
  if (days > 0) {
    return `Ending in ${days} ${days === 1 ? 'Day' : 'Days'}.`;
  } else {
    return `Ending in ${String(hours).padStart(2, '0')} : ${String(
      minutes
    ).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}.`;
  }
};

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <Typography style={{ color: '#ffffff', paddingLeft: '10px' }} variant="h3">
        {timeString(days, hours, minutes, seconds)}
      </Typography>
    );
  }
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
