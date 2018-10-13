# Application for managing subscriber subscriptions

##Usage

```javascript

var plugins = {
	'elapsed-time':{}
};

server.pack.events.on('log', function (event, tags){
	if (tags.elapsed) {
		//do something with the elapsed event
		console.log('elapsed, event);
	}
});

server.pack.require(plugins, function (err) {
	if (err) {throw err;}
	// plugin required, start server
});
```