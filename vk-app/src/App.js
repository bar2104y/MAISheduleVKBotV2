import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import { Root, View, Panel, PanelHeader,PanelHeaderBack,PanelHeaderClose} from '@vkontakte/vkui';
import { Group,Div,Button,Cell,CellButton,Avatar} from '@vkontakte/vkui';
import { FormLayout, Textarea, Radio,Input} from '@vkontakte/vkui';
import { Alert } from '@vkontakte/vkui';

class Example extends React.Component {
    constructor(props) {
		super(props);

		this.closePopout = this.closePopout.bind(this);
		this.SendMessage = this.SendMessage.bind(this);

		bridge.send("VKWebAppInit", {});
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			} else if(type==='VKWebAppGetUserInfoResult'){
				console.log('Get usr data');
				this.setState({user:data})
			} else {
				console.log(type,data)
			}
		});

		bridge.send("VKWebAppGetUserInfo", {});

		this.state = {
			activeView: 'Home',
			popout: null,
			user: {},
			messageToAdmin: null,

		}	 
	}

	SendMessage(text){
		console.log(text);
	}

	go (e) {this.setState({ activeView:e})};

	openAlert(type){
		if (type === 'SendMessage'){
			this.setState({ popout:
				<Alert
				  actions={[{
					title: 'Отмена',
					autoclose: true,
					mode: 'cancel'
				  }, {
					title: 'Отправить',
					autoclose: true,
					action: () => {
						let text = 'dfdfdf';
						this.SendMessage(text);
					},
				  }]}
				  onClose={this.closePopout}
				>
				  <h2>Сообщение админу</h2>
				  <p>Отправить сообщение админимстратору:</p>
				  <Div>{this.state.messageToAdmin}</Div>
				</Alert>
			  });
		} else if(type='DelAllAboutUser'){
			this.setState({ popout:
				<Alert
				  actions={[{
					title: 'Отмена',
					autoclose: true,
					mode: 'cancel'
				  }, {
					title: 'Удалить',
					autoclose: true,
					mode: 'destructive',
					action: () => {
						let text = 'Удаление всех данных о пользователе';
						this.SendMessage(text);
					},
				  }]}
				  onClose={this.closePopout}
				>
				  <h2>Удаление данных</h2>
				  <p>Вы уверены, что хотите удалить все данные? Сообщения приходить не будут</p>
				</Alert>
			  });
		}
	}

	closePopout () {
		this.setState({ popout: null });
	  }


	render() {
      return (
        <Root activeView={this.state.activeView}>
        	<View popout={this.state.popout} activePanel="Home" id="Home">
				<Panel id="Home">
					<PanelHeader>Расписание МАИ</PanelHeader>
					<Group>
						<Cell
							before={this.state.user.photo_200 ? <Avatar src={this.state.user.photo_200}/> : null}
							description={this.state.user.city && this.state.user.city.title ? this.state.user.city.title : ''}
						>
							Дратути, {`${this.state.user.first_name} ${this.state.user.last_name}`}
						</Cell>
					</Group>
					<Group>
						<CellButton >Редактировать настроечки</CellButton>
						<CellButton onClick={()=>this.go('Message')} >Отправить сообщение одмену</CellButton>
					</Group>
					<Group><CellButton mode="danger" onClick={()=>this.openAlert('DelAllAboutUser')}>Удалить все про меня</CellButton></Group>
					
				</Panel>
			</View>
			<View popout={this.state.popout} activePanel="Message" id="Message">
				<Panel id="Message">
	  				<PanelHeader left={<PanelHeaderBack onClick={()=>this.go('Home')}></PanelHeaderBack>} >Сообщение одмену</PanelHeader>
					<Group>
						<FormLayout>
							<Textarea
								top="Сообщение"
								value={this.state.messageToAdmin}
								placeholder="Одмен, все плохо, удались из интернета"
								onChange={(e) => this.setState({ messageToAdmin: e.target.value})}
							/>
							<Button size="xl" mode="commerce" onClick={()=> this.openAlert('SendMessage')}>Отправить</Button>
						</FormLayout>
						
					</Group>
				</Panel>
			</View>
		</Root>
      )
    }
  }
  

export default Example;

/*const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [this.state.user, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};


	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' this.state.user={this.state.user} go={go} />
			<Persik id='persik' go={go} />
		</View>
	);
}

export default App;*/

