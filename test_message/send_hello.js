var btn = document.getElementById("Button_send_hello")

btn.addEventListener("click", sendMessage)

// Récupération du topic sur lequel on veut publier
var message_ihm = new ROSLIB.Topic({
    ros : ros,
    name : '/message_ihm',
    messageType : 'std_msgs/String'
});

// Création du message à envoyer
var msg = new ROSLIB.Message({
    data : "Hello"
})

//fonction appelée lors d'un click sur le bouton
function sendMessage() {
    // envoie du Message ROS "msg" sur le topic "message_ihm"
    message_ihm.publish(msg);
}