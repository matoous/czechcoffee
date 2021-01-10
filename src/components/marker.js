import React from 'react';
import {GeoAltFill} from "react-bootstrap-icons";

const Marker = ({ id }) => <GeoAltFill id={`marker-${id}`} className="marker" />;

export default Marker;
