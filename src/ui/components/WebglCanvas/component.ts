import Component from '@glimmer/component';
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

export default class WebglCanvas extends Component {

  private scene;

  constructor(options) {
    super(options);
    this.scene = new Scene();
    this.scene.onBeforeRender = () => {};
  }

  initRenderer(div: Node) {
    const fov = 75;
    const aspectRatio = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;
    const camera = new PerspectiveCamera(fov, aspectRatio, near, far);
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    div.appendChild(renderer.domElement);

    const geometry = new BoxGeometry( 1, 1, 1 );
    const material = new MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new Mesh( geometry, material );
    this.scene.add( cube );

    camera.position.z = 5;
    function animate(scene: Scene) {
      requestAnimationFrame(function() {
        animate(scene);
      });
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate(this.scene);
  }

  didInsertElement() {
    const div = this.bounds.firstNode;
    this.initRenderer(div);
  }

}
