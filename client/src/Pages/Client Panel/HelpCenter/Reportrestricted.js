import { React, useState } from 'react';
// import styled from 'styled-components';

import {
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
} from '@material-ui/core';

const Reportrestricted = () => {

    const [selected, setSelected] = useState('films');

    const isButtonSelected = (value) => {
        if (selected === value) {
            return true;
        }
    };

    const handleChange = (e) => {
        setSelected(e.target.value);
    };




   
  return (
    <div>
         {/* <Container> */}
            <FormControl component="fieldset">
                <RadioGroup
                    className="radio-group"
                    row
                    aria-label="star wars ressource"
                    name="row-radio-buttons-group"
                    value={selected}
                >
                    <FormControlLabel
                        value="films"
                        control={<Radio />}
                        label="Films"
                        checked={isButtonSelected('films')}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        value="people"
                        control={<Radio />}
                        label="People"
                        checked={isButtonSelected('people')}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        value="planets"
                        control={<Radio />}
                        label="Planets"
                        checked={isButtonSelected('planets')}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        value="species"
                        control={<Radio />}
                        label="Species"
                        checked={isButtonSelected('species')}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        value="starships"
                        control={<Radio />}
                        label="Starships"
                        checked={isButtonSelected('starships')}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        value="vehicles"
                        control={<Radio />}
                        label="Vehicles"
                        checked={isButtonSelected('vehicles')}
                        onChange={handleChange}
                    />
                </RadioGroup>
            </FormControl>
        {/* </Container> */}
    </div>
  )
}

export default Reportrestricted

// const Container = styled.div`
//     text-align: center;

//     .radio-group {
//         width: 85%;
//         margin: auto;
//         color: black;
//     }

//     .MuiFormControlLabel-root {
//         display: grid;
//         margin: 1rem 1.5rem;

//         .MuiButtonBase-root {
//             background-color: #fff;
//         }
//     }
// `;