import React from 'react';
import {
    CatRankLabel,
    FormDiv,
    SelectCategory,
    SelectImportance
} from './CatRankStyling';

const CatRankForm = () => {
    return (
        <FormDiv>
            <CatRankLabel>Category:</CatRankLabel>
            <SelectCategory>
                <option value=''>---Select Category---</option>
                <option value='auto'>Auto</option>
                <option value='business'>Business</option>
                <option value='culture'>Culture</option>
                <option value='economy'>Economy</option>
                <option value='education'>Education</option>
                <option value='energy'>Energy</option>
                <option value='entertainment'>Entertainment</option>
                <option value='food'>Food</option>
                <option value='gaming'>Gaming</option>
                <option value='movies'>Movies</option>
                <option value='music'>Music</option>
                <option value='news'>News</option>
                <option value='politics'>Politics</option>
                <option value='sports'>Sports</option>
                <option value='technology'>Technology</option>
                <option value='other'>Other</option>
            </SelectCategory>
            <CatRankLabel>Importance:</CatRankLabel>
            <SelectImportance>
                <option value=''>--</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </SelectImportance>
        </FormDiv>
    )
}

export default CatRankForm