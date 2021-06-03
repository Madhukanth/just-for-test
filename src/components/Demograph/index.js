import React, { useEffect } from "react";
import Clarifai from "clarifai";

const Demograph = () => {
  useEffect(() => {
    const app = new Clarifai.App({
      apiKey: "0df7905198ca4d9da3d324e3136bfd3e",
    });

    app.models
      .predict(
        "c0c0ac362b03416da06ab3fa36fb58e3",
        "https://samples.clarifai.com/demographics.jpg"
      )
      .then(
        function (response) {
          // do something with response
          console.log("Response", response);
        },
        function (err) {
          // there was an error
          console.log("Error", err);
        }
      );
  }, []);

  return <div></div>;
};

export default Demograph;
