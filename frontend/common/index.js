/** 
 * common/index.js
 *
 */
import Koji from 'koji-tools';

Koji.pageLoad();
window.Koji = Koji;

require('script-loader!app/index.js');
require('script-loader!app/utilities.js');
require('script-loader!app/clickable.js');
require('script-loader!app/entities.js');
new p5();

if (module.hot) {
    module.hot.accept('script-loader!app/index.js', () => {
        let oldCanvas = document.getElementsByTagName('canvas')[0];
        oldCanvas.parentNode.removeChild(oldCanvas);

        require('script-loader!app/index.js');
        new p5();
    });
}
