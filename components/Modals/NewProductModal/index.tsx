// Modal component for new products

import Router from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import {
  Wrapper,
  Grid,
  Left,
  Right,
  Label,
  PillGroup,
} from "./NewProductModal.styles";
import Modal from "../Modal";
import Input from "../../Control/Input";
import TextArea from "../../Control/TextArea";
import Pill from "../../Control/Pill";
import { Cube, Link, Tag } from "@styled-icons/fluentui-system-filled";

// Prop type
type NewProductModalProps = {
  title: string;
  buttonLabel: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

// Component
const NewProductModal = ({
  title,
  buttonLabel,
  setIsOpen,
}: NewProductModalProps) => {
  // State management
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [productPageUrl, setProductPageUrl] = useState("");
  const [value, setValue] = useState(0.0);
  const [description, setDescription] = useState("");
  // We are hardcoding the imageUrl until we know how to manage images in dbs
  const tempImage: string =
    "https://images.unsplash.com/photo-1652538302725-0ee98032dcad";

  const submitData = async () => {
    if (name !== "" && type !== "" && productPageUrl !== "" && value !== 0) {
      try {
        const body = {
          name,
          type,
          productPageUrl,
          value,
          description,
          tempImage,
        };
        await fetch("/api/product/new", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        await Router.push("/products/confirmation");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Modal
        title={title}
        buttonLabel={buttonLabel}
        setIsOpen={setIsOpen}
        handleClick={submitData}
      >
        <span>
          Add a new product to make it easy for creators to understand your
          brand and tasks
        </span>
        <Wrapper>
          <form>
            <Label>Product type*</Label>
            <PillGroup>
              <Pill
                value={"Physical"}
                label={"Physical product"}
                groupName={"productType"}
                onChange={(e) => setType(e.target.value)}
              />
              <Pill
                value={"Digital"}
                label={"Digital product or service"}
                groupName={"productType"}
                onChange={(e) => setType(e.target.value)}
              />
            </PillGroup>

            <Grid>
              <Left>
                <Label>Product name*</Label>
                <Input
                  placeholder="Product name"
                  required={true}
                  onChange={(e) => setName(e.target.value)}
                  icon={Cube}
                />
              </Left>
              <Right>
                <Label>Giveaway value EUR*</Label>
                <Input
                  type="number"
                  placeholder="0.00"
                  required={true}
                  icon={Tag}
                  onChange={(e) => setValue(Number(e.target.value))}
                />
              </Right>
            </Grid>
            <Label>Product page*</Label>
            <Input
              type="url"
              placeholder="Product page url"
              required={true}
              icon={Link}
              onChange={(e) => setProductPageUrl(e.target.value)}
            />
            <Label>Description</Label>
            <TextArea
              placeholder="Write a concise description that creators can understand"
              rows={3}
              onChange={(e) => setDescription(e.target.value)}
            />
          </form>
        </Wrapper>
        {/*<span>Make sure to fill add fields</span>*/}
      </Modal>
    </>
  );
};

export default NewProductModal;
