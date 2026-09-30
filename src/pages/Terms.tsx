import { useEffect } from "react";

// The terms document lives in the Courtside app repo (single source of truth).
const URL = "https://book.court-side.ai/legal/terms";

const Terms = () => {
  useEffect(() => {
    window.location.replace(URL);
  }, []);
  return (
    <p className="p-8 text-center">
      Redirecting to <a className="underline" href={URL}>Terms</a>…
    </p>
  );
};

export default Terms;
