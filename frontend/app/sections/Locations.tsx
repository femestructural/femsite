import { Map } from "../components/Map";
import { mapa_locations } from "../data/locations";

export function Locations() {

    return (
        <Map proyectos={mapa_locations} />
    )
}