import React , {Component} from 'react';
import { StyleSheet, View, Alert, Vibration, ImageBackground } from 'react-native';
import { Ionicons, FontAwesome, Entypo, FontAwesome5 } from '@expo/vector-icons'; // 6.2.2


import Header from './components/Header';
import Score from './components/Score';
import Card from './components/Card';

import Helpers from './Helpers';

//import helpers from './helpers';

export default class Nivel2 extends Component{
  

  state = {
    presionado : false
  }

  toggleSwitch = (value) => {
     this.setState({presionado : value})
  }

  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
    this.resetCards = this.resetCards.bind(this);
   
    let sources = {
      'fontawesome': FontAwesome,
      'entypo': Entypo,
      'ionicons': Ionicons,
      'fontawesome5': FontAwesome5
    };

   
      let cards = [
        {
          src: 'fontawesome5',
          name: 'hippo',
          color: '#FFEF78'  
        },
        {
          src: 'fontawesome5',
          name: 'dog',
          color: '#50CB93'
        },
        {
          src: 'fontawesome5',
          name: 'cat',
          color: '#f7911f'
        },
        {
          src: 'fontawesome5',
          name: 'robot',
          color: '#B61919'
        },
        {
          src: 'entypo',
          name: 'moon',
          color: '#ffd43b'
        },
        {
          src: 'ionicons',
          name: 'star',
          color: '#7C83FD'
        },
        {
          src: 'ionicons',
          name: 'ice-cream',
          color: '#FB7AFC'
        },
        {
          src: 'fontawesome5',
          name: 'horse',
          color: '#FFDAC7'
        },
        {
          src: 'ionicons',
          name: 'planet-outline',
          color: '#A45D5D'
        },
        {
          src: 'ionicons',
          name: 'rocket-outline',
          color: '#FFB344'
        },
        /*{
          src: 'ionicons',
          name: 'tennisball-outline',
          color: '#B1FFFD'
        },
        {
          src: 'ionicons',
          name: 'american-football-outline',
          color: '#BFA2DB'
        }  */ 
      ];
    
    let clone = JSON.parse(JSON.stringify(cards));
    this.cards = cards.concat(clone);
    this.cards.map((obj) => {
      let id = Math.random().toString(36).substring(7);
      obj.id = id;
      obj.src = sources[obj.src];
      obj.is_open = false;
    });
  
    //this.cards = shuffle(this.cards); 
    //cards = cards.shuffle(cards);

    //cards = this.cards.sort(()=>Math.random())
    //cards = Math.floor(Math.random() * cards.length);

    //this.cards = this.cards.shuffle(); 

    this.cards = this.cards.shuffle();
    this.state = {
      current_selection: [],
      selected_pairs: [],
      score: 0,
      cards: this.cards
    }
  
  }
 
  
  render() {
    const imagen = { uri: "https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=339&q=80" };
    return (
        <View style={styles.container}>
        <ImageBackground source={imagen} resizeMode="cover" style={styles.image}>
        <Header name="Nivel Medio"/>
        <View style={styles.body}>
          { 
            this.renderRows.call(this) 
          }
        </View>
        <Score score={this.state.score} />
        
        </ImageBackground>
      </View>
      

    );
  }

  

  resetCards() {
    let cards = this.cards.map((obj) => {
      obj.is_open = false;
      return obj;
    });

    //cards = shuffle(cards);
    //cards = Math.random();
    //shuffle(cards);
    //cards = Math.floor(Math.random());
    //cards = cards.sort(Math.random())
    //cards = Math.floor(Math.random() * cards.length);
    cards = cards.shuffle();
    this.setState({
      current_selection: [],
      selected_pairs: [],
      cards: cards,
      score: 0
    });
  }


  renderRows() {
   
    let contents = this.getRowContents(this.state.cards);
    return contents.map((cards, index) => {
      return (
        <View key={index} style={styles.row}>
          { this.renderCards(cards) }
        </View>
      );
    });
   
  }


  renderCards(cards) {
    return cards.map((card, index) => {
      return (
        <Card 
          key={index} 
          src={card.src} 
          name={card.name} 
          color={card.color} 
          is_open={card.is_open}
          clickCard={this.clickCard.bind(this, card.id)} 
        />
      );
    });
  }


  clickCard(id) {
    let selected_pairs = this.state.selected_pairs;
    let current_selection = this.state.current_selection;
    let score = this.state.score;

    let index = this.state.cards.findIndex((card) => {
      return card.id == id;
    });

    let cards = this.state.cards;
    
    if(cards[index].is_open == false && selected_pairs.indexOf(cards[index].name) === -1){

      cards[index].is_open = true;
      
      current_selection.push({ 
        index: index,
        name: cards[index].name
      });

      if(current_selection.length == 2){
        if(current_selection[0].name == current_selection[1].name){
          score += 1;
          selected_pairs.push(cards[index].name);
        }else{
         
          cards[current_selection[0].index].is_open = false;

          setTimeout(() => {
            cards[index].is_open = false;
            this.setState({
              cards: cards
            });
          }, 500);
        }

        current_selection = [];
      }

      this.setState({
        score: score,
        cards: cards,
        current_selection: current_selection
      });

      if(score==10){
        const ONE_SECOND_IN_MS = 1000;
         Alert.alert(
          "Has Ganado",
          Vibration.vibrate(1 * ONE_SECOND_IN_MS),
          [ 
            { text: "Reiniciar", onPress:this.resetCards},
            {
              text: "Salir",
              onPress: () => this.props.navigation.navigate('Home'),
              style: "cancel"
              }
          ]
        )
      }

    }
  
  }


  getRowContents(cards) {
    let contents_r = [];
    let contents = [];
    let count = 0;
    cards.forEach((item) => {
      count += 1;
      contents.push(item);

      if(this.state.presionado){
        if(count == 3){
          contents_r.push(contents)
          count = 0;
          contents = [];
        }
      }

      if(this.toggleSwitch){
        if(count == 4){
          contents_r.push(contents)
          count = 0;
          contents = [];
        }
      }
      
      
    });

    return contents_r;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#0F0E0E',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  body: {
    flex: 18,
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20
  },
  switch: {
    marginBottom: 18,
    marginLeft: 30,
  },
});
 