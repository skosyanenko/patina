import React from "react";
import Sorting from "../Sorting";
import PropTypes from "prop-types";

const SectionTop = ({title, subtitle, isSorting}) => {
    return (
        <div className="section__top">
            <div className="section__title-wrap">
                <div className="section__title">{title}</div>
                <div className="section__subtitle">{subtitle}</div>
            </div>
            { isSorting ? <Sorting/> : '' }
        </div>
    )
};

SectionTop.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    isSorting: PropTypes.bool.isRequired
};

export default SectionTop;

