import {
  TWrapper,
  TTable,
  THead,
  THeadRow,
  THeadH,
  TBody,
  TBodyRow,
  TCell,
  TCellWide,
  TCellRight,
  Pill,
  ImageWrapper,
} from "./ProductsTable.styles";
import { Link, ArrowCircleRight } from "@styled-icons/fluentui-system-filled";
import { ProductType } from "../../../constants/product-items";
import Router from "next/router";
import Image from "next/image";

type TableProps = {
  data: ProductType[];
};

function ProductsTable({ data }: TableProps): JSX.Element {
  const keys = Object.keys(data[0]);

  return (
    <TWrapper>
      <TTable>
        <THead>
          <THeadRow>
            <THeadH>Image</THeadH>
            <THeadH>Product name</THeadH>
            <THeadH>Type</THeadH>
            <THeadH>Description</THeadH>
            <THeadH>Product Page</THeadH>
            <THeadH>Value [EUR]</THeadH>
            <THeadH></THeadH>
          </THeadRow>
        </THead>
        <TBody>
          {data.map((row, index) => (
            <TBodyRow key={index}>
              <TCell>
                <ImageWrapper>
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1652538302725-0ee98032dcad"
                    }
                    layout="fill"
                    objectFit="cover"
                    alt="Product image"
                  />
                </ImageWrapper>
              </TCell>
              <TCell>{row.name}</TCell>
              <TCell>
                <Pill>{row.type}</Pill>
              </TCell>
              <TCellWide>{row.description}</TCellWide>
              <TCell>
                <Link />
                <a href={row.productPage}>url</a>
              </TCell>
              <TCellRight>
                {(Math.round(row.value * 100) / 100).toFixed(2)} €
              </TCellRight>
              <TCell>
                <a onClick={() => openSingleProduct(row.id)}>
                  <ArrowCircleRight />
                </a>
              </TCell>
            </TBodyRow>
          ))}
        </TBody>
      </TTable>
    </TWrapper>
  );
}

function openSingleProduct(id: string) {
  const route: string = "products/" + id;
  Router.push(route);
}

export default ProductsTable;
