import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_apod extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_apod:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('Hacked!Hacked!Hacked!Hacked!Hacked!');
  }
};

export default plugin;
