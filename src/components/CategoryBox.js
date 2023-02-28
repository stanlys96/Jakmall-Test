import { Text, View, ScrollView, Pressable as RNPressable } from 'react-native';
import { SolidButton } from './Button';
import Pressable from './Pressable';
import tw from '../styles';
import { ArrowDown, ArrowUp } from '../icons';
import { JokeBox } from './JokeBox';

export const CategoryBox = ({ category, setCategories, setDescription, categories, modalRef, idx }) => {
  const handleGoTop = () => {
    let temp = [...categories];
    temp[idx].order = 0;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].category === category.category) continue;
      temp[i].order = i + 2;
    }
    setCategories([...temp]);
  }

  const handleArrow = () => {
    let temp = [...categories];
    temp[idx].open = !temp[idx].open;
    setCategories([...temp]);
  }

  const handleAddMoreData = () => {
    let temp = [...categories];
    if (temp[idx].count === 4) return;
    temp[idx].count++;
    setCategories([...temp]);
  }
  return (
    <View>
      <View style={tw`flex flex-row justify-between items-center border border-black p-4 bg-cyan-300`}>
        <Text>{idx + 1}</Text>
        <Text>{category.category}</Text>
        <SolidButton onPress={handleGoTop} disabled={category.order === 0}>
          <Text>{category.order === 0 ? "Top" : "Go Top"}</Text>
        </SolidButton>
        <Pressable onPress={handleArrow} smallBounce={false}>
          {category.open ? <ArrowUp /> : <ArrowDown />}
        </Pressable>
      </View>
      {
        category.open && <View style={tw`border-l border-r border-b border-black p-6`}>
          {
            category.jokesData && category.jokesData.slice(0, category.count).map((item, secondIdx) => (
              <JokeBox key={secondIdx} setDescription={setDescription} modalRef={modalRef} secondIdx={secondIdx} item={item} />
            ))
          }
          {
            categories[idx].count < 4 && <SolidButton onPress={handleAddMoreData} style={tw`mt-4`}>
              <Text>Add More Data</Text>
            </SolidButton>
          }
        </View>
      }
    </View>
  );
}