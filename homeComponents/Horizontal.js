import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';

const horizontalData = [
  { id: '1', title: 'Azalai Hotel Cotonou', image: require('../assets/0225n120008jrketwB610_W_750_1624_R5.webp'), description: 'L\'Azalai Hotel Cotonou est un établissement de luxe situé au cœur de Cotonou, offrant des hébergements élégants, des installations modernes et un service de classe mondiale. Profitez de chambres confortables, de restaurants gastronomiques et de vues spectaculaires sur la ville.' },
  { id: '2', title: 'Benin Marina Hotel', image: require('../assets/AzalaiHotel.jpg'), description: 'Le Benin Marina Hotel est un complexe hôtelier de luxe sur le front de mer de Cotonou, offrant un hébergement de qualité supérieure, des restaurants raffinés et des installations de loisirs haut de gamme. Détendez-vous dans un cadre luxueux avec vue sur l\'océan Atlantique.' },
  { id: '3', title: 'Benin Marina Hotel Cotonou', image: require('../assets/Benin-Marina-Hotel-Cotonou-Exterior.jpeg'), description: 'Le Benin Marina Hotel à Cotonou est un havre de paix urbain, offrant des chambres élégantes, des espaces de détente luxueux et des services haut de gamme. Découvrez une hospitalité exceptionnelle dans un cadre enchanteur près de la mer.' },
  { id: '4', title: 'Benin Marina Hotel', image: require('../assets/BeninMarinaHotel.jpg'), description: 'Le Benin Marina Hotel est un complexe hôtelier de renommée internationale à Cotonou, proposant des hébergements de luxe, des installations de classe mondiale et une atmosphère raffinée. Profitez d\'une escapade inoubliable dans cet établissement prestigieux.' },
  { id: '5', title: 'Tibi Libi', image: require('../assets/TibiLibi.jpeg'), description: 'Tibi Libi est un hôtel boutique de luxe à Cotonou, offrant un hébergement exclusif, une cuisine raffinée et des expériences sur mesure. Détendez-vous dans des chambres élégantes, explorez les saveurs de la cuisine locale et profitez d\'un service personnalisé de première classe.' },
  { id: '6', title: 'Complexe Hôtelier', image: require('../assets/complexe.jpeg'), description: 'Le Complexe Hôtelier est une oasis de luxe au cœur de la nature béninoise, offrant des hébergements élégants, des installations de loisirs haut de gamme et une cuisine gastronomique. Imprégnez-vous de la sérénité de cet environnement préservé et profitez d\'une escapade relaxante.' },
  { id: '7', title: 'Hotel du Lac', image: require('../assets/hotelDu LAc.png'), description: 'L\'Hotel du Lac est un établissement de luxe niché au bord d\'un lac paisible, offrant des vues pittoresques, des installations de bien-être et une cuisine exquise. Détendez-vous dans des chambres élégantes, profitez d\'activités nautiques et savourez des moments de tranquillité au cœur de la nature.' },
  { id: '8', title: 'Hotel S5', image: require('../assets/S5.jpg'), description: 'L\'Hotel S5 est un refuge de luxe au Bénin, offrant des hébergements élégants, des services de première classe et des équipements modernes. Détendez-vous dans un cadre raffiné, explorez les attractions locales et profitez d\'une expérience hôtelière exceptionnelle.' },
  { id: '9', title: 'Hotel du Port', image: require('../assets/hotel-du-port-general-ba37a2b.jpg'), description: 'L\'Hotel du Port est un hôtel emblématique à Cotonou, offrant une combinaison parfaite de confort moderne et de charme historique. Détendez-vous dans des chambres élégantes, découvrez la cuisine locale et explorez les trésors culturels de la ville.' },
  { id: '10', title: 'Royal Space Hotel', image: require('../assets/royal-space-hotel-est.jpg'), description: 'Le Royal Space Hotel est une adresse de luxe à Cotonou, offrant des hébergements élégants, des installations de loisirs haut de gamme et un service attentionné. Détendez-vous dans des chambres confortables, savourez une cuisine raffinée et profitez d\'une expérience hôtelière exclusive.' },
  { id: '11', title: 'Novotel', image: require('../assets/novotel.jpg'), description: 'Le Novotel est un hôtel de renommée internationale à Cotonou, offrant un hébergement de qualité supérieure, des services haut de gamme et une atmosphère accueillante. Profitez d\'un séjour confortable, explorez les attractions locales et vivez une expérience hôtelière inoubliable.' },
  { id: '12', title: 'Parcours de Golf', image: require('../assets/parcours-de-golf.jpg'), description: 'Le Parcours de Golf est un hôtel de luxe avec un parcours de golf de renommée internationale, offrant des hébergements élégants, des installations de loisirs haut de gamme et un service de classe mondiale. Détendez-vous dans des chambres spacieuses, profitez du golf et explorez les paysages pittoresques.' },
  { id: '13', title: 'Kobourou City Hotel Parakou', image: require('../assets/kobourou-city-hotel-parakou-1609769821.jpg'), description: 'Le Kobourou City Hotel Parakou est un établissement de luxe situé dans la ville animée de Parakou, offrant des hébergements élégants, des services personnalisés et une cuisine délicieuse. Détendez-vous dans des chambres confortables, explorez la région et découvrez l\'hospitalité béninoise.' },
];

const Horizontal = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={horizontalData}
        // ListHeaderComponent={() => (
        //   <View style={styles.header}>
        //     <Text style={styles.headerText}>Visitez nos Hotels </Text>
        //   </View>
        // )}
        renderItem={({ item }) => (
          <ImageBackground source={item.image} style={styles.itemBackground}>
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </ImageBackground>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // backgroundColor: '#f0f0f0',
    color: '#f0f0f0',
    padding: 10,
  },
  headerText: {
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#f0f0f0',

  },
  container: {
    // Ajoutez des styles supplémentaires au conteneur si nécessaire
  },
  itemBackground: {
    width: 345, // Largeur de chaque élément
    height: 160, // Hauteur de chaque élément
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    overflow: 'hidden', // Assurez-vous que le texte ne dépasse pas des bords de l'image
  },
  content: {
    backgroundColor: 'rgba(21,25,21,0.8)',
    padding: 20,
    borderRadius: 10,

  },
  title: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Horizontal;
