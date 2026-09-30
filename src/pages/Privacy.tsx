import { useEffect } from "react";

// The privacy document lives in the Courtside app repo (single source of truth).
const URL = "https://book.court-side.ai/legal/privacy";

const Privacy = () => {
  useEffect(() => {
    window.location.replace(URL);
  }, []);
  return (
    <p className="p-8 text-center">
      Redirecting to <a className="underline" href={URL}>Privacy</a>…
    </p>
  );
};

export default Privacy;
