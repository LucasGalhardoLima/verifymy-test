/* eslint-disable react/no-unescaped-entities */
export default function SuccessTitle(): JSX.Element {
  return (
    <section className="mb-[60px]">
      <h1 className="mt-[51px] mb-4 text-4.5xl font-semibold hidden md:block">
        Congrats
      </h1>
      <p className="text-lg hidden md:block">
        You'll be automatically verified for all future orders.
        <br />
        Your orders will be dispatched without delay.
      </p>
    </section>
  );
}
