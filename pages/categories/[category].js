import React, { useEffect, useState } from "react";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import Header from "components/Header";

import { queryRepeatableDocuments } from "utils/queries";
import Link from "next/link";
import { hrefResolver, linkResolver } from "prismic-configuration";

// Project components
import DefaultLayout from "layouts";
import { BackButton, SliceZone } from "components/post";

// Project functions & styles
import { Client } from "utils/prismicHelpers";
// import { postStyles } from "styles";
import Footer from "components/Footer";
import PageTitle from "components/PageTitle";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { Check, Person, Search } from "@material-ui/icons";
import CheckIcon from "@material-ui/icons/Check";
import LabelIcon from "@material-ui/icons/Label";
// import SearchComponent from "../components/SearchComponent";
import Prismic from "@prismicio/client";
import PostDate from "../../components/home/PostList/PostDate";
// import { hrefResolver, linkResolver } from "prismic-configuration";
import SearchComponent from "components/SearchComponent";

/**
 * Post page component
 */
const Post = ({ post }) => {
  return <div>HELLOw</div>;
};

export default Post;
