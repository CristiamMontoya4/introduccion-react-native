import {Text} from 'react-native';

export default function Saludar(props) {

    const {firstName, lastname} = props; //en el objeto especificamos las props que queremos usar
    
    return (
        <Text style={{color:'white'}}>
            Hola! {firstName} {lastname}
        </Text>

    );
}