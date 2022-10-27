import React from "react";
import DetailedDocsPage from "../../../../../components/apidocs/DetailedDocs";
import { useRouter } from "next/router";
const ApiDocsDetailedPage = () => {
  const router = useRouter();
  console.log(router.query);

  return <DetailedDocsPage />;
};

export default ApiDocsDetailedPage;
