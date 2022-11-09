import React from 'react';
import PropTypes from 'prop-types';
import { GrLinkNext } from 'react-icons/gr';
import css from './Button.module.css'




const Button = ({ onClick }) => (
    <button onClick={() => onClick()} className={css.button__more} type="button">Load more <GrLinkNext color='brand' /></button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;
