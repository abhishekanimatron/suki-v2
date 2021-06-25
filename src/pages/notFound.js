import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not found - Suki";
  }, []);
  return <div>ERROR: 404 NOT FOUND</div>;
}
