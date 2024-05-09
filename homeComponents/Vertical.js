  import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Animated, Image, TouchableOpacity, Button } from 'react-native';
import { Ionicons, home } from '@expo/vector-icons';
// import Modal from "react-native-modal";
  import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Modal from '../screens/Modal';
import Details from '../screens/Details';

const verticalData = [
 { id: '1', title: 'Place de l\'Amazone, Cotonou', image: require('../assets/Amazone.jpeg'), description: 'La Place de l\'Amazone à Cotonou est un espace verdoyant au cœur de la ville, offrant un refuge de la vie urbaine animée. Détendez-vous dans ce parc tranquille, admirez la nature environnante et profitez d\'une atmosphère paisible.' },
{ id: '2', title: 'Statue de Biogerra, Marina de Cotonou', image: require('../assets/Bioguerra_Cotonou.webp'), description: 'La statue de Biogerra à la Marina de Cotonou est un emblème de la ville, représentant l\'héritage maritime et l\'histoire coloniale du Bénin. Admirez cette sculpture emblématique, promenez-vous le long du front de mer et imprégnez-vous de l\'ambiance animée de la marina.' },
  { id: '3', title: 'Porte du Non-Retour, Ouidah', image: require('../assets/PorteNonRetour.jpeg'), description: 'La Porte du Non-Retour à Ouidah est un monument historique symbolisant le point de départ des Africains réduits en esclavage lors de la traite transatlantique des esclaves. Explorez sa signification et apprenez l\'histoire de l\'esclavage.' },
  { id: '4', title: 'Village Lacustre de Ganvié', image: require('../assets/villageGanvié.jpeg'), description: 'Ganvié est un village lacustre unique au Bénin, construit sur pilotis au milieu du lac Nokoué. Découvrez sa culture vibrante, ses maisons colorées et son mode de vie traditionnel.' },
  { id: '5', title: 'Tour de la Mangrove', image: require('../assets/visiteMangrove.jpg'), description: 'Partez en tour de la mangrove au Bénin et explorez le réseau complexe des forêts de mangroves le long de la côte. Découvrez l\'importance écologique des mangroves et observez une faune diversifiée.' },
  { id: '6', title: 'Musée Royal de Natitingou', image: require('../assets/MuseeRoyaleNatitingou.jpeg'), description: 'Le Musée Royal de Natitingou présente le patrimoine culturel de la région de l\'Atakora au Bénin. Explorez ses expositions sur l\'artisanat traditionnel, les rituels et les artefacts historiques.' },
  { id: '7', title: 'Centre Songhaï', image: require('../assets/centreShonghai.jpeg'), description: 'Le Centre Songhaï est un complexe agricole et éducatif à Porto-Novo, promouvant les pratiques agricoles durables et l\'entrepreneuriat. Apprenez l\'agriculture biologique, l\'agrobusiness et le développement rural.' },
  { id: '8', title: 'Dassa-Zoumé', image: require('../assets/DassaZoume.jpg'), description: 'Dassa-Zoumé est une ville historique au Bénin, connue pour ses festivals culturels, ses cérémonies traditionnelles et sa signification spirituelle. Explorez ses marchés, ses sanctuaires et ses monuments anciens.' },
  { id: '9', title: 'Cascade de Kota', image: require('../assets/CascadeKota.jpeg'), description: 'La Cascade de Kota est une attraction naturelle pittoresque au Bénin, entourée d\'une végétation luxuriante et de falaises rocheuses. Profitez des sentiers de randonnée, de la baignade dans les bassins et du pique-nique dans ce cadre pittoresque.' },
  { id: '10', title: 'Palais Royal d\'Allada', image: require('../assets/PalaisRoyalAllada.jpg'), description: 'Le Palais Royal d\'Allada est un monument historique au Bénin, autrefois siège du Royaume d\'Allada. Explorez son architecture, ses artefacts royaux et apprenez l\'histoire du royaume.' },
  { id: '11', title: 'Palais des Rois d\'Abomey', image: require('../assets/PalaisRoyalAbomey.jpg'), description: 'Le Palais des Rois d\'Abomey est un site du patrimoine mondial de l\'UNESCO au Bénin, présentant l\'histoire et la culture du Royaume du Dahomey. Explorez son architecture emblématique, ses reliques royales et ses expositions muséales.' },
  { id: '12', title: 'Village Taneka', image: require('../assets/Taneka.jpg'), description: 'Le Village Taneka est une communauté traditionnelle dans le nord du Bénin, habitée par le peuple Taneka. Découvrez leurs coutumes, leurs traditions et leur vie quotidienne dans un village rural africain.' },
  { id: '13', title: 'Marché de Lokossa', image: require('../assets/Lokossa.jpeg'), description: 'Le Marché de Lokossa est un marché animé dans le sud du Bénin, connu pour son atmosphère vibrante et sa gamme diversifiée de produits. Explorez les étals proposant des produits frais, des textiles, des artisanats et bien plus encore.' },
  { id: '14', title: 'Parc National de la Pendjari', image: require('../assets/ParcNationalW.jpg'), description: 'Le Parc National de la Pendjari est une zone protégée dans le nord du Bénin, réputée pour sa biodiversité riche et ses efforts de conservation de la faune sauvage. Partez pour un safari et observez des éléphants, des lions, des hippopotames et d\'autres espèces.' },
  { id: '15', title: 'Parc National de la Pendjari', image: require('../assets/parcNational.webp'), description: 'Le Parc National W est un parc transfrontalier au Bénin, au Niger et au Burkina Faso, connu pour ses écosystèmes diversifiés et sa faune sauvage. Explorez ses savanes, ses rivières et ses forêts, et observez des animaux tels que des éléphants, des buffles et des antilopes.' },
  { id: '16', title: 'Plage de Possotomé', image: require('../assets/Possotome_cocotier_plage_chez_prefet_pilotis_lac_aheme_ecotourisme_ecobenin_benin.jpg'), description: 'La plage de Possotomé est une destination pittoresque sur le lac Ahémé, dans le sud du Bénin, offrant des opportunités de baignade, de bain de soleil et de détente. Explorez ses rives sablonneuses, ses cocotiers et ses vues pittoresques.' },
  { id: '17', title: 'Musée ethnographique Alexandre-Sénou Adandé', image: require('../assets/musee-ethnographique-alexandre-senou-adande.jpg'), description: 'Le Musée ethnographique Alexandre-Sénou Adandé à Porto-Novo présente la diversité culturelle du Bénin à travers ses expositions sur les arts traditionnels, l\'artisanat et les rituels. Explorez sa collection de masques, de sculptures et d\'objets cérémoniels.' },
];

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Modal" component={Modal} />
    </Stack.Navigator>
  );
}



  const VerticalList = ({ onScroll }) => {
    const [scrollY] = useState(new Animated.Value(0));
    const navigation = useNavigation();
    
const handleModal = (item) => {
  navigation.navigate("Details", { item });
};


    const opacity = scrollY.interpolate({
      inputRange: [0, 100], // Plage de valeurs de défilement
      outputRange: [1, 0], // Plage de valeurs d'opacité
      extrapolate: 'clamp', // Garde les valeurs d'opacité dans la plage spécifiée
    });


    const renderCard = ({ item }) => (
      <Animated.View style={[styles.card, { opacity }]}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          {/* <Text style={styles.description}>{item.description}</Text> */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
          <Ionicons name="location" size={24} color="#fff"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Ionicons name="paper-plane" size={24} color="#fff"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="add" size={24} color="#fff" onPress={() => handleModal(item)} />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    );

    return (
  <View style={{ flex: 1 }}>
<View style={styles.header}>
  <Text style={styles.headerText}>Explorez nos sites touristiques</Text>
</View>
    <Animated.FlatList
      data={verticalData}
      renderItem={renderCard}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={16}
        />

  </View>
    );
  };

  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      marginBottom: 20,
      marginHorizontal: 16,
      elevation: 3,
    },
    image: {
      width: '100%',
      height: 200,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    content: {
      padding: 16,
      // marginTop: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      marginBottom: 8,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,

    },
    button: {
      backgroundColor: '#4CAF50',
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 5,
      marginRight: 8,
    },
    buttonText: {
      color: '#ffffff',
      fontWeight: 'bold',
    },
      header: {
        backgroundColor: '#4CAF50',
        padding: 10,
        marginTop: 15,
        marginBottom: 20,
        width: '90%',
        color: '#fff',
        marginHorizontal: 20,
        borderRadius: 10,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff',
    },
    modalButton: {
      backgroundColor: '#4CAF50',
      // marginHorizontal: 10,
      borderRadius: 5,
      padding: 8,
    },
    buttonTitle: {
      color: 'white',
      fontSize: 24,
      textAlign: 'center'
    },
    Modalcontent: {
      backgroundColor: '#fff',
      marginVertical: 20,
    }
  });

  export default VerticalList;