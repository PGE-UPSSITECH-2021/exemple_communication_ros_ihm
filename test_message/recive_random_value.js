function callbackImage(message) {
    // Log console
    console.log('Received message on ' + value_listener.name);

    // Récupération du canvas sur la pages
    var text = document.getElementById('random_value');
    text.innerHTML = message.data;
}

// Création du listener ROS
var value_listener = new ROSLIB.Topic({
    ros : ros,
    name : '/random_value', // Choix du topic
    messageType : 'std_msgs/Float64' // Type du message transmis
});

// Affectation de la fonction de callback
value_listener.subscribe(callbackImage);