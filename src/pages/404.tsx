import Typo from "@/components/Typo";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export default function Page404 () {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <Typo variant="h1" color="black">
        404 - Halaman tidak Ada
      </Typo>
      <Typo variant="h5" className="mb-6" color="gray">
        Maaf, halaman yang dicari tidak ditemukan. Anda bisa kembali ke halaman utama dengan tombol di bawah
      </Typo>
      <Link href={"/"}>
        <Button color="blue-gray" size="lg">
          Kembali
        </Button>
      </Link>
    </div>
  )
}