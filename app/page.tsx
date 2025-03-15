import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center content-center p-20">
      <img src="/logo.png" alt="logo" width={120} />
      <h1 className="text-4xl pt-6">Fahim Fuladi</h1>
      <p className="text-gray-400">Mobile Developer</p>
    </div>
  );
}
