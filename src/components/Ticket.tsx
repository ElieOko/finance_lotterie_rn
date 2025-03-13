import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const Ticket = () => {
  const { width } = useWindowDimensions(); // Récupère la largeur de l'écran

  // Définir des dimensions dynamiques
  const ticketWidth = width * 0.9; // 90% de la largeur de l'écran
  const stubWidth = ticketWidth * 0.37; // 35% de la largeur du ticket
  const checkWidth = ticketWidth * 0.65; // 65% de la largeur du ticket

  return (
    <View style={styles.container}>
        
        <View style={[styles.ticket, { width: ticketWidth }]}>
            {/* Stub */}
            <Shadow
            distance={5} // Distance de l'ombre
            startColor="yellow" // Couleur de départ de l'ombre
            offset={[4,1]} // Décalage de l'ombre
            >
                <View style={[styles.stub, { width: stubWidth }]}>
                    <View style={styles.top}>
                        <Text style={styles.admit}>Event</Text>
                        <View style={styles.line}></View>
                        <View >
                            <Text>Game </Text>
                            <Text style={styles.invitationNumber}>3126</Text>
                        </View>
                    </View>
                    <Text style={styles.number}>1$</Text>
                    <View style={styles.invite}>
                        <Text>Invite for you</Text>
                    </View>
                </View>
            </Shadow>
        

        {/* Check */}
        <Shadow
        distance={5} // Distance de l'ombre
        startColor="yellow" // Couleur de départ de l'ombre
        offset={[4,1]} // Décalage de l'ombre
        >
            <View style={[styles.check, { width: checkWidth }]}>
          <Text style={styles.big}>
            Félicitation{'\n'}
          </Text>
          <Text style={{fontSize:28}}>
            {"Muzola Paul"}
          </Text>
          <Text style={styles.checkNumber}>#20.000.000</Text>
          <View style={styles.info}>
            <View style={styles.section}>
              <Text style={styles.title}>Date</Text>
            <Text>{Date.now()}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.title}>Numero du participant</Text>
              <Text>31415926</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.title}>Edition</Text>
              <Text>1</Text>
            </View>
          </View>
        </View>
        </Shadow>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  ticket: {
    flexDirection: 'row',
    margin: 20,
    
  },
  stub: {
    backgroundColor: '#ef5658',
    borderBottomLeftRadius:99,
    height: 250,
    padding: 10,
    justifyContent: 'space-between',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  admit: {
    color: 'white',
  },
  line: {
    backgroundColor: 'white',
    height: 40,
    width: 3,
    marginHorizontal: 5,
  },
  num: {
    color: 'white',
  },
  invitationNumber: {
    color: 'black',
  },
  number: {
    fontSize: 70,
    color: 'white',
    position: 'absolute',
    left: 40,
    top: 50,
  },
  invite: {
    position: 'absolute',
    left: 150,
    bottom: 45,
    color: 'black',
  },
  check: {
    backgroundColor: '#f8f9fa',
    height: 250,
    padding: 10,
    justifyContent: 'space-between',
  },
  big: {
    fontSize: 38,
    fontWeight: '900',
    lineHeight: 56,
  },
  checkNumber: {
    position: 'absolute',
    right :0,
    bottom :0,
    color: '#ef5658',
    fontSize: 28,
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginRight:30
  },
  section: {
    marginTop:4,
    marginRight: 5,
    position:'relative'
  },
  title: {
    fontSize: 10,
    textTransform: 'uppercase',
  },
});

export default Ticket;