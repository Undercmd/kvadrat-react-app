import React, { useState } from 'react';
import { Text, Button, TextInput, View } from 'react-native';

export const PizzaTranslator = () => {
  let [a, setText] = useState('');
  let [b, setTextb] = useState('');
  let [c, setTextc] = useState('');
  return (
    <View>
      <TextInput
        style={{width: 50,
          height: 30,
          borderWidth: 2,
          borderColor: '#9966CC',
          borderRadius: 10,
          textAlign: 'center',
          fontSize: 20,
          color: '#003153',
          marginBottom: 10}} 
        keyboardType='numeric' 
        placeholder="a"
        onChangeText={text => setText(text)}
        defaultValue={a}
      />
      <TextInput
        style={{width: 50,
          height: 30,
          borderWidth: 2,
          borderColor: '#9966CC',
          borderRadius: 10,
          textAlign: 'center',
          fontSize: 20,
          color: '#003153',
          marginBottom: 10}} 
        keyboardType='numeric'
        placeholder="b"
        onChangeText={text => setTextb(text)}
        defaultValue={b}
      />
      <TextInput
        style={{width: 50,
          height: 30,
          borderWidth: 2,
          borderColor: '#9966CC',
          borderRadius: 10,
          textAlign: 'center',
          fontSize: 20,
          color: '#003153',
          marginBottom: 10}} 
        keyboardType='numeric' 
        placeholder="c"
        onChangeText={text => setTextc(text)}
        defaultValue={c}
      />
      <Button 
            title="Расчет" 
            onPress={() => {
             let D = (b*b)-(4*a*c);
             if (D < 0) {
               alert("D = "+D+"\nОтвет: корней нет");
             }
             else if (D > 0) {
               let x1 = (-b+Math.sqrt(D))/(2*a);
               let x2 = (-b-Math.sqrt(D))/(2*a);
               alert("D = "+D+"\nОтвет: x1 = "+x1+"\nx2 = "+x2);
             }
             else if (D == 0) {
               let x1 = (-b/(2*a));
               alert("D = "+D+"\nОтвет: x1 = "+x1);
             }
            }}
            />
    </View>
  );
}