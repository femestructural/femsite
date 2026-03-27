import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";

export function configureGLTFLoader(loader: any) {
    loader.setMeshoptDecoder(MeshoptDecoder);
}