import * as THREE from "three";
import Camera from './Camera.js';
import Sizes from './utils/Sizes.js';
import Time from "./Utils/Time.js";
import Renderer from "./Renderer.js";
import World from "./World/World.js";
import Resources from "./Utils/Resources.js";
import sources from "./sources.js";
import Debug from "./Utils/Debug.js";

let instance = null;

export default class Experience {
  constructor(canvas) {

    // Singleton
    if(instance) {
      return instance;
    }
    instance = this;

    // Global Access
    window.experience = this;

    // Options
    this.canvas = canvas;

    // Set up
    this.debug = new Debug()
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.resources = new Resources(sources);
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();

    this.sizes.on('resize', () => {
      this.resize();
    });

    // Time tick event
    this.time.on('tick', () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.world.update();
    this.renderer.update();
  }
  destroy()
  {
    this.sizes.off('resize')
    this.time.off('tick')

    // Traverse the whole scene
    this.scene.traverse((child) =>
    {
      // Test if it's a mesh
      if(child instanceof THREE.Mesh)
      {
        child.geometry.dispose()

        // Loop through the material properties
        for(const key in child.material)
        {
          const value = child.material[key]

          // Test if there is a dispose function
          if(value && typeof value.dispose === 'function')
          {
            value.dispose()
          }
        }
      }
    })

    this.camera.controls.dispose()
    this.renderer.instance.dispose()

    if(this.debug.active)
      this.debug.ui.destroy()
  }
}