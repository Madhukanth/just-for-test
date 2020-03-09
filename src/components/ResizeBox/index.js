import React, { useEffect } from "react";

import $ from "jquery";
import "jquery-ui";
import "jquery-ui/themes/base/draggable.css";
import "jquery-ui/ui/widgets/draggable";
import "jquery-ui/themes/base/resizable.css";
import "jquery-ui/ui/widgets/resizable";

function ResizeBox() {
  useEffect(() => {
    const handle = $("#test-box");
    handle.draggable();
    handle.resizable({ handles: "all" });
  }, []);

  return (
    <div
      id="test-box"
      style={{
        top: "100px",
        left: "100px",
        height: "100px",
        width: "100px",
        border: "3px solid red",
        cursor: "move",
        position: "absolute"
      }}
    />
  );
}

export default ResizeBox;
