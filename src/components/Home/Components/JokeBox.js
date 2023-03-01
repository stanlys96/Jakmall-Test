import { Pressable as RNPressable, View, Text } from "react-native";
import tw from "../../../styles";
import { GhostButton } from "../../Button";

export const JokeBox = ({ setDescription, modalRef, secondIdx, item }) => {
  const handleClickDescription = () => {
    setDescription(item);
    modalRef.open()
  }

  return (
    <GhostButton onPress={handleClickDescription}>
      <View style={tw`flex flex-row gap-x-3 overflow-hidden ${secondIdx !== 0 && "mt-2"}`}>
        <Text style={tw`flex flex-wrap`}>- {item}</Text>
      </View>
    </GhostButton>
  );
}