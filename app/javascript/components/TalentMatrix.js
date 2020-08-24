import React from "react"
import { Flex } from './Flex.js';
import PropTypes from "prop-types";

const PSYCHOLOGY = "PSYCHOLOGY";
const SUBSTANCE = "SUBSTANCE_USE_MISUSE";
const ADHD = "ADHD_OCD";
const PURE_EF = "PURE_EXECUTIVE_FUNCTIONING";
const NEW_PROFESSIONALS = "NEW_PROFESSIONALS";
const TRANSIITONING = "TRANSITIONING_CAREERS";
const BURNOUT = "MANAGING_BURNOUT";
const FLOURISHING = "FLOURISHING";

const dummyData = [
    [0,1,2,3,4,5,6,7],
    [0,1,2,3,4,5,6,7],
    [0,1,2,3,4,5,6,7],
    [0,1,2,3,4,5,6,7],
    [0,1,2,3,4,5,6,7],
    [0,1,2,3,4,5,6,7],
    [0,1,2,3,4,5,6,7],
    [0,1,2,3,4,5,6,7]
];

const data = [
    [
        PSYCHOLOGY, SUBSTANCE. ADHD, PURE_EF, NEW_PROFESSIONALS, TRANSIITONING, BURNOUT, FLOURISHING
    ]
]

class TalentMatrix extends React.Component {
    // var ButtonToolbar = ReactBootstrap.ButtonToolbar;

    // console.log('dummyData!: ', dummyData);

  render () {
    return (
        <Flex data={data} />
    );
  }
}

TalentMatrix.propTypes = {
  greeting: PropTypes.string
};
export default TalentMatrix
