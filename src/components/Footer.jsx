export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-3xl mt-8">Follow me</div>
        <div className="flex h-[50px] mt-4 gap-x-8 ">
          <a href="http://google.com" className="flex justify-center bg-grey w-[60px] h-[60px] rounded-xl py-3">i</a>
          <a href="http://google.com" className="flex justify-center bg-grey w-[60px] h-[60px] rounded-xl py-3">g</a>
          <a href="http://google.com" className="flex justify-center bg-grey w-[60px] h-[60px] rounded-xl py-3">t</a>
          <a href="http://google.com" className="flex justify-center bg-grey w-[60px] h-[60px] rounded-xl py-3">in</a>
          <a href="http://google.com" className="flex justify-center bg-grey w-[60px] h-[60px] rounded-xl py-3">y</a>
        </div>
        <div className="text-xl mt-24 mb-7">
          ©2025 
          <a href="http://github.com" className="hover:underline hover:text-primary"> React & Tailwind CSS Portfolio</a>
          .Sarobar
        </div>
      </div>
    </>
  );
}
