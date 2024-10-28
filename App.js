import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function CoffeeApp() {
  const cappuccinos = [
    {
      id: '1',
      name: 'Cappuccino com Leite de Aveia',
      price: '$4.99',
      image: 'https://path-to-image.com/cappuccino-aveia.jpg',
    },
    {
      id: '2',
      name: 'Cappuccino com Chocolate',
      price: '$3.14',
      image: 'https://path-to-image.com/cappuccino-chocolate.jpg',
    },
  ];

  const renderCappuccino = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fcappuccino&psig=AOvVaw0UgcRcGzFF8FESGksqC-x6&ust=1724525773600000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPi7i6nli4gDFQAAAAAdAAAAABAE' }}
            style={styles.logo}
          />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Pesquisar"
            placeholderTextColor="#ccc"
            style={styles.searchInput}
          />
        </View>

        {/* Category Tabs */}
        <View style={styles.tabsContainer}>
          <Text style={styles.activeTab}>Cappuccino</Text>
          <Text style={styles.inactiveTab}>Espresso</Text>
          <Text style={styles.inactiveTab}>Latte</Text>
          <Text style={styles.inactiveTab}>Mocha</Text>
        </View>

        {/* Cappuccino List */}
        <FlatList
          data={cappuccinos}
          renderItem={renderCappuccino}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={styles.listContainer}
          showsHorizontalScrollIndicator={false}
        />

        {/* Two more cappuccinos */}
        <View style={styles.additionalItemsContainer}>
          <View style={styles.additionalCard}>
            <Image source={{ uri: 'https://path-to-image.com/cappuccino-vanilla.jpg' }} style={styles.image} />
            <Text style={styles.title}>Cappuccino com Baunilha</Text>
            <Text style={styles.price}>$4.50</Text>
          </View>
          <View style={styles.additionalCard}>
            <Image source={{ uri: 'https://path-to-image.com/cappuccino-caramel.jpg' }} style={styles.image} />
            <Text style={styles.title}>Cappuccino com Caramelo</Text>
            <Text style={styles.price}>$4.75</Text>
          </View>
        </View>

        {/* Custom message */}
        <Text style={styles.customMessage}>Especialmente para você!</Text>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity>
          <Text>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>🛒</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    padding: 16,
  },
  scrollContent: {
    flexGrow: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  logo: {
    width: 100,
    height: 100,
  },
  searchContainer: {
    backgroundColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchInput: {
    color: '#fff',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  activeTab: {
    color: '#FF6D00',
    fontWeight: 'bold',
  },
  inactiveTab: {
    color: '#aaa',
  },
  listContainer: {
    paddingVertical: 8,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 16,
    marginRight: 16,
    width: 150,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
  },
  price: {
    color: '#FF6D00',
    marginTop: 4,
    fontSize: 16,
  },
  additionalItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  additionalCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 16,
    width: '48%',
  },
  customMessage: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});
