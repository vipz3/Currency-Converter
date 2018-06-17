import React from 'react';
import {Text, View, Button } from 'react-native';

const ButtonDatePicker = (props) => {
    return (
        <View>
            <Text style={{alignSelf: 'center'}}>{`${props.state.date.getFullYear()}-${props.state.date.getMonth()+1}-${props.state.date.getDate()}`}</Text>
            <Button 
                title="Выбрать дату"
                style={{alignSelf: 'stretch'}} 
                onPress={props.selectNewDate}
            />
      </View>
    );
}

export default ButtonDatePicker;