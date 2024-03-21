import { useState } from "react";
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

  return (
    <ScrollView>
      <View className="p-6 bg-blue-600">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity
            className="flex flex-row items-center gap-3"
            onPress={setModalInput}
          >
            <Image source={require("../public/icons/locationIcon.png")}></Image>
            <Text className="">Recife</Text>
            <Image source={require("../public/icons/expandIcon.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../public/icons/notificationIcon.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        {modalInput && (
          <View className="pt-6 flex flex-row items-center justify-center gap-3">
            <TextInput
              className="bg-white p-2 rounded-3xl w-4/5"
              placeholder="Insira a cidade a consultar"
            ></TextInput>
            <TouchableOpacity onPress={() => setModalInput(false)}>
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        )}
        <View className="flex justify-center items-center mt-6">
          <Image
            className="flex w-60 h-60"
            source={require("../public/images/rainSunImage.png")}
          ></Image>
          <View className="flex items-center mb-6">
            <Text className="text-6xl">28</Text>
            <Text>Precipitações</Text>
            <Text>Min: 25 | Max: 31</Text>
          </View>
        </View>
        <View className="flex flex-row justify-around bg-gray-700 p-3 rounded-full">
          <View className="flex flex-row">
            <Image source={require("../public/icons/grainIcon.png")}></Image>
            <Text>6%</Text>
          </View>
          <View className="flex flex-row">
            <Image
              source={require("../public/icons/thermometerIcon.png")}
            ></Image>
            <Text>90%</Text>
          </View>
          <View className="flex flex-row">
            <Image source={require("../public/icons/windIcon.png")}></Image>
            <Text>19 Km/h</Text>
          </View>
        </View>
        <View className="p-3 bg-gray-700 rounded-3xl mt-3">
          <View>
            <Text className="font-semibold text-lg mb-3">Sobre Hoje</Text>
            <View>
              <Text>Data</Text>
              <Text>Hora</Text>
              <Text>Fuso Horário</Text>
              <Text>Nascer do Sol</Text>
              <Text>Pôr do Sol</Text>
              <Text>Fase da Lua</Text>
            </View>
          </View>
        </View>
        <View className="p-3 bg-gray-700 rounded-3xl mt-3">
          <View className="flex flex-row justify-between">
            <Text className="font-semibold text-lg">Próximos Dias</Text>
            <Image source={require("../public/icons/calendarIcon.png")}></Image>
          </View>
          <View className="flex gap-3 mt-3">
            <View className="flex flex-row justify-between items-center">
              <Text>Segunda-feira</Text>
              <Image source={require("../public/icons/sunIcon.png")}></Image>
              <View className="flex flex-row gap-2">
                <Text>13C</Text>
                <Text>10C</Text>
              </View>
            </View>
            <View className="flex flex-row justify-between items-center">
              <Text>Segunda-feira</Text>
              <Image source={require("../public/icons/sunIcon.png")}></Image>
              <View className="flex flex-row gap-2">
                <Text>13C</Text>
                <Text>10C</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
