import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Body,
  Left,
  Right
} from "native-base";
import styles from "../styles/styles";
import {Text,View, TouchableHighlight,Modal,Alert} from 'react-native';
import {Title} from 'react-native-paper';
import {questions} from '../../shared/questions';
var correct=0,total=0,skip=0;
class Basic extends Component {

	constructor(props){
		super(props);
		this.state={
			i:0,
			activeButton:0,
			attempt:0,
			curshow:0,
			modalVisible: false,
			isfinish:0,
			attempted:[]
		};
		this.continue=this.continue.bind(this);
		this.submit=this.submit.bind(this);
		this.skip=this.skip.bind(this);
		this.setthis=this.setthis.bind(this);
		this.setModalVisible=this.setModalVisible.bind(this);
		this.handlefinish=this.handlefinish.bind(this);
		this.check=this.check.bind(this);
	}

	continue(){
		this.setState({
			curshow:0,
			attempt:0,
			activeButton:0
		});
		
		if(questions.length-1===this.state.i){
			this.setState({isfinish:1});
			this.setModalVisible(!this.state.modalVisible);
		}
		else{
			this.setState({
				i:this.state.i+1
			});
		}
	}
	skip(){
		skip++;
		if(questions.length-1===this.state.i){
			this.setState({isfinish:1});
			this.setModalVisible(!this.state.modalVisible);
		}
		else{
			this.setState({
				i:this.state.i+1,
				activeButton:0
			});
		}
	}

	check(){
		if(this.state.activeButton==1 && questions[this.state.i].op1===questions[this.state.i].ans)
			return true;
		else if(this.state.activeButton==2 && questions[this.state.i].op2===questions[this.state.i].ans)
			return true;
		else if(this.state.activeButton==3 && questions[this.state.i].op3===questions[this.state.i].ans)
			return true;
		else if(this.state.activeButton==4 && questions[this.state.i].op4===questions[this.state.i].ans)
			return true;
		else
			return false;
	}

	submit(){
		if(this.state.activeButton==0){
			alert("Choose one of the option");
		}
		else{
			
			var obj={
				id:questions[this.state.i].id,
				ac:this.check()
			};
			if(obj.ac)
				correct++;
			total++;
			this.state.attempted.push(obj);

			this.setState({
				curshow:1,
				attempt:1
			});
		}
	}
	setthis(val){
		this.setState({
			activeButton:val
		});
	}
	setModalVisible = (visible) => {
		this.setState({ modalVisible: visible });
	}
	handlefinish(){
		this.setModalVisible(!this.state.modalVisible);
		this.props.navigation.goBack();
	}
	  
	render() {
	console.log(this.props.route.params.subject);


	if(this.state.isfinish){
		return(
			<Modal
				animationType="slide"
				transparent={true}
				visible={this.state.modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
				}}
			>
				
				<View style={styles.centeredView}>
				<View style={styles.modalView}>
				<Title style={styles.title}>Performance Card</Title>
				<Text style={styles.modalText}>No of attempted question - {total} </Text>
				<Text style={styles.modalText}>No of right attempt - {correct}</Text>
				<Text style={styles.modalText}>No of wrong attempt - {total-correct}</Text>
				<Text style={styles.modalText}>No of skip - {skip}</Text>
	
				<TouchableHighlight
					style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
					onPress={() => {
						this.handlefinish();
					}}
				>
					<Text style={styles.textStyle}>Finish</Text>
				</TouchableHighlight>
				</View>
				</View>
			</Modal>	
		);
	}
	else{
		return (
			<Container style={styles.container}>
			<Header>
				<Left>
					<Button transparent onPress={() => this.props.navigation.goBack()}>
					<Icon name="arrow-back" />
					</Button>
				</Left>
				<Body>
					<Text>Basic Card</Text>
				</Body>
				<Right />
			</Header>
	
			<Content>
				<Content padder>
				<Card style={styles.mb}>
					<CardItem >
					<Body>
					<Text style={styles.q}>{this.state.i+1}. {" "}{questions[this.state.i].name}</Text>
					</Body>
					</CardItem>
				</Card>
				</Content>
				<Content padder>
					<View style={(this.state.activeButton===1)?styles.active:styles.notactive}>
					<Card style={styles.mb}>
						<CardItem button onPress={()=>this.setthis(1)}>
						<Body>
						<Text style={styles.q}>{"1.  "}{questions[this.state.i].op1}</Text>
						</Body>
						</CardItem>
					</Card>
					</View>
				</Content>
				<Content padder>
					<View style={(this.state.activeButton===2)?styles.active:styles.notactive}>
					<Card style={styles.mb}>
						<CardItem button onPress={()=>this.setthis(2)}>
						<Body>
						<Text style={styles.q}>{"2.  "}{questions[this.state.i].op2}</Text>
						</Body>
						</CardItem>
					</Card>
					</View>
				</Content>
				<Content padder>
					<View style={(this.state.activeButton===3)?styles.active:styles.notactive}>
					<Card style={styles.mb}>
						<CardItem button onPress={()=>this.setthis(3)}>
						<Body>
						<Text style={styles.q}>{"3.  "}{questions[this.state.i].op3}</Text>
						</Body>
						</CardItem>
					</Card>
					</View>
				</Content>
				<Content padder>
					<View style={(this.state.activeButton===4)?styles.active:styles.notactive}>
					<Card style={styles.mb}>
						<CardItem button onPress={()=>this.setthis(4)}>
						<Body>
						<Text style={styles.q}>{"4.  "}{questions[this.state.i].op4}</Text>
						</Body>
						</CardItem>
					</Card>
					</View>
				</Content>
				{
					this.state.curshow?
					<Content padder>
						<View>
						<Card style={styles.mb}>
							<CardItem button onPress={()=>this.setthis(4)}>
							<Body>
							<Text style={styles.q}>{"Ans  "}{questions[this.state.i].ans}</Text>
							</Body>
							</CardItem>
						</Card>
						</View>
					</Content>
					:<View></View>
				}
	
			</Content>
	
			
			{
				!this.state.attempt?
					<View style={styles.b}>
					<Button style={styles.b1} onPress={()=>{this.skip();}}><Text>Skip</Text></Button>
					<Button style={styles.b2}  onPress={()=>{this.submit();}}><Text>Submit</Text></Button>
					</View>
				:
					<View style={styles.b}>
					<Button style={styles.b3} onPress={()=>{this.continue();}}><Text>Continue</Text></Button>
					</View>
			}
	
			</Container>
		);
		
	}
	
	}
}

export default Basic;
