"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <button type="button" onClick={() => router.push("/")}>
        Click here!
      </button>

     {/*  <button type="button" onClick={() => router.push('/dashboard?counter=10', undefined, { shallow: true })}>
        Shallow Route
      </button> */}
    </>
  );
}
