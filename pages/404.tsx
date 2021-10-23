import { useEffect } from "react";
import { useRouter } from "next/router";

function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      console.log("dipanggil setelah 2 detik");
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div>
      <h1 className="title-not-found">Opss..</h1>
      <h1 className="title-not-found">
        Halaman yang anda cari tidak ditemukan.
      </h1>
    </div>
  );
}

export default Custom404;
