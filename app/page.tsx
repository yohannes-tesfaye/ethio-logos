import { AddisAbabaScienceAndTechnologyUniversity, Note } from "@/src";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Note width={"200px"} />
      <AddisAbabaScienceAndTechnologyUniversity size={100} />
    </div>
  );
}
