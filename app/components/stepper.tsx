import { CircularProgress } from "@chakra-ui/react";

export default function Stepper(): JSX.Element {
  return (
    <>
      <CircularProgress className="absolute right-4 md:right-[45px]" color="light-yellow" value={25} size="55px" />
      <div className="shadow-lg p-3 text-center rounded-full bg-white w-[50px]">
        <strong className="text-lg">5</strong>
        <span className="text-sm">/5</span>
      </div>
    </>
  );
}
