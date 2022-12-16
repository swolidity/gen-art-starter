import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";

const ReactP5Wrapper = dynamic(
  () => import("react-p5-wrapper").then((mod) => mod.ReactP5Wrapper),
  { ssr: false }
);

import {
  Container,
  Box,
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Button,
  Heading,
  IconButton,
} from "@chakra-ui/react";

const ExerciseList = ["pushup"];
const canvasSize = 512;

function sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(canvasSize, canvasSize);

    p5.colorMode(p5.HSB, 360, 100, 100);
  };

  p5.draw = () => {
    p5.background("blue");
  };
}

export default function Home() {
  return (
    <Container maxW={"100%"}>
      <Heading as="h1" textAlign="center" mt={6} mb={6}>
        Gen Art Starter
      </Heading>

      <ReactP5Wrapper sketch={sketch} />
    </Container>
  );
}
