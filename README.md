# Web-Interface-for-Controlling-Gazebo-Manipulator
A web interface to control your manipulator remotely

Short Video of Working:(https://youtu.be/8Mcr43NFOTM)

Full Video:(https://youtu.be/FxwZoSfJ-Cs)

## **Steps to get it up and running-**

  Move the 'gazebo_ros_demos' folder into ~/catkin_ws/src
   Move the webpages folder to your home directory.

  Open a terminal and enter:(Note:Install python3 and venv if not installed)
  
  **virtualenv venv --python=python3**

  **source venv/bin/activate**
  
  **cd webpages**
  
  **python -m http.server**
  
  (This will create the website on a local IP address.Can also create the webpage on another address using bind command)
  
  On another terminal,launch the gazebo world using
  
  **cd catkin_ws**
  
  **catkin_make**
  
  **source devel/.setup.bash**
  
  **roslaunch rrbot_gazebo rrbot_world.launch**
  
  On a new terminal,launch the RRbot Controllers using
  
  **cd catkin_ws**
  
  **roslaunch rrbot_control rrbot_control.launch**
  
  Install Rosbridge server using:
  **sudo apt-get install ros-rosdistro-rosbridge-server**
  
  On a new terminal start the rosbridge suite using:
  
  **roslaunch rosbridge_server rosbridge_websocket.launch**
  
   Reload the webpage 
   
   Connect to the websocket server
   
   And **Control the Manipulator!**
