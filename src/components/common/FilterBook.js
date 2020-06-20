import React, {Component} from 'react';
import { Row, FormGroup, Label, Input } from 'reactstrap';
import {FilterContext} from '../../contexts/FilterContext';

class FilterBook extends Component {
    render(){
        return (
            <Row>
                <FormGroup>
                    <Label for="type" sm={2}>Type</Label>
                    <FilterContext.Consumer>
                        {({handleInputChange}) =>
                        <Input type="select" name="type" id="type" placeholder="Type" onChange={ handleInputChange }>
                            <option value="0">All</option>
                            <option value="1">Magazine</option>
                            <option value="2">Dictionary</option>
                            <option value="3">Novel</option>
                            <option value="4">Comic</option>
                        </Input>
                        }
                    </FilterContext.Consumer>
                </FormGroup>
            </Row>
        )
    }
}

export default FilterBook;