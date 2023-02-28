import { Pressable as RNPressable, View, Text } from "react-native";
import tw from "../../../styles";

export const JokeBox = ({ setDescription, modalRef, secondIdx, item }) => {
  const handleClickDescription = () => {
    setDescription(item);
    modalRef.open()
  }

  return (
    <RNPressable onPress={handleClickDescription}>
      <View style={tw`flex flex-row gap-x-3 overflow-hidden ${secondIdx !== 0 && "mt-2"}`}>
        <Text style={tw`flex flex-wrap`}>- {item}</Text>
      </View>
    </RNPressable>
  );
}