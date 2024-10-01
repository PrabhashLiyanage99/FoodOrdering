import products from '@/assets/data/products';
import { FlatList } from 'react-native';
import { View } from '@/src/components/Themed';
import ProductListItem from '@/src/components/ProductListItem';
export default function MenuScreen() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductListItem product={item}/>}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10}}
      />
    </View>
  );
}
