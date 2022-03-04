import React, { useState } from "react";
import styled from "styled-components";
import Transfer from "./Transfer";

const TransferModal = ({
  sanityItems,
  thirdwebItems,
  walletAddress,
  setTransferButton,
}) => {
  const [action, setAction] = useState("send");
  const [selectedAsset, setSelectedAsset] = useState(sanityItems[0]);

  const selectedStyle = {
    color: "#3773f5",
  };

  const unselectedStyle = {
    border: "3px solid #282b2f",
  };

  const selectedModal = (option) => {
    if (option === "send")
      return (
        <Transfer
          selectedAsset={selectedAsset}
          setAction={setAction}
          thirdwebItems={thirdwebItems}
          walletAddress={walletAddress}
          setTransferButton={setTransferButton}
        />
      );

    if (option === "receive") return <h2>receive</h2>;
  };

  return (
    <Wrapper>
      <Selector>
        <Option
          style={action === "send" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("send")}
        >
          <p>Send</p>
        </Option>
        <Option
          style={action === "receive" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("receive")}
        >
          <p>Receive</p>
        </Option>
      </Selector>
      <ModalMain>{selectedModal(action)}</ModalMain>
    </Wrapper>
  );
};

export default TransferModal;

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: 262626;
  background-color: #262626;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`;

const Selector = styled.div`
  display: false;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 215px;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;
