'use client';

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getGreeting } from "../lib/queries/getGreeting";

export const Greeting = () => {
  const { data } = useQuery(["greeting"], getGreeting, {
    refetchOnMount: false,
  });

  return <div>Server Fetched Greeting: <strong>{data}</strong></div>;
};
