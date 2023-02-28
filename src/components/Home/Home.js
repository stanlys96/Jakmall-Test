import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import { Text, View, ScrollView } from 'react-native';
import tw from '../../styles';
import { compare } from '../../utils/helper';
import { SolidButton } from '../Button';
import { CategoryBox } from '../CategoryBox';
import { SimpleModal } from '../Modal';

export const Home = () => {
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [persistentOrder, setPersistentOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const modalRef = useRef(null);

  const handleRefresh = () => {
    const temp = [];
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      const tempObject = {
        category: category.category,
        open: category.open,
        order: category.order
      }
      temp.push(tempObject);
    }
    setPersistentOrder([...temp]);
    setRefresh(!refresh);
  }

  useEffect(() => {
    setLoading(true);
    axios.get('https://v2.jokeapi.dev/categories')
      .then(async (result) => {
        const temp = [];
        for (let i = 0; i < result.data.categories.length; i++) {
          const category = result.data.categories[i];
          if (category.toLowerCase() === 'christmas' || category.toLowerCase() === 'spooky') continue;
          const currentPersistentOrder = persistentOrder.find((persistOrder) => persistOrder.category === category);
          const categoryData = await axios.get(`https://v2.jokeapi.dev/joke/${category.toLowerCase()}?type=single&amount=4`);
          const jokesData = categoryData.data.jokes.map((item) => item.joke);
          if (persistentOrder.length > 0) {
            temp.push({ category, open: currentPersistentOrder.open, order: currentPersistentOrder.order, jokesData: jokesData, count: 2 });
          } else {
            temp.push({ category, open: false, order: i, jokesData: jokesData, count: 2 });
          }
        }
        setLoading(false);
        setCategories([...temp]);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err)
      });
  }, [refresh]);
  return (
    <ScrollView>
      <View style={tw`bg-gray-200 h-full px-10 py-7`}>
        <Text style={tw`text-center font-bold text-xl`}>Jokes</Text>
        <SolidButton onPress={handleRefresh} style={tw`my-7`}>
          <Text>Refresh</Text>
        </SolidButton>
        <View style={tw`flex gap-y-10`}>
          {
            categories.sort(compare).map((category, idx) => (
              <CategoryBox key={category.category} category={category} categories={categories} idx={idx} setDescription={setDescription} modalRef={modalRef} setCategories={setCategories} />
            ))
          }
        </View>
      </View>
      <Spinner
        visible={loading}
      />
      <SimpleModal description={description} modal={modalRef} />
    </ScrollView>
  );
}