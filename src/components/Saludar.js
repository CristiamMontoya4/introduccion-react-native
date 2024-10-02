import {Text} from 'react-native';
import PropTypes from 'prop-types';

export default function Saludar(props) {

    // const {firstName = "Joe", lastname = "Doe"} = props; //en el objeto especificamos las props que queremos usar
    const  {firstName, lastname} = props;
    
    return (
        <Text style={{color:'white'}}>
            Hola! {firstName} {lastname}
        </Text>

    );
}

Saludar.defaultProps = {   //Se define las props por defecto
    firstName: "Joe",
    lastname: "Doe",
}

Saludar.PropTypes = {
    firstName: PropTypes.string.isRequired,  //exige que la prop de name un string obligatorio
    lastname: PropTypes.string,  //exige que la prop de lastname sea un string opcional
}