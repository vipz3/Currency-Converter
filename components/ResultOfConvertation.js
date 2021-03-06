import React from 'react';
import {Text, View} from 'react-native';

const ResultOfConvertation = (props) => {

    conversion = () => {
        const currencyConvertFromOfficialRate = props.result[props.topCurrencyIndex]['Cur_OfficialRate'],
            currencyConvertToOfficialRate = props.result[props.bottomCurrencyIndex]['Cur_OfficialRate'],
            currencyConvertFromScale = props.result[props.topCurrencyIndex]['Cur_Scale'],
            currencyConvertToScale = props.result[props.bottomCurrencyIndex]['Cur_Scale'],
            numOfCurrencyConvertFrom = props.numOfCurrencyConvertFrom;

        const forUnitBelPriceFrom = currencyConvertFromOfficialRate / currencyConvertFromScale;
        const forUnitBelPriceTo = currencyConvertToOfficialRate / currencyConvertToScale;

        return parseInt(forUnitBelPriceFrom * numOfCurrencyConvertFrom / currencyConvertToOfficialRate);
    }

    // Cur_Scale – количество единиц иностранной валюты
    // Cur_Name – наименование валюты на русском языке во множественном, либо в единственном числе, в зависимости от количества единиц
    // Cur_OfficialRate – курс

    if(props.result.length > 0){
        return (
            <View style={{alignSelf: 'center'}}>
                <Text>Результат: {conversion()}</Text>
            </View>
        );
    }
    return null;
}

export default ResultOfConvertation;