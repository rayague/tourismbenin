import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; // Importez le composant MapView et Marker

const verticalData = [
  { id: '1', title: 'Place de l\'Amazone, Cotonou', image: require('../assets/Amazone.jpeg'), description: 'La Place de l\'Amazone à Cotonou est un espace verdoyant au cœur de la ville, offrant un refuge de la vie urbaine animée. Détendez-vous dans ce parc tranquille, admirez la nature environnante et profitez d\'une atmosphère paisible.', latitude: 6.3703, longitude: 2.3912 },
  { id: '2', title: 'Statue de Biogerra, Marina de Cotonou', image: require('../assets/Bioguerra_Cotonou.webp'), description: 'La statue de Biogerra à la Marina de Cotonou est un emblème de la ville, représentant l\'héritage maritime et l\'histoire coloniale du Bénin. Admirez cette sculpture emblématique, promenez-vous le long du front de mer et imprégnez-vous de l\'ambiance animée de la marina.', latitude: 6.3616, longitude: 2.4057 },
  // Ajoutez d'autres sites touristiques au besoin
  { id: '3', title: 'Porte du Non-Retour, Ouidah', image: require('../assets/PorteNonRetour.jpeg'), description: 'La Porte du Non-Retour à Ouidah est un monument historique symbolisant le point de départ des Africains réduits en esclavage lors de la traite transatlantique des esclaves. Explorez sa signification et apprenez l\'histoire de l\'esclavage.', latitude: 6.3581, longitude: 2.085 },
  { id: '4', title: 'Village Lacustre de Ganvié', image: require('../assets/villageGanvié.jpeg'), description: 'Ganvié est un village lacustre unique au Bénin, construit sur pilotis au milieu du lac Nokoué. Découvrez sa culture vibrante, ses maisons colorées et son mode de vie traditionnel.', latitude: 6.4833, longitude: 2.2500 },
  { id: '5', title: 'Tour de la Mangrove', image: require('../assets/visiteMangrove.jpg'), description: 'Partez en tour de la mangrove au Bénin et explorez le réseau complexe des forêts de mangroves le long de la côte. Découvrez l\'importance écologique des mangroves et observez une faune diversifiée.', latitude: 6.3986, longitude: 2.3555 },
  { id: '6', title: 'Musée Royal de Natitingou', image: require('../assets/MuseeRoyaleNatitingou.jpeg'), description: 'Le Musée Royal de Natitingou présente le patrimoine culturel de la région de l\'Atakora au Bénin. Explorez ses expositions sur l\'artisanat traditionnel, les rituels et les artefacts historiques.', latitude: 10.3000, longitude: 1.3833 },
  { id: '7', title: 'Centre Songhaï', image: require('../assets/centreShonghai.jpeg'), description: 'Le Centre Songhaï est un complexe agricole et éducatif à Porto-Novo, promouvant les pratiques agricoles durables et l\'entrepreneuriat. Apprenez l\'agriculture biologique, l\'agrobusiness et le développement rural.', latitude: 6.4969, longitude: 2.6036 },
  { id: '8', title: 'Dassa-Zoumé', image: require('../assets/DassaZoume.jpg'), description: 'Dassa-Zoumé est une ville historique au Bénin, connue pour ses festivals culturels, ses cérémonies traditionnelles et sa signification spirituelle. Explorez ses marchés, ses sanctuaires et ses monuments anciens.', latitude: 7.7477, longitude: 2.1897 },
  { id: '9', title: 'Cascade de Kota', image: require('../assets/CascadeKota.jpeg'), description: 'La Cascade de Kota est une attraction naturelle pittoresque au Bénin, entourée d\'une végétation luxuriante et de falaises rocheuses. Profitez des sentiers de randonnée, de la baignade dans les bassins et du pique-nique dans ce cadre pittoresque.', latitude: 9.5336, longitude: 1.2495 },
  { id: '10', title: 'Palais Royal d\'Allada', image: require('../assets/PalaisRoyalAllada.jpg'), description: 'Le Palais Royal d\'Allada est un monument historique au Bénin, autrefois siège du Royaume d\'Allada. Explorez son architecture, ses artefacts royaux et apprenez l\'histoire du royaume.', latitude: 6.6667, longitude: 2.1500 },
  { id: '11', title: 'Palais des Rois d\'Abomey', image: require('../assets/PalaisRoyalAbomey.jpg'), description: 'Le Palais des Rois d\'Abomey est un site du patrimoine mondial de l\'UNESCO au Bénin, présentant l\'histoire et la culture du Royaume du Dahomey. Explorez son architecture emblématique, ses reliques royales et ses expositions muséales.', latitude: 7.1833, longitude: 1.9833 },
  { id: '12', title: 'Village Taneka', image: require('../assets/Taneka.jpg'), description: 'Le Village Taneka est une communauté traditionnelle dans le nord du Bénin, habitée par le peuple Taneka. Découvrez leurs coutumes, leurs traditions et leur vie quotidienne dans un village rural africain.', latitude: 10.3000, longitude: 0.9000 },
  { id: '13', title: 'Marché de Lokossa', image: require('../assets/Lokossa.jpeg'), description: 'Le Marché de Lokossa est un marché animé dans le sud du Bénin, connu pour son atmosphère vibrante et sa gamme diversifiée de produits. Explorez les étals proposant des produits frais, des textiles, des artisanats et bien plus encore.', latitude: 6.6333, longitude: 1.7167 },
  { id: '14', title: 'Parc National de la Pendjari', image: require('../assets/ParcNationalW.jpg'), description: 'Le Parc National de la Pendjari est une zone protégée dans le nord du Bénin, réputée pour sa biodiversité riche et ses efforts de conservation de la faune sauvage. Partez pour un safari et observez des éléphants, des lions, des hippopotames et d\'autres espèces.', latitude: 11.0000, longitude: 0.0000 },
  { id: '15', title: 'Parc National de la Pendjari', image: require('../assets/parcNational.webp'), description: 'Le Parc National W est un parc transfrontalier au Bénin, au Niger et au Burkina Faso, connu pour ses écosystèmes diversifiés et sa faune sauvage. Explorez ses savanes, ses rivières et ses forêts, et observez des animaux tels que des éléphants, des buffles et des antilopes.', latitude: 11.0000, longitude: 0.0000 },
  { id: '16', title: 'Plage de Possotomé', image: require('../assets/Possotome_cocotier_plage_chez_prefet_pilotis_lac_aheme_ecotourisme_ecobenin_benin.jpg'), description: 'La plage de Possotomé est une destination pittoresque sur le lac Ahémé, dans le sud du Bénin, offrant des opportunités de baignade, de bain de soleil et de détente. Explorez ses rives sablonneuses, ses cocotiers et ses vues pittoresques.', latitude: 6.6561, longitude: 1.8711 },
  { id: '17', title: 'Musée ethnographique Alexandre-Sénou Adandé', image: require('../assets/musee-ethnographique-alexandre-senou-adande.jpg'), description: 'Le Musée ethnographique Alexandre-Sénou Adandé à Porto-Novo présente la diversité culturelle du Bénin à travers ses expositions sur les arts traditionnels, l\'artisanat et les rituels. Explorez sa collection de masques, de sculptures et d\'objets cérémoniels.', latitude: 6.4840, longitude: 2.6056 },
];

export default function MapComponentNative() {
  return (
    <View style={styles.container}>
      {/* Intégration de la carte avec la région initiale pour le Bénin */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 9.3077, // Latitude du Bénin
          longitude: 2.3158, // Longitude du Bénin
          latitudeDelta: 8, // Delta de latitude pour le zoom initial
          longitudeDelta: 8, // Delta de longitude pour le zoom initial
        }}
      >
        {/* Affichage des marqueurs pour chaque site touristique */}
        {verticalData.map(site => (
          <Marker
            key={site.id}
            coordinate={{ latitude: site.latitude, longitude: site.longitude }}
            title={site.title}
            description={site.description}
            pinColor="red" // Définissez la couleur du marqueur sur rouge
          >
            {/* Affichage du nom du site touristique au-dessus du marqueur */}
            {/* <View style={styles.marker}>
              <Text style={styles.markerText}>{site.title}</Text>
            </View> */}
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1, // La carte occupe tout l'espace disponible
  },
  marker: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 5,
    borderRadius: 5,
  },
  markerText: {
    fontWeight: 'bold',
  },
});
