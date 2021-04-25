var app = new Vue({
	el: '#app',
	//storing the state of the page
	data:{
		connected: false,
		ros: null,
		ws_address: 'ws://0.0.0.0:9090',
		logs: [],
		loading:false,
		topic:null,
		message:null,

	},

	//helper methods to connect to ros
	methods:{
		connect: function() {
			console.log('Connect to Rosbridge Server')
			this.logs.unshift('Connecting to Rosbridge Server')
			this.ros=new ROSLIB.Ros({
				url: this.ws_address
			})
			this.ros.on('connection',() => {
				this.connected = true
				this.logs.unshift('Connected')
				console.log('Connected!')
			})
			this.ros.on('error',(error) => {
				this.logs.unshift('Error connecting to websocket server')
				console.log('Error connecting to websocket server:',error)
			})
			this.ros.on('close',() => {
				this.connected = false
				this.logs.unshift('Connection to websocket closed')
				console.log('Connection to websocket closed')
			})
		},
		disconnect: function() {
			this.ros.close()
		},
		setTopic1: function(){
			this.topic = new ROSLIB.Topic({
				ros:this.ros,
				name: '/rrbot/joint1_position_controller/command',
				messageType: 'std_msgs/Float64'
			})
		},
		setTopic2: function(){
			this.topic = new ROSLIB.Topic({
				ros:this.ros,
				name: '/rrbot/joint2_position_controller/command',
				messageType: 'std_msgs/Float64'
			})
		},
		jointadd1: function(){
			this.message = new ROSLIB.Message({
				data:1,
			})
			this.setTopic1()
			this.topic.publish(this.message)
		},
		jointminus1: function(){
			this.message = new ROSLIB.Message({
				data:2,
			})
			this.setTopic1()
			this.topic.publish(this.message)
		},
		jointadd2: function(){
			this.message = new ROSLIB.Message({
				data:1.5,
			})
			this.setTopic2()
			this.topic.publish(this.message)
		},
		jointminus2: function(){
			this.message = new ROSLIB.Message({
				data:0.5,
			})
			this.setTopic2()
			this.topic.publish(this.message)
		},
	
	},
})