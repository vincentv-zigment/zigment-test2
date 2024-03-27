import { useRouter } from "next/router";
import React from "react";

function SignInError() {
  const router = useRouter();

  const [error, setError] = React.useState<string>("generic_error");
  React.useEffect(() => {
    if (router.query.error) {
      setError(router.query.error as string);
    }
  }, [router.query]);

  return <div>Something went wrong: {error}</div>;
}

export default SignInError;
