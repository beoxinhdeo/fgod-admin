import React from 'react';

import{
    Label,
    Col,
    FormGroup,
    Input,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Button
} from 'reactstrap';

export default class RoomInfo extends React.Component {
    render() {
        return (
            <div className = 'popup'>
            <div className = 'background'></div>
            <div className = 'popup-inner'>
                <form>
                    <Card>
                        <CardHeader>
                            <h3>Thông tin phòng</h3>
                            <button type="button" class="close" 
                            onClick={this.props.closeForm}>
                                &times;
                            </button>
                        </CardHeader>
                        <CardBody>
                            
                        </CardBody>
                    </Card>
                </form>
            </div>
        </div>
        );
    }
}
