import { Container } from "@chakra-ui/react";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "../component/header/Layout";
import Dashboard from "./Dashboard";

export default function ApplicationViewController() {
  return (
    <>
      <Layout>
        <Container
          maxW="lg"
          py={{ base: "12", md: "24" }}
          px={{ base: "0", sm: "8" }}
        >
          ApplicationViewController {}
          <Link to="details"> details </Link>
        </Container>
      </Layout>
    </>
  );
}
