import React from "react";
import styled from "styled-components";

const Notification = () => {
  return (
    <Noti>
      <div class="danger">
        <p>
          <strong>Danger!</strong> Some text...
        </p>
      </div>

      <div class="success">
        <p>
          <strong>Success!</strong> Some text...
        </p>
      </div>

      <div class="info">
        <p>
          <strong>Info!</strong> Some text...
        </p>
      </div>

      <div class="warning">
        <p>
          <strong>Warning!</strong> Some text...
        </p>
      </div>
    </Noti>
  );
};
const Noti = styled.div`
div {
  margin-bottom: 15px;
  padding: 4px 12px;
}

.danger {
  background-color: #ffdddd;
  border-left: 6px solid #f44336;
}

.success {
  background-color: #ddffdd;
  border-left: 6px solid #04AA6D;
}

.info {
  background-color: #e7f3fe;
  border-left: 6px solid #2196F3;
}


.warning {
  background-color: #ffffcc;
  border-left: 6px solid #ffeb3b;
}
`;
export default Notification;
