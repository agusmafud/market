import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import img from '../../images/hero.jpg';


import { withStyles } from '@material-ui/core/styles';
const styles = () => ({        
    layout: {                           
        height: 'calc(100vh - 60px)',
        minHeight: 300,
        width: '100%',
        objectFit: 'cover',
        paddingTop: 60,
    },
});

const Hero = ({ classes }) => {
    return (
        <Fade delay={300} duration={2000}>
            <img src={img} alt={"Mustafá Chocolates"} className={classes.layout} />        
        </Fade>
    );
};

Hero.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);