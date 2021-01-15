import react from 'react';
import {styleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
export default class signup extends React.Component {
    goToLogin = () => this.props.navigation.navigate('Login')
    constructor()
    {
        super();
        this.State={
            email:'',
            name:''
        }
    }
    updateValue(text, field) {
        if (field=='name')
        {
            this.setState({
                name:text,
            })
        }
        else if(field=='email')
        {
            this.setState({
                eamil:text,
            })
        }
        Submit()
        {
         let collection={}
         collection.name= this.state.name
         collection.Email= this.state.name
         console.warn(collection);

         const data = { username: 'example' };

fetch('http://ec2-35-154-186-154.ap-south-1.compute.amazonaws.com:6061/token', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
        }
    }
render() {
    return (
        <View style={styleSheet.signup}>
            <Text style={styles.header}>signup</Text>
            <TextInput style={styles.textinput} placeholder="Your name*"
            underlineColorAndroid={'transparent'} />
             <TextInput style={styles.textinput} placeholder="Email*"
            underlineColorAndroid={'transparent'} />
            <TextInput style={styles.textinput} placeholder="password*"
           secureTextEntry={true} underlineColorAndroid={'transparent'} />
            <TextInput style={styles.textinput} placeholder="confirm password*"
           secureTextEntry={true} underlineColorAndroid={'transparent'} />
           <TouchableOpacity style={styles.button}>
               onPress={() => this.submit()}
               <Text style={styles.btntext}>sign up</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button}>
               <Text style={styles.btntext}>go to login </Text>
               <Button title='Go to Login' onPress={this.goToLogin} />
           </TouchableOpacity>


        </View>
    );
}



}
const styles = StyleSheet.create({
    signup:{
        alignself: 'stretch',
        
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottonColor: '#199187',
        borderBottonWidth:1,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottonColor: '#f8f8f8',
        borderBottonWidth: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItem:'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',
    }
});


