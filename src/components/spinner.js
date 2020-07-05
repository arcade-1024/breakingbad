import React from "react";
import Loader from "react-loader-spinner";
const spinner = () => {
	return (
	<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    	<Loader type="Puff" color="#ffff" height={100} width={100} timeout={3000} />
  </div>
	);
};

export default spinner;
