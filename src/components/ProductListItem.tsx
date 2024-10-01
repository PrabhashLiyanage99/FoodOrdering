import { StyleSheet, Image, Pressable } from 'react-native';
import products from '@/assets/data/products';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';
import { Product } from '../types';
import { Link } from 'expo-router';

type ProductListItemProps = {
    product: Product
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
      <Image source={{ uri: product.image}} style={styles.image}
      resizeMode='contain'
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={ styles.price}>${product.price}</Text>
    </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    margin: 5,
    flex: 1,
    maxWidth: '50%'
  },
  title: {fontSize: 18 , 
    fontWeight: '600',
    marginVertical: 10,
  }, 
  price:{
    color: Colors.light.tint ,
    fontWeight: 'bold',
  },
  image:{
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    
  },
});
