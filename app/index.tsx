import { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

export default function index() {
  const [modalInput, setModalInput] = useState(false);
  const [cidade, setCidade] = useState("Recife");
  const [weather, setWeather] = useState([]);

  const getWeatherApi = async () => {
    const response = await axios.get("https://api.hgbrasil.com/weather?format=json-cors&key=9dfd2152&city_name=" + cidade)
    setWeather(response.data)
    console.log(response.data)
  }

  useEffect(()=>{
    getWeatherApi()
  },[])

  return (
    <ScrollView>
      <View className="p-6 bg-blue-600">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity
            className="flex flex-row items-center gap-3"
            onPress={setModalInput}
          >
            <Image source={require("../public/icons/locationIcon.png")}></Image>
            <Text className="">{weather?.results?.city}</Text>
            <Image source={require("../public/icons/expandIcon.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../public/icons/notificationIcon.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        {modalInput && (
          <View>
            <View className="pt-6 flex flex-row items-center justify-center gap-3">
              <TextInput
                className="bg-white p-2 rounded-3xl w-4/5"
                placeholder="Insira a cidade a consultar"
                value={cidade}
                onChangeText={setCidade}
              ></TextInput>
              <TouchableOpacity className="bg-red-500 p-3 rounded-3xl" onPress={() => setModalInput(false)}>
                <Text className="text-white">Fechar</Text>
              </TouchableOpacity>
            </View>
            <View className="flex justify-center items-center bg-green-500 p-3 rounded-3xl mt-3">
              <TouchableOpacity onPress={getWeatherApi}>
                <Text>Fazer consulta</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View className="flex justify-center items-center mt-6">
          <Image
            className="flex w-60 h-60"
            source={require("../public/images/rainSunImage.png")}
          ></Image>
          <View className="flex items-center mb-6">
            <Text className="text-6xl">{weather?.results?.temp}&deg;C</Text>
            <Text>{weather?.results?.description}</Text>
            <Text>Min: 25 | Max: 31</Text>
          </View>
        </View>
        <View className="flex flex-row justify-around bg-gray-700 p-3 rounded-full">
          <View className="flex flex-row">
            <Image source={require("../public/icons/grainIcon.png")}></Image>
            <Text>{weather?.results?.rain}%</Text>
          </View>
          <View className="flex flex-row">
            <Image
              source={require("../public/icons/thermometerIcon.png")}
            ></Image>
            <Text>{weather?.results?.humidity}%</Text>
          </View>
          <View className="flex flex-row">
            <Image source={require("../public/icons/windIcon.png")}></Image>
            <Text>{weather?.results?.wind_speedy}</Text>
          </View>
        </View>
        <View className="p-3 bg-gray-700 rounded-3xl mt-3">
          <View>
            <Text className="font-semibold text-lg mb-3">Sobre Hoje</Text>
            <View>
              <Text>Data : {weather?.results?.date}</Text>
              <Text>Horário: {weather?.results?.currently}</Text>
              <Text>Hora: {weather?.results?.time}</Text>
              <Text>Fuso Horário: {weather?.results?.timezone}</Text>
              <Text>Nascer do Sol: {weather?.results?.sunrise}</Text>
              <Text>Pôr do Sol: {weather?.results?.sunset}</Text>
            </View>
          </View>
        </View>
        <View className="p-3 bg-gray-700 rounded-3xl mt-3">
          <View className="flex flex-row justify-between">
            <Text className="font-semibold text-lg">Próximos Dias</Text>
            <Image source={require("../public/icons/calendarIcon.png")}></Image>
          </View>
          <View className="flex gap-3 mt-3">
            {weather?.results?.forecast.map((item) => (
              <View className="flex flex-row justify-between items-center">
                <Text>{item.weekday} {item.date}</Text>
                <Image source={require("../public/icons/sunIcon.png")}></Image>
                <View className="flex flex-row gap-2">
                  <Text>Min: {item.min}&deg;C</Text>
                  <Text>Máx: {item.max}&deg;C</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
