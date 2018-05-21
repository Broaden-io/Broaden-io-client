import React from "react";
import ReactLoading from "react-loading";
import { Section, Title, Article, Prop, list } from "../loadingyStyles";
import "./styles.css";

const Example = ({ type, color }) => (
    <ReactLoading type={type} color={color} height="100" width="100" />
);

export default Example;
